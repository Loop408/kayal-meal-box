"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PlanValidity() {
  return (
    <section className="py-20 md:py-[100px] lg:py-[120px] bg-white font-sans relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <SectionHeading
          eyebrow="Flexible & Convenient"
          title="Plans for Your Comfort"
          subtitle="Delicious meals • Flexible validity • Peace of mind"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Monthly Plan Card */}
          <AnimateIn delay={0.1}>
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full transform transition-transform hover:-translate-y-2">
              <div className="bg-[#1a4023] py-5 px-6 text-center">
                <h3 className="text-white font-extrabold text-[20px] md:text-[24px] tracking-wide uppercase">
                  30 Days Monthly Plan
                </h3>
              </div>
              <div className="p-8 flex flex-col items-center flex-grow bg-[#fafcfb]">
                <div className="flex items-center gap-4 w-full mb-6">
                  <div className="h-px bg-gray-300 flex-grow"></div>
                  <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">Validity</span>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
                
                <h4 className="text-[#1a4023] font-black text-[32px] md:text-[40px] leading-none mb-8 tracking-tight">
                  UPTO 45 DAYS
                </h4>
                
                <div className="mb-8 text-[#1a4023]">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                  </svg>
                </div>
                
                <div className="bg-[#e4efe7] rounded-[16px] p-6 text-center w-full mt-auto">
                  <p className="text-[#1a4023] font-semibold text-base md:text-[18px] leading-[1.6]">
                    30 days of delicious meals with the flexibility to use within 45 days.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Weekly Plan Card */}
          <AnimateIn delay={0.2}>
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-xl overflow-hidden flex flex-col h-full transform transition-transform hover:-translate-y-2">
              <div className="bg-[#5c3a21] py-5 px-6 text-center">
                <h3 className="text-white font-extrabold text-[20px] md:text-[24px] tracking-wide uppercase">
                  7 Days Weekly Plan
                </h3>
              </div>
              <div className="p-8 flex flex-col items-center flex-grow bg-[#fffbfa]">
                <div className="flex items-center gap-4 w-full mb-6">
                  <div className="h-px bg-gray-300 flex-grow"></div>
                  <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">Validity</span>
                  <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
                
                <h4 className="text-[#5c3a21] font-black text-[32px] md:text-[40px] leading-none mb-8 tracking-tight">
                  UPTO 10 DAYS
                </h4>
                
                <div className="mb-8 text-[#5c3a21]">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"></path>
                  </svg>
                </div>
                
                <div className="bg-[#fcf4e8] rounded-[16px] p-6 text-center w-full mt-auto">
                  <p className="text-[#5c3a21] font-semibold text-base md:text-[18px] leading-[1.6]">
                    7 days of home-style meals with the flexibility to use within 10 days.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Bottom Banner */}
        <AnimateIn delay={0.3}>
          <div className="mt-12 max-w-4xl mx-auto bg-[#1a4023] rounded-full py-4 px-6 md:px-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 shadow-lg">
            <div className="flex-shrink-0 bg-white rounded-full p-2 text-[#1a4023]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p className="text-white font-bold text-base md:text-[20px] text-center md:text-left">
              Pause your plan anytime. Your remaining days are safe with us!
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
