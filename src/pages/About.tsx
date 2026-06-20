import React from 'react';
import { PawPrint, Heart, Users, Award, ShieldAlert, Star } from 'lucide-react';

export default function About() {
  const teamMembers = [
    { name: 'Dr. Evelyn Carter', role: 'Chief Resident Veterinarian', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80' },
    { name: 'Marcus Sterling', role: 'Pet Food Formulator & Nutritionist', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80' },
    { name: 'Diana Jenkins', role: 'Support Specialist Coordinator', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-6 pb-16 font-sans text-left space-y-12" id="about-page-wrapper">
      
      {/* Hero Stories */}
      <section className="text-center space-y-4 max-w-2xl mx-auto pt-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFE0A3] bg-brand-orange px-3 py-1 rounded-full leading-none">
          ABOUT OUR MISSION
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-gray-900 leading-tight">
          We Care For Pets Like Family
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
          PawMart started with one single core mission: making premium, organic pet food and healthcare supplies simpler, happier, and highly reliable. Every tail-wag we protect feeds our daily calling!
        </p>
      </section>

      {/* Grid of brand story details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
        <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md h-80">
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=80"
            alt="Golden Retriever play"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="font-display font-black text-2xl text-gray-950">Our Playful Story</h3>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            Founded in 2018 by veterinary practitioners and enthusiastic pet advocates, PawMart wanted to challenge the status quo. Instead of default commercial dry kibbles stuffed with artificial starches, we wanted to deliver natural recipes developed directly by dieticians and packaged cleanly for cold-start delivery.
          </p>
          <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 italic text-xs font-bold font-display text-orange-950 flex gap-2.5">
            <span className="text-xl">“</span>
            <span>We believe dogs and cats carry feelings, affection, and deserve the same certified premium nutrition we feed our human kids!</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="space-y-6">
        <div className="text-center">
          <h3 className="font-display font-black text-2xl text-gray-900">Why Choose PawMart?</h3>
          <p className="text-xs text-gray-400">What makes PawMart the absolute favorite household name for pet parents</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Item 1 */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 text-center space-y-2.5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center mx-auto">
              🐾
            </div>
            <h4 className="font-display font-bold text-sm text-gray-800">Vet-Approved Products</h4>
            <p className="text-[11px] text-gray-400 font-medium">All formulas are strictly verified by veteran clinical caregivers.</p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 text-center space-y-2.5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center mx-auto">
              🚚
            </div>
            <h4 className="font-display font-bold text-sm text-gray-800">Fast home delivery</h4>
            <p className="text-[11px] text-gray-400 font-medium">Enjoy secure, responsive carrier delivery right to your doorsteps.</p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 text-center space-y-2.5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-brand-purple flex items-center justify-center mx-auto">
              🏆
            </div>
            <h4 className="font-display font-bold text-sm text-gray-800">Trusted Global Brands</h4>
            <p className="text-[11px] text-gray-400 font-medium">Fully original certified recipes from Royal Canin, Josera, and Catit.</p>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 text-center space-y-2.5 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-brand-green flex items-center justify-center mx-auto">
              💬
            </div>
            <h4 className="font-display font-bold text-sm text-gray-800">Friendly Support</h4>
            <p className="text-[11px] text-gray-400 font-medium">Our helpdesk can handle custom orders or recommend foods instantly.</p>
          </div>
        </div>
      </section>

      {/* Dynamic Statistics counters */}
      <section className="bg-brand-blue paw-pattern-bg p-8 sm:p-10 rounded-[32px] text-white text-center shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" id="about-stats-grid">
          <div className="space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-brand-orange">10K+</p>
            <p className="text-xs text-blue-50/80 uppercase font-mono tracking-wider font-bold">Happy Pet Parents</p>
          </div>
          <div className="space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-brand-orange">500+</p>
            <p className="text-xs text-blue-50/80 uppercase font-mono tracking-wider font-bold">Pet Supplies</p>
          </div>
          <div className="space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-brand-orange">50+</p>
            <p className="text-xs text-blue-50/80 uppercase font-mono tracking-wider font-bold">World-class Brands</p>
          </div>
          <div className="space-y-1">
            <p className="font-display font-black text-3xl sm:text-4xl text-brand-orange">24/7</p>
            <p className="text-xs text-blue-50/80 uppercase font-mono tracking-wider font-bold">Support Coverage</p>
          </div>
        </div>
      </section>

      {/* Care team deck */}
      <section className="space-y-6">
        <div className="text-center">
          <h3 className="font-display font-black text-2xl text-gray-900">Meet Our Companion Care Specialists</h3>
          <p className="text-xs text-gray-400">The human hearts behind PawMart's daily pet love</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" id="team-members">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-2xs text-center"
            >
              <div className="aspect-square w-full bg-gray-50 overflow-hidden relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="font-display font-bold text-sm text-gray-800">{member.name}</h4>
                <p className="text-[10px] font-mono text-brand-blue font-bold uppercase">{member.role}</p>
                <div className="flex justify-center text-brand-orange">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
