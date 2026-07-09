"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/data";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqList: FAQItem[] = [
  {
    question: "What is Kayal Meal Box and how does the meal subscription work?",
    answer: (
      <>
        Kayal Meal Box offers authentic Kerala home-style meals through weekly and monthly subscription plans in Hyderabad. Simply choose your preferred plan (Weekly or Monthly), select Lunch, Dinner, or Full Meal Plan, complete your booking, and enjoy freshly prepared meals with free home delivery within 3 km or visit us for our dine-in facility.
      </>
    )
  },
  {
    question: "Where do you currently provide meal delivery in Hyderabad?",
    answer: (
      <>
        We currently provide home delivery across Nallagandla, Gopanpalle, and nearby residential and office areas in Hyderabad. Free delivery is available within a 3 km radius of our restaurant.
      </>
    )
  },
  {
    question: "Can I try Kayal Meal Box before committing to a long-term plan?",
    answer: (
      <>
        Yes! We offer a one-week trial plan so you can experience the quality, taste, and convenience of our Kerala home-style meals before subscribing to a monthly plan.
      </>
    )
  },
  {
    question: "Can I pause or resume my subscription anytime?",
    answer: (
      <>
        Absolutely. Our plans offer flexible validity. The 30-day monthly plan can be used within 45 days, and the 7-day weekly plan within 10 days, giving you the flexibility to skip meals whenever required. For assistance, simply contact us on WhatsApp.
      </>
    )
  },
  {
    question: "What are your delivery and dine-in timings?",
    answer: (
      <>
        We serve Lunch from 12:00 PM to 3:00 PM, Tea & Snacks from 4:30 PM to 6:30 PM, and Dinner from 7:00 PM to 9:00 PM. Both home delivery and dine-in are available during these timings.
      </>
    )
  },
  {
    question: "Do you charge any delivery or parcel fee?",
    answer: (
      <>
        Home delivery is free within 3 km. A small parcel charge applies for takeaway and home delivery. There are no additional charges for dine-in.
      </>
    )
  },
  {
    question: "What type of cuisine does Kayal Meal Box offer?",
    answer: (
      <>
        Kayal Meal Box serves authentic Kerala home-style cuisine with a variety of freshly prepared meals, including Veg Meals, Non Veg Meals, Puttu, Appam, Parotta with Veg and Non Veg curries, Tea & Snacks, and our Saturday Special Biriyani/Meals. We also offer both dine-in and home delivery options.
      </>
    )
  }
];

export function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqList[0].question);

  const midPoint = Math.ceil(faqList.length / 2);
  const leftColItems = faqList.slice(0, midPoint);
  const rightColItems = faqList.slice(midPoint);

  const renderFAQCard = (item: FAQItem, idx: number) => {
    const isOpen = openQuestion === item.question;
    return (
      <div 
        key={item.question}
        className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
          isOpen 
            ? 'border-2 border-[#FFC503] bg-[#FFFBF0]/25 shadow-md' 
            : 'border-gray-200 bg-white hover:border-[#FFC503]/50 shadow-sm'
        }`}
      >
        <button
          type="button"
          className="w-full flex items-center justify-between p-4 md:p-5 text-left gap-4 cursor-pointer focus:outline-none"
          onClick={() => setOpenQuestion(isOpen ? null : item.question)}
          aria-expanded={isOpen}
        >
          <span className="font-extrabold text-[#0B0C10] text-base md:text-[18px] leading-snug">
            {item.question}
          </span>
          <span className="text-gray-500 flex-shrink-0 transition-transform duration-200">
            {isOpen ? (
              <svg className="w-4 h-4 text-[#0B0C10]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </span>
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 md:px-5 md:pb-5 pt-1 text-[14px] text-[#0B0C10]/85 font-medium leading-[1.6]">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faq" className="py-20 md:py-[100px] lg:py-[120px] bg-white font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-black text-[#0B0C10] tracking-tight leading-[1.2]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColItems.map((item, idx) => renderFAQCard(item, idx))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColItems.map((item, idx) => renderFAQCard(item, idx + midPoint))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="text-center mt-16 space-y-4">
          <h3 className="text-2xl md:text-[28px] lg:text-[32px] leading-[1.3] font-extrabold text-[#0B0C10]">
            Still have a Question?
          </h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 h-12 bg-[#0B0C10] hover:bg-black text-white font-extrabold text-base rounded-[12px] transition-all shadow-md active:scale-95 text-center"
          >
            Contact Us Now
          </a>
        </div>

      </div>
    </section>
  );
}
