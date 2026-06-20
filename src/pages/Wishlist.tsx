import React from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_PRODUCTS } from '../data/demoData';
import ProductCard from '../components/ProductCard';
import { Heart, Shovel, ShoppingBag } from 'lucide-react';

export default function Wishlist() {
  const { wishlist, setCurrentPage } = useApp();

  // Find actual items saved
  const savedProducts = DEMO_PRODUCTS.filter(p => wishlist.includes(p.id));

  if (savedProducts.length === 0) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-6" id="wishlist-empty-view">
        <div className="w-20 h-20 bg-rose-50 text-rose-300 rounded-full flex items-center justify-center mx-auto border-4 border-rose-100/60 animate-pulse">
          <Heart className="w-10 h-10" />
        </div>
        
        <div>
          <h2 className="font-display font-black text-2xl text-gray-800">Your Wishlist is Empty</h2>
          <p className="text-xs text-gray-400 max-w-sm mx-auto mt-1">Found something amazing? Toggle the heart icon to save it here for later consideration!</p>
        </div>

        <button
          onClick={() => setCurrentPage('shop')}
          className="py-3 px-8 bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs rounded-full transition-all shadow-md cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 font-sans text-left" id="wishlist-page-wrapper">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-950 flex items-center gap-1.5">
          ❤️ My Saved Favorites
        </h2>
        <p className="text-xs text-gray-400 font-medium font-display leading-none mt-1">Your saved items list for healthy nutrition and high-comfort treats.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" id="wishlist-items-grid">
        {savedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    </div>
  );
}
