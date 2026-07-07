"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/data';

const words = ["hygienic.", "homely.", "healthy.", "affordable."];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-24 pb-8 md:pt-32 md:pb-12 bg-[#FFFBF0] text-[#0B0C10] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 md:space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-text/10 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFC503] animate-pulse" />
              <span className="text-xs md:text-sm font-semibold text-text-muted">
                Home-Style Tiffin Meals Delivered Fresh, Every Day
              </span>
            </div>
            {/* Rotating Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] flex flex-col">
              <span className="text-[#FFC503]">Meals that</span>
              <span className="relative h-[1.2em] overflow-hidden mt-1 text-[#0B0C10] inline-block min-w-[300px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 top-0 block"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
            {/* Description */}
            <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
              Whether you're far from home or too busy to cook, <span className="font-bold text-[#0B0C10]">Kayal Meal Box</span> delivers fresh, hygienic, home-style meals to your doorstep as a trusted home-style tiffin service in <span className="font-semibold text-[#0B0C10]">Hyderabad</span>. Enjoy affordable tiffin plans that save time without compromising on taste, quality, or health.
            </p>
            {/* Action Buttons */}
            <div className="w-full flex flex-col space-y-4 max-w-md">
              <div className="flex gap-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-4 sm:py-3 sm:px-6 bg-[#FFC503] hover:bg-[#e6b100] text-[#0B0C10] font-extrabold rounded-full text-center transition-all shadow-md active:scale-95 text-sm"
                >
                  Subscribe Now
                </a>
                <a 
                  href="#menu"
                  className="flex-1 py-2 px-4 sm:py-3 sm:px-6 bg-[#0B0C10] hover:bg-[#000000] text-white font-extrabold rounded-full text-center transition-all shadow-md active:scale-95 text-sm"
                >
                  View Menu
                </a>
              </div>
            </div>
            {/* Mini Trust Features */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 text-sm font-semibold text-text-muted">
              <div className="flex items-center gap-2">
                <span className="text-lg">🍱</span>
                <span>Steel Tiffin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">⏸️</span>
                <span>Pause Plan anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span>Set Multiple delivery address</span>
              </div>
            </div>
          </div>
          {/* Right Column (Image Slider / Showcase) */}
          <div className="lg:col-span-6 relative w-full h-[350px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src="/illustrations/hero.png" 
              alt="Delicious homely South Indian Meals" 
              fill
              priority
              className="object-cover"
              unoptimized
            />
            {/* Dots overlay to make it look like a slider */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC503]" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
