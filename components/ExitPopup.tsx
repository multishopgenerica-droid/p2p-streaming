import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const ExitPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (event: MouseEvent) => {
      if (event.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Mobile fallback: Show after 30 seconds if not shown
    const timer = setTimeout(() => {
       if(!hasShown) {
          setIsVisible(true);
          setHasShown(true);
       }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      document.removeEventListener('mouseleave', handleMouseOut);
      clearTimeout(timer);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal */}
      <div className="relative bg-[#1a1a1a] border-2 border-[#FF6B00] rounded-3xl p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(255,107,0,0.5)] transform animate-[float_0.5s_ease-out]">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <div className="inline-flex justify-center items-center w-16 h-16 bg-[#FF6B00]/20 rounded-full mb-6">
           <span className="text-3xl">🎁</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase italic">
          ESPERA! NÃO VÁ!
        </h3>
        <p className="text-[#FF6B00] font-bold text-lg mb-6">
          Temos uma oferta secreta para você.
        </p>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          Libere seu acesso <strong className="text-white">PREMIUM</strong> agora e garanta 15 dias extras de bônus na sua assinatura.
        </p>

        <button className="w-full bg-[#FF6B00] hover:bg-[#ff8533] text-black font-black py-4 rounded-full text-lg uppercase tracking-wider shadow-lg transition-transform hover:scale-105 mb-4">
          QUERO MEU BÔNUS
        </button>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-500 text-sm hover:text-gray-300 underline"
        >
          Não, quero perder essa oportunidade
        </button>
      </div>
    </div>
  );
};