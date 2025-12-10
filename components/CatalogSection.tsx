import React from 'react';

const POSTERS = [
  "https://drive.google.com/file/d/15Q_W3pyDa5tj3IBYtUyv0xE7PRRnvR9n/view?usp=drive_link", // Placeholder for Shang-Chi
  "https://drive.google.com/file/d/1kHqQkB8zTFf9ffAHx9gClB5iYG_rkhGV/view?usp=drive_link", // Placeholder for 365 Days
  "https://drive.google.com/file/d/1PpGrArCm4rR-m_BvUDS_F3bSJmpsyYwj/view?usp=drive_link", // Batman
  "https://drive.google.com/file/d/1PpGrArCm4rR-m_BvUDS_F3bSJmpsyYwj/view?usp=drive_link", // Beekeeper
  "https://drive.google.com/file/d/1K535YVhM4Jw3-ATAoGgZamJ0n1Lu9YKW/view?usp=drive_link", // Godzilla
  "https://drive.google.com/file/d/1vaW0U4hWR9zr6tEC-8YEF6WWjGDV4A22/view?usp=drive_link", // Evil Dead
  "https://drive.google.com/file/d/1vaW0U4hWR9zr6tEC-8YEF6WWjGDV4A22/view?usp=drive_link", // Minions
  "https://drive.google.com/file/d/11fio5PtGsPBO55ttkl7PNdXB4Ar067Ur/view?usp=drive_link", // Inside Out
];

const SERIES = [
  "https://drive.google.com/file/d/1faNAdPsXsQQl0Kq-FzHeGS1ctEBNvXgC/view?usp=drive_link", // Grey's Anatomy
  "https://drive.google.com/file/d/1q8nzOGmg_a7bLDPN2OxZGMdWQazhm3YQ/view?usp=drive_link", // GOT
  "https://drive.google.com/file/d/1evZEYBgjvcWsm7ecYmxOvLeHCzpY27W6/view?usp=drive_link", // Breaking Bad
  "https://drive.google.com/file/d/1BKGkCLCw63U2sL-DlKUV7vvbNCPtyw59/view?usp=drive_link", // Supernatural
  "https://drive.google.com/file/d/1q7Py48Whet5z0i1iu9QqD1H9NIHFBNN6/view?usp=drive_link", // Peaky Blinders
  "https://drive.google.com/file/d/1ft4tXIydLqNlWdhWF6MYXMAv_dqJOEty/view?usp=drive_link", // Start Up
  "https://drive.google.com/file/d/1EEJSV5n5AYRAEFAyDjPLUdom-tLqwvVN/view?usp=drive_link", // Kara Sevda
  "https://drive.google.com/file/d/1_ICiEz_nXWscHDGsNat-6X4u682Ipo1e/view?usp=drive_link", // Bridgerton
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
