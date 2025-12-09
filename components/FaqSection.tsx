import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 max-w-4xl py-24">
      <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-16 uppercase tracking-tight">
        Perguntas Frequentes
      </h2>
      
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg transition-all duration-300">
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-gradient-to-r from-[#FF6B00] to-[#e65100] hover:brightness-110 transition-all"
            >
              <span className="font-bold text-white text-base md:text-lg">{item.question}</span>
              {openIndex === index ? <ChevronUp className="text-white w-6 h-6" /> : <ChevronDown className="text-white w-6 h-6" />}
            </button>
            <div 
              className={`bg-[#121212] px-6 text-gray-300 text-base leading-relaxed transition-all duration-300 ease-in-out border border-white/5 rounded-b-xl ${
                openIndex === index ? 'max-h-60 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};