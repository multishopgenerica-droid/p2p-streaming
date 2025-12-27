import React from 'react';

export const SupportSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-10 pb-20">
      <div className="w-full max-w-4xl mx-auto bg-[#FF6B00] rounded-[2.5rem] p-10 md:p-16 text-center shadow-[0_0_80px_rgba(255,107,0,0.2)] relative overflow-hidden group">
        
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-black mb-2 leading-tight tracking-tight">
            Estou com dúvidas,
          </h2>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-10 leading-tight tracking-tight">
            quero o suporte!
          </h2>
          
          <a
            href="https://wa.me/5551810643996?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20o%20suporte%20para%20comprar%20o%20P2P%20Stream.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00E676] text-black font-black text-lg md:text-xl py-5 px-10 rounded-full shadow-xl hover:scale-105 hover:bg-[#00c853] transition-all flex items-center justify-center gap-3 mx-auto w-full md:w-auto uppercase tracking-wide"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.637 4.229 1.734 5.968l-.946 3.457 3.701-.951zm11.524-2.887c-.202-1.964-3.966-1.96-4.144-.093-.242.311-.536.42-.907.359-.728-.118-1.745-.63-2.906-1.503-1.603-1.205-2.227-2.613-2.279-3.322-.053-.699.444-1.233.918-1.786.197-.229.412-.497.412-.787 0-.29-.214-.559-.412-.787-.954-1.101-1.637-1.143-1.933-.521-.77.809-1.902 2.624.416 4.975 2.103 2.133 4.148 2.659 5.864 2.872.901.111 2.37.197 3.134-.556.818-.805 1.79-1.077 2.053-.388.236-.622.463-1.399.076-1.464z"/></svg>
             Falar no WhatsApp Agora
          </a>
        </div>
      </div>
    </div>
  );
};