import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBasket, Trash2, Plus, Minus, ArrowLeft, Ticket, Check, RefreshCw } from 'lucide-react';
import { Product } from '../types';

export default function Cart() {
  const { 
    cart, 
    updateQuantity, 
    removeFromCart, 
    setCurrentPage, 
    couponCode, 
    discountPercentage, 
    applyCoupon, 
    removeCoupon,
    addToCart
  } = useApp();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  // Math subtotal and statistics calculating
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountVal = (subtotal * discountPercentage) / 100;
  const shippingCost = subtotal >= 59.99 || subtotal === 0 ? 0 : 4.99;
  const finalTotal = subtotal - discountVal + shippingCost;

  const handleApplyCouponCode = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');
    if (couponInput.trim() === '') return;

    const isValid = applyCoupon(couponInput);
    if (isValid) {
      setCouponSuccess(`Coupon "${couponInput.trim().toUpperCase()}" applied successfully!`);
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code! Try "PAWLOVE30" or "WELCOME15".');
    }
  };

  // Upsell list products constructed
  const upsellItems: Product[] = [
    { id: 101, name: "Dental Care Stick (Beef flavor)", slug: "dental-care-stick", category: "Treats", petType: "Dog", brand: "Dentblue", price: 1.99, image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=150&auto=format&fit=crop&q=80", rating: 4.8, reviewCount: 15, stock: 50, description: "Dental stick." },
    { id: 102, name: "Interactive Pet Toy Ball", slug: "toy-ball", category: "Toys", petType: "Dog", brand: "Pedigree", price: 1.99, image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=150&auto=format&fit=crop&q=80", rating: 4.5, reviewCount: 9, stock: 45, description: "Toy ball." },
    { id: 103, name: "Tasty Cat Salmon Treat Pack", slug: "cat-salmon-treat", category: "Treats", petType: "Cat", brand: "Catit", price: 1.99, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=80", rating: 5.0, reviewCount: 30, stock: 80, description: "Cat sweet treat." }
  ];

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6" id="cart-page-empty">
        <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto border-2 border-dashed">
          <ShoppingBasket className="w-12 h-12" />
        </div>
        <div>
          <h2 className="font-display font-black text-2xl text-gray-800">Your Shopping Cart is Empty</h2>
          <p className="text-xs text-gray-400 max-w-sm mx-auto mt-1">Add nutritious meals, toys, beds or clinical items. Our companion pets are waiting!</p>
        </div>
        <button
          onClick={() => setCurrentPage('shop')}
          className="py-3 px-8 bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Browse All Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 font-sans text-left" id="cart-page-wrapper">
      
      {/* Title */}
      <div className="mb-6">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-950 flex items-center gap-1.5">
          <ShoppingBasket className="w-6 h-6 text-brand-blue" /> Checkout Shopping Basket
        </h2>
        <p className="text-xs text-gray-400 font-medium font-sans">Modify quantities, apply custom coupon vouchers, or add quick upsell extras!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Table of items (Right side is Summary, other is Table) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-2xs overflow-x-auto">
            
            {/* Desktop Table */}
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <th className="pb-3 text-left">Product Item</th>
                  <th className="pb-3 text-center">Unit Price</th>
                  <th className="pb-3 text-center">Quantity</th>
                  <th className="pb-3 text-right">Sum Total</th>
                  <th className="pb-3 text-center">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {cart.map((item) => (
                  <tr key={item.product.id} className="text-xs">
                    {/* description */}
                    <td className="py-4 text-left">
                      <div className="flex items-center gap-3">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 object-cover rounded-xl bg-gray-50 border shrink-0"
                        />
                        <div className="max-w-[200px] sm:max-w-[280px]">
                          <h4 className="font-display font-bold text-gray-800 line-clamp-1">{item.product.name}</h4>
                          <span className="text-[10px] text-gray-400 font-mono font-bold uppercase">{item.product.brand} | {item.product.category}</span>
                        </div>
                      </div>
                    </td>

                    {/* price */}
                    <td className="py-4 text-center font-mono font-bold text-gray-600">
                      ${item.product.price.toFixed(2)}
                    </td>

                    {/* qty counter */}
                    <td className="py-4">
                      <div className="flex items-center justify-center">
                        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-0.5 border">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded-full text-gray-500"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-bold text-gray-800 min-w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded-full text-gray-500"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* totals */}
                    <td className="py-4 text-right font-mono font-black text-brand-blue">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>

                    {/* remove */}
                    <td className="py-4 text-center">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1.5 text-gray-300 hover:text-brand-red rounded-lg hover:bg-red-55 cursor-pointer"
                        title="Remove product"
                      >
                        <Trash2 className="w-4 h-4 mx-auto" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

          {/* Upsells Segment */}
          <div className="bg-orange-50/60 p-5 rounded-3xl border border-orange-100">
            <h4 className="font-display font-extrabold text-sm text-gray-800 flex items-center gap-1.5">
              <ShoppingBasket className="w-4 h-4 text-brand-blue" /> Basket Quick Upsell Additions
            </h4>
            <p className="text-xs text-gray-500 mt-0.5 mb-4">Add healthy dental bites or interactive pet-specific toys for only ৳199 ($1.99) each!</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="cart-page-upsell-collection">
              {upsellItems.map((upsell) => {
                const inCart = cart.some(item => item.product.id === upsell.id);
                return (
                  <div key={upsell.id} className="bg-white p-3 rounded-2xl border border-gray-100 flex items-center justify-between gap-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <img 
                        src={upsell.image} 
                        alt={upsell.name} 
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 object-cover rounded-lg bg-gray-50 border shrink-0"
                      />
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-gray-700 truncate max-w-[100px]">{upsell.name}</p>
                        <p className="text-[9px] font-mono text-brand-orange font-bold">৳199 ($1.99)</p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToCart(upsell, 1)}
                      disabled={inCart}
                      className={`text-[10px] font-bold px-3 py-1 rounded-full ${inCart ? 'bg-gray-100 text-gray-400' : 'bg-brand-orange hover:bg-brand-blue text-white transition-all active:scale-95'}`}
                    >
                      {inCart ? 'Added' : 'Add'}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Totals Summary Column on Left */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs space-y-6">
            <h3 className="font-display font-extrabold text-base text-gray-900 pb-2 border-b border-gray-100">Summary</h3>
            
            {/* coupon card */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 flex items-center gap-1">
                <Ticket className="w-3.5 h-3.5 text-brand-orange" /> Have a Coupon Promo?
              </p>
              
              <form onSubmit={handleApplyCouponCode} className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="WELCOME15 or PAWLOVE30"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 text-xs px-3 py-2 bg-gray-50 border rounded-xl focus:outline-none"
                />
                <button
                  type="submit"
                  className="py-2 px-4 rounded-xl bg-gray-900 hover:bg-brand-blue text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  Apply
                </button>
              </form>

              {couponError && <p className="text-[10px] font-bold text-brand-red font-mono">{couponError}</p>}
              {couponSuccess && <p className="text-[10px] font-bold text-brand-green font-mono">{couponSuccess}</p>}
            </div>

            {/* active promo */}
            {couponCode && (
              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-800">
                <span className="font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-brand-green" /> 
                  Code applied: {couponCode} ({discountPercentage}%)
                </span>
                <button 
                  onClick={removeCoupon} 
                  className="text-brand-red hover:underline font-mono text-[10px] font-bold"
                >
                  Remove
                </button>
              </div>
            )}

            {/* billing list */}
            <div className="text-xs text-gray-500 font-mono space-y-2 pt-2 border-t border-gray-100">
              <div className="flex justify-between">
                <span>Subtotal amount</span>
                <span className="font-bold text-gray-700">${subtotal.toFixed(2)}</span>
              </div>
              
              {discountPercentage > 0 && (
                <div className="flex justify-between text-brand-green">
                  <span>Voucher discount ({discountPercentage}%)</span>
                  <span>-${discountVal.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping insurance fee</span>
                <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
              </div>

              {subtotal < 59.99 && (
                <p className="text-[9px] text-brand-orange text-left font-normal italic">
                  *Tip: Add ${(59.99 - subtotal).toFixed(2)} more for absolute FREE delivery!
                </p>
              )}

              <div className="flex justify-between text-sm font-semibold text-gray-800 pt-3 border-t">
                <span className="font-display font-bold text-gray-900">Total payable</span>
                <span className="font-mono text-base font-black text-brand-blue">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* checkout navigation */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => setCurrentPage('checkout')}
                className="w-full py-3 bg-brand-orange hover:bg-brand-blue text-[#1E1E1E] hover:text-white font-display font-extrabold text-xs rounded-full shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
                id="cart-proceed-checkout"
              >
                Proceed To Checkout
              </button>
              <button
                onClick={() => setCurrentPage('shop')}
                className="w-full py-2.5 rounded-full border border-gray-200 text-gray-500 font-bold text-xs transition-all flex items-center justify-center gap-1.5 hover:bg-gray-50 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
