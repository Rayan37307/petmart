import React, { useState } from 'react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';
import { Star, Heart, ShoppingCart, Eye, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  key?: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist, setCurrentPage, setSelectedProductId } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  const isFav = isInWishlist(product.id);

  const handleProductClick = () => {
    setSelectedProductId(product.id);
    setCurrentPage('product-details');
  };

  // Stock warning text generator
  const getStockLabel = () => {
    if (product.stock <= 3) return { text: `Only ${product.stock} items left`, color: 'text-brand-red bg-red-50' };
    if (product.stock <= 7) return { text: `Only ${product.stock} items left`, color: 'text-brand-orange bg-orange-50' };
    return { text: 'In stock', color: 'text-brand-green bg-green-50' };
  };

  const stockLabel = getStockLabel();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
      id={`product-card-${product.id}`}
    >
      {/* Visual Image container */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden cursor-pointer" onClick={handleProductClick}>
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge tag on top left */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md shadow-xs ${
              product.badge === 'Best Seller' ? 'bg-brand-blue text-white' :
              product.badge === 'Sale' ? 'bg-brand-red text-white' :
              product.badge === 'Trending' ? 'bg-brand-purple text-white' :
              product.badge === 'Limited Stock' ? 'bg-brand-orange text-white' : 'bg-gray-800 text-white'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Floating actions container */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => { e.stopPropagation(); handleProductClick(); }}
            className="p-2.5 bg-white text-gray-800 hover:bg-brand-orange hover:text-white rounded-full transition-all duration-200 shadow-md active:scale-95"
            title="Quick view product details"
          >
            <Eye className="w-4 h-4" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); addToCart(product, 1); }}
            className="p-2.5 bg-white text-gray-800 hover:bg-brand-blue hover:text-white rounded-full transition-all duration-200 shadow-md active:scale-95 animate-in zoom-in-50 duration-300"
            title="Add directly to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
        <div className="space-y-1">
          {/* Brand and pet category */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">{product.brand}</span>
            <span className="text-[10px] font-semibold text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded">
              {product.petType}
            </span>
          </div>

          {/* Title can be clicked for navigation */}
          <h4
            onClick={handleProductClick}
            className="font-display font-bold text-sm text-gray-800 hover:text-brand-blue cursor-pointer line-clamp-1 group-hover:text-brand-blue transition-colors"
          >
            {product.name}
          </h4>

          {/* Reviews score summarizing */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="flex text-brand-orange">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className={`w-3 h-3 ${idx < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-700">{product.rating}</span>
            <span className="text-[9px] text-gray-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Pricing, items counter, and add actions */}
        <div className="space-y-2.5 pt-2 border-t border-gray-100">
          {/* Prices block */}
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-brand-blue font-mono">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through font-mono">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>
          </div>

          {/* Dynamic Stock Warning Label */}
          <div className="flex items-center justify-between">
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold font-mono ${stockLabel.color}`}>
              {stockLabel.text}
            </span>
            
            {/* Wishlist Heart Toggle */}
            <button
              onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
              className={`p-1.5 rounded-full border transition-all ${
                isFav 
                  ? 'bg-rose-50 border-rose-100 text-rose-500' 
                  : 'bg-white border-gray-100 text-gray-300 hover:text-rose-500 hover:border-rose-100'
              }`}
              title={isFav ? "Remove from saved items" : "Save to my wishlist"}
            >
              <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Add to Cart Hover Actions button */}
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full py-2 px-3 rounded-full bg-brand-orange hover:bg-brand-blue text-white text-xs font-bold transition-all flex items-center justify-center gap-1 hover:shadow-md cursor-pointer"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
