import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black text-off-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src="https://horizons-cdn.hostinger.com/9e1f4551-bf70-48a3-a592-c6f31edcad6a/20f1122ea0c6389b411c3fbed71b38e4.jpg" alt="InReal Logo" className="h-10 w-auto" />
            </div>
            <p className="text-slate-grey mb-6">Fractional Property Investments</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-modern-grey hover:bg-primary-accent text-off-white hover:text-charcoal-black flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-modern-grey hover:bg-primary-accent text-off-white hover:text-charcoal-black flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-modern-grey hover:bg-primary-accent text-off-white hover:text-charcoal-black flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/investinreal" className="w-10 h-10 rounded-full bg-modern-grey hover:bg-primary-accent text-off-white hover:text-charcoal-black flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block uppercase text-primary-accent">Company</span>
            <ul className="space-y-3">
              <li><a href="#mission" className="text-slate-grey hover:text-primary-accent transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-slate-grey hover:text-primary-accent transition-colors">How It Works</a></li>
              <li><a href="#properties" className="text-slate-grey hover:text-primary-accent transition-colors">Properties</a></li>
              <li><a href="#contact" className="text-slate-grey hover:text-primary-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block uppercase text-primary-accent">Resources</span>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-slate-grey hover:text-primary-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Investment Guide</a></li>
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block uppercase text-primary-accent">Legal</span>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-slate-grey hover:text-primary-accent transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-modern-grey pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-grey text-sm mb-4 md:mb-0">
              © {currentYear} InReal. All rights reserved.
            </p>
            <p className="text-slate-grey text-sm">
              Investment involves risk. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}