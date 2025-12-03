import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
export function Hero() {
  const handleViewProperties = () => {
    document.getElementById('properties')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const bgImage = `bg-[url('https://horizons-cdn.hostinger.com/9e1f4551-bf70-48a3-a592-c6f31edcad6a/c5e246b889d74d4a37a4d9b02cab6f59.png')]`;
    return <section className={`relative pt-48 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center ${bgImage}`}>
      <div className="absolute inset-0 bg-charcoal-black/70" />
      <div className="relative max-w-[600px] w-full ml-[120px] mr-8 z-10">
          <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
            <h1 className="font-bold leading-tight text-white mb-4">Earn Income with Real Estate</h1>
            <p className="block text-primary-accent text-2xl sm:text-3xl font-bold mb-6">Start investing from $250</p>

            <p className="tagline-lg text-off-white mb-8 leading-relaxed">Invest fractionally in high-yield properties,  professionally managed through purchase, rental, & sale. </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-start">
              <Button onClick={handleViewProperties} size="lg" className="bg-primary-accent hover:bg-steel-blue text-charcoal-black font-bold text-lg px-8 py-6 group">
                View Properties
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={handleHowItWorks} size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-modern-grey text-off-white hover:border-primary-accent hover:text-primary-accent bg-black/20 hover:bg-black/40">
                How It Works
              </Button>
            </div>
          </motion.div>
      </div>
    </section>;
}