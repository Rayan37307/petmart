import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import SearchBar from './SearchBar';
import { 
  PawPrint, 
  Heart, 
  ShoppingCart, 
  Menu, 
  X, 
  MapPin, 
  Sparkles, 
  User, 
  ChevronDown,
  Gift,
  HelpCircle,
  FileText,
  BadgeAlert
} from 'lucide-react';
import { PageId } from '../types';

export default function Header() {
  const { 
    cart, 
    wishlist, 
    currentPage, 
    setCurrentPage, 
    setIsCartOpen,
    setSearchQuery 
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('USA');

  // Compute total cart quantities and value
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotalValue = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  const handlePetCategoryNav = (petType: string) => {
    setSearchQuery(petType);
    setCurrentPage('shop');
    setIsMobileMenuOpen(false);
  };

  const countries = [
    { code: 'USA', label: 'USA ($)' },
    { code: 'MEX', label: 'MEX ($)' },
    { code: 'BGD', label: 'BGD (৳)' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm font-sans" id="pawmart-header-container">
      {/* Top Notification Strip */}
      <div className="bg-brand-blue text-white text-xs py-2 px-4 flex justify-between items-center z-10">
        <p className="flex items-center gap-1">
          <Gift className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
          <span>Get <strong>15% OFF</strong> on your first purchase! Code: <strong>WELCOME15</strong></span>
        </p>
        <div className="hidden sm:flex items-center gap-4 text-white/90">
          <button onClick={() => handleNavClick('faq')} className="hover:text-white flex items-center gap-0.5"><HelpCircle className="w-3 h-3" /> FAQ</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-white flex items-center gap-0.5">Story</button>
          <span className="text-white/40">|</span>
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>Support Live</span>
          </p>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer flex-shrink-0 group"
          id="pawmart-logo-clicker"
        >
          <div className="w-10 h-10 bg-brand-blue text-white rounded-2xl flex items-center justify-center shadow-md shadow-brand-blue/20 group-hover:rotate-12 transition-transform duration-300">
            <PawPrint className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h1 className="font-display font-black text-2xl text-brand-blue tracking-tight leading-none">
              Paw<span className="text-brand-orange">Mart</span>
            </h1>
            <p className="text-[10px] text-gray-400 font-medium font-display leading-none mt-1">With Love for Your Pets</p>
          </div>
        </div>

        {/* Smart autocomplete search block */}
        <div className="hidden md:block flex-1 max-w-lg">
          <SearchBar />
        </div>

        {/* User accessories and cart triggers */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0" id="header-accessories">
          {/* Country selector */}
          <div className="relative group hidden sm:block">
            <button className="flex items-center gap-1 px-2.5 py-1.5 hover:bg-gray-50 rounded-xl border border-gray-100 text-xs font-semibold text-gray-700 transition-all">
              <MapPin className="w-3 h-3 text-brand-blue" />
              <span>{countries.find(c => c.code === selectedCountry)?.code}</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
            <div className="absolute right-0 mt-1 w-28 bg-white border border-gray-100 rounded-xl shadow-lg hidden group-hover:block z-50">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setSelectedCountry(c.code)}
                  className="w-full text-left px-3 py-2 text-xs hover:bg-gray-50 flex items-center gap-1.5 first:rounded-t-xl last:rounded-b-xl"
                >
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Login / Auth Account Link */}
          <button
            onClick={() => handleNavClick('login')}
            className={`p-2 hover:bg-gray-50 text-gray-600 rounded-xl flex items-center gap-1.5 transition-all text-xs font-bold leading-none ${currentPage === 'login' ? 'text-brand-blue bg-blue-50/50' : ''}`}
            title="Account Access"
            id="auth-header-button"
          >
            <div className="p-1 bg-gray-100 text-gray-600 rounded-lg group-hover:bg-brand-blue/10">
              <User className="w-4 h-4" />
            </div>
            <span className="hidden lg:inline">Sign In</span>
          </button>

          {/* Saved wishlist counter */}
          <button
            onClick={() => handleNavClick('wishlist')}
            className={`p-2.5 hover:bg-rose-50 text-gray-400 hover:text-rose-500 rounded-xl relative transition-all ${currentPage === 'wishlist' ? 'text-rose-500 bg-rose-50/50' : ''}`}
            title="Wishlist / Saved Items"
            id="wishlist-header-trigger"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Master cart preview action */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 p-1.5 sm:p-2 bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white rounded-2xl transition-all cursor-pointer border border-brand-blue/10"
            title="Open cart preview"
            id="cart-header-trigger"
          >
            <div className="p-1.5 bg-brand-blue text-white rounded-xl relative">
              <ShoppingCart className="w-4 h-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-orange text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <div className="hidden lg:block text-left pr-1">
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider leading-none">My Cart</p>
              <p className="text-xs font-mono font-black mt-0.5">${cartTotalValue.toFixed(2)}</p>
            </div>
          </button>

          {/* Mobile responsive toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-gray-100 text-gray-700 rounded-xl md:hidden transition-all"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Yellow/Orange Navigation links bar */}
      <nav className="bg-brand-orange orange-pattern-bg py-2.5 shadow-sm border-y border-orange-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-white">
            <button 
              onClick={() => handlePetCategoryNav('Dog')} 
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              Dogs
            </button>
            <button 
              onClick={() => handlePetCategoryNav('Cat')} 
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              Cats
            </button>
            <button 
              onClick={() => handlePetCategoryNav('Bird')} 
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              More Pets
            </button>
            <button 
              onClick={() => handleNavClick('shop')} 
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              Best Deals
            </button>
            <button 
              onClick={() => { setSearchQuery('Advance'); handleNavClick('shop'); }}
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              Brands
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="hover:text-white/80 flex items-center gap-1 drop-shadow-xs transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex-1">
            {/* On mobile, place a smaller Search bar inside navigational strip */}
            <SearchBar />
          </div>

          {/* Quick link support */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-white">
            <span className="bg-white/20 px-2.5 py-1 rounded-full border border-white/20">Hotline: +1 (800) 555-PAW</span>
          </div>
        </div>
      </nav>

      {/* Mobile navigation side drawer overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex md:hidden" id="mobile-navigation-portal">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative w-72 bg-white h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300">
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue text-white rounded-xl flex items-center justify-center">
                  <PawPrint className="w-5 h-5 fill-current" />
                </div>
                <h2 className="font-display font-black text-xl text-brand-blue">PawMart</h2>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Navigation Menu</p>
              
              <div className="space-y-2.5 flex flex-col">
                <button onClick={() => handleNavClick('home')} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">Home</button>
                <button onClick={() => { setSearchQuery('Dog'); handleNavClick('shop'); }} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">Dog Supplies</button>
                <button onClick={() => { setSearchQuery('Cat'); handleNavClick('shop'); }} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">Cat Supplies</button>
                <button onClick={() => handleNavClick('shop')} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800 font-display text-brand-blue">Shop All Products</button>
                <button onClick={() => handleNavClick('blog')} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">Latest Blog Articles</button>
                <button onClick={() => handleNavClick('faq')} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">Review FAQs</button>
                <button onClick={() => handleNavClick('about')} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">About Our Brand</button>
                <button onClick={() => handleNavClick('contact')} className="text-left py-2 px-3 hover:bg-gray-50 rounded-xl font-bold text-gray-800">Connect With Us</button>
              </div>
            </div>

            {/* Quick credentials on mobile */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <button 
                onClick={() => handleNavClick('login')}
                className="w-full py-2.5 px-4 bg-brand-blue text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4" />
                Sign In
              </button>
              <p className="text-[10px] text-gray-400 text-center font-display">With Love for Your Pets</p>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
