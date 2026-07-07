"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import React from "react";

// Custom SVG Icons matching the style in the screenshot
const DocumentIcon = () => (
  <svg className="w-7 h-7 text-[#0B0C10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="#FFF9E6" stroke="#0B0C10" />
    <polyline points="14 2 14 8 20 8" fill="#FFC503" stroke="#0B0C10" />
    <line x1="16" y1="13" x2="8" y2="13" stroke="#0B0C10" />
    <line x1="16" y1="17" x2="8" y2="17" stroke="#0B0C10" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="12" r="9" fill="#FFC503" stroke="#0B0C10" />
    <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" stroke="#0B0C10" fill="none" />
    <path d="M3 12h18" stroke="#0B0C10" />
  </svg>
);

const TiffinIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <rect x="6" y="9" width="12" height="5" rx="1.5" fill="#FFC503" stroke="#0B0C10" />
    <rect x="6" y="14" width="12" height="6" rx="1.5" fill="#FFC503" stroke="#0B0C10" />
    <path d="M12 9V4.5a1.5 1.5 0 0 1 3 0" stroke="#0B0C10" fill="none" strokeLinecap="round" />
    <path d="M8 4h8" stroke="#0B0C10" strokeLinecap="round" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" fill="#FFC503" stroke="#0B0C10" />
    <circle cx="12" cy="10" r="2.5" fill="#FFF" stroke="#0B0C10" />
  </svg>
);

const SmileIcon = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
    <circle cx="12" cy="12" r="9" fill="#FFC503" stroke="#0B0C10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#0B0C10" fill="none" strokeLinecap="round" />
    <circle cx="9" cy="9.5" r="1.2" fill="#0B0C10" />
    <circle cx="15" cy="9.5" r="1.2" fill="#0B0C10" />
  </svg>
);

const stepsData = [
  {
    step: 1,
    title: "Choose Your Meal Plan & Subscribe",
    description: "Choose Plan, select meal type, choose - (Lunch/Dinner/Both), browse menu, choose start date, add delivery address & make payment.",
    icons: (
      <div className="flex gap-2.5 items-center mb-4">
        <DocumentIcon />
        <GlobeIcon />
      </div>
    ),
    isEven: false,
  },
  {
    step: 2,
    title: "Freshly Cooked Meals Delivered",
    description: "Enjoy hot, freshly cooked home-style meals delivered on time to your location.",
    icons: (
      <div className="flex gap-2.5 items-center mb-4">
        <TiffinIcon />
        <PinIcon />
      </div>
    ),
    isEven: true,
  },
  {
    step: 3,
    title: "Enjoy your Meal & Return Tiffin in Next Delivery",
    description: "Meals are delivered in hygienic steel tiffins (no plastic). Simply return the tiffin with your next delivery.",
    icons: (
      <div className="flex gap-2.5 items-center mb-4">
        <TiffinIcon />
        <SmileIcon />
      </div>
    ),
    isEven: false,
  },
];

export function HowItWorks() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#FFC503] relative overflow-hidden font-sans">
      {/* Top River-like Wave Outline */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-10 md:h-16">
          <path d="M0,0 L1440,0 L1440,15 C800,-10 400,50 0,15 Z" fill="#FFFDF8" />
        </svg>
      </div>

      {/* Bottom River-like Wave Outline */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-0 pointer-events-none">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-10 md:h-16">
          <path d="M0,74 L1440,74 L1440,45 C800,70 400,10 0,45 Z" fill="#FFFBF0" />
        </svg>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="mx-auto max-w-5xl px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B0C10] tracking-tight">
            How It Works?
          </h2>
        </div>

        {/* Vertical alternating stack of cards */}
        <div className="flex flex-col gap-10 max-w-3xl mx-auto relative px-4 md:px-8">
          
          {stepsData.map((item, idx) => (
            <AnimateIn key={item.step} delay={idx * 0.1} className="relative w-full">
              <div 
                className={`relative bg-white rounded-3xl p-7 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#0B0C10]/5 transition-transform hover:scale-[1.01] duration-300`}
              >
                {/* Step Number Circle overlapping left/right border */}
                <div 
                  className={`absolute flex items-center justify-center w-11 h-11 rounded-full bg-[#0B0C10] text-white font-extrabold text-lg shadow-md z-20 
                    ${item.isEven 
                      ? 'right-auto md:-right-5.5 md:left-auto -left-4 md:translate-x-0' 
                      : 'left-auto md:-left-5.5 md:right-auto -left-4 md:translate-x-0'
                    } top-1/2 -translate-y-1/2`}
                >
                  {item.step}
                </div>

                {/* Card Content */}
                <div className="pl-6 md:pl-0">
                  {/* Icons */}
                  {item.icons}

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#0B0C10] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#0B0C10]/80 text-sm leading-relaxed max-w-2xl font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

