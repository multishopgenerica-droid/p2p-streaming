import React from 'react';
import { Skull, ShieldCheck } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <div className="w-full pt-16 pb-12 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-20">
           {/* Piracy Warning */}
           <div className="flex items-start gap-6 max-w-2xl bg-[#111] p-8 rounded-3xl border border-white/5 shadow-inner">
              <div className="w-16 h-16 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0 border border-red-600/20">
                 <Skull className="text-red-500 w-8 h-8" />
              </div>
              <div>
                 <h4 className="font-bold text-white mb-2 text-lg">Pirataria é Crime!</h4>
                 <p className="text-sm text-gray-400 leading-relaxed">
                   A venda da plataforma P2P STREAM em qualquer outro site é proibida. Não compre falsificações e garanta um produto de qualidade comprando <strong className="text-white">APENAS</strong> através do nosso site oficial.
                 </p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-t border-white/5 pt-12">
           <div className="text-center md:text-left">
              <h5 className="font-bold text-gray-300 mb-4 text-sm uppercase tracking-wider">Formas de pagamentos</h5>
              <div className="flex gap-3 justify-center md:justify-start flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                 <div className="bg-white px-3 py-1.5 rounded text-black text-xs font-black">VISA</div>
                 <div className="bg-white px-3 py-1.5 rounded text-black text-xs font-black">Mastercard</div>
                 <div className="bg-white px-3 py-1.5 rounded text-black text-xs font-black">Elo</div>
                 <div className="bg-white px-3 py-1.5 rounded text-black text-xs font-black">Pix</div>
              </div>
           </div>
           
           <div className="text-center md:text-right flex flex-col items-center md:items-end">
              <h5 className="font-bold text-gray-300 mb-4 text-sm uppercase tracking-wider">Segurança</h5>
              <div className="flex items-center gap-3 text-green-500 bg-green-900/10 border border-green-500/20 px-6 py-3 rounded-full">
                 <ShieldCheck size={20} />
                 <span className="font-bold text-sm">Site 100% Seguro</span>
              </div>
           </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/5">
           <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-black italic text-2xl text-[#FF6B00]">P2P</span>
              <span className="font-black italic text-2xl text-white">STREAM</span>
           </div>
           <p className="text-xs text-gray-600 font-medium">
             Copyright © 2024 P2P STREAM. Todos os direitos reservados. <br/>
             <a href="#" className="hover:text-gray-400 transition-colors">Termos de Uso</a> | <a href="#" className="hover:text-gray-400 transition-colors">Políticas de Privacidade</a>
           </p>
        </div>

      </div>
    </div>
  );
};