import { faqs } from '../data';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-brand-dark mb-6">
            Before you begin.
          </h1>
          <p className="text-lg text-stone-600">
            Have questions? We have answers to help you navigate feeding.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border border-stone-200 rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'bg-brand-sand border-brand-green/20' : 'bg-white hover:border-brand-green/30'
                }`}
              >
                <button
                  className="w-full px-6 py-6 text-left flex justify-between items-center gap-4"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-brand-dark pr-8">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-green flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-stone-600 leading-relaxed border-t border-brand-green/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}
