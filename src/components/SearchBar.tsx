import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_PRODUCTS, CATEGORIES, COLLECTIONS, BRANDS } from '../data/demoData';
import { Search, Star, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function SearchBar() {
  const { searchQuery, setSearchQuery, setCurrentPage, setSelectedProductId } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSelectProduct = (id: number) => {
    setSelectedProductId(id);
    setCurrentPage('product-details');
    setIsOpen(false);
  };

  const handleSelectCategory = (catName: string) => {
    // Navigate to shop with search set or filter (we'll implement this)
    setSearchQuery(catName);
    setCurrentPage('shop');
    setIsOpen(false);
  };

  // Filter recommendations based on current query
  const query = searchQuery.trim().toLowerCase();
  
  const suggestedProducts = query === '' 
    ? DEMO_PRODUCTS.slice(0, 3) 
    : DEMO_PRODUCTS.filter(p => p.name.toLowerCase().includes(query)).slice(0, 4);

  const suggestedCategories = query === '' 
    ? CATEGORIES.map(c => c.name).slice(0, 3)
    : CATEGORIES.map(c => c.name).filter(name => name.toLowerCase().includes(query)).slice(0, 3);

  const suggestedCollections = query === ''
    ? COLLECTIONS.slice(0, 3)
    : COLLECTIONS.filter(col => col.toLowerCase().includes(query)).slice(0, 3);

  const suggestedBrands = query === ''
    ? BRANDS.map(b => b.name).slice(0, 3)
    : BRANDS.map(b => b.name).filter(b => b.toLowerCase().includes(query)).slice(0, 3);

  const handleViewAllResults = () => {
    setCurrentPage('shop');
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-lg" id="smart-search-bar-container">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products, brands, categories..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 bg-white/95 text-gray-800 placeholder-gray-400 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm transition-all shadow-sm"
          id="search-input-field"
        />
        <Search className="absolute left-3.5 top-2.5 h-4- w-4 text-brand-orange h-4 w-4" />
      </div>

      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-y-auto max-h-[80vh] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          id="search-suggestions-dropdown"
        >
          <div className="p-4 space-y-4">
            
            {/* Products recommendations Section */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-brand-blue" />
                Products
              </p>
              {suggestedProducts.length > 0 ? (
                <div className="space-y-2">
                  {suggestedProducts.map((prod) => (
                    <button
                      key={prod.id}
                      onClick={() => handleSelectProduct(prod.id)}
                      className="w-full text-left flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-xl transition-all"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-800 truncate leading-snug">{prod.name}</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs font-bold text-brand-blue">${prod.price.toFixed(2)}</span>
                          {prod.oldPrice && (
                            <span className="text-[10px] text-gray-400 line-through">${prod.oldPrice.toFixed(2)}</span>
                          )}
                          <div className="flex items-center gap-0.5 text-[10px] text-brand-orange ml-auto">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            <span>{prod.rating}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-gray-400 italic">No products found</p>
              )}
            </div>

            {/* Grid of other suggestion sectors */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
              
              {/* Categories */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Categories</p>
                <div className="space-y-1">
                  {suggestedCategories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectCategory(cat)}
                      className="block text-left text-xs font-medium text-gray-700 hover:text-brand-blue truncate w-full"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collections */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Collections</p>
                <div className="space-y-1">
                  {suggestedCollections.map((col, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectCategory(col)}
                      className="block text-left text-xs font-medium text-gray-700 hover:text-brand-blue truncate w-full"
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Brands</p>
                <div className="space-y-1">
                  {suggestedBrands.map((brand, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectCategory(brand)}
                      className="block text-left text-xs font-medium text-gray-700 hover:text-brand-blue truncate w-full"
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* View All Button */}
            <button
              onClick={handleViewAllResults}
              className="w-full mt-2 py-2 px-4 bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white transition-all text-xs font-bold rounded-xl flex items-center justify-center gap-1"
              id="view-all-button"
            >
              View all results
              <ArrowRight className="w-3 h-3" />
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
