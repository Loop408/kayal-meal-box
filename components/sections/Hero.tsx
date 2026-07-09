"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/data';

const words = ["feel like home.", "hygiene.", "healthy.", "affordable."];
// Organic Corner Leaves Shadow SVG
const CornerLeaves = ({ className }: { className?: string }) => (
  <svg className={`absolute pointer-events-none text-primary/10 ${className}`} viewBox="0 0 200 200" fill="currentColor">
    <path d="M0,200 C30,170 80,150 120,150 C100,130 70,110 50,110 C80,90 120,90 150,110 C130,80 100,50 70,40 C110,30 150,50 170,80 C160,50 140,20 110,0 C150,10 180,40 190,70 C190,50 180,20 170,0 C190,20 200,50 200,80" />
  </svg>
);

// Decorative Leaf Shoot SVG
const LeafShoot = ({ reverse }: { reverse?: boolean }) => (
  <svg 
    className={`w-9 h-7 text-primary/95 inline-block align-middle ${reverse ? 'scale-x-[-1]' : ''}`} 
    viewBox="0 0 32 24" 
    fill="currentColor"
  >
    <path d="M4 12c4 1 8 0 12-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M14 6.5c1.5-1 3.5-1.2 5.5-1c-.2 1.8-.8 3.5-2.2 4.5-1.5 1-3.5 1-5-.5.2-1.5.8-2.5 1.7-3z" />
    <path d="M9 11c1-1 2.5-1 4-1 .3 1.2-.2 2.5-1.2 3.2-1 .7-2.5.7-3.5-.2.2-1 .6-1.8 1.2-2z" opacity="0.95" />
    <path d="M5 14.5c.5-.7 1.5-.7 2.5-.7.2.8-.1 1.7-.8 2.2-.7.5-1.7.5-2.2-.1.1-.6.3-1.2.7-1.4z" opacity="0.8" />
  </svg>
);

