import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_PRODUCTS, CATEGORIES, BRANDS, DEMO_BLOG_POSTS } from '../data/demoData';
import ProductCard from '../components/ProductCard';
import { 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Headphones, 
  Heart, 
  MessageSquare,
  Bookmark,
  Calendar,
  User,
  Instagram,
  PawPrint
} from 'lucide-react';

export default function Home() {
  const { setCurrentPage, setSelectedProductId, setSelectedBlogId, addToCart, setSearchQuery } = useApp();
  const [popularCategoryFilter, setPopularCategoryFilter] = useState<'Dog' | 'Cat'>('Dog');

  const bestsellerProducts = DEMO_PRODUCTS.filter(p => p.badge === 'Best Seller' || p.badge === 'Trending');

  const handleProductDetails = (id: number) => {
    setSelectedProductId(id);
    setCurrentPage('product-details');
  };

  const handleBlogClick = (id: number) => {
    setSelectedBlogId(id);
    setCurrentPage('blog-details');
  };

  // Instantly filters shop with selected category
  const handleCategoryClick = (catName: string) => {
    setSearchQuery(catName);
    setCurrentPage('shop');
  };

  // Fake instagram images
  const instagramImages = [
    { url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&auto=format&fit=crop&q=80', tag: '@bella_golden' },
    { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80', tag: '@milo_feline' },
    { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=150&auto=format&fit=crop&q=80', tag: '@rocky_pug' },
    { url: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=150&auto=format&fit=crop&q=80', tag: '@cleo_kitty' },
    { url: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=150&auto=format&fit=crop&q=80', tag: '@pete_rabbit' },
    { url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=150&auto=format&fit=crop&q=80', tag: '@nemo_aquatics' },
    { url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=150&auto=format&fit=crop&q=80', tag: '@blue_macaw' },
    { url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=150&auto=format&fit=crop&q=80', tag: '@daisy_spaniel' }
  ];

  return (
    <div className="space-y-16 pb-16 font-sans" id="home-page-container">
      
      {/* 1. Split Hero Section */}
      <section className="relative w-full bg-brand-blue paw-pattern-bg py-12 md:py-16 overflow-hidden rounded-b-[32px] md:rounded-b-[48px] shadow-lg">
        {/* Playful yellow decorative bubble */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-[-5%] bottom-[-5%] w-80 h-80 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
          
          {/* Hero Left Content */}
          <div className="space-y-6 text-white text-left animate-in fade-in slide-in-from-left duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange text-white rounded-full font-display font-extrabold text-xs tracking-wide shadow-md">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-brand-blue" />
              15% OFF YOUR FIRST ORDER
            </span>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight">
              Food for Large <br className="hidden sm:inline" /> Breed Dogs
            </h2>
            
            <p className="text-sm sm:text-base text-blue-50/95 max-w-lg leading-relaxed">
              Complete dry food with lamb and rice for adult dogs of all breeds. Give your pets the nutrition they deserve every day with delicious ingredients that keep tails wagging.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => { setSearchQuery('Food'); setCurrentPage('shop'); }}
                className="py-3 px-8 bg-brand-orange hover:bg-white text-white hover:text-brand-orange font-display font-extrabold rounded-full transition-all text-sm shadow-lg hover:shadow-xl active:scale-95 cursor-pointer leading-none"
              >
                Shop Now
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="py-3 px-8 bg-white/10 hover:bg-white/20 text-white font-display font-bold rounded-full border border-white/20 transition-all text-sm cursor-pointer leading-none"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Right image container */}
          <div className="relative flex justify-center items-center">
            {/* Cute backdrop orange blobs */}
            <div className="absolute w-[80%] aspect-square bg-brand-orange rounded-full rounded-tr-[120px] rounded-bl-[160px] opacity-90 blur-xs shrink-0 z-0 animate-pulse-slow" />
            
            <div className="relative z-10 w-[90%] sm:w-[80%] aspect-square overflow-hidden rounded-[40px] border-4 border-white shadow-2xl skew-y-1 transform group hover:rotate-1 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80"
                alt="Golden Retriever Dog Happy Face"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              
              {/* Absolutes Overlay decals */}
              <div className="absolute bottom-4 left-4 bg-white/95 text-gray-800 p-3 rounded-2xl flex items-center gap-2.5 shadow-md">
                <div className="p-1.5 bg-brand-blue text-white rounded-lg">
                  <PawPrint className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono">Nutritionist approved</p>
                  <p className="text-xs font-bold font-display">100% Organic Recipes</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Popular Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6" id="categories-section">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900">What Is Popular Now</h3>
            <p className="text-xs text-gray-400 font-medium">Explore premium items handpicked based on active buyer trends</p>
          </div>

          {/* Filter pills toggles */}
          <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200">
            <button
              onClick={() => setPopularCategoryFilter('Dog')}
              className={`py-1.5 px-4 rounded-full font-display font-bold text-xs transition-all ${popularCategoryFilter === 'Dog' ? 'bg-brand-blue text-white shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
            >
              For Dogs
            </button>
            <button
              onClick={() => setPopularCategoryFilter('Cat')}
              className={`py-1.5 px-4 rounded-full font-display font-bold text-xs transition-all ${popularCategoryFilter === 'Cat' ? 'bg-brand-blue text-white shadow-xs' : 'text-gray-500 hover:text-gray-800'}`}
            >
              For Cats
            </button>
          </div>
        </div>

        {/* Categories Grid list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const productCount = popularCategoryFilter === 'Dog' ? cat.countDogs : cat.countCats;
            return (
              <div
                key={cat.id}
                onClick={() => handleCategoryClick(cat.name)}
                className="group soft-orange-pattern-bg p-4 rounded-3xl border border-orange-100 text-center space-y-3 cursor-pointer hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="aspect-square w-full rounded-2xl overflow-hidden border border-orange-200 bg-white">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-gray-800 group-hover:text-brand-blue transition-colors">{cat.name}</h4>
                  <span className="inline-block mt-1 text-[10px] font-bold font-mono text-brand-orange bg-white px-2 py-0.5 rounded-full border border-orange-100">
                    {productCount}+ Items
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Promo Banner Grid (Masonry style layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6" id="promo-banner-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Banner 1 (Purple) */}
          <div className="md:col-span-7 bg-brand-purple rounded-3xl p-6 sm:p-8 text-white relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-lg transition-shadow">
            <div className="absolute right-0 bottom-0 w-44 h-44 bg-white/5 rounded-full blur-xl" />
            <div className="relative z-10 space-y-3 max-w-xs sm:max-w-md text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFE0A3]">VET FORMULA</span>
              <h4 className="font-display font-black text-xl sm:text-2xl leading-tight">Unique Recipe Based On Natural Ingredients</h4>
              <button 
                onClick={() => { setSearchQuery('Food'); setCurrentPage('shop'); }}
                className="py-2.5 px-6 rounded-full bg-white hover:bg-[#FFE0A3] text-[#1E1E1E] font-display font-bold text-xs transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                Shop Now
              </button>
            </div>
            {/* Image mock */}
            <div className="absolute right-4 bottom-0 w-32 sm:w-40 h-[80%] hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=350&auto=format&fit=crop&q=80"
                alt="Pet Food pack + dog icon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom select-none"
              />
            </div>
          </div>

          {/* Banner 2 (Green) */}
          <div className="md:col-span-5 bg-brand-green rounded-3xl p-6 text-white relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-lg transition-shadow">
            <div className="absolute right-0 top-0 w-28 h-28 bg-white/10 rounded-full blur-lg" />
            <div className="relative z-10 space-y-3 text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-100">WE COMPASSIONATE</span>
              <h4 className="font-display font-black text-xl leading-tight">Your Pet Is In Reliable Hands!</h4>
              <button 
                onClick={() => setCurrentPage('about')}
                className="py-2.5 px-6 rounded-full bg-white hover:bg-[#FFE0A3] text-[#1E1E1E] font-display font-bold text-xs transition-all shadow-xs cursor-pointer"
              >
                Learn More
              </button>
            </div>
            <div className="absolute right-4 bottom-0 w-28 h-[75%] hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&auto=format&fit=crop&q=80"
                alt="Woman holding dog"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom opacity-85 rounded-t-full"
              />
            </div>
          </div>

          {/* Banner 3 (Teal/Green) */}
          <div className="md:col-span-4 bg-emerald-700 rounded-3xl p-6 text-white relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-sm group">
            <div className="relative z-10 space-y-3 text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFE0A3]">HYGIENE FOCUS</span>
              <h4 className="font-display font-black text-lg leading-tight">Healthy Teeth With Oral Care Kit</h4>
              <button 
                onClick={() => { setSearchQuery('Supplies'); setCurrentPage('shop'); }}
                className="py-2 px-5 rounded-full bg-brand-orange hover:bg-white text-white hover:text-brand-orange font-bold text-xs transition-all cursor-pointer"
              >
                Shop Now
              </button>
            </div>
            <div className="absolute right-2 bottom-0 w-24 h-[65%] hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=250&auto=format&fit=crop&q=80"
                alt="Pet hygiene kit"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Banner 4 (Image Background) */}
          <div className="md:col-span-4 rounded-3xl relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-sm group">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src="https://images.unsplash.com/photo-1541599540903-216a46ca1df0?w=500&auto=format&fit=crop&q=80"
              alt="Comfortable pet space"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
            />
            <div className="relative z-20 p-6 space-y-3 text-left self-start">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF4D3D]">ORTHOPEDIC MEMORY</span>
              <h4 className="font-display font-black text-lg text-white leading-tight">Comfortable Beds for Your Dog</h4>
              <button 
                onClick={() => { setSearchQuery('Beds'); setCurrentPage('shop'); }}
                className="py-2 px-5 rounded-full bg-white hover:bg-brand-orange text-gray-900 font-bold text-xs transition-all cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Banner 5 (Blue discount) */}
          <div className="md:col-span-4 bg-brand-blue paw-pattern-bg rounded-3xl p-6 text-white relative min-h-[220px] flex flex-col justify-between overflow-hidden shadow-sm group">
            <div className="relative z-10 space-y-3 text-left">
              <span className="inline-block text-[9px] uppercase font-bold tracking-widest bg-brand-red text-white px-2 py-0.5 rounded-md">
                Get 30% off
              </span>
              <h4 className="font-display font-black text-lg leading-tight">When you buy 10kg or more</h4>
              <button 
                onClick={() => { setSearchQuery('Food'); setCurrentPage('shop'); }}
                className="py-2 px-5 rounded-full bg-white hover:bg-brand-orange text-gray-950 hover:text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
              >
                Shop Now
              </button>
            </div>
            <div className="absolute right-2 bottom-0 w-24 h-[65%] hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=250&auto=format&fit=crop&q=80"
                alt="Hefty organic food"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Blue Benefit Bar (Repeating benefits) */}
      <section className="bg-brand-blue text-white py-4 overflow-hidden border-y-2 border-brand-deep">
        <div className="flex animate-marquee whitespace-nowrap gap-8 align-middle">
          {/* Duplicate to create organic scrolling infinite feel */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 text-xs sm:text-sm font-bold font-display flex-shrink-0">
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-brand-orange" /> FREE DELIVERY ON ORDERS OVER $59.99!</span>
              <span className="text-brand-orange text-lg">★</span>
              <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-brand-orange text-xs text-brand-orange animate-spin-slow" /> GET 15% OFF YOUR FIRST PURCHASE!</span>
              <span className="text-brand-orange text-lg">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Brand Logo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4" id="brands-section">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900">What Is Popular Now</h3>
            <p className="text-xs text-gray-400">Discover premium world-class products selected by trusted brands</p>
          </div>
          <button 
            onClick={() => { setSearchQuery(''); setCurrentPage('shop'); }}
            className="text-xs font-bold text-brand-blue hover:text-brand-deep flex items-center gap-1"
          >
            All Brands <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Brands card list */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {BRANDS.map((brand, index) => (
            <div
              key={index}
              onClick={() => { setSearchQuery(brand.name); setCurrentPage('shop'); }}
              className="bg-white hover:border-brand-orange dark:hover:border-brand-orange p-4 rounded-2xl border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:shadow-md active:scale-95 group"
            >
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-display font-black text-base group-hover:bg-brand-blue group-hover:text-white transition-all">
                {brand.name[0]}
              </div>
              <h5 className="font-display font-extrabold text-xs text-gray-800 mt-2">{brand.name}</h5>
              <span className="text-[9px] text-brand-orange font-bold font-mono mt-0.5">★ {brand.rating} Rating</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bestseller Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6" id="bestsellers-section">
        <div>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900">Bestseller Products</h3>
          <p className="text-xs text-gray-400">Treats, dry kibbles, and beds your pets went wild for this week!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {bestsellerProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 7. Large Blue CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6" id="fresh-cta-banner">
        <div className="bg-brand-blue paw-pattern-bg rounded-[32px] md:rounded-[40px] p-6 sm:p-10 text-white relative overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-12 items-center gap-6">
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="md:col-span-7 space-y-4 text-left animate-in fade-in duration-500">
            <span className="inline-block text-[9px] font-black uppercase text-white bg-brand-red px-3 py-1 rounded-md shadow-xs">
              10% discount on your first order
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-none">The Easiest Way To Feed Fresh</h3>
            <p className="text-xs sm:text-sm text-blue-50/90 leading-relaxed max-w-xl">
              We offer delicious recipes developed by veterinarians and veterinary nutritionists. Fresh organic ingredients, fully balanced vitamins, and healthy, energized pets every single day!
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1.5">
              <button 
                onClick={() => { setSearchQuery('Food'); setCurrentPage('shop'); }}
                className="py-2.5 px-6 rounded-full bg-brand-orange hover:bg-white text-white hover:text-brand-orange font-bold text-xs transition-all shadow-md shrink-0 cursor-pointer"
              >
                Order Now
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className="py-2.5 px-6 rounded-full bg-white/14 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center overflow-visible">
            <div className="w-56 h-56 relative z-10 border-4 border-white/95 rounded-full overflow-hidden shadow-xl transform rotate-3 hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=400&auto=format&fit=crop&q=80"
                alt="Fluffy kitten by food bowl"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6" id="blog-preview-section">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900">Latest from The Blog</h3>
            <p className="text-xs text-gray-400">Helpful care survival guides, veterinarian reviews, and pet behavioral tips</p>
          </div>
          <button
            onClick={() => setCurrentPage('blog')}
            className="text-xs font-bold text-brand-orange hover:text-brand-blue flex items-center gap-1 shrink-0"
          >
            More Articles <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {DEMO_BLOG_POSTS.slice(0, 4).map((post) => (
            <div
              key={post.id}
              onClick={() => handleBlogClick(post.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg border border-gray-100 flex flex-col justify-between group cursor-pointer transition-all duration-300"
            >
              <div className="aspect-video w-full bg-gray-50 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2.5 left-2.5 bg-brand-orange text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 text-left">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-gray-400">
                    <Calendar className="w-2.5 h-2.5" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <User className="w-2.5 h-2.5" />
                    <span>{post.author}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-gray-800 line-clamp-2 leading-snug group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                
                <span className="text-xs font-bold text-brand-orange group-hover:text-brand-blue transition-colors flex items-center gap-1.5">
                  Continue Reading <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Trust / Love Section */}
      <section className="bg-[#FFFFFF] border-y border-gray-100 py-12" id="trust-love-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <div className="space-y-2 max-w-md mx-auto relative">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 flex items-center justify-center gap-1.5">
              <PawPrint className="w-6 h-6 text-brand-blue" /> With Love for Your Pets
            </h3>
            <p className="text-xs text-gray-400 leading-tight">Your pet's playful happiness is our daily calling.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Support card */}
            <div className="p-6 bg-brand-bg rounded-3xl border border-gray-100 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto text-brand-blue shadow-sm border border-orange-100">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-gray-800">High-quality Support 24/7</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">Get friendly vet tips and custom suggestions in a timely manner whenever needed.</p>
            </div>

            {/* Delivery */}
            <div className="p-6 bg-brand-bg rounded-3xl border border-gray-100 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto text-brand-orange shadow-sm border border-orange-100">
                <Truck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-gray-800">Free Delivery From $59.99</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">Fast, direct shipping right to your front door for maximum pet convenience.</p>
            </div>

            {/* Quality */}
            <div className="p-6 bg-brand-bg rounded-3xl border border-gray-100 text-center space-y-3">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto text-brand-purple shadow-sm border border-orange-100">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-gray-800">Low Prices, High Quality</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">Guaranteed certified authenticity and premium ingredients on every item.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Instagram Gallery (Happy Pet Parents) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4" id="instagram-gallery">
        <div className="text-center space-y-1">
          <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900">Happy Pet Parents</h3>
          <p className="text-xs text-gray-400">Tag us on social <a href="#social" className="text-brand-blue font-bold">@pawmartpets</a> to share your stories with the family!</p>
        </div>

        {/* 8 rounded images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {instagramImages.map((parent, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-gray-100 shadow-2xs hover:shadow-md cursor-pointer"
            >
              <img
                src={parent.url}
                alt={`Instagram Parent ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2 text-left">
                <span className="text-[9px] font-bold text-white flex items-center gap-1.5 font-mono">
                  <Instagram className="w-3 h-3 text-brand-orange" />
                  {parent.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
