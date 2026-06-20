import React from 'react';
import { useApp } from '../context/AppContext';
import { X, ShoppingBasket, Plus, Minus, Trash2, Heart, RefreshCw } from 'lucide-react';
import { Product } from '../types';

export default function CartDrawer() {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    isCartOpen, 
    setIsCartOpen, 
    setCurrentPage,
    discountPercentage,
    couponCode
  } = useApp();

  const handleBackdropClick = () => setIsCartOpen(false);

  // Math subtotal calculating
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountVal = (subtotal * discountPercentage) / 100;
  const deliveryCost = subtotal >= 59.99 || subtotal === 0 ? 0 : 4.99;
  const total = subtotal - discountVal + deliveryCost;

  // Upsell list products constructed
  const upsellList: Product[] = [
    { 
      id: 101, 
      name: "Dental Care Stick (Beef flavor)", 
      slug: "dental-care-stick",
      category: "Treats", 
      petType: "Dog", 
      brand: "Dentblue", 
      price: 1.99, 
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=150&auto=format&fit=crop&q=80",
      rating: 4.8, 
      reviewCount: 15, 
      stock: 50,
      description: "Crunchy stick to support healthy gums and fresh tooth scent."
    },
    { 
      id: 102, 
      name: "Interactive Pet Toy Ball", 
      slug: "toy-ball",
      category: "Toys", 
      petType: "Dog", 
      brand: "Pedigree", 
      price: 1.99, 
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=150&auto=format&fit=crop&q=80",
      rating: 4.5, 
      reviewCount: 9, 
      stock: 45,
      description: "Resilient rolling ball toys for puppies and cats alike."
    },
    { 
      id: 103, 
      name: "Tasty Cat Salmon Treat Pack", 
      slug: "cat-salmon-treat",
      category: "Treats", 
      petType: "Cat", 
      brand: "Catit", 
      price: 1.99, 
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80",
      rating: 5.0, 
      reviewCount: 30, 
      stock: 80,
      description: "Delectable fish salmon treats loaded with proteins."
    },
    { 
      id: 104, 
      name: "Dual-Sided Grooming Comb", 
      slug: "grooming-comb",
      category: "Supplies", 
      petType: "Dog", 
      brand: "Advance", 
      price: 1.99, 
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=150&auto=format&fit=crop&q=80",
      rating: 4.7, 
      reviewCount: 14, 
      stock: 12,
      description: "Perfect comb for shedding undercoats and detangling snarls."
    }
  ];

  const { addToCart } = useApp();

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
  };

  const handleViewCartClick = () => {
    setIsCartOpen(false);
    setCurrentPage('cart');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end" id="cart-drawer-wrapper">
      {/* Backdrop animation */}
      <div 
        onClick={handleBackdropClick} 
        className="absolute inset-0 bg-black/60 transition-opacity backdrop-blur-xs cursor-pointer"
        id="cart-drawer-backdrop"
      />

      {/* Drawer content component */}
      <div 
        className="relative w-full max-w-md bg-white h-full flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300"
        id="cart-drawer-panel"
      >
        {/* Header container */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-xl">
              <ShoppingBasket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-800">Shopping Cart</h3>
              <p className="text-xs text-gray-500">{cart.length} unique item(s)</p>
            </div>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-800 transition-all"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable listing region */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5" id="cart-drawer-scrollable">
          {cart.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-full text-gray-300">
                <ShoppingBasket className="w-10 h-10" />
              </div>
              <h4 className="font-display font-semibold text-gray-700">Your cart is empty</h4>
              <p className="text-xs text-gray-400 max-w-xs">Fill your cart with yummy rewards, plush toys, or veterinary approved nutrition treats!</p>
              <button 
                onClick={() => { setIsCartOpen(false); setCurrentPage('shop'); }}
                className="py-2.5 px-6 rounded-full bg-brand-blue hover:bg-brand-deep text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3" id="cart-items-collection">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-3 bg-gray-50/55 p-2.5 rounded-2xl border border-gray-100/80 hover:border-orange-100 transition-all">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded-xl bg-white border border-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h5 className="text-xs font-bold text-gray-800 truncate leading-tight">{item.product.name}</h5>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">{item.product.brand} | {item.product.category}</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-1.5 bg-white border border-gray-100 rounded-full px-1.5 py-0.5 shadow-xs">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-50 rounded-full text-gray-500 transition-all"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-mono font-bold text-gray-700 min-w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-50 rounded-full text-gray-500 transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-xs font-bold text-brand-blue">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <p className="text-[9px] text-gray-400 font-mono">${item.product.price.toFixed(2)} each</p>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-1.5 text-gray-300 hover:text-brand-red self-start hover:bg-white border hover:border-red-100 rounded-lg transition-all"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Upsells collection section! */}
          <div className="pt-4 border-t border-gray-100">
            <div className="bg-orange-50/70 p-3 rounded-2xl border border-orange-100">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-orange bg-white px-2 py-0.5 rounded-full border border-orange-200">
                Cart Upsell Special
              </span>
              <p className="text-xs font-semibold text-gray-700 mt-1.5">Add this item for only ৳199 ($1.99)</p>
              
              <div className="grid grid-cols-2 gap-2 mt-3" id="cart-drawer-upsell-grid">
                {upsellList.map((upsell) => {
                  const isAlreadyInCart = cart.some(item => item.product.id === upsell.id);
                  return (
                    <div 
                      key={upsell.id} 
                      className="bg-white p-2 rounded-xl border border-gray-100 flex items-center gap-2 hover:border-brand-orange/40 transition-all shadow-2xs"
                    >
                      <img 
                        src={upsell.image} 
                        alt={upsell.name} 
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-cover rounded-md flex-shrink-0 bg-gray-50 border border-gray-50"
                      />
                      <div className="flex-1 min-w-0">
                        <h6 className="text-[10px] font-bold text-gray-700 truncate leading-snug">{upsell.name}</h6>
                        <p className="text-[9px] font-mono font-bold text-brand-orange mt-0.5">৳199 ($1.99)</p>
                      </div>
                      <button
                        onClick={() => addToCart(upsell, 1)}
                        disabled={isAlreadyInCart}
                        className={`text-[10px] font-bold px-2 py-1 rounded-full transition-all flex-shrink-0 ${
                          isAlreadyInCart 
                            ? 'bg-gray-100 text-gray-400' 
                            : 'bg-brand-orange hover:bg-brand-orange/95 text-white active:scale-90 hover:shadow-xs'
                        }`}
                      >
                        {isAlreadyInCart ? 'Added' : 'Add'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions block (Total and Checkout link) */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50 space-y-3" id="cart-drawer-footer">
            <div className="space-y-1.5 text-xs text-gray-500 font-mono">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-gray-700">${subtotal.toFixed(2)}</span>
              </div>
              
              {discountPercentage > 0 && (
                <div className="flex justify-between text-brand-green">
                  <span>Discount ({discountPercentage}% - {couponCode}):</span>
                  <span>-${discountVal.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span>Delivery:</span>
                <span>{deliveryCost === 0 ? 'FREE' : `$${deliveryCost.toFixed(2)}`}</span>
              </div>
              
              <div className="flex justify-between text-sm font-semibold text-gray-800 pt-1.5 border-t border-gray-200">
                <span className="font-display font-medium text-gray-700">Total Amount:</span>
                <span className="font-mono font-bold text-brand-blue text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            {subtotal < 59.99 && (
              <p className="text-[10px] text-brand-orange font-medium animate-pulse text-center">
                Add <strong>${(59.99 - subtotal).toFixed(2)}</strong> more for FREE shipping!
              </p>
            )}

            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100">
              <button
                onClick={handleViewCartClick}
                className="w-full py-2.5 px-4 rounded-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 text-xs font-bold transition-all text-center"
                id="view-cart-drawer-link"
              >
                View Full Cart
              </button>
              <button
                onClick={handleCheckoutClick}
                className="w-full py-2.5 px-4 rounded-full bg-brand-blue hover:bg-brand-deep text-white text-xs font-bold transition-all shadow-md hover:shadow-lg active:scale-95 text-center"
                id="checkout-drawer-link"
              >
                Checkout Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
