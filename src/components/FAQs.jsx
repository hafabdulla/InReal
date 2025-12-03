import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [{
    question: 'What is fractional real estate investment?',
    answer: 'Fractional real estate investment allows you to own a portion of a property rather than the entire property. With InReal, you can invest as little as $500 to own shares in premium real estate, making it accessible to everyone.'
  }, {
    question: 'How does the SPV structure protect my investment?',
    answer: 'Each property is held in a Special Purpose Vehicle (SPV), a legal entity created specifically for that property. This structure provides legal protection, separates the property from other assets, and ensures clear ownership rights for all investors.'
  }, {
    question: 'When and how do I receive returns?',
    answer: 'Returns are distributed on a scheduled basis, typically quarterly. You receive both rental income distributions and potential appreciation when the property is sold. All distributions are made directly to your account.'
  }, {
    question: 'Can I sell my shares?',
    answer: 'Yes, InReal provides a secondary market where you can list your shares for sale to other investors. While not as liquid as stocks, this provides an exit option before the property is sold.'
  }, {
    question: 'What are the risks involved?',
    answer: 'Like all investments, real estate carries risks including market fluctuations, property value changes, and rental income variability. However, our curated selection process, professional management, and diversification options help mitigate these risks.'
  }, {
    question: 'How are properties selected?',
    answer: 'Our expert team conducts thorough due diligence on every property, analyzing location, market trends, rental potential, and growth prospects. Only properties meeting our strict criteria are offered to investors.'
  }];
  return <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-off-white">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight normal-case">Need Help?</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <div className="w-full bg-white border border-[rgba(0,0,0,0.06)] rounded-xl p-6 text-left transition-all">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center">
                  <h3 className="text-lg font-bold pr-8 text-modern-grey normal-case">{faq.question}</h3>
                  <ChevronDown className={`w-6 h-6 text-primary-accent flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && <motion.div initial={{
                height: 0,
                opacity: 0
              }} animate={{
                height: 'auto',
                opacity: 1
              }} exit={{
                height: 0,
                opacity: 0
              }} transition={{
                duration: 0.3
              }} className="overflow-hidden">
                      <p className="text-modern-grey mt-4 leading-relaxed">{faq.answer}</p>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}