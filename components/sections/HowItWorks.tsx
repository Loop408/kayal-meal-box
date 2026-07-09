"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import React from "react";

const DocumentIcon = () => (
  <svg className="w-6 h-6 text-[#0B0C10]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" />
    <path d="M3 12h18" />
  </svg>
);

const ScooterIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
    <path d="M4 17h3M10 17h4M20 17h-3" />
    <path d="M7 14v-4l4-4h6l2 4v4H7z" />
    <circle cx="15" cy="10" r="1" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const BowlIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14c0 4.4 3.6 8 8 8s8-3.6 8-8H4z" />
    <path d="M8 10v-3M12 10v-4M16 10v-3" />
    <line x1="2" y1="14" x2="22" y2="14" />
  </svg>
);

const SmileIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <circle cx="9" cy="9.5" r="1.2" fill="#0B0C10" />
    <circle cx="15" cy="9.5" r="1.2" fill="#0B0C10" />
  </svg>
);

const LeafSprigIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" />
    <path d="M12 12C12 12 16 8 16 5C16 5 12 5 12 12Z" fill="currentColor" />
    <path d="M12 16C12 16 8 12 8 9C8 9 12 9 12 16Z" fill="currentColor" />
    <path d="M12 20C12 20 18 16 18 13C18 13 12 13 12 20Z" fill="currentColor" />
  </svg>
);

const Illustration1 = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-24 md:w-32 h-auto mr-4 md:mr-8">
    <rect x="30" y="10" width="40" height="70" rx="4" fill="#fff" />
    <rect x="38" y="25" width="8" height="8" />
    <path d="M40 29l2 2 4-4" />
    <line x1="52" y1="29" x2="62" y2="29" />
    <rect x="38" y="40" width="8" height="8" />
    <path d="M40 44l2 2 4-4" />
    <line x1="52" y1="44" x2="62" y2="44" />
    <path d="M55 90 C 50 90, 45 80, 45 75 L 50 65 L 55 70 L 65 70 C 70 70, 75 75, 75 80 Z" fill="#fff" />
    <path d="M50 65 L 45 55 L 50 50 L 55 60" fill="#fff" />
  </svg>
);

const Illustration2 = () => (
  <svg width="120" height="100" viewBox="0 0 120 100" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-28 md:w-40 h-auto mr-4 md:mr-6">
    <circle cx="20" cy="70" r="8" fill="#fff" />
    <circle cx="55" cy="70" r="8" fill="#fff" />
    <path d="M20 70h35M12 70h8" />
    <path d="M20 62l15-20h10l5 10v10" fill="#fff" />
    <path d="M40 42v-15h-10v15" fill="#FFC503" />
    <line x1="85" y1="70" x2="85" y2="50" />
    <line x1="105" y1="70" x2="105" y2="50" />
    <line x1="80" y1="50" x2="110" y2="50" />
    <path d="M95 50v-5" />
    <line x1="75" y1="70" x2="75" y2="45" />
    <line x1="75" y1="55" x2="82" y2="55" />
    <line x1="82" y1="55" x2="82" y2="70" />
  </svg>
);

const Illustration3 = () => (
  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" stroke="#0B0C10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-28 md:w-40 h-auto mr-4 md:mr-6">
    <path d="M20 50 C 20 70, 80 70, 80 50 Z" fill="#FFC503" />
    <ellipse cx="50" cy="50" rx="30" ry="10" fill="#fff" />
    <path d="M35 48 C 40 40, 60 40, 65 48" fill="#FFC503" />
    <path d="M40 30 Q 35 25 40 20 T 40 10" />
    <path d="M50 35 Q 45 30 50 25 T 50 15" />
    <path d="M60 30 Q 55 25 60 20 T 60 10" />
    <path d="M85 60 C 85 70, 105 70, 105 60 Z" fill="#FFC503" />
    <ellipse cx="95" cy="60" rx="10" ry="3" fill="#fff" />
  </svg>
);

