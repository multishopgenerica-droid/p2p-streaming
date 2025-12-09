import React from 'react';
import { Play, RotateCw } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#080808] flex items-center justify-center py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-20 tracking-tight">
          Veja o que nossos clientes <br/>
          <span className="text-[#FF6B00]">dizem sobre o app P2P</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
           {/* Video Player Mockup */}
           <div className="w-full max-w-3xl bg-[#0F0F0F] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <div className="aspect-video relative bg-black cursor-pointer overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Customer Review" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#FF6B00]/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 shadow-[0_0_40px_rgba(255,107,0,0.5)] transition-transform group-hover:scale-110">
                    <Play fill="white" className="text-white w-8 h-8" />
                  </div>
                </div>

                {/* UI Overlay */}
                <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-white font-bold text-sm">Depoimento #42</div>
                </div>

                {/* Progress Bar Mockup */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-800">
                   <div className="w-1/3 h-full bg-[#FF6B00]"></div>
                </div>
              </div>
           </div>

           {/* Next Video / Overlay */}
           <div className="w-full lg:w-[400px] h-auto bg-[#2a0a2e] rounded-3xl p-8 flex flex-col justify-center items-start text-left relative overflow-hidden border border-[#FF6B00]/20 shadow-[0_0_50px_rgba(100,0,100,0.2)]">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a0e4e] to-[#2a0a2e]"></div>
              
              <div className="relative z-10 w-full">
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">Você já começou a assistir esse vídeo</h3>
                <div className="flex flex-col gap-4 w-full">
                  <button className="flex items-center gap-4 bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all w-full border border-white/5 hover:border-white/20 group">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Play fill="black" size={16} className="text-black ml-1" />
                     </div>
                     <span className="font-bold text-white text-sm">Continuar assistindo?</span>
                  </button>
                  <button className="flex items-center gap-4 border border-white/10 hover:bg-white/5 p-4 rounded-xl transition-colors w-full group">
                     <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center text-white flex-shrink-0 group-hover:border-white transition-colors">
                        <RotateCw size={16} />
                     </div>
                     <span className="font-bold text-white text-sm">Assistir do início?</span>
                  </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};