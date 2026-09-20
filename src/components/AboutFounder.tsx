import React from 'react';
import { GlassButton } from '@/components/ui/glass-button';
import { Award, Phone, Sparkles, Quote, Hammer, PenTool, Layers } from 'lucide-react';

export const AboutFounder: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 bg-[#F5F1EB]/70 relative overflow-hidden border-y border-stone-200/80">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-stone-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill & Title */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-foreground/80 uppercase">
              The Founder &bull; Makan Constructions &amp; Interiors
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Mastery of <span className="text-gold-600">Form &amp; Foundation</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
            Meet the visionary behind our seamless design-and-build studio, merging artistic spatial design with structural general contracting.
          </p>
        </div>

        {/* Founder Story Grid - Compact Sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          
          {/* Founder Picture Column (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Picture Frame - Natural Full Portrait, No Cutting */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-3 border-white bg-stone-100 flex items-center justify-center">
                <img
                  src="/1founder.png"
                  alt="Founder & Principal - Mohammed Jawad"
                  className="w-full h-auto max-h-[580px] object-contain object-center transform hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* Experience Badge Placed Gracefully Below Photo */}
              <div className="mt-3.5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-stone-200 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/20 text-gold-700 flex items-center justify-center font-sans font-extrabold text-lg flex-shrink-0">
                    15+
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-foreground">
                      Years of Dual Mastery
                    </h4>
                    <p className="text-[11px] text-muted-foreground">
                      Interior Architect &bull; Licensed Contractor
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Quote Stamp */}
              <div className="hidden sm:flex absolute -top-3 -right-3 w-20 h-20 bg-stone-900 text-stone-100 rounded-full flex-col items-center justify-center p-2 text-center shadow-lg border-2 border-white">
                <Award className="w-5 h-5 text-gold-400 mb-0.5" />
                <span className="text-[8px] font-sans font-extrabold uppercase tracking-wider text-gold-300">
                  Master Builder
                </span>
              </div>
            </div>
          </div>

          {/* Founder Story Card Column (7 cols) - Reduced Padding & Card Size */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md relative">
              
              <Quote className="w-10 h-10 text-gold-200 absolute top-5 right-5 -z-0 pointer-events-none opacity-80" />

              <div className="relative z-10">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-gold-600 block mb-2">
                  Founder's Vision
                </span>
                
                <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground mb-3 leading-snug">
                  "True luxury isn't just about expensive marble. It's the harmony between how a space is engineered and how it feels to live inside it."
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                  With over fifteen years spent both at the drafting table and directly on active construction sites, I founded <strong className="text-foreground font-semibold">Makan Constructions &amp; Interiors</strong> to solve a fundamental industry dilemma: the disconnect between the interior designer’s dream and the general contractor’s execution.
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  By bringing architectural spatial planning, structural load modifications, bespoke carpentry, and turnkey project management under one roof, we guarantee that every centimeter of your home is executed with surgical precision and uncompromising beauty.
                </p>

                {/* 3 Core Pillars - Compact Size */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                    <div className="flex items-center gap-1.5 mb-1 text-gold-700 font-bold text-[11px] uppercase tracking-wider font-sans">
                      <PenTool className="w-3.5 h-3.5" />
                      <span>Spatial Design</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      Natural illumination, flow, and bespoke joinery.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                    <div className="flex items-center gap-1.5 mb-1 text-gold-700 font-bold text-[11px] uppercase tracking-wider font-sans">
                      <Hammer className="w-3.5 h-3.5" />
                      <span>Civil Build</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      Licensed structural build, MEP, and permitting.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/60">
                    <div className="flex items-center gap-1.5 mb-1 text-gold-700 font-bold text-[11px] uppercase tracking-wider font-sans">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Artisan Finish</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      Book-matched stones, timber, and custom joinery.
                    </p>
                  </div>
                </div>

                {/* Founder Signoff & GlassButton CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-stone-100">
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-lg sm:text-xl text-foreground">
                      Mohammed Jawad
                    </span>
                    <span className="text-[11px] font-semibold text-gold-600 tracking-wider uppercase">
                      Founder &bull; Principal Interior Architect &amp; Constructor
                    </span>
                  </div>

                  <a href="#contact">
                    <GlassButton
                      size="sm"
                      variantStyle="dark"
                      contentClassName="flex items-center gap-1.5 font-sans text-xs font-bold tracking-wider uppercase px-5 py-2.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-300" />
                      <span>Direct Contact</span>
                    </GlassButton>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