const stepsData = [
  {
    step: 1,
    title: "Choose Your Meal Plan & Subscribe",
    description: "Choose your plan, select meal type (Lunch/Dinner/Both),\nbrowse menu, choose start date, add delivery address &\nmake payment.",
    icons: (
      <div className="flex gap-2.5 items-center mb-2">
        <DocumentIcon />
        <GlobeIcon />
      </div>
    ),
    illustration: <Illustration1 />
  },
  {
    step: 2,
    title: "Meals Delivered or Dine with Us",
    description: "We deliver hot, fresh, home-style meals to your doorstep.\nPrefer to dine in? Visit us and enjoy a homely\nmealtime experience.",
    icons: (
      <div className="flex gap-2.5 items-center mb-2">
        <ScooterIcon />
        <PinIcon />
      </div>
    ),
    illustration: <Illustration2 />
  },
  {
    step: 3,
    title: "Enjoy Your Meal",
    description: "Savor delicious, homely meals made with fresh\ningredients and delivered with care.\nSit back, relax, and enjoy!",
    icons: (
      <div className="flex gap-2.5 items-center mb-2">
        <BowlIcon />
        <SmileIcon />
      </div>
    ),
    illustration: <Illustration3 />
  },
];

export function HowItWorks() {
  return (
    <section id="features" className="pt-[100px] lg:pt-[120px] bg-[#FFC503] relative font-sans overflow-hidden">
      <div className="mx-auto max-w-5xl px-8 md:px-12 relative z-10 pb-20">
        
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0B0C10] tracking-tight leading-[1.2]">
            How It Works?
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[2px] w-12 md:w-20 bg-[#0B0C10]"></div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0B0C10" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.5 5.5 8 8 4.5 9.5C8 11 10.5 13.5 12 17C13.5 13.5 16 11 19.5 9.5C16 8 13.5 5.5 12 2Z" />
            </svg>
            <div className="h-[2px] w-12 md:w-20 bg-[#0B0C10]"></div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {stepsData.map((item, idx) => (
            <AnimateIn key={item.step} delay={idx * 0.1} className="relative w-full">
              <div className="relative bg-white rounded-2xl md:rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between shadow-sm border border-transparent min-h-[180px]">
                
                {/* Number Circle overlapping left border */}
                <div className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-[#0B0C10] text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold border-4 md:border-[6px] border-[#FFC503]">
                  {item.step}
                </div>

                {/* Card Text Content */}
                <div className="flex-1 pl-4 md:pl-6 text-left w-full">
                  {item.icons}
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#0B0C10] mb-3 leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="text-[#0B0C10]/80 text-[16px] md:text-[18px] font-medium leading-[1.6] whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                {/* Card Illustration */}
                <div className="w-full md:w-auto flex-shrink-0 mt-6 md:mt-0 flex justify-center md:justify-end">
                  {item.illustration}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Bottom Wave transitioning to cream */}
      <div className="w-full overflow-hidden leading-[0] z-0 pointer-events-none -mb-1">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative block w-full h-10 md:h-16">
          <path d="M0,74 L1440,74 L1440,45 C800,70 400,10 0,45 Z" fill="#FFFDF8" />
        </svg>
      </div>

      {/* Bottom Text and Leaves on cream background */}
      <div className="bg-[#FFFDF8] pt-6 pb-16 w-full px-4">
        <div className="text-center flex items-center justify-center gap-3">
          <LeafSprigIcon className="w-8 h-8 text-[#4B753A] transform scale-x-[-1]" />
          <p className="text-[22px] md:text-3xl font-serif italic text-[#4B753A] font-medium tracking-wide">
            Good Food. Good Health. Good Life.
          </p>
          <LeafSprigIcon className="w-8 h-8 text-[#4B753A]" />
        </div>
      </div>
    </section>
  );
}
