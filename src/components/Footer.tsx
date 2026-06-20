import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Pin, 
  Send, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Flame, 
  PawPrint 
} from 'lucide-react';

export default function Footer() {
  const { setCurrentPage, setSearchQuery } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() === '') return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2500);
  };

  const handleCategoryNav = (cat: string) => {
    setSearchQuery(cat);
    setCurrentPage('shop');
  };

  return (
    <footer className="relative mt-20 bg-brand-orange text-white" id="pawmart-footer-container">
      {/* Decorative Wave divisor on top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-[99%] z-0 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 text-brand-orange fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,53.05,22,81.13,31C157.06,55.57,238.12,68.13,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Blue Newsletter Card Peeking (Absolute layout style overlapping or embedded elegantly at top) */}
      <div className="max-w-4xl mx-auto px-4 -translate-y-12">
        <div className="relative bg-brand-blue rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Subtle Background Blobs */}
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          <div className="absolute left-10 top-0 w-32 h-32 bg-brand-orange/15 rounded-full blur-xl" />
          
          <div className="relative z-10 space-y-2 max-w-md text-left">
            <span className="text-[10px] bg-white text-brand-blue font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
              PawMart Club
            </span>
            <h4 className="font-display font-bold text-xl sm:text-2xl leading-none">Sign Up to Us Newsletter</h4>
            <p className="text-xs text-white/85">
              Be the first to know about vet tips, brand fresh recipes, and premium member rewards!
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative z-10 w-full max-w-xs sm:max-w-sm flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white/10 text-white placeholder-white/60 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 text-xs transition-all"
              />
              <Mail className="absolute right-3.5 top-3.5 h-4 w-4 text-white/55" />
            </div>
            
            <button
              type="submit"
              className="py-3 px-6 rounded-xl bg-white hover:bg-gray-100 text-brand-blue font-bold text-xs transition-all flex items-center justify-center gap-1 shrink-0 cursor-pointer shadow-md"
            >
              {isSubscribed ? 'Thank you!' : 'Sign Up'}
              {!isSubscribed && <Send className="w-3.5 h-3.5" />}
            </button>
          </form>

          {/* Cute Cat peeking peeping from bottom of card! */}
          <div className="absolute right-4 bottom-[-16px] hidden lg:block overflow-visible w-28 h-20">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80"
              alt="Peeking Cat icon"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-t-full border-t-2 border-white scale-x-[-1] translate-y-6 hover:translate-y-1 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Link Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-2 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Adress & Contacts */}
        <div className="space-y-4 text-left">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-white text-brand-orange rounded-xl flex items-center justify-center shadow-md">
              <PawPrint className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tight">PawMart</span>
          </div>

          <p className="text-xs font-semibold leading-relaxed max-w-xs text-white/90">
            Providing natural balanced pet food, supplies, and veterinarian-approved solutions since 2018. Developed for maximum wagging!
          </p>

          <div className="space-y-2 text-xs font-semibold text-white/90">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-white mt-0.5 shrink-0" />
              <span>470 Parker Rd, Allentown, Mexico 3030</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white shrink-0" />
              <div className="leading-tight">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p className="text-white/60 font-normal">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Categories */}
        <div className="space-y-4 text-left">
          <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide border-b border-white/25 pb-1.5 flex items-center gap-1">
            <Flame className="w-4 h-4 text-white" /> Popular Categories
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-white/90">
            <li><button onClick={() => handleCategoryNav('Food')} className="hover:text-white/70 transition-colors">Dog Food & Cat Food</button></li>
            <li><button onClick={() => handleCategoryNav('Treats')} className="hover:text-white/70 transition-colors">Organic Treats</button></li>
            <li><button onClick={() => handleCategoryNav('Toys')} className="hover:text-white/70 transition-colors">Interactive Toys</button></li>
            <li><button onClick={() => handleCategoryNav('Beds')} className="hover:text-white/70 transition-colors">Memory Foam Beds</button></li>
            <li><button onClick={() => handleCategoryNav('Leashes')} className="hover:text-white/70 transition-colors">Adjustable Harnesses</button></li>
            <li><button onClick={() => handleCategoryNav('Supplies')} className="hover:text-white/70 transition-colors">Veterinary Supplies & Grooming</button></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="space-y-4 text-left">
          <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide border-b border-white/25 pb-1.5">
            Useful Links
          </h4>
          <ul className="space-y-2.5 text-xs font-semibold text-white/90">
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-white/70 transition-colors">About Us</button></li>
            <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white/70 transition-colors">The PawMart Blog</button></li>
            <li><button onClick={() => { setSearchQuery('Advance'); setCurrentPage('shop'); }} className="hover:text-white/70 transition-colors">Our Premium Brands</button></li>
            <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white/70 transition-colors">Best Weekly Deals</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white/70 transition-colors">Contact Support</button></li>
            <li><button onClick={() => setCurrentPage('faq')} className="hover:text-white/70 transition-colors">Shipping & FAQ</button></li>
          </ul>
        </div>

        {/* App availability and Social links */}
        <div className="space-y-5 text-left">
          <div className="space-y-2.5">
            <h4 className="font-display font-bold text-lg text-white uppercase tracking-wide border-b border-white/25 pb-1.5">
              Available On
            </h4>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2">
              {/* App store */}
              <a href="#app-store" className="bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-3 py-2 flex items-center gap-2 transition-all shadow-md group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71,19.5C17.88,20.74,17,21.95,15.66,21.97C14.32,22,13.89,21.18,12.37,21.18C10.84,21.18,10.37,21.95,9.1,22C7.79,22.05,6.8,20.68,5.96,19.47C4.25,17,2.94,12.45,4.7,9.39C5.57,7.87,7.13,6.91,8.82,6.88C10.1,6.86,11.32,7.75,12.11,7.75C12.89,7.75,14.37,6.68,15.92,6.84C16.57,6.87,18.39,7.1,19.56,8.82C19.47,8.88,17.39,10.1,17.41,12.63C17.44,15.65,20.06,16.66,20.1,16.67C20.08,16.74,19.67,18.11,18.71,19.5M15.97,4.17C16.63,3.37,17.07,2.28,16.95,1C16,1.04,14.9,1.6,14.24,2.38C13.68,3.04,13.19,4.14,13.34,5.39C14.39,5.47,15.4,4.88,15.97,4.17Z" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-[8px] uppercase tracking-wider text-white/60">Download on the</p>
                  <p className="text-xs font-bold font-display group-hover:text-brand-orange leading-tight">App Store</p>
                </div>
              </a>
              {/* Play Store */}
              <a href="#google-play" className="bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-3 py-2 flex items-center gap-2 transition-all shadow-md group">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.5,12L8,6.5V17.5L17.5,12Z" />
                </svg>
                <div className="text-left font-sans">
                  <p className="text-[8px] uppercase tracking-wider text-white/60">Get it on</p>
                  <p className="text-xs font-bold font-display group-hover:text-brand-orange leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest">
              Social Links
            </h4>
            <div className="flex gap-2.5">
              <a href="#fb" className="w-8 h-8 rounded-full bg-gray-950 hover:bg-brand-blue hover:text-white text-white flex items-center justify-center transition-all shadow-sm">
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a href="#ig" className="w-8 h-8 rounded-full bg-gray-950 hover:bg-brand-blue hover:text-white text-white flex items-center justify-center transition-all shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#x" className="w-8 h-8 rounded-full bg-gray-950 hover:bg-brand-blue hover:text-white text-white flex items-center justify-center transition-all shadow-sm">
                <Twitter className="w-4 h-4 fill-current" />
              </a>
              <a href="#yt" className="w-8 h-8 rounded-full bg-gray-950 hover:bg-brand-blue hover:text-white text-white flex items-center justify-center transition-all shadow-sm">
                <Youtube className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Final copyrighted notes bottom-line bar */}
      <div className="bg-gray-950 text-white/60 text-xs py-4 px-4 text-center border-t border-white/5">
        <p className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-mono">
          <span>&copy; 2026 PawMart Inc. Made with premium love for your pets!</span>
          <span className="text-[10px] text-white/35">Interactive Prototype Demo. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
}
