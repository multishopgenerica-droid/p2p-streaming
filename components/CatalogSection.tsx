import React from 'react';

const POSTERS = [
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=400", // Placeholder for Shang-Chi
  "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=400", // Placeholder for 365 Days
  "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=400", // Batman
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=400", // Beekeeper
  "https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&q=80&w=400", // Godzilla
  "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&q=80&w=400", // Evil Dead
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=400", // Minions
  "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&q=80&w=400", // Inside Out
];

const SERIES = [
  "https://images.unsplash.com/photo-1521714161819-15534968fc5f?auto=format&fit=crop&q=80&w=400", // Grey's Anatomy
  "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=400", // GOT
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400", // Breaking Bad
  "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=400", // Supernatural
  "https://images.unsplash.com/photo-1505775561242-727b7fba20f0?auto=format&fit=crop&q=80&w=400", // Peaky Blinders
  "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?auto=format&fit=crop&q=80&w=400", // Start Up
  "https://images.unsplash.com/photo-1515634918659-061b5853611a?auto=format&fit=crop&q=80&w=400", // Kara Sevda
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400", // Bridgerton
];

export const CatalogSection: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Filmes e Séries em destaque</h2>
           <p className="text-gray-400 text-lg font-light tracking-wide uppercase">Canais Abertos e Fechados</p>
        </div>

        <div className="relative">
          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
             {POSTERS.map((src, i) => (
               <div key={i} className="aspect-[2/3] rounded-xl overflow-hidden border border-white/5 bg-[#1a1a1a] shadow-lg group cursor-pointer relative">
                 <img src={src} alt="Poster" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest border border-[#FF6B00] px-2 py-1 rounded">Assistir</span>
                 </div>
               </div>
             ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
             {SERIES.map((src, i) => (
               <div key={i} className="aspect-[2/3] rounded-xl overflow-hidden border border-white/5 bg-[#1a1a1a] shadow-lg group cursor-pointer relative">
                 <img src={src} alt="Poster" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest border border-[#FF6B00] px-2 py-1 rounded">Assistir</span>
                 </div>
               </div>
             ))}
          </div>
          
          {/* Fade Out Mask */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
        </div>
        
        <div className="text-center mt-12 relative z-10">
          <button className="bg-[#FF6B00] text-black font-black px-12 py-5 rounded-full hover:scale-105 hover:bg-orange-500 transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)] uppercase tracking-wide text-sm md:text-base">
            QUERO TER ACESSO A TODO ESSE CONTEÚDO
          </button>
        </div>

      </div>
    </div>
  );
};