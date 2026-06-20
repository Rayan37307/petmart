import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DEMO_PRODUCTS } from '../data/demoData';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Check, 
  Truck, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft,
  Share2,
  Bookmark,
  HelpCircle
} from 'lucide-react';

export default function ProductDetails() {
  const { 
    selectedProductId, 
    setCurrentPage, 
    addToCart, 
    toggleWishlist, 
    isInWishlist 
  } = useApp();

  // Find the selected product or default to first
  const product = DEMO_PRODUCTS.find(p => p.id === selectedProductId) || DEMO_PRODUCTS[0];

  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingredients' | 'feeding' | 'reviews'>('desc');
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  // FAQs open trackers
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Update image when product switches
  useEffect(() => {
    setMainImage(product.image);
    setQuantity(1);
    setOpenFaqIndex(null);
  }, [product]);

  // Handle sticky bottom bar upon scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls beyond 420px
      if (window.scrollY > 420) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQtyChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const handleAddToCartClick = () => {
    addToCart(product, quantity);
  };

  const handleBuyNowClick = () => {
    addToCart(product, quantity);
    setCurrentPage('checkout');
  };

  const isFav = isInWishlist(product.id);

  const PRODUCT_THUMBNAILS: Record<string, string[]> = {
    "royal-canin-fit-32-adult-cat-food-2kg": [
      "https://media.zooplus.com/bilder/9/400/fit_9.jpg?format=webp&width=400",
      "https://media.zooplus.com/bilder/4/400/rc_fhn_fit32_mv_eretailkit__4.jpg?format=webp&width=400",
      "https://media.zooplus.com/bilder/2/800/61210_pla_royalcanin_fit32_2.jpg?format=webp&width=400"
    ],
    "whiskas-1-adult-chicken-in-jelly-85g": [
      "https://static1.viovet.co.uk/opt/s%3Dkr%2Cwidth%3D720%2Cheight%3D720/familygallery/whiskas-1-cat-pouches-chicken-in-jelly-p07y.jpg.webp",
      "https://static2.viovet.co.uk/opt/s%3Dkr%2Cwidth%3D360%2Cheight%3D360/familygallery/whiskas-1-cat-pouches-chicken-in-jelly-mp0t.jpg.webp"
    ],
    "taste-of-the-wild-high-prairie-puppy-14lb": [
      "https://image.chewy.com/is/image/catalog/101889_MAIN._AC_SL600_V1699022075_.jpg",
      "https://image.chewy.com/is/image/catalog/101889_PT1._AC_SL600_V1699022075_.jpg",
      "https://image.chewy.com/is/image/catalog/101889_PT2._AC_SL600_V1699022075_.jpg"
    ],
    "hills-science-diet-adult-chicken-barley-3kg": [
      "https://pxmshare.colgatepalmolive.com/PNG_2000/8QGSStOoCB6RakdoYx2np.png",
      "https://image.chewy.com/is/image/catalog/69666_MAIN._AC_SL600_V1709158030_.jpg",
      "https://image.chewy.com/is/image/catalog/69666_PT1._AC_SL600_V1709158030_.jpg"
    ],
    "kong-classic-treat-dispensing-dog-toy-large": [
      "https://s7d2.scene7.com/is/image/PetSmart/1811625?fmt=webp&hei=600&wid=600",
      "https://s7d2.scene7.com/is/image/PetSmart/1811625_ALT1?fmt=webp&hei=600&wid=600",
      "https://s7d2.scene7.com/is/image/PetSmart/1811625_ALT2?fmt=webp&hei=600&wid=600"
    ],
    "pedigree-dentastix-large-dog-28-sticks": [
      "https://www.pedigree.co.nz/cdn-cgi/image/width%3D472%2Cheight%3D472%2Cf%3Dauto%2Cquality%3D90/sites/g/files/fnmzdf3281/files/2026-03/9334214018805_2_PEDIGREE_DENTASTIX_Dog_Treats_Daily_Oral_Care_Large_Dog_28_Sticks.png",
      "https://www.pedigree.co.nz/cdn-cgi/image/width%3D472%2Cheight%3D472%2Cf%3Dauto%2Cquality%3D90/sites/g/files/fnmzdf3281/files/2026-03/9334214018805_3_PEDIGREE_DENTASTIX_Dog_Treats_Daily_Oral_Care_Large_Dog_28_Sticks.png",
      "https://www.pedigree.co.nz/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cf%3Dauto%2Cquality%3D90/sites/g/files/fnmzdf3281/files/2026-03/9334214018805_1_PEDIGREE_DENTASTIX_Dog_Treats_Daily_Oral_Care_Large_Dog_28_Sticks.png"
    ],
    "catit-senses-2-super-circuit-interactive-cat-toy": [
      "https://www.catit.com/wp-content/uploads/2022/03/Catit-Circuits-Super-Circuit.jpg",
      "https://www.catit.com/wp-content/uploads/2022/03/catit-super-ciruit-parts-1024x400.jpg",
      "https://www.catit.com/wp-content/uploads/2022/03/Catit-Circuits-layouts.jpg"
    ],
    "hartz-groomers-best-combo-brush-dogs": [
      "https://image.chewy.com/is/image/catalog/126663_MAIN._AC_SL600_V1699054015_.jpg",
      "https://image.chewy.com/is/image/catalog/126663_PT1._AC_SL600_V1699054015_.jpg",
      "https://image.chewy.com/is/image/catalog/126663_PT2._AC_SL600_V1699054015_.jpg"
    ]
  };

  const imageThumbnails = [
    product.image,
    ...(PRODUCT_THUMBNAILS[product.slug] ?? [])
  ]
    .filter(Boolean)
    .filter((img, index, arr) => arr.indexOf(img) === index)
    .slice(0, 4);

  // Specific FAQs for product accordion
  const faqItems = [
    { question: "Is this food suitable for all dog breeds?", answer: "Yes! While formulated with optimized energy distributions, it serves small, medium, and large adult breeds perfectly. Portions can be modified during feeding." },
    { question: "How long does delivery take?", answer: "Usually 1 to 3 business days for standard cities. Up to 5 working days for outline provincial zones." },
    { question: "Is this product vet recommended?", answer: "Absolutely. All formulas inside PawMart are validated by certified veterinary clinical pharmacologists and companion animal dietary groups." },
    { question: "Can I return this product?", answer: "A 30-day return window applies to unsealed product bags, intact collars, and unused pet supplies." },
    { question: "How should I store the product?", answer: "Seal tightly and keep in dry, cool closet chambers away from solar exposure to sustain maximum nutritional freshness." }
  ];

  const handleToggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-16 font-sans text-left relative" id="details-view-wrapper">
      
      {/* Back button link */}
      <button 
        onClick={() => setCurrentPage('shop')}
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-blue cursor-pointer transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Catalog
      </button>

      {/* Main product showcase card details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs mb-8">
        
        {/* Gallery on Left */}
        <div className="space-y-4">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative">
            <img 
              src={mainImage} 
              alt={product.name} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover animate-in fade-in duration-300"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-brand-blue text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {product.badge}
              </span>
            )}
          </div>
          
          {/* Thumbnails grid */}
          <div className="grid grid-cols-4 gap-2.5" id="details-thumbnails">
            {imageThumbnails.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(thumb)}
                className={`aspect-square rounded-xl overflow-hidden bg-gray-50 border-2 transition-all ${mainImage === thumb ? 'border-brand-orange scale-95' : 'border-transparent hover:border-gray-200'}`}
              >
                <img src={thumb} alt={`Thumbnail ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Specifications on Right */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Brand & Stars */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">{product.brand}</span>
              <div className="flex items-center gap-1">
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-700">{product.rating} Rating</span>
                <span className="text-[10px] text-gray-400">({product.reviewCount} customer reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-900 leading-tight">
              {product.name}
            </h2>

            {/* Pricing block */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-3xl font-display font-extrabold text-brand-blue">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-sm font-mono text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
              )}
            </div>

            {/* stock alert */}
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${product.stock <= 3 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
              <span className="text-xs font-bold text-gray-600">
                {product.stock <= 3 
                  ? `Only ${product.stock} bags remaining - Limited Stocks!` 
                  : `In Stock (Ships in 24 hours)`}
              </span>
            </div>

            {/* Short specs list */}
            <p className="text-xs leading-relaxed text-gray-500">
              {product.description}
            </p>

            {/* Extra detail points */}
            <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-semibold text-gray-600 border-t border-gray-100">
              <p><span className="text-gray-400">Pet Compatible:</span> {product.petType}s</p>
              <p><span className="text-gray-400">Product SKU:</span> PWM-10{product.id}</p>
              <p><span className="text-gray-400">Section:</span> {product.category}</p>
              <p><span className="text-gray-400">Nutritionists:</span> Certified</p>
            </div>
          </div>

          {/* Action additions */}
          <div className="bg-orange-50/40 p-4 rounded-3xl border border-orange-100/60 space-y-4">
            
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold text-gray-500">Quantity Portion</p>
              
              <div className="flex items-center gap-3 bg-white border border-orange-100 rounded-full px-2 py-0.5 shadow-2xs">
                <button 
                  onClick={() => handleQtyChange(quantity - 1)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition-all font-bold"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-mono font-bold text-gray-800 min-w-8 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQtyChange(quantity + 1)}
                  className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 transition-all font-bold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Buttons setup */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <button
                onClick={handleAddToCartClick}
                className="w-full py-3 px-5 rounded-full border-2 border-brand-blue hover:bg-blue-50 text-brand-blue font-display font-extrabold text-xs transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                id="details-add-to-cart-bttn"
              >
                <ShoppingCart className="w-4 h-4" /> Add To Cart
              </button>
              <button
                onClick={handleBuyNowClick}
                className="w-full py-3 px-5 rounded-full bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                id="details-buy-now-bttn"
              >
                Buy Now
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-gray-400 pt-1.5 font-semibold">
              <button 
                onClick={() => toggleWishlist(product.id)}
                className={`hover:text-rose-600 flex items-center gap-1 transition-colors ${isFav ? 'text-rose-500' : ''}`}
                id="details-heart"
              >
                <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current text-rose-500' : ''}`} />
                {isFav ? 'Saved in Wishlist' : 'Add to Wishlist'}
              </button>
              <span>|</span>
              <button className="hover:text-brand-blue flex items-center gap-1 transition-colors">
                <Share2 className="w-3.5 h-3.5" /> Share recipe
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Tabs description grids */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 mb-8 shadow-2xs">
        <div className="flex border-b border-gray-100 overflow-x-auto pb-1 gap-2 sm:gap-4 scrollbar-none">
          <button
            onClick={() => setActiveTab('desc')}
            className={`py-2 px-4 rounded-xl text-xs font-bold shrink-0 transition-all ${activeTab === 'desc' ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-gray-700'}`}
          >
            Product Description
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={`py-2 px-4 rounded-xl text-xs font-bold shrink-0 transition-all ${activeTab === 'ingredients' ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-gray-700'}`}
          >
            Ingredients Matrix
          </button>
          <button
            onClick={() => setActiveTab('feeding')}
            className={`py-2 px-4 rounded-xl text-xs font-bold shrink-0 transition-all ${activeTab === 'feeding' ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-gray-700'}`}
          >
            Feeding Guide Recommendations
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-2 px-4 rounded-xl text-xs font-bold shrink-0 transition-all ${activeTab === 'reviews' ? 'bg-brand-blue text-white' : 'text-gray-400 hover:text-gray-700'}`}
          >
            Verified Reviews ({product.reviews?.length || 0})
          </button>
        </div>

        {/* Tab contents panel */}
        <div className="pt-6 text-xs text-gray-600 md:text-sm leading-relaxed" id="details-tab-contents">
          {activeTab === 'desc' && (
            <div className="space-y-4">
              <h4 className="font-display font-bold text-gray-800 text-base">Perfect Nutritional Balance</h4>
              <p>{product.description}</p>
              <p>Formulated with easy-to-digest organic carbohydrates, and pure cold-pressed botanical oils. Free of synthetic preservatives or artificial flavors. Supports continuous energy and coat shine.</p>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-4">
              <h4 className="font-display font-bold text-gray-800 text-base">Made From Core Natural Ingredients</h4>
              <p className="font-mono bg-gray-50/80 p-3 rounded-xl border border-gray-100 leading-relaxed text-gray-700">
                {product.ingredients || "Poultry protein meal, ground whole wheat, organic sweet potato, fresh salmon, mixed natural tocopherols, brewer's yeast, essential trace minerals."}
              </p>
            </div>
          )}

          {activeTab === 'feeding' && (
            <div className="space-y-4">
              <h4 className="font-display font-bold text-gray-800 text-base">Vet Recommended Daily Portions</h4>
              <p className="bg-orange-50/50 text-orange-950 p-3 rounded-xl border border-orange-100">
                {product.feedingGuide || "Determine portions based on targeted weight. Provide 35g-45g for small pets up to 4kg, 60g for active pets up to 10kg. Adjust based on advice."}
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4" id="reviews-tabs-panel">
              <h4 className="font-display font-bold text-gray-800 text-base">Buyer Ratings & Reviews</h4>
              
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-3">
                  {product.reviews.map((rev) => (
                    <div key={rev.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-800 text-xs">{rev.author}</span>
                        <div className="flex text-brand-orange">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < rev.rating ? 'fill-current' : 'text-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 italic mt-1 font-sans">{rev.text}</p>
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono mt-1">
                        <span>Verified Purchase • {rev.date}</span>
                        <span className="text-brand-green font-bold text-[9px] bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> Checked Authenticity
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center bg-gray-50 rounded-2xl border text-gray-400 italic">
                  No written reviews yet. Be the first to describe your pet's excitement!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs mb-10">
        <h3 className="font-display font-black text-xl text-gray-950 mb-4 flex items-center gap-1.5">
          <HelpCircle className="w-5 h-5 text-brand-blue" /> Product FAQ Accordion
        </h3>
        
        <div className="space-y-2" id="details-accordion-collection">
          {faqItems.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200 hover:border-orange-100"
              >
                <button
                  onClick={() => handleToggleFaq(idx)}
                  className="w-full py-3.5 px-4 bg-gray-50/50 hover:bg-gray-50 text-left font-display font-bold text-xs sm:text-sm text-gray-700 flex justify-between items-center gap-4 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" /> : <ChevronDown className="w-4 h-4 text-brand-orange shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="p-4 bg-white text-xs sm:text-sm text-gray-500 font-medium leading-relaxed border-t border-gray-50 animate-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Bottom Actions Bar upon scrolling down */}
      {showStickyBar && (
        <div 
          className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-2xl z-40 p-3 sm:py-4 sm:px-6 flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300"
          id="sticky-product-details-bar"
        >
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
            
            {/* Small image and title info (desktop only) */}
            <div className="hidden sm:flex items-center gap-3">
              <img 
                src={product.image} 
                alt={product.name} 
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-cover rounded-lg border border-gray-100 bg-gray-50 flex-shrink-0"
              />
              <div className="text-left">
                <p className="text-xs font-bold text-gray-800 line-clamp-1">{product.name}</p>
                <p className="text-[10px] font-mono text-brand-blue font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>

            {/* Mobile simplified info */}
            <div className="sm:hidden text-left flex-1 min-w-0 pr-2">
              <p className="text-[10px] font-bold text-gray-800 truncate">{product.name}</p>
              <p className="text-xs font-mono font-black text-brand-blue">${product.price.toFixed(2)}</p>
            </div>

            {/* Actions portion selectors */}
            <div className="flex items-center gap-3">
              {/* Quantity portion selector (desktop only) */}
              <div className="hidden md:flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1 border">
                <button 
                  onClick={() => handleQtyChange(quantity - 1)}
                  className="p-1 hover:bg-gray-200 rounded-full text-gray-500 font-bold"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-xs font-mono font-bold text-gray-800 min-w-6 text-center">{quantity}</span>
                <button 
                  onClick={() => handleQtyChange(quantity + 1)}
                  className="p-1 hover:bg-gray-200 rounded-full text-gray-500 font-bold"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddToCartClick}
                  className="py-2 px-4 rounded-full bg-brand-orange hover:bg-brand-blue text-white text-xs font-bold transition-all flex items-center gap-1 active:scale-95 cursor-pointer leading-none"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNowClick}
                  className="py-2 px-5 rounded-full bg-brand-blue hover:bg-brand-deep text-white text-xs font-bold transition-all active:scale-95 cursor-pointer leading-none"
                >
                  Buy Now
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
