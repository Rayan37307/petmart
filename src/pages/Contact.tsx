import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Mimic quick server delay
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Clear message
      setTimeout(() => {
        setSentSuccess(false);
      }, 4000);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-16 font-sans text-left" id="contact-page-wrapper">
      
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-950 flex items-center gap-1.5">
          📞 Connect With PawMart
        </h2>
        <p className="text-xs text-gray-400 font-medium font-sans">Have specialized dietary questions or wholesale enquiries? Get premium support!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Cards */}
        <div className="md:col-span-4 space-y-4">
          
          {/* Card 1: Address */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 flex gap-4 shadow-2xs text-left">
            <div className="w-10 h-10 bg-orange-100 text-brand-orange rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-800">Flagship Address</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                470 Parker Rd, Allentown,<br />Mexico City, MX 3030
              </p>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 flex gap-4 shadow-2xs text-left">
            <div className="w-10 h-10 bg-blue-100 text-brand-blue rounded-2xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-800">Phone Support Hotline</h4>
              <p className="text-xs text-gray-500 mt-1 font-mono leading-relaxed">
                +1 (800) 555-PAWN<br />
                +1 (555) 019-9923
              </p>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 flex gap-4 shadow-2xs text-left">
            <div className="w-10 h-10 bg-purple-100 text-brand-purple rounded-2xl flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-800">Email Enquiries</h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed font-mono">
                support@pawmart.com<br />
                wholesale@pawmart.com
              </p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 flex gap-4 shadow-2xs text-left">
            <div className="w-10 h-10 bg-emerald-100 text-brand-green rounded-2xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-800">Store Hours</h4>
              <div className="text-xs text-gray-500 mt-1">
                <p>Mon - Fri: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form Section */}
        <div className="md:col-span-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-2xs space-y-6">
          <h3 className="font-display font-extrabold text-base text-gray-800 pb-2 border-b">Send Our Specialists a Message</h3>
          
          <form onSubmit={handleSubmitMessage} className="space-y-4 text-xs font-semibold text-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  required 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Marie Curie"
                  className="w-full text-xs p-2.5 bg-gray-50/50 border rounded-xl focus:outline-none" 
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label>Email Address *</label>
                <input 
                  type="email" 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. marie@domain.com"
                  className="w-full text-xs p-2.5 bg-gray-50/50 border rounded-xl focus:outline-none" 
                />
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label>Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +1 (555) 000-0000"
                  className="w-full text-xs p-2.5 bg-gray-50/50 border rounded-xl focus:outline-none" 
                />
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label>Regarding Subject *</label>
                <input 
                  type="text" 
                  required 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Wholesale organic treats"
                  className="w-full text-xs p-2.5 bg-gray-50/50 border rounded-xl focus:outline-none" 
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label>Message Content *</label>
              <textarea 
                required 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your pet dietary concern here..."
                className="w-full text-xs p-2.5 bg-gray-50/50 border rounded-xl focus:outline-none" 
              />
            </div>

            {/* Success Prompt */}
            {sentSuccess && (
              <div className="p-3 bg-emerald-50 text-brand-green border border-emerald-100 rounded-xl flex items-center gap-2 animate-in fade-in">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Message submitted successfully! We will email you back within 2 hours. 🎉</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className="py-3 px-8 bg-brand-blue hover:bg-brand-deep text-white font-display font-extrabold text-xs rounded-full shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Contact Support
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Flagship Store map placeholder */}
      <div className="space-y-4 pt-6 border-t">
        <h3 className="font-display font-black text-xl text-gray-900">Flagship Flagship Headquarters Location</h3>
        <p className="text-xs text-gray-400">Stop by with your puppies for a complimentary treat bag!</p>

        {/* map placeholder */}
        <div className="relative w-full h-80 bg-blue-50 border border-blue-100 rounded-[32px] overflow-hidden shadow-2xs flex items-center justify-center">
          {/* Subtle Grid backdrop simulating real map coordinates */}
          <div className="absolute inset-0 bg-grid-slate-100/50 opacity-40 pointer-events-none" />
          <div className="text-center space-y-3 z-10 max-w-sm px-4">
            <div className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center mx-auto shadow-md border animate-bounce">
              <MapPin className="w-6 h-6 shrink-0" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800">PawMart Headquarters Flagship Depot</p>
              <p className="text-[10px] text-gray-400 mt-1 leading-normal">Latitude: 19.4326 | Longitude: -99.1332 (Mexico City Flagship Hub)</p>
            </div>
            <span className="inline-block text-[10px] bg-white text-brand-orange border border-orange-200 font-bold px-3 py-1 rounded-full">
              📍 Embedded Live Maps Prototype
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
