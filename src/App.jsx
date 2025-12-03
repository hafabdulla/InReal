import React from 'react';
import { Helmet } from 'react-helmet';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { USPs } from '@/components/USPs';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Testimonials } from '@/components/Testimonials';
import { FAQs } from '@/components/FAQs';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default function App() {
  return (
    <>
      <Helmet>
        <title>InReal — Own Real Estate Worldwide from $250 | SPV-Backed, Fully Managed</title>
        <meta 
          name="description" 
          content="Invest globally in fractional real estate with InReal. Curated, SPV-backed properties, fully managed with scheduled distributions. Current offerings: Bangkok." 
        />
      </Helmet>
      
      <div className="min-h-screen bg-off-white">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-accent text-charcoal-black px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        <Navigation />
        <main id="main-content">
          <Hero />
          <Mission />
          <USPs />
          <HowItWorks />
          <FeaturedProperties />
          <ComparisonTable />
          <Testimonials />
          <FAQs />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}