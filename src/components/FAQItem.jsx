import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
          isOpen
            ? 'border-sage-200 shadow-lg'
            : 'border-sage-100 hover:border-sage-200 hover:shadow-md'
        }`}
      >
        {/* Question */}
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
          aria-expanded={isOpen}
        >
          <span
            className={`font-medium transition-colors ${
              isOpen ? 'text-sage-700' : 'text-stone-700'
            }`}
          >
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isOpen ? 'bg-sage-100 text-sage-600' : 'bg-stone-100 text-stone-500'
            }`}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-6">
                <div className="h-px bg-sage-100 mb-4" />
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// FAQ Accordion wrapper component
export const FAQAccordion = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={faq.id}
          faq={faq}
          index={index}
          isOpen={openId === faq.id}
          onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
        />
      ))}
    </div>
  );
};

export default FAQItem;
