import React from 'react';
import { motion } from 'framer-motion';

export function Mission() {
  return (
    <section 
      id="mission" 
      className="py-40 px-4 sm:px-6 lg:px-8 bg-off-white relative"
      style={{
        backgroundImage: 'url("https://vemaps.com/uploads/img/wrld-18.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-off-white/85 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary-accent font-bold text-sm uppercase mb-4">
            Our Mission
          </p>
          <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight mb-6 normal-case">
            Simplifying Global Real Estate Investment
          </h2>
          <p className="text-modern-grey text-lg leading-relaxed">
            InReal was founded to break down the barriers to international property ownership. We provide a secure, transparent, and fully managed platform that empowers anyone to build a global real estate portfolio, starting with just $250. Our goal is to make wealth-building through property accessible to everyone, everywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}