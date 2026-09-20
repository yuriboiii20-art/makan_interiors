import React, { useState } from 'react';
import { GlassButton } from '@/components/ui/glass-button';
import {
  Phone,
  Instagram,
  MessageCircle,
  Mail,
  Sparkles,
  Send,
  CheckCircle,
  MapPin
} from 'lucide-react';

export const FooterContact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full Turnkey (Design + Construction)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let messageText = `Hello Mohammed Jawad, I would like to inquire about a project with Makan Constructions & Interiors.`;
    if (formData.name) {
      messageText += `\n\n*Name:* ${formData.name}`;
    }
    if (formData.phone) {
      messageText += `\n*Phone:* ${formData.phone}`;
    }
    if (formData.email) {
      messageText += `\n*Email:* ${formData.email}`;
    }
    if (formData.service) {
      messageText += `\n*Service:* ${formData.service}`;
    }
    if (formData.message) {
      messageText += `\n*Project Details:* ${formData.message}`;
    }

    const whatsappUrl = `https://wa.me/917899962191?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Full Turnkey (Design + Construction)',
        message: ''
      });
    }, 4000);
  };

  const contactLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/917899962191?text=Hello%20Mohammed%20Jawad,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20and%20interior%20project%20with%20Makan%20Constructions%20%26%20Interiors.',
      color: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/25',
      label: 'WhatsApp'
    },
    {
      name: 'Phone Call',
      icon: Phone,
      href: 'tel:+917899962191',
      color: 'bg-stone-900 hover:bg-stone-800 text-gold-300 shadow-stone-900/25',
      label: 'Direct Call'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:makan.constructions5@gmail.com',
      color: 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/25',
      label: 'Email'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/engineer__jawad?igsh=OHp5dTEzdmEyZ2hi',
      color: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-rose-500/25',
      label: 'Instagram'
    }
  ];

  return (
    <footer id="contact" className="scroll-mt-20 sm:scroll-mt-24 bg-[#F3EFEA] pt-16 sm:pt-20 pb-10 border-t border-stone-200/90 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-gold-200/25 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-foreground/80 uppercase">
              Direct Channels &bull; Makan Studio
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Connect With <span className="text-gold-600">Our Founder</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
            Click any icon below to connect directly with Mohammed Jawad, or leave a message for a custom spatial estimate.
          </p>
        </div>

        {/* Quick Direct Redirect Icon Grid - Only Pure Clickable Icons */}
        <div className="flex items-center justify-center gap-5 sm:gap-7 flex-wrap mb-12 sm:mb-16">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-center"
                aria-label={item.name}
                title={item.name}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-active:scale-95 border border-white/60 ${item.color}`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 transition-transform group-hover:rotate-6" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Project Consultation Inquiry Form - Compact Size & Reduced Padding */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-lg mb-12 sm:mb-16">
          <div className="text-center mb-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold-600 block mb-1">
              Project Consultation Form
            </span>
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-foreground">
              Send a Direct Message
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Fill out this quick form and Mohammed Jawad will personally review your floor plan and spatial requirements.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-2.5 animate-fadeIn">
              <CheckCircle className="w-10 h-10 text-emerald-600" />
              <h4 className="font-sans font-bold text-lg text-emerald-950">
                Consultation Request Received!
              </h4>
              <p className="text-xs text-emerald-800 max-w-md">
                Thank you! Mohammed Jawad will review your project scope and connect with you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-stone-700">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Sterling"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-stone-700">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-stone-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-stone-700">Service Category *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all"
                  >
                    <option value="Full Turnkey (Design + Construction)">Full Turnkey (Design + Construction)</option>
                    <option value="Interior Architecture & Design Only">Interior Architecture &amp; Design Only</option>
                    <option value="Structural Construction & Remodeling">Structural Construction &amp; Remodeling</option>
                    <option value="Custom Joinery & Millwork">Custom Joinery &amp; Millwork</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-stone-700">Project Location &amp; Scope Overview</label>
                <textarea
                  rows={2}
                  placeholder="Describe your space (approx sq.ft, location, timeline, style)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-1">
                <button type="submit" className="w-full">
                  <GlassButton
                    size="default"
                    variantStyle="gold"
                    className="w-full"
                    contentClassName="w-full flex items-center justify-center gap-2 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-3 shadow-lg"
                  >
                    <span>Submit Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </GlassButton>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Brand & Locations */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-stone-200/80">
          <div className="flex items-center gap-3">
            <img
              src="/logo.svg"
              alt="Makan Constructions and Interiors Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs font-semibold text-stone-600">
            <a
              href="mailto:makan.constructions5@gmail.com"
              className="flex items-center gap-1.5 hover:text-gold-700 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
              <span>makan.constructions5@gmail.com</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
              <span>Bangalore, Karnataka &bull; Available for Select Architectural Projects</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 mt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© 2026 Makan Constructions &amp; Interiors. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-800 transition-colors">Contractor License Registered</span>
            <span className="hover:text-stone-800 transition-colors">Privacy Policy</span>
            <span className="hover:text-stone-800 transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
