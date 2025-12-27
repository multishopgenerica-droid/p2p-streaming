import React from 'react';
import { Play, Users, Star } from 'lucide-react';
import { Button } from './Button';

export const IntroSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] flex items-center justify-center py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
              <Users size={16} className="text-[#FF6B00]" />
              <span className="text-sm font-medium text-gray-300">Mais de <span className="text-white font-bold">15.000</span> clientes ativos</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
              A empresa que <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-yellow-500">mais cresce no Brasil.</span>
            </h2>

            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-lg">
              Nosso segredo? Tecnologia de ponta e um suporte que realmente se importa com você. Esqueça travamentos e letras miúdas.
            </p>

            <div className="flex flex-col gap-4 border-l-4 border-[#FF6B00] pl-6 py-2">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-[#FF6B00] text-[#FF6B00]" />)}
              </div>
              <p className="italic text-gray-300">
                "O único que funcionou na minha internet rural. Recomendo demais!"
              </p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">— Marcos Oliveira, Cliente verificado</p>
            </div>

            <div className="pt-4">
              <a
                href="https://ev.braip.com/checkout/plaxx200/chej5879"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button pulsing className="px-10">QUERO FAZER PARTE</Button>
              </a>
            </div>
          </div>

          {/* Right Visual - Cinema Screen */}
          <div className="relative group perspective-1000">
             {/* Glow behind */}
             <div className="absolute inset-4 bg-[#FF6B00] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
             
             <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-2 shadow-2xl transform group-hover:rotate-y-[-2deg] transition-transform duration-700 ease-out">
                <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Cinema Experience" 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                   
                   {/* Play Button */}
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-20 h-20 flex items-center justify-center cursor-pointer group/btn">
                         <div className="absolute inset-0 bg-[#FF6B00] rounded-full opacity-20 animate-ping"></div>
                         <div className="relative w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center pl-1 group-hover/btn:bg-[#FF6B00] transition-colors duration-300">
                            <Play fill="currentColor" className="text-white w-8 h-8" />
                         </div>
                      </div>
                   </div>

                   {/* Floating UI Elements inside video */}
                   <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <p className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest mb-1">Assista Agora</p>
                        <p className="text-white font-bold text-xl">Experiência 4K HDR</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-1 h-6 bg-[#FF6B00] animate-pulse"></div>
                        <div className="w-1 h-4 bg-[#FF6B00]/50 animate-pulse delay-75"></div>
                        <div className="w-1 h-8 bg-[#FF6B00] animate-pulse delay-150"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};