import React from 'react';
import { Star } from 'lucide-react';

const POSTERS = [
  "https://picsum.photos/300/450?random=10",
  "https://picsum.photos/300/450?random=11",
  "https://picsum.photos/300/450?random=12",
  "https://picsum.photos/300/450?random=13",
  "https://picsum.photos/300/450?random=14",
  "https://picsum.photos/300/450?random=15",
  "https://picsum.photos/300/450?random=16",
  "https://picsum.photos/300/450?random=17",
];

export const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-[#050505] relative overflow-hidden">
      
      <div className="container mx-auto px-6 mb-12 z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
          O Cinema na <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Sua Casa</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Atualizações diárias. Se saiu no cinema, já está no P2P Stream.
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-10 rotate-[-2deg] scale-110">
         <div className="flex w-[200%] animate-marquee gap-6">
            {[...POSTERS, ...POSTERS].map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-[200px] md:w-[300px] aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 group relative">
                <img src={src} alt="Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold">Assistir Agora</div>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* Testimonial Floating Card */}
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 max-w-sm z-20">
        <div className="glass-card p-6 rounded-2xl animate-float border-l-4 border-l-[#FF6B00]">
          <div className="flex gap-1 text-[#FF6B00] mb-3">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
          </div>
          <p className="text-gray-200 italic mb-4 text-lg">
            "Eu gastava mais de 400 reais com TV a cabo e streamings. Mudei pro P2P há 2 anos e nunca travou, nem em dia de final de campeonato!"
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-[#FF6B00]">RS</div>
            <div>
              <p className="font-bold text-white text-sm">Ricardo S.</p>
              <p className="text-gray-500 text-xs">Cliente verificado • São Paulo</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};