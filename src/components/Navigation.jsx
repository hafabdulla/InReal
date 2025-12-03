import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'German', code: 'de' },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Properties', href: '#properties' },
    { name: 'Why InReal', href: '#comparison' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleInvestNow = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleLogin = () => {
    toast({
      title: "🚧 Login/Signup feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-modern-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-12"
          >
            <img src="https://horizons-cdn.hostinger.com/9e1f4551-bf70-48a3-a592-c6f31edcad6a/6a44e4eaa4f0d14816b5b75d29e50068.png" alt="InReal Logo" className="h-10 w-auto" />
            <div className="hidden md:flex items-center space-x-8">
              <Button
                onClick={handleInvestNow}
                className="bg-primary-accent hover:bg-steel-blue text-charcoal-black font-bold"
              >
                Invest Now
              </Button>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-off-white hover:text-primary-accent transition-colors font-medium relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-modern-grey transition-colors text-off-white"
              >
                {selectedLanguage.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-black border border-modern-grey rounded-lg shadow-lg z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLanguage(lang);
                          setIsLanguageOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-off-white hover:bg-modern-grey transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Button
              onClick={handleLogin}
              variant="outline"
              className="hidden md:flex border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-charcoal-black"
            >
              Login / Sign Up
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-modern-grey"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-off-white hover:text-primary-accent transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={handleInvestNow}
                className="w-full bg-primary-accent hover:bg-steel-blue text-charcoal-black font-bold"
              >
                Invest Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}