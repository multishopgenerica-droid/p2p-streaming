import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-20 text-white tracking-tight">
          Como Funciona o Sistema <br/>
          <span className="text-[#FF6B00] inline-block mt-2 relative">
             P2P STREAM?
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FF6B00] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
             </svg>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          <div className="bg-[#FF6B00] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group transition-transform hover:-translate-y-2 duration-500">
             {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-black/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div>
                  <div className="w-16 h-1.5 bg-black mb-8 rounded-full"></div>
                  <p className="text-black text-lg md:text-2xl font-semibold leading-relaxed tracking-tight">
                    A <span className="font-black">P2P STREAM</span> é uma empresa inovadora que opera um robusto servidor de canais, filmes e séries, alimentado por tecnologias avançadas de transmissão.
                  </p>
               </div>
               
               {/* Mockup image inside card */}
               <div className="mt-12 rounded-2xl overflow-hidden border-4 border-black/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-black">
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" alt="Server tech" className="w-full h-56 object-cover opacity-80" />
               </div>
            </div>
          </div>

          <div className="bg-[#FF6B00] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group transition-transform hover:-translate-y-2 duration-500">
             {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

            <div className="absolute -left-10 -top-10 w-64 h-64 bg-black/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div>
                  <div className="w-16 h-1.5 bg-black mb-8 rounded-full"></div>
                  <p className="text-black text-lg md:text-2xl font-semibold leading-relaxed tracking-tight">
                    O grande diferencial é que para executar toda essa estrutura de servidor a empresa utiliza sistemas P2P de canais, com <span className="font-black bg-black text-[#FF6B00] px-1">anti travamentos</span> inclusos.
                  </p>
               </div>
               
                {/* Mockup image inside card */}
                <div className="mt-12 rounded-2xl overflow-hidden border-4 border-black/10 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 bg-black">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" alt="Dashboard" className="w-full h-56 object-cover opacity-80" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};