// Distress Paint Brush Stroke SVG
const BrushStroke = () => (
  <svg viewBox="0 0 240 85" className="absolute inset-0 w-full h-full text-primary drop-shadow-md" fill="currentColor">
    <path d="M12 18.5c35-2.5 70-5.3 105-6.8 32.7-1.4 65.5-1.6 98.2.2 8.5.5 16.8 1.5 24.8 4.1 2.3.7 3.5 2.5 2.8 4.9-.7 2.4-2.3 4.4-3.6 6.5-6.5 10.3-14.7 19.3-25.2 26-19.3 12.3-40.8 17.5-63.5 19.3-33.8 2.7-67.8 2.3-101.6-1.2C35 70 20.3 64.6 8.5 53 4.2 48.8.8 43.6.1 37.2c-.7-6 1.8-10.8 5.7-15 2-2.1 4-3 6.2-3.7z" />
  </svg>
);

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-[100px] lg:pt-[160px] lg:pb-[120px] bg-background text-[#1D231E] overflow-hidden">
      {/* Corner leaf shadow projections */}
      <CornerLeaves className="bottom-0 left-0 w-64 h-64 md:w-96 md:h-96" />
      <CornerLeaves className="top-0 right-0 w-64 h-64 md:w-96 md:h-96 rotate-180" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/10 bg-white/70 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-primary/95 tracking-wide uppercase">
                Homely Taste. Daily Fresh. Always on Time.
              </span>
            </div>

            {/* Headline with rotating final word to match animations and styling */}
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-[60px] font-extrabold tracking-tight leading-[1.1] text-primary"
            >
              Meals that <br />
              <span className="relative block overflow-hidden h-[1.25em] align-bottom text-[#1D231E] min-w-[340px] sm:min-w-[450px] lg:min-w-[600px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 bottom-0 block w-full text-left whitespace-nowrap"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Elegant Subheading with leaves */}
            <div className="flex items-center gap-3">
              <LeafShoot reverse />
              <span className="font-script text-xl md:text-2xl font-bold text-primary italic tracking-wide">
                Fresh. Hygienic. Homely.
              </span>
              <LeafShoot />
            </div>

            {/* Dine-In / Delivery Box */}
            <div className="w-full bg-[#FDFBF7]/60 backdrop-blur-sm border border-primary/10 rounded-[2rem] p-5 sm:p-6 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-primary/10">
                {/* Dine-In */}
                <div className="flex items-start gap-4 pb-6 md:pb-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 2v8c0 1.1-.9 2-2 2H8v8H6v-8H5c-1.1 0-2-.9-2-2V2h1.5v5H6.5V2H8v5h1.5V2H11z" />
                      <path d="M19 2c-2.2 0-4 1.8-4 4c0 2.2 1.5 3.5 3 3.9V20h2V9.9c1.5-.4 3-1.7 3-3.9c0-2.2-1.8-4-4-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold tracking-wider text-primary uppercase">Dine-in Facility</h3>
                    <p className="text-sm text-[#1D231E]/90 mt-1 leading-relaxed">
                      Comfortable dining space for a homely experience.
                    </p>
                  </div>
                </div>
                {/* Home Delivery */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-8">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 11H18V8C18 6.9 17.1 6 16 6H13V4H15V2H9V4H11V6H5C3.9 6 3 6.9 3 8V16H1C0.4 16 0 16.4 0 17C0 17.6 0.4 18 1 18H3.1C3.5 19.2 4.6 20 6 20C7.4 20 8.5 19.2 8.9 18H15.1C15.5 19.2 16.6 20 18 20C19.4 20 20.5 19.2 20.9 18H23C23.6 18 24 17.6 24 17C24 16.4 23.6 16 23 16H21V11.8C21 11.4 20.6 11 20 11ZM6 18.5C5.2 18.5 4.5 17.8 4.5 17C4.5 16.2 5.2 15.5 6 15.5C6.8 15.5 7.5 16.2 7.5 17C7.5 17.8 6.8 18.5 6 18.5ZM16.5 12H13V8H16.5V12ZM18 18.5C17.2 18.5 16.5 17.8 16.5 17C16.5 16.2 17.2 15.5 18 15.5C18.8 15.5 19.5 16.2 19.5 17C19.5 17.8 18.8 18.5 18 18.5Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-extrabold tracking-wider text-primary uppercase">Home Delivery</h3>
                    <p className="text-sm text-[#1D231E]/90 mt-1 leading-relaxed">
                      Hot, fresh meals delivered to your doorstep.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-[#1D231E]/90 leading-relaxed max-w-2xl">
              Whether you're far from home or too busy to cook, <span className="font-bold text-primary">Kayal Meal Box</span> brings you homely, hygienic meals every day. Dine with us or enjoy our reliable home delivery across <span className="font-bold text-primary">Hyderabad</span>.
            </p>

            {/* Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 pt-2">
              <a 
                href="#pricing"
                className="px-8 h-12 bg-accent hover:bg-accent/95 text-black font-bold rounded-[12px] text-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-base flex items-center justify-center border border-accent/10"
              >
                {/* Calendar Icon */}
                <svg className="w-5 h-5 mr-2 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
                </svg>
                Subscribe Now
              </a>
              <a 
                href="#menu"
                className="px-8 h-12 bg-primary hover:bg-primary-dark text-white font-bold rounded-[12px] text-center transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-base flex items-center justify-center"
              >
                {/* Menu List Icon */}
                <svg className="w-5 h-5 mr-2 stroke-current text-white" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                  <line x1="8" y1="6" x2="21" y2="6" strokeLinecap="round" />
                  <line x1="8" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="8" y1="18" x2="21" y2="18" strokeLinecap="round" />
                  <line x1="3" y1="6" x2="3.01" y2="6" strokeLinecap="round" strokeWidth="3" />
                  <line x1="3" y1="12" x2="3.01" y2="12" strokeLinecap="round" strokeWidth="3" />
                  <line x1="3" y1="18" x2="3.01" y2="18" strokeLinecap="round" strokeWidth="3" />
                </svg>
                View Menu
              </a>
            </div>

          </div>

          {/* Right Column (Image Showcase + Overlays) */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square rounded-[3rem] overflow-hidden border-[6px] border-white shadow-2xl">
              <Image 
                src="/illustrations/hero_thali.png" 
                alt="Traditional South Indian Thali" 
                fill
                priority
                className="object-cover scale-102"
              />
              
              {/* Circular Green Stamp Overlay */}
              <div className="absolute top-[6%] left-[6%] w-[128px] h-[128px] rounded-full bg-primary flex flex-col items-center justify-center shadow-lg border border-white/10 z-10 rotate-[-12deg] select-none pointer-events-none p-2">
                <span className="font-handwriting text-white text-[15px] leading-tight text-center font-bold">Good Food</span>
                <span className="font-handwriting text-accent text-[15px] leading-tight text-center font-bold">Good Health</span>
                <div className="flex flex-col items-center justify-center mt-0.5">
                  <span className="font-handwriting text-white text-[15px] leading-none text-center font-bold">Good Life</span>
                  {/* Curved underline */}
                  <svg className="w-14 h-1.5 text-accent mt-0.5" viewBox="0 0 60 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M2 3 Q 30 7, 58 2" />
                  </svg>
                </div>
              </div>

              {/* Distressed Badge Overlay */}
              <div className="absolute bottom-[6%] -right-4 z-20 w-[220px] h-[88px] flex items-center justify-center rotate-[4deg] select-none pointer-events-none">
                <BrushStroke />
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
                  <div className="text-[10px] font-black tracking-widest text-white uppercase flex items-center justify-center gap-1">
                    Dine-in or
                    <svg className="w-3.5 h-3.5 text-[#a7f3d0] fill-current" viewBox="0 0 24 24">
                      <path d="M17 8C8 14 4 19 3 21C5 20 10 16 16 7C14 7 12 8 10 9C12 7 15 5 18 3C18 5 18 7 17 8Z" />
                    </svg>
                  </div>
                  <div className="text-[22px] font-black tracking-wide text-accent uppercase leading-none my-0.5">
                    Delivered
                  </div>
                  <div className="text-[9px] font-black tracking-widest text-white uppercase">
                    Always Delicious!
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-12 md:mt-20 bg-[#FDFBF7] border border-primary/10 rounded-[1.5rem] p-6 lg:p-8 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 items-center">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 14 4 19 3 21C5 20 10 16 16 7C14 7 12 8 10 9C12 7 15 5 18 3C18 5 18 7 17 8Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-primary uppercase">Homely Taste</h4>
                <p className="text-xs text-text-muted mt-0.5 font-bold">Like home food</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-center gap-4 sm:border-l sm:border-primary/10 sm:pl-6 lg:pl-4">
              <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-primary uppercase">Hygienic Food</h4>
                <p className="text-xs text-text-muted mt-0.5 font-bold">Prepared with care</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-center gap-4 lg:border-l lg:border-primary/10 lg:pl-6">
              <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                <span className="text-lg font-black leading-none">₹</span>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-primary uppercase">Affordable Plans</h4>
                <p className="text-xs text-text-muted mt-0.5 font-bold">Quality at best prices</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-center gap-4 sm:border-l sm:border-primary/10 sm:pl-6 lg:pl-6">
              <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-black tracking-wider text-primary uppercase">On Time Delivery</h4>
                <p className="text-xs text-text-muted mt-0.5 font-bold">Always on time</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
