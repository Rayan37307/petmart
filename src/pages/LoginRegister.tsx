import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Shovel, ShieldCheck, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function LoginRegister() {
  const { setCurrentPage } = useApp();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState(false);
  
  // States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    confirmPass: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mimic checking
    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === 'login') {
        setMessage('Signed in successfully! Redirecting you home... 🎉');
      } else {
        setMessage('Registration successful! Welcome to the PawMart family! 🎉');
      }
      
      setTimeout(() => {
        setMessage('');
        setCurrentPage('home');
      }, 1600);
    }, 1200);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-sans text-left" id="auth-page-wrapper">
      
      {/* Visual Header */}
      <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl overflow-hidden">
        
        {/* Toggle navigation strip */}
        <div className="grid grid-cols-2 text-center border-b font-display text-xs sm:text-sm font-extrabold text-gray-500">
          <button
            onClick={() => { setActiveTab('login'); setMessage(''); }}
            className={`py-4 transition-all border-b-2 ${activeTab === 'login' ? 'border-brand-blue text-brand-blue bg-blue-50/10 font-black' : 'border-transparent hover:text-gray-800'}`}
          >
            Access Login
          </button>
          <button
            onClick={() => { setActiveTab('register'); setMessage(''); }}
            className={`py-4 transition-all border-b-2 ${activeTab === 'register' ? 'border-brand-blue text-brand-blue bg-blue-50/10 font-black' : 'border-transparent hover:text-gray-800'}`}
          >
            New Registration
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-display font-black text-xl text-gray-950">
              {activeTab === 'login' ? 'Welcome Back!' : 'Join PawMart Today'}
            </h3>
            <p className="text-xs text-gray-400 font-medium">
              {activeTab === 'login' ? 'Pick up right where your pet cart left off.' : 'Unlock 15% discount, fast orders, and birthday gifts.'}
            </p>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4 text-xs font-semibold text-gray-700">
            {/* Full Name (register only) */}
            {activeTab === 'register' && (
              <div className="space-y-1">
                <label>Your Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    placeholder="e.g. Rachel Green"
                    className="w-full p-2.5 bg-gray-50/50 border rounded-xl pl-9 focus:outline-none"
                  />
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-1">
              <label>Credentials Email *</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleFieldChange}
                  placeholder="e.g. parent@pawmart.com"
                  className="w-full p-2.5 bg-gray-50/50 border rounded-xl pl-9 focus:outline-none"
                />
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label>Account Password *</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  required
                  name="pass"
                  value={formData.pass}
                  onChange={handleFieldChange}
                  placeholder="••••••••"
                  className="w-full p-2.5 bg-gray-50/50 border rounded-xl pl-9 pr-9 focus:outline-none"
                />
                <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                
                {/* Reveal password element */}
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 font-bold"
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Repeat Password (register only) */}
            {activeTab === 'register' && (
              <div className="space-y-1">
                <label>Confirm Account Password *</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    name="confirmPass"
                    value={formData.confirmPass}
                    onChange={handleFieldChange}
                    placeholder="••••••••"
                    className="w-full p-2.5 bg-gray-50/50 border rounded-xl pl-9 focus:outline-none"
                  />
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                </div>
              </div>
            )}

            {/* Remember Me parameters (login only) */}
            {activeTab === 'login' && (
              <div className="flex justify-between items-center text-xs pt-1">
                <label className="flex items-center gap-1.5 text-gray-500 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-brand-blue" />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="text-brand-orange hover:underline font-bold">Forgot password?</a>
              </div>
            )}

            {/* Submit responses */}
            {message && (
              <div className="p-3 bg-emerald-50 text-brand-green border border-emerald-100 rounded-xl flex items-center gap-1.5 font-sans leading-relaxed">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>{message}</span>
              </div>
            )}

            {/* Trigger Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 mt-2 bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs rounded-full shadow-md transition-all text-center cursor-pointer"
            >
              {isLoading ? 'Processing Access...' : activeTab === 'login' ? 'Access Account Login' : 'Create New PawMart Account'}
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
