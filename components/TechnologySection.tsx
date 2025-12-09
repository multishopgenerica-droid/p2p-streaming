import React from 'react';
import { FEATURES } from '../constants';

export const TechnologySection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 107, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 0, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <span className="text-[#FF6B00] font-mono tracking-widest text-sm uppercase">Poder Tecnológico</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">A Tecnologia <span className="text-white">Anti-Travamento</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Central Visualization */}
          <div className="md:col-start-2 md:row-start-1 order-1 md:order-2 flex justify-center mb-10 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-[#FF6B00]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-[#FF6B00]/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#FF6B00] rounded-full blur-[40px] opacity-40 animate-pulse"></div>
                <div className="relative bg-black border border-[#FF6B00] p-6 rounded-2xl glass shadow-[0_0_30px_rgba(255,107,0,0.3)]">
                  <div className="text-center">
                    <div className="text-4xl font-black text-white">P2P</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest">Protocol</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Left */}
          <div className="md:col-start-1 md:row-start-1 order-2 md:order-1 space-y-12 text-center md:text-right">
             <div className="group">
                <div className="inline-flex items-center justify-center p-4 bg-[#1a1a1a] rounded-2xl mb-4 group-hover:bg-[#FF6B00] transition-colors duration-300">
                  <featuresIcon1 className="w-8 h-8 text-[#FF6B00] group-hover:text-black" />
                  {React.createElement(FEATURES[0].icon, { className: "w-8 h-8 text-[#FF6B00] group-hover:text-black transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{FEATURES[0].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{FEATURES[0].description}</p>
             </div>
          </div>

          {/* Features Right */}
          <div className="md:col-start-3 md:row-start-1 order-3 space-y-12 text-center md:text-left">
             <div className="group">
                <div className="inline-flex items-center justify-center p-4 bg-[#1a1a1a] rounded-2xl mb-4 group-hover:bg-[#FF6B00] transition-colors duration-300">
                  {React.createElement(FEATURES[1].icon, { className: "w-8 h-8 text-[#FF6B00] group-hover:text-black transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{FEATURES[1].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{FEATURES[1].description}</p>
             </div>
             <div className="group">
                <div className="inline-flex items-center justify-center p-4 bg-[#1a1a1a] rounded-2xl mb-4 group-hover:bg-[#FF6B00] transition-colors duration-300">
                  {React.createElement(FEATURES[2].icon, { className: "w-8 h-8 text-[#FF6B00] group-hover:text-black transition-colors" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{FEATURES[2].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{FEATURES[2].description}</p>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};