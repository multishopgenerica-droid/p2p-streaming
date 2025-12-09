import React from 'react';
import { Download, Wifi, PlayCircle, ArrowRight } from 'lucide-react';

export const InstallationSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#080808] flex items-center justify-center py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
             Instalação em <span className="text-[#FF6B00]">3 Passos Simples</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Sem técnicos, sem furos na parede e sem antenas. Você mesmo faz em 5 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Step 1 */}
          <div className="relative group">
             <div className="absolute inset-0 bg-[#FF6B00] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
             <div className="relative h-full bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#FF6B00]/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] font-black text-xl mb-6 border border-[#FF6B00]/20">1</div>
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-full mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
                   <Download className="text-white w-12 h-12 relative z-10" />
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Baixe o App</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enviamos o link oficial para sua TV Box, Celular ou Smart TV Android.
                </p>
             </div>
             {/* Connector (Desktop) */}
             <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-gray-700">
               <ArrowRight size={24} />
             </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
             <div className="absolute inset-0 bg-[#FF6B00] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
             <div className="relative h-full bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#FF6B00]/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center text-[#FF6B00] font-black text-xl mb-6 border border-[#FF6B00]/20">2</div>
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-full mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
                   <Wifi className="text-white w-12 h-12 relative z-10" />
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Conecte-se</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Insira o usuário e senha que você recebeu no seu WhatsApp instantaneamente.
                </p>
             </div>
             {/* Connector (Desktop) */}
             <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-gray-700">
               <ArrowRight size={24} />
             </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
             <div className="absolute inset-0 bg-[#FF6B00] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
             <div className="relative h-full bg-[#121212] border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:border-[#FF6B00]/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center text-black font-black text-xl mb-6 shadow-[0_0_20px_#FF6B00]">3</div>
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-black rounded-full mb-6 flex items-center justify-center shadow-inner relative overflow-hidden">
                   <PlayCircle className="text-[#FF6B00] w-12 h-12 relative z-10 fill-white/10" />
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Só Assistir!</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pronto! Mais de 60.000 conteúdos liberados na hora para você curtir.
                </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};