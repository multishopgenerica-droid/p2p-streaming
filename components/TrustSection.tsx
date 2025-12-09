import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Shield, ChevronDown, ChevronUp } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between bg-[#050505] pt-20 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-grow">
        
        {/* Left: Guarantee */}
        <div className="text-center md:text-left">
           <div className="inline-block p-6 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 mb-6 shadow-2xl animate-float">
             <Shield className="w-16 h-16 text-white" />
           </div>
           <h2 className="text-3xl md:text-5xl font-bold mb-6">
             Risco Zero. <br/>Garantia Total.
           </h2>
           <p className="text-gray-400 text-lg mb-8 max-w-md">
             Você tem <strong className="text-white">7 dias de garantia incondicional</strong>. Assine, teste e se não amar, devolvemos seu dinheiro. Simples assim.
           </p>
           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
             <img src="https://picsum.photos/100/50?random=88" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Visa" />
             <img src="https://picsum.photos/100/50?random=89" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Mastercard" />
             <img src="https://picsum.photos/100/50?random=90" className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all" alt="Pix" />
           </div>
        </div>

        {/* Right: FAQ */}
        <div className="w-full max-w-xl">
          <h3 className="text-2xl font-bold mb-8 text-[#FF6B00]">Perguntas Frequentes</h3>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="border border-white/10 rounded-xl bg-white/5 overflow-hidden">
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-white">{item.question}</span>
                  {openIndex === index ? <ChevronUp className="text-[#FF6B00]" /> : <ChevronDown className="text-gray-500" />}
                </button>
                <div 
                  className={`px-5 text-gray-400 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full py-8 border-t border-white/10 mt-12 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; 2025 P2P STREAM. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
};