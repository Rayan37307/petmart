import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, CreditCard, Landmark, Truck, ArrowLeft, ShoppingCart, Loader } from 'lucide-react';

export default function Checkout() {
  const { cart, clearCart, discountPercentage, couponCode, setCurrentPage } = useApp();

  // Fields tracking
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'United States',
    address: '',
    city: '',
    postal: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card' | 'mfs'>('cod');
  const [isPlacing, setIsPlacing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [assignedOrderId, setAssignedOrderId] = useState('');

  // Computation
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const discountVal = (subtotal * discountPercentage) / 100;
  const delivery = subtotal >= 59.99 || subtotal === 0 ? 0 : 4.99;
  const finalTotal = subtotal - discountVal + delivery;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    
    setIsPlacing(true);
    
    // Mimic quick processing
    setTimeout(() => {
      setIsPlacing(false);
      setIsSuccess(true);
      const randomId = 'PM-' + Math.floor(100000 + Math.random() * 900000);
      setAssignedOrderId(randomId);
      clearCart(); // Clean cart state
    }, 1800);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6" id="checkout-success-view">
        <div className="w-20 h-20 bg-emerald-50 text-brand-green rounded-full flex items-center justify-center mx-auto border border-emerald-100 animate-bounce">
          <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
        </div>
        
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFE0A3] bg-brand-orange px-3 py-1 rounded-full leading-none">
            DEMO PURCHASE RECEIVED
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-900 mt-2">Order placed successfully</h2>
          <p className="text-xs text-gray-400 font-mono">Your PawMart order key is: <strong className="text-brand-blue">{assignedOrderId}</strong></p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 text-xs text-left text-gray-500 space-y-2 max-w-sm mx-auto shadow-2xs">
          <p className="font-bold text-gray-800 text-center text-sm pb-1 border-b border-gray-100">Receipt Breakdown</p>
          <p><span className="font-bold">Shipment name:</span> {formData.name || 'Lovely Pet Parent'}</p>
          <p><span className="font-bold">Contact Email:</span> {formData.email || 'customer@pawmart.com'}</p>
          <p><span className="font-bold">Payment Method:</span> {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'card' ? 'Online Card Swipe' : 'Mobile Banking (MFS)'}</p>
          <p><span className="font-bold">Delivery address:</span> {formData.address || 'Pet Street 101'}, {formData.city}</p>
          <p className="text-[10px] text-brand-red pt-1 leading-normal italic text-center">*Wait for call verification within 2 hours. Pack is packing!</p>
        </div>

        <button
          onClick={() => setCurrentPage('home')}
          className="py-3 px-8 bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs rounded-full transition-all shadow-md cursor-pointer"
        >
          Return to Home Page
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 font-sans text-left" id="checkout-page-wrapper">
      
      {/* Back to Cart link */}
      <button 
        onClick={() => setCurrentPage('cart')}
        className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-blue cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" /> Edit cart summary
      </button>

      {/* Title */}
      <div className="mb-6">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-950 flex items-center gap-2">
          <CreditCard className="w-6 h-6 text-brand-blue" /> Complete Secure Order
        </h2>
        <p className="text-xs text-gray-400 font-medium">Almost there! Complete details below. Cash on Delivery is supported by default.</p>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white p-12 rounded-3xl border border-gray-200 text-center space-y-4">
          <p className="text-xs text-gray-400">There are no items inside your cart to process!</p>
          <button onClick={() => setCurrentPage('shop')} className="py-2.5 px-6 rounded-full bg-brand-blue text-white font-bold text-xs">
            Shop Products
          </button>
        </div>
      ) : (
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Entries Column on Right (Left side has totals) */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-200 space-y-6">
            <h3 className="font-display font-extrabold text-base text-gray-800 pb-2 border-b border-gray-100">1. Delivery Destination Detail</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-gray-700">
              {/* Full Name */}
              <div className="space-y-1 mt-0.5">
                <label className="text-gray-600">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleFieldChange}
                  placeholder="e.g. John Doe"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-gray-600">Email *</label>
                <input 
                  type="email" 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleFieldChange}
                  placeholder="e.g. parent@example.com"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-gray-600">Active Phone Key *</label>
                <input 
                  type="tel" 
                  required 
                  name="phone"
                  value={formData.phone}
                  onChange={handleFieldChange}
                  placeholder="e.g. +1 (555) 019-9923"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>

              {/* Country */}
              <div className="space-y-1">
                <label className="text-gray-600">Country Selector *</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleFieldChange}
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans"
                >
                  <option value="United States">United States</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Canada">Canada</option>
                </select>
              </div>

              {/* Address */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-gray-600">Street Address *</label>
                <input 
                  type="text" 
                  required 
                  name="address"
                  value={formData.address}
                  onChange={handleFieldChange}
                  placeholder="e.g. 470 Parker Rd, Suite 10"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-gray-600">City *</label>
                <input 
                  type="text" 
                  required 
                  name="city"
                  value={formData.city}
                  onChange={handleFieldChange}
                  placeholder="e.g. Allentown"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>

              {/* Postal Code */}
              <div className="space-y-1">
                <label className="text-gray-600">Postal Code *</label>
                <input 
                  type="text" 
                  required 
                  name="postal"
                  value={formData.postal}
                  onChange={handleFieldChange}
                  placeholder="e.g. 3030"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>

              {/* Notes */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-gray-600">Pet Special Courier Notes (Optional)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleFieldChange}
                  rows={2}
                  placeholder="e.g. Ring secondary bell, gate is red, do not spook the kitten!"
                  className="w-full p-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/20 text-gray-800 transition-all font-sans" 
                />
              </div>
            </div>

            {/* Payment methods section */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="font-display font-extrabold text-base text-gray-800">2. Selected Payment Gateway Method</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* cash */}
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'cod' ? 'border-brand-blue bg-blue-50/10' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-brand-orange" />
                    <div>
                      <p className="text-xs font-bold text-gray-800">Cash on Delivery</p>
                      <p className="text-[10px] text-gray-400">Default choice</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-brand-blue" />
                </div>

                {/* credit */}
                <div 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'card' ? 'border-brand-blue bg-blue-50/10' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-brand-blue" />
                    <div>
                      <p className="text-xs font-bold text-gray-800">Online Card Swipe</p>
                      <p className="text-[10px] text-gray-400">Visa / Mastercard</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'card'} readOnly className="accent-brand-blue" />
                </div>

                {/* banking */}
                <div 
                  onClick={() => setPaymentMethod('mfs')}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'mfs' ? 'border-brand-blue bg-blue-50/10' : 'border-gray-200 hover:border-gray-300 bg-white'}`}
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-brand-purple" />
                    <div>
                      <p className="text-xs font-bold text-gray-800">Mobile Banking</p>
                      <p className="text-[10px] text-gray-400">Bkash, Rocket, MFS</p>
                    </div>
                  </div>
                  <input type="radio" checked={paymentMethod === 'mfs'} readOnly className="accent-brand-blue" />
                </div>

              </div>
            </div>

          </div>

          {/* Totals Summary Column on Left */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 space-y-4 font-sans">
            <h3 className="font-display font-extrabold text-base text-gray-900 pb-2 border-b border-gray-100">Order Summary</h3>
            
            {/* List products */}
            <div className="space-y-3" id="checkout-sidebar-items">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between text-xs pb-2.5 border-b border-gray-100">
                  <div className="flex items-center gap-2 max-w-[70%]">
                    <img 
                      src={item.product.image} 
                      alt="" 
                      className="w-8 h-8 object-cover rounded-lg bg-gray-50 border border-gray-100"
                    />
                    <div className="text-left font-sans">
                      <p className="font-bold text-gray-700 truncate">{item.product.name}</p>
                      <p className="text-[10px] text-gray-400">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-brand-blue">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs text-gray-500 font-mono">
              <div className="flex justify-between">
                <span>Subtotal amount</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              {discountPercentage > 0 && (
                <div className="flex justify-between text-brand-green font-bold">
                  <span>Voucher promo discount ({discountPercentage}%)</span>
                  <span>-${discountVal.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Direct delivery fee</span>
                <span>{delivery === 0 ? 'FREE' : `$${delivery.toFixed(2)}`}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-gray-800 pt-2 border-t border-gray-100">
                <span className="font-display">Total Amount Payable</span>
                <span className="font-mono text-brand-blue">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Radio / place trigger */}
            <button
              type="submit"
              disabled={isPlacing || cart.length === 0}
              className="w-full py-3.5 bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="checkout-place-order-submit-button"
            >
              {isPlacing ? (
                <>
                  <Loader className="w-4 h-4 animate-spin text-brand-orange" />
                  Placing Pet Order...
                </>
              ) : (
                'Place Order Successfully'
              )}
            </button>
          </div>

        </form>
      )}

    </div>
  );
}
