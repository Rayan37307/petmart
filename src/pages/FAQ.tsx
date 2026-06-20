import React, { useState } from 'react';
import { GENERAL_FAQS } from '../data/demoData';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, Compass } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FAQ() {
  const { setCurrentPage } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('Orders');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const selectedCategoryItems = GENERAL_FAQS.find(cat => cat.category === activeCategory)?.items || [];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pt-6 pb-16 font-sans text-left" id="faq-page-wrapper">
      
      {/* Title */}
      <div className="text-center space-y-2 mb-10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFE0A3] bg-brand-orange px-3 py-1 rounded-full leading-none">
          KNOWLEDGE CORNER
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-900 mt-2">Help Center & FAQs</h2>
        <p className="text-xs text-gray-400 font-medium max-w-md mx-auto">Have queries about shipping delivery speed, custom organic recipes, or refunds? Check standard solutions below.</p>
      </div>

      {/* Categories Toggle pills */}
      <div className="flex border-b border-gray-100 overflow-x-auto pb-1 gap-1.5 shrink-0 justify-center mb-8 scrollbar-none">
        {GENERAL_FAQS.map((cat) => (
          <button
            key={cat.category}
            onClick={() => { setActiveCategory(cat.category); setOpenIndex(0); }}
            className={`py-2 px-4 rounded-xl text-xs font-bold shrink-0 transition-all ${activeCategory === cat.category ? 'bg-brand-blue text-white shadow-xs' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="space-y-3 bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs mb-8" id="faq-accordions">
        {selectedCategoryItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="border border-gray-100/80 rounded-2xl overflow-hidden hover:border-orange-100 transition-colors"
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full py-4 px-5 bg-gray-50/40 hover:bg-gray-50 text-left font-display font-bold text-xs sm:text-sm text-gray-700 flex justify-between items-center gap-4 transition-colors"
              >
                <span className="flex items-center gap-2"><HelpCircle className="w-4 h-4 text-brand-orange shrink-0" /> {item.question}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" /> : <ChevronDown className="w-4 h-4 text-brand-orange shrink-0" />}
              </button>

              {isOpen && (
                <div className="p-4 bg-white text-xs sm:text-sm text-gray-500 font-medium leading-relaxed border-t border-gray-50 animate-in slide-in-from-top-1 duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Trust contact footer */}
      <div className="bg-orange-50/50 p-6 rounded-3xl border border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="font-display font-extrabold text-base text-gray-800 flex items-center justify-center sm:justify-start gap-1">
            <MessageSquare className="w-4 h-4 text-brand-orange" /> Still Need Veterinary Advice or Help?
          </h4>
          <p className="text-xs text-gray-500 leading-normal max-w-lg">Get in touch with our playful specialists! We respond to emails, messages, or calls in a friendly, timely manner.</p>
        </div>
        <button
          onClick={() => setCurrentPage('contact')}
          className="py-2.5 px-6 rounded-full bg-brand-blue hover:bg-brand-deep text-white font-bold text-xs transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Contact Our Team
        </button>
      </div>

    </div>
  );
}
