"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { WHATSAPP_URL } from "@/lib/data";
import { motion } from "framer-motion";
import React from "react";

interface CardItem {
  title: string;
  description: string;
  rotation: string;
  icon: React.ReactNode;
}

const cardItems: CardItem[] = [
  {
    title: "Home-style & healthy meals",
    description: "Freshly cooked home-style meals with quality ingredients for daily nutrition.",
    rotation: "-rotate-[1.5deg] hover:rotate-0",
    icon: (
      <img src="/icons/home_meal.png" alt="Home meal" className="w-9 h-9 object-contain mix-blend-multiply drop-shadow-sm" />
    ),
  },
  {
    title: "Affordable meal plans",
    description: "Affordable meal plans with good portions for students and professionals.",
    rotation: "rotate-[1.5deg] hover:rotate-0",
    icon: (
      <img src="/icons/affordable.png" alt="Affordable" className="w-9 h-9 object-contain mix-blend-multiply drop-shadow-sm" />
    ),
  },
  {
    title: "Set Multiple Delivery Addresses",
    description: "For example - office for weekday lunch, home for dinner, and home for weekends",
    rotation: "-rotate-[2deg] hover:rotate-0",
    icon: (
      <img src="/icons/addresses.png" alt="Map pin" className="w-9 h-9 object-contain mix-blend-multiply drop-shadow-sm" />
    ),
  },
  {
    title: "Pause Subscription Anytime",
    description: "Pause or resume your meal subscription anytime without hassle.",
    rotation: "rotate-[2deg] hover:rotate-0",
    icon: (
      <img src="/icons/pause.png" alt="Pause" className="w-9 h-9 object-contain mix-blend-multiply drop-shadow-sm" />
    ),
  },
  {
    title: "Comfortable Dine-In",
    description: "Enjoy authentic Kerala food in a hygienic setting.",
    rotation: "-rotate-[1deg] hover:rotate-0",
    icon: (
      <img src="/icons/dine_in.png" alt="Dine in" className="w-9 h-9 object-contain mix-blend-multiply drop-shadow-sm" />
    ),
  },
];

const PushPin = () => (
  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-20 w-6 h-7 select-none pointer-events-none flex flex-col items-center">
    {/* Pin Head */}
    <div className="w-4.5 h-4.5 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 shadow-[0_2px_4px_rgba(0,0,0,0.35)]" />
    {/* Pin Body / Pin Point */}
    <div className="w-1.5 h-2.5 bg-gradient-to-b from-amber-600 to-amber-700 shadow-[0_1px_2px_rgba(0,0,0,0.3)] -mt-0.5" />
  </div>
);

export function WhyChooseUs() {
  return (
    <section id="features" className="py-20 md:py-[100px] lg:py-[120px] bg-[#FFFBF0] overflow-hidden relative">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 relative z-10">
        {/* Main Content Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          <div className="lg:col-span-2">
            <AnimateIn>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold text-[#0B0C10] tracking-tight leading-[1.2] mb-6">
                Why Choose <span className="text-[#FFC503] relative inline-block">Kayal Meal Box<span className="absolute bottom-1 left-0 w-full h-1 bg-[#FFC503]/30 rounded-full" /></span> ?
              </h2>
              <p className="text-base md:text-[18px] text-text-muted leading-[1.6] max-w-3xl">
                Kayal Meal Box is designed for people who want reliable, affordable, and hygienic home-style food without the daily effort of cooking. Our flexible meal subscriptions, fresh preparation, and timely delivery make us the preferred tiffin service for students, professionals, and families.
              </p>
            </AnimateIn>
          </div>

          <div className="flex flex-row sm:flex-col lg:flex-row gap-4 justify-start lg:justify-end items-center w-full">
            <AnimateIn className="w-full sm:w-auto">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 h-12 rounded-[12px] bg-[#FFC503] text-[#0B0C10] font-extrabold text-base tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
              >
                Subscribe Now
              </a>
            </AnimateIn>
            <AnimateIn className="w-full sm:w-auto" delay={0.1}>
              <a
                href="#menu"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 h-12 rounded-[12px] bg-[#0B0C10] text-white font-extrabold text-base tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all text-center"
              >
                View Menu
              </a>
            </AnimateIn>
          </div>
        </div>

        {/* Cards Side-by-Side Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-6">
          {cardItems.map((item, idx) => (
            <AnimateIn key={idx} delay={idx * 0.08}>
              <motion.div
                className={`relative bg-white border border-[#0B0C10]/5 rounded-[20px] p-5 shadow-md transition-all duration-300 ${item.rotation} h-full flex flex-col justify-between`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Push Pin decoration */}
                <PushPin />

                {/* Inner Border Container */}
                <div className="border border-[#FFC503]/50 rounded-[16px] p-4 flex flex-col items-center text-center h-full">
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-[14px] bg-[#FFFBF0] border border-[#FFC503]/70 flex items-center justify-center text-[#FFC503] mb-4 shadow-sm">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-[#0B0C10] text-base md:text-[18px] leading-[1.3] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-text-muted leading-[1.6] font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
