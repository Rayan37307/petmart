import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_PRODUCTS, CATEGORIES, BRANDS } from '../data/demoData';
import ProductCard from '../components/ProductCard';
import { 
  Filter, 
  X, 
  Search, 
  ChevronDown, 
  Grid, 
  List, 
  Sparkles, 
  Dog, 
  Cat, 
  HelpCircle,
  EyeOff,
  PawPrint,
  Star
} from 'lucide-react';

export default function Shop() {
  const { searchQuery, setSearchQuery } = useApp();
  
  // Local filter states
  const [selectedPet, setSelectedPet] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(140);
  const [minRating, setMinRating] = useState<number>(0);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('default');
  
  // Mobile filter drawer state
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Compute stats on the fly
  const filteredProducts = useMemo(() => {
    let result = [...DEMO_PRODUCTS];

    // Filter by text search query (which can come from header)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.brand.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        p.petType.toLowerCase().includes(q)
      );
    }

    // Filter by Pet Type
    if (selectedPet !== 'All') {
      result = result.filter(p => p.petType === selectedPet);
    }

    // Filter by Organic Category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Brand
    if (selectedBrand !== 'All') {
      result = result.filter(p => p.brand === selectedBrand);
    }

    // Filter by Max Price
    result = result.filter(p => p.price <= maxPrice);

    // Filter by Min Rating rating
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Filter by stock
    if (inStockOnly) {
      result = result.filter(p => p.stock > 0);
    }

    // Sort operations
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'top-rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'best-seller') {
      // Best Seller badges go first
      result.sort((a, b) => {
        const scoreA = a.badge === 'Best Seller' ? 2 : 0;
        const scoreB = b.badge === 'Best Seller' ? 2 : 0;
        return scoreB - scoreA;
      });
    }

    return result;
  }, [searchQuery, selectedPet, selectedCategory, selectedBrand, maxPrice, minRating, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedPet('All');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setMaxPrice(140);
    setMinRating(0);
    setInStockOnly(false);
    setSortBy('default');
  };

  const petTypesList = ['All', 'Dog', 'Cat', 'Bird', 'Fish'];
  const categoriesList = ['All', ...CATEGORIES.map(c => c.name)];
  const brandsList = ['All', ...BRANDS.map(b => b.name)];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 font-sans text-left" id="shop-page-wrapper">
      
      {/* Breadcrumb path */}
      <div className="text-xs text-gray-400 mb-4 font-mono">
        <span className="hover:text-brand-blue cursor-pointer">PawMart</span>
        <span className="mx-2">/</span>
        <span className="text-gray-600 font-bold">Shop Products</span>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-950 flex items-center gap-1.5">
            <PawPrint className="w-6 h-6 text-brand-blue" /> Custom Pet Catalog
          </h2>
          <p className="text-xs text-gray-400 font-medium">Browse verified nutritious treats, heavy duty cages, dental pastes, and accessories!</p>
        </div>

        {/* Global Products Statistics view */}
        <div className="text-xs font-mono font-bold text-gray-500 bg-white border border-gray-100 rounded-xl px-4 py-2 self-start flex items-center gap-2">
          <span>Found {filteredProducts.length} unique products</span>
          {searchQuery !== '' && (
            <span className="bg-brand-orange/14 text-brand-orange px-2 py-0.5 rounded-full text-[10px]">
              Query: "{searchQuery}"
            </span>
          )}
        </div>
      </div>

      {/* Sorting / Mobile controls strip */}
      <div className="bg-white p-3 rounded-2xl border border-gray-100 mb-6 flex flex-wrap justify-between items-center gap-3">
        {/* Toggle details on mobile sidebar */}
        <button 
          onClick={() => setIsFilterDrawerOpen(true)}
          className="md:hidden py-2 px-4 rounded-full bg-brand-blue text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
        >
          <Filter className="w-3.5 h-3.5" /> Filters
        </button>

        {/* Desktop reset filters trigger */}
        <div className="hidden md:flex items-center gap-1 text-xs text-gray-500">
          <span>Active filter settings:</span>
          {(selectedPet !== 'All' || selectedCategory !== 'All' || selectedBrand !== 'All' || searchQuery !== '' || minRating > 0) ? (
            <button 
              onClick={handleResetFilters}
              className="ml-2 py-1 px-3 bg-brand-red/10 hover:bg-brand-red text-brand-red font-bold rounded-full transition-all text-[10px]"
            >
              Reset Filters
            </button>
          ) : (
            <span className="italic font-normal">None applied</span>
          )}
        </div>

        {/* Products Sorting Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-gray-500">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            id="product-sorting-selection"
          >
            <option value="default">Default Match</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="top-rated">Top Rated Summary</option>
            <option value="best-seller">Bestselling Items</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block space-y-6" id="desktop-filters-sidebar">
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-2xs space-y-5">
            
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h4 className="font-display font-bold text-base text-gray-800 flex items-center gap-1.5">
                <Filter className="w-4 h-4 text-brand-blue" />
                Refine Search
              </h4>
              <button 
                onClick={handleResetFilters}
                className="text-[10px] text-brand-orange hover:text-brand-blue font-bold font-mono transition-colors"
              >
                Clear all
              </button>
            </div>

            {/* In-sidebar Search input box */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-500">Filtered Search</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type product name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue text-gray-800"
                />
                <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>

            {/* Pet category checkboxes */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-500">Pet Animal Type</p>
              <div className="grid grid-cols-2 gap-1">
                {petTypesList.map((pet) => (
                  <button
                    key={pet}
                    onClick={() => setSelectedPet(pet)}
                    className={`py-1.5 px-2 rounded-xl text-xs font-bold text-center transition-all ${selectedPet === pet ? 'bg-brand-blue text-white' : 'bg-gray-50 hover:bg-gray-100 text-gray-600'}`}
                  >
                    {pet === 'All' ? 'All' : pet}
                  </button>
                ))}
              </div>
            </div>

            {/* Feed Categories Listing */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-500">Shop Category</p>
              <div className="flex flex-col gap-1.5">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs text-left w-full py-1.5 px-3 rounded-xl transition-all flex items-center justify-between ${
                      selectedCategory === cat 
                        ? 'bg-orange-50 font-bold text-brand-orange border border-orange-200' 
                        : 'hover:bg-gray-50 text-gray-600 border border-transparent'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {cat === 'All' ? DEMO_PRODUCTS.length : DEMO_PRODUCTS.filter(p => p.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Brands selectors column */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-500">Our Premium Brands</p>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2 focus:outline-none"
              >
                {brandsList.map((b) => (
                  <option key={b} value={b}>{b === 'All' ? 'All Brands' : b}</option>
                ))}
              </select>
            </div>

            {/* High price slider interface */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-gray-500">
                <span>Maximum Price</span>
                <span className="font-mono text-brand-blue">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="5"
                max="140"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>$5.00</span>
                <span>$140.00</span>
              </div>
            </div>

            {/* Minimum star ratings filter */}
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-gray-500">Minimum Rating</p>
              <div className="flex items-center gap-1">
                {[0, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setMinRating(star)}
                    className={`py-1 px-2.5 rounded-lg text-xs font-bold transition-all ${
                      minRating === star 
                        ? 'bg-brand-orange text-white' 
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border'
                    }`}
                  >
                    {star === 0 ? 'All' : `${star}+ Stars`}
                  </button>
                ))}
              </div>
            </div>

            {/* In stock switcher checkbox style */}
            <label className="flex items-center gap-2 cursor-pointer pt-2 border-t border-gray-100">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 rounded text-brand-blue border-gray-300 focus:ring-brand-blue accent-brand-blue"
              />
              <span className="text-xs font-bold text-gray-700">Display In-Stock only</span>
            </label>

          </div>
        </div>

        {/* Product Grid Column on Right */}
        <div className="md:col-span-3 space-y-6">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-2xs">
              <div className="w-16 h-16 bg-orange-50 text-brand-orange rounded-full flex items-center justify-center">
                <EyeOff className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display font-black text-xl text-gray-800">No matching items found</h4>
                <p className="text-xs text-gray-400 max-w-sm mt-1 leading-normal">
                  We could not locate any products matching your specific set of filters. Try clearing some selections or searching for generic words!
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="py-2.5 px-6 rounded-full bg-brand-blue hover:bg-brand-deep text-white font-bold text-xs transition-all shadow-md active:scale-95"
              >
                Clear All Filter Selections
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" id="shop-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer filter side panel (absolute overlay) */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex md:hidden" id="mobile-filter-drawer-portal">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsFilterDrawerOpen(false)} />
          <div className="relative w-80 bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-2 border-b">
                <h4 className="font-display font-black text-lg text-gray-800 flex items-center gap-1.5">
                  <Filter className="w-5 h-5 text-brand-orange" /> Filters Filter
                </h4>
                <button onClick={() => setIsFilterDrawerOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-full text-gray-400">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* In-sidebar Search input box */}
              <div className="space-y-1.5 text-left">
                <p className="text-xs font-bold text-gray-500">Filtered Search</p>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Type product name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-xs pl-8 pr-3 py-2 bg-gray-50 border rounded-xl"
                  />
                  <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1.5 text-left">
                <p className="text-xs font-bold text-gray-500">Shop Category</p>
                <div className="grid grid-cols-2 gap-1.5">
                  {categoriesList.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`py-1.5 px-2 rounded-xl text-xs font-semibold text-center truncate ${selectedCategory === cat ? 'bg-brand-orange text-white' : 'bg-gray-50'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pet Type */}
              <div className="space-y-1.5 text-left">
                <p className="text-xs font-bold text-gray-500">Pet Animal Type</p>
                <div className="grid grid-cols-3 gap-1">
                  {petTypesList.map((pet) => (
                    <button
                      key={pet}
                      onClick={() => setSelectedPet(pet)}
                      className={`py-1 text-center rounded-xl text-xs font-semibold ${selectedPet === pet ? 'bg-brand-blue text-white' : 'bg-gray-50'}`}
                    >
                      {pet}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Price */}
              <div className="space-y-1.5 text-left">
                <div className="flex justify-between text-xs font-bold text-gray-500">
                  <span>Maximum Price</span>
                  <span className="font-mono text-brand-blue">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="140"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1.5"
                />
              </div>

              {/* Stock toggle */}
              <label className="flex items-center gap-2 cursor-pointer py-1 text-left">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-brand-blue border-gray-300"
                />
                <span className="text-xs font-bold text-gray-700">Display In-Stock only</span>
              </label>
            </div>

            <div className="pt-6 border-t">
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="w-full py-2.5 bg-brand-blue hover:bg-brand-deep text-white font-bold text-xs rounded-full shadow-md"
              >
                Apply Filters ({filteredProducts.length} items)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
