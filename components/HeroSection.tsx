import React from 'react';
import { Button } from './Button';
import { Tv, Smartphone, Wifi, CreditCard } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6B00]/10 via-[#050505] to-[#050505] pointer-events-none"></div>
      
      {/* Top Notification Bar */}
      <div className="w-full bg-gradient-to-r from-orange-600 to-[#FF6B00] text-white text-center py-3 px-4 text-xs md:text-sm font-bold tracking-wide z-50 shadow-lg shadow-orange-900/20">
        Link promocional com preço especial, mas atenção: Aproveite pois é por tempo limitado!
      </div>

      <div className="flex-grow flex items-center justify-center relative py-12 md:py-20">
        <div className="container mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-10">
            <div className="flex justify-center lg:justify-start">
               <div className="border border-white/10 rounded-full py-1.5 px-4 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md shadow-inner shadow-white/5">
                  <span className="font-black text-xl tracking-tighter italic text-white">P2P <span className="text-[#FF6B00]">STREAM</span></span>
                  <div className="w-px h-4 bg-white/20 mx-1"></div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">Vitalício Off</span>
               </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white drop-shadow-2xl">
              Libere o potencial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">completo da sua TV!</span>
            </h1>
            
            <div className="space-y-4 text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              <p>
                Desbloqueie o verdadeiro potencial da sua televisão com o P2P Stream.
              </p>
              <p className="text-gray-300 font-medium">
                Este app desbloqueia mais de <span className="text-[#FF6B00]">2 mil canais</span>, incluindo exclusivos pay-per-view, os mais recentes filmes de cinema além de séries das principais plataformas.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start pt-6 gap-8">
              <a
                href="https://ev.braip.com/checkout/plaxx200/chej5879"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button pulsing className="w-full md:w-auto text-base md:text-lg px-10 shadow-[0_0_40px_rgba(255,107,0,0.4)]">
                  QUERO TURBINAR MINHA TV!
                </Button>
              </a>
              
              {/* Payment Methods */}
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 opacity-60 hover:opacity-100 transition-opacity duration-300">
                 <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-bold">
                    <ShieldCheckIcon className="w-4 h-4" /> Compra Segura
                 </div>
                 <div className="h-4 w-px bg-white/20"></div>
                 <div className="flex gap-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg" className="h-4 invert opacity-80" alt="Pix" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 invert opacity-80" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 invert opacity-80" alt="Mastercard" />
                 </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Composition */}
          <div className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0 perspective-1000">
             <div className="relative w-full max-w-[500px] lg:max-w-[650px] aspect-[4/3] flex items-center justify-center animate-float">
                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF6B00] rounded-full blur-[100px] opacity-20"></div>
                
                {/* Mockup Composition */}
                <img 
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1000" 
                  alt="TV Screen" 
                  className="absolute top-0 right-0 w-[85%] lg:w-[80%] h-auto rounded-2xl shadow-2xl border border-white/5 z-10 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-700"
                />
                <img 
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400" 
                  alt="Mobile Phone" 
                  className="absolute bottom-4 left-4 lg:bottom-12 lg:left-8 w-[28%] lg:w-[25%] h-auto rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[6px] border-[#121212] z-20 transform rotate-6 hover:rotate-0 transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Small helper icon component
const ShieldCheckIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);