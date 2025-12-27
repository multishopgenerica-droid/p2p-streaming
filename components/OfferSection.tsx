import React from 'react';
import { PLANS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const OfferSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#050505] py-24 relative">
      <div className="container mx-auto px-4 z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto items-center">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-[2rem] overflow-hidden flex flex-col h-full min-h-[550px] relative transition-all duration-300 ${
                plan.featured 
                  ? 'transform scale-105 z-20 shadow-[0_0_60px_rgba(255,107,0,0.3)]' 
                  : 'bg-[#121212] border border-white/10 opacity-90 hover:opacity-100 hover:border-white/20'
              }`}
            >
              {/* Header Area */}
              <div className={`py-8 px-6 text-center relative ${
                plan.featured ? 'bg-[#F5F5F5] pt-10' : 'bg-[#FF6B00]'
              }`}>
                {plan.featured && (
                   <div className="absolute top-0 left-0 w-full bg-[#FF6B00] text-black text-xs font-black uppercase tracking-widest py-1.5">
                     Mais Vendido
                   </div>
                )}
                <h3 className={`text-2xl font-black uppercase tracking-widest ${
                  plan.featured ? 'text-black' : 'text-black'
                }`}>
                  {plan.name}
                </h3>
              </div>

              {/* Body Area */}
              <div className={`p-8 flex flex-col items-center flex-grow justify-between ${
                plan.featured 
                  ? 'bg-[#FF6B00] text-black' 
                  : 'bg-[#0a0a0a] text-white'
              }`}>
                
                {/* Benefits List */}
                <div className="space-y-4 mb-8 w-full">
                  {plan.benefits.slice(0, 8).map((benefit, idx) => (
                    <div key={idx} className={`flex items-start gap-3 text-sm font-semibold border-b ${
                        plan.featured ? 'border-black/10' : 'border-white/5'
                    } pb-2 last:border-0`}>
                      <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${
                        plan.featured ? 'text-black fill-white/20' : 'text-[#FF6B00]'
                      }`} />
                      <span className={plan.featured ? 'text-black/80' : 'text-gray-300'}>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="text-center w-full mt-4">
                   {plan.oldPrice && (
                     <div className={`text-sm font-bold line-through mb-1 ${
                       plan.featured ? 'text-black/50' : 'text-gray-600'
                     }`}>
                       De: {plan.oldPrice}
                     </div>
                   )}
                   <div className={`text-5xl font-black mb-2 tracking-tighter ${
                     plan.featured ? 'text-black' : 'text-[#FF6B00]'
                   }`}>
                     {plan.price}
                   </div>
                   <div className={`text-xs font-black mb-8 uppercase tracking-widest ${
                     plan.featured ? 'text-black/60' : 'text-gray-500'
                   }`}>
                     {plan.duration} de Acesso
                   </div>
                   
                   <a
                    href={plan.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-full font-black text-base uppercase tracking-wider transition-all hover:scale-105 hover:shadow-lg text-center ${
                    plan.featured
                      ? 'bg-black text-white hover:bg-gray-900 shadow-xl'
                      : 'bg-[#FF6B00] text-black hover:bg-[#ff8533]'
                  }`}>
                    COMPRAR AGORA
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};