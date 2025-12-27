import React from 'react';

const POSTERS = [
  "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg", // Shang-Chi
  "https://image.tmdb.org/t/p/w500/pVao2W0v1GxgfVIHp4epqdL7Kq4.jpg", // 365 Days
  "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", // Batman
  "https://image.tmdb.org/t/p/w500/A7EByudX0eOzlkQ2FIbogzyazm2.jpg", // Beekeeper
  "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg", // Godzilla vs Kong
  "https://image.tmdb.org/t/p/w500/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg", // Evil Dead Rise
  "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg", // Minions
  "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", // Inside Out 2
];

const SERIES = [
  "https://image.tmdb.org/t/p/w500/zPIug5giU8oug6Xes5K1sTfQJxY.jpg", // Grey's Anatomy
  "https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg", // Game of Thrones
  "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", // Breaking Bad
  "https://image.tmdb.org/t/p/w500/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg", // Supernatural
  "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", // Peaky Blinders
  "https://image.tmdb.org/t/p/w500/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg", // Start-Up
  "https://image.tmdb.org/t/p/w500/o2pStTrsHenpo6FeohvVg5p1EXr.jpg", // Endless Love
  "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg", // Bridgerton
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
          <a
            href="https://ev.braip.com/checkout/plaxx200/chej5879"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B00] text-black font-black px-12 py-5 rounded-full hover:scale-105 hover:bg-orange-500 transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)] uppercase tracking-wide text-sm md:text-base"
          >
            QUERO TER ACESSO A TODO ESSE CONTEÚDO
          </a>
        </div>

      </div>
    </div>
  );
};
