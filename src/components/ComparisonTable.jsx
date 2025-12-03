import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
export function ComparisonTable() {
  const features = [{
    name: 'Minimum Investment',
    inreal: '$500',
    traditional: '$50,000+',
    reits: '$1,000+'
  }, {
    name: 'Property Selection',
    inreal: 'Curated Premium',
    traditional: 'Limited Choice',
    reits: 'No Choice'
  }, {
    name: 'Management',
    inreal: 'Fully Managed',
    traditional: 'Self-Managed',
    reits: 'Managed'
  }, {
    name: 'Legal Protection',
    inreal: 'SPV-Backed',
    traditional: 'Direct Ownership',
    reits: 'Share-Based'
  }, {
    name: 'Liquidity',
    inreal: 'Moderate',
    traditional: 'Low',
    reits: 'High'
  }, {
    name: 'Returns',
    inreal: '12-18%',
    traditional: '8-12%',
    reits: '6-10%'
  }, {
    name: 'Global Access',
    inreal: true,
    traditional: false,
    reits: true
  }, {
    name: 'Transparency',
    inreal: true,
    traditional: true,
    reits: false
  }];
  return <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">COMPARISON</p>
          <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight normal-case">
            Why InReal Stands Out
          </h2>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden shadow-xl border border-[rgba(0,0,0,0.06)]">
            <thead>
              <tr className="bg-primary-accent/90">
                <th className="px-6 py-4 text-left text-charcoal-black font-bold uppercase">Feature</th>
                <th className="px-6 py-4 text-center text-charcoal-black font-bold uppercase">InReal</th>
                <th className="px-6 py-4 text-center text-charcoal-black font-bold uppercase">Traditional RE</th>
                <th className="px-6 py-4 text-center text-charcoal-black font-bold uppercase">REITs</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => <tr key={feature.name} className={`border-b border-[rgba(0,0,0,0.06)] last:border-b-0 hover:bg-primary-accent/10 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-off-white/50'}`}>
                  <td className="px-6 py-4 font-semibold text-modern-grey">{feature.name}</td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.inreal === 'boolean' ? feature.inreal ? <Check className="w-6 h-6 text-primary-accent mx-auto" /> : <X className="w-6 h-6 text-slate-grey mx-auto" /> : <span className="font-semibold text-primary-accent">{feature.inreal}</span>}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.traditional === 'boolean' ? feature.traditional ? <Check className="w-6 h-6 text-modern-grey mx-auto" /> : <X className="w-6 h-6 text-slate-grey mx-auto" /> : <span className="text-modern-grey">{feature.traditional}</span>}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof feature.reits === 'boolean' ? feature.reits ? <Check className="w-6 h-6 text-modern-grey mx-auto" /> : <X className="w-6 h-6 text-slate-grey mx-auto" /> : <span className="text-modern-grey">{feature.reits}</span>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>;
}