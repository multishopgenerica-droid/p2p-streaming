import React from 'react';
import { X, Check } from 'lucide-react';

export const ShockSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#080808] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pare de <span className="text-red-500 line-through">rasgar dinheiro</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Por que pagar assinaturas individuais se você pode ter tudo em um único lugar por uma fração do preço?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Expensive Side */}
          <div className="bg-[#121212] p-8 rounded-3xl border border-red-900/30 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <X className="w-48 h-48 text-red-600" />
             </div>
             
             <h3 className="text-2xl font-bold text-gray-300 mb-8">Outros Streamings</h3>
             
             <div className="space-y-4 mb-8">
               <div className="flex justify-between items-center p-3 rounded bg-red-900/10 border border-red-900/20">
                 <span className="text-gray-300">Netflix Premium</span>
                 <span className="font-mono text-red-400">R$ 55,90</span>
               </div>
               <div className="flex justify-between items-center p-3 rounded bg-red-900/10 border border-red-900/20">
                 <span className="text-gray-300">TV a Cabo HD</span>
                 <span className="font-mono text-red-400">R$ 129,90</span>
               </div>
               <div className="flex justify-between items-center p-3 rounded bg-red-900/10 border border-red-900/20">
                 <span className="text-gray-300">Premiere FC</span>
                 <span className="font-mono text-red-400">R$ 59,90</span>
               </div>
               <div className="flex justify-between items-center p-3 rounded bg-red-900/10 border border-red-900/20">
                 <span className="text-gray-300">HBO + Disney + Outros</span>
                 <span className="font-mono text-red-400">R$ 180,50</span>
               </div>
             </div>
             
             <div className="pt-6 border-t border-gray-800">
                <div className="flex justify-between items-end">
                  <span className="text-gray-500 text-sm">Total Mensal</span>
                  <span className="text-4xl font-bold text-red-500">R$ 426,20</span>
                </div>
                <p className="text-right text-red-400/60 text-xs mt-2">Valor estimado médio</p>
             </div>
          </div>

          {/* P2P Stream Side */}
          <div className="glass-card p-8 rounded-3xl border-2 border-[#FF6B00] relative overflow-hidden transform md:scale-105 shadow-[0_0_50px_rgba(255,107,0,0.15)]">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Check className="w-48 h-48 text-[#FF6B00]" />
             </div>

             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent"></div>
             
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
               P2P STREAM <span className="text-xs px-2 py-1 bg-[#FF6B00] text-black rounded font-bold">ALL-IN-ONE</span>
             </h3>
             
             <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 p-3">
                 <Check className="text-[#FF6B00] w-5 h-5" />
                 <span className="text-white">Todos os Filmes & Séries</span>
               </div>
               <div className="flex items-center gap-3 p-3">
                 <Check className="text-[#FF6B00] w-5 h-5" />
                 <span className="text-white">Todos os Canais Abertos e Fechados</span>
               </div>
               <div className="flex items-center gap-3 p-3">
                 <Check className="text-[#FF6B00] w-5 h-5" />
                 <span className="text-white">Todos os Pay-Per-View (Lutas, Futebol)</span>
               </div>
               <div className="flex items-center gap-3 p-3">
                 <Check className="text-[#FF6B00] w-5 h-5" />
                 <span className="text-white">Conteúdo Adulto 4K</span>
               </div>
             </div>
             
             <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 text-sm">A partir de</span>
                  <span className="text-5xl font-bold text-[#FF6B00] text-neon">R$ 24,90</span>
                </div>
                <p className="text-right text-[#FF6B00]/80 text-xs mt-2">Pagamento Mensal no Plano Premium</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};