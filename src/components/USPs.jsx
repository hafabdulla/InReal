import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Shield, TrendingUp, CheckCircle } from 'lucide-react';

export function USPs() {
  const usps = [
    {
      icon: DollarSign,
      title: 'Low Entry',
      description: 'Start investing from just $250.',
    },
    {
      icon: CheckCircle,
      title: 'Fully Managed',
      description: 'Passive income without the hassle.',
    },
    {
      icon: Shield,
      title: 'SPV-Backed',
      description: 'Secure, bankruptcy-remote legal structure.',
    },
    {
      icon: TrendingUp,
      title: 'Transparent Returns',
      description: 'Track performance and distributions easily.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-accent/20 flex items-center justify-center">
                  <usp.icon className="w-8 h-8 text-primary-accent" />
                </div>
              </div>
              <h3 className="font-bold mb-2 text-off-white normal-case text-2xl">{usp.title}</h3>
              <p className="text-slate-grey">{usp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}