<?php
/**
 * GitHub Webhook Handler for p2pstreamoficial.com
 */

$secret = '979b1808ccc2263e8fbb882363f9eeeb3aa19ecc';
$logFile = '/var/log/p2pstream-webhook.log';
$syncScript = '/var/www/webhooks/sync-p2pstream.sh';

function logMessage($message) {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

function getHeader($name) {
    $name = strtoupper(str_replace('-', '_', $name));
    return $_SERVER['HTTP_' . $name] ?? null;
}

// Get raw payload
$rawPayload = file_get_contents('php://input');
$signature = getHeader('X-Hub-Signature-256');
$event = getHeader('X-GitHub-Event');
$contentType = getHeader('Content-Type') ?? '';

logMessage("Event: $event, Content-Type: $contentType, Length: " . strlen($rawPayload));

// Validate signature using RAW payload
if (empty($signature)) {
    http_response_code(401);
    logMessage("ERROR: No signature");
    die(json_encode(['error' => 'No signature']));
}

$expectedSignature = 'sha256=' . hash_hmac('sha256', $rawPayload, $secret);
if (!hash_equals($expectedSignature, $signature)) {
    http_response_code(403);
    logMessage("ERROR: Invalid signature");
    die(json_encode(['error' => 'Invalid signature']));
}

// Parse payload - handle both JSON and form-urlencoded
if (strpos($contentType, 'application/x-www-form-urlencoded') !== false) {
    // Form-urlencoded: payload is in $_POST['payload'] or parse from raw
    parse_str($rawPayload, $parsed);
    $payload = $parsed['payload'] ?? '';
    $data = json_decode($payload, true);
} else {
    // JSON
    $data = json_decode($rawPayload, true);
}

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    logMessage("ERROR: Invalid JSON - " . json_last_error_msg());
    die(json_encode(['error' => 'Invalid JSON']));
}

logMessage("Parsed OK - Event: $event, Ref: " . ($data['ref'] ?? 'N/A'));

// Handle ping
if ($event === 'ping') {
    logMessage("Ping OK - Webhook working!");
    die(json_encode(['status' => 'success', 'message' => 'Pong!']));
}

// Only process push to main
if ($event !== 'push') {
    logMessage("Ignored: not push event");
    die(json_encode(['status' => 'ignored']));
}

$ref = $data['ref'] ?? '';
if ($ref !== 'refs/heads/main') {
    logMessage("Ignored: not main branch ($ref)");
    die(json_encode(['status' => 'ignored']));
}

// Trigger deploy
$pusher = $data['pusher']['name'] ?? 'unknown';
$commits = count($data['commits'] ?? []);
logMessage("Deploy triggered by $pusher ($commits commits)");

exec("nohup $syncScript >> /var/log/p2pstream-sync.log 2>&1 &");

header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'message' => 'Deploy triggered']);
