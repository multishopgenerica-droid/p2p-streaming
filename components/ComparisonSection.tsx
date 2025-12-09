import React from 'react';
import { Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center py-24">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
             Isso é o que você pagaria se assinasse <br/>
             <span className="text-gray-500">todas as plataformas de streaming:</span>
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16">
           {/* Items */}
           {[
             { name: 'NETFLIX', price: '59,90', color: 'text-red-600' },
             { name: 'HBOMAX', price: '55,90', color: 'text-purple-600' },
             { name: 'Prime', price: '19,90', color: 'text-blue-400' },
             { name: 'Disney+', price: '62,90', color: 'text-blue-900' },
             { name: 'AppleTV', price: '21,90', color: 'text-gray-800' },
             { name: 'Telecine', price: '29,90', color: 'text-red-600' },
             { name: 'Premiere', price: '39,90', color: 'text-green-700' },
             { name: 'SKY', price: '44,95', color: 'text-red-600' },
             { name: 'Crunchyroll', price: '19,90', color: 'text-orange-500' },
             { name: 'Claro-tv', price: '34,90', color: 'text-red-600' },
           ].map((item, idx) => (
             <div key={idx} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center h-36 gap-3 shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
               <div className={`font-black ${item.color} text-lg md:text-xl tracking-tight text-center`}>{item.name}</div>
               <div className="text-red-600 font-bold text-xs bg-red-50 px-2 py-1 rounded border border-red-100">R$ {item.price}/mês</div>
             </div>
           ))}
        </div>
        
        {/* Total Banner */}
        <div className="bg-gradient-to-r from-red-700 to-red-600 text-white font-bold text-center py-6 rounded-2xl max-w-4xl mx-auto text-lg md:text-3xl mb-16 shadow-[0_0_40px_rgba(220,38,38,0.4)] uppercase tracking-wide border border-red-500/50">
           AO TODO VOCÊ PAGARIA <span className="font-black text-yellow-300">R$ 514,85</span> POR MÊS
        </div>

        {/* P2P Solution */}
        <div className="text-center animate-pulse-glow">
           <p className="text-gray-400 mb-4 font-light text-lg">Mas com a P2P STREAM você vai pagar 👇</p>
           <div className="inline-block bg-[#FF6B00] text-black font-black px-6 py-2 rounded-lg text-sm uppercase tracking-widest">
             Somente Hoje!
           </div>
        </div>

      </div>
    </div>
  );
};