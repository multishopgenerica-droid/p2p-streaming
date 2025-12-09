import { Zap, Wifi, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { Plan, FaqItem, Feature } from "./types";

// Pricing updated to match the screenshots provided
export const PLANS: Plan[] = [
  {
    id: 'basic',
    name: 'PLANO BASIC',
    duration: '1 Mês',
    price: 'R$ 14,97',
    oldPrice: 'R$ 37,90',
    featured: false,
    benefits: [
      'Mais de 60.000 conteúdos',
      'Qualidade SD/HD/FHD/4K',
      'Guia de Programação [EPG]',
      'Smartphone/Tablet',
      'TV Box/Chromecast',
      'Assista na Smart TV',
      'Assista no Computador',
      'Programação Adultos',
      'Pacote Filmes e Série'
    ]
  },
  {
    id: 'premium',
    name: 'PLANO PREMIUM',
    duration: '6 Meses',
    price: 'R$ 49,97',
    oldPrice: 'R$ 227,77',
    featured: true,
    benefits: [
      'Mais de 60.000 conteúdos',
      'Qualidade SD/HD/FHD/4K',
      'Guia de Programação [EPG]',
      'Smartphone/Tablet',
      'TV Box/Chromecast',
      'Assista na Smart TV',
      'Assista no Computador',
      'Programação Adultos',
      'Pacote Filmes e Série'
    ]
  },
  {
    id: 'family',
    name: 'PLANO FAMILY',
    duration: '12 Meses', // Inferred as the highest tier
    price: 'R$ 99,97',
    oldPrice: 'R$ 349,99',
    featured: false,
    benefits: [
      'Mais de 60.000 conteúdos',
      'Qualidade SD/HD/FHD/4K',
      'Guia de Programação [EPG]',
      'Smartphone/Tablet',
      'TV Box/Chromecast',
      'Assista na Smart TV',
      'Assista no Computador',
      'Programação Adultos',
      'Pacote Filmes e Série'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O que é o P2P STREAM?",
    answer: "É um serviço alternativo para quem busca assistir canais, filmes e séries de forma satisfatória e com valor justo e acessível."
  },
  {
    question: "Como funciona a Instalação?",
    answer: "A instalação é feita de acordo com o dispositivo a ser conectado, tais eles como... TVBOX, TV SMART, E QUALQUER DISPOSITIVO ANDROID ETC.."
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer: "Você terá 7 dias de garantia incondicional, ou seja se não gostar do que está usando faremos a devolução do seu dinheiro sem perguntas."
  },
  {
    question: "Após a compra oque acontece?",
    answer: "Fique tranquilo, sua compra será processada pela Braip, uma das maiores plataformas de transações e pagamentos do Brasil. Após efetuar sua compra você terá acesso ao nosso número de WhatsApp para pedir seu código de instalação e já receber o seu contato oficial de suporte."
  },
  {
    question: "Precisarei pagar uma assinatura mensal ou taxas de aluguel?",
    answer: "Sim, as recorrências são mensais, de acordo com o plano contratado."
  }
];

export const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Instalação Relâmpago",
    description: "Sistema Plug & Play. Receba seus dados instantaneamente após o pagamento."
  },
  {
    icon: Wifi,
    title: "Tecnologia Anti-Delay",
    description: "Conexão P2P descentralizada que impede sobrecarga nos servidores."
  },
  {
    icon: MonitorSmartphone,
    title: "Multi-Dispositivos",
    description: "Assista onde quiser: na sala, no quarto ou no ônibus indo para o trabalho."
  }
];