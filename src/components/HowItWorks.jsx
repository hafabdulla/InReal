import React from 'react';
import { motion } from 'framer-motion';
import { Search, DollarSign, TrendingUp } from 'lucide-react';
export function HowItWorks() {
  const steps = [{
    icon: Search,
    title: 'Invest',
    description: 'Browse curated properties and purchase shares securely in minutes.'
  }, {
    icon: TrendingUp,
    title: 'Earn',
    description: 'Receive passive income from rental yields and property appreciation.'
  }, {
    icon: DollarSign,
    title: 'Exit',
    description: 'Sell your shares on our secondary market or benefit from the property sale.'
  }];
  const stepImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
    'https://plus.unsplash.com/premium_photo-1680230177520-e87271066e5d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFybmluZyUyMG1vbmV5fGVufDB8fDB8fHww',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqrzVbm85AeDe-O_iedT7SA-RsIcagol0mQ&s',
  ];
  return <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-20">
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">HOW IT WORKS</p>
          <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight normal-case">Three Simple Steps</h2>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-12 py-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-24 h-24 rounded-full bg-primary-accent/20 flex items-center justify-center relative z-10 border-4 border-white">
                      <step.icon className="w-12 h-12 text-primary-accent" />
                    </div>
                    <div className="absolute top-9 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-primary-accent/30 flex items-center justify-center font-bold text-primary-accent text-lg z-20">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-3 normal-case text-2xl">{step.title}</h3>
                    <p className="text-modern-grey leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <motion.img 
                  src={stepImages[index]}
                  alt={`Step ${index + 1}: ${step.title}`}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
}