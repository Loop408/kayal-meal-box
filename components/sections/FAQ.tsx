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
        Kayal Meal Box is a <strong>home-style tiffin and meal subscription service</strong> in Hyderabad. 
        You choose a plan (2-day trial, weekly, or monthly), select lunch, dinner, or both, 
        add your delivery address, and we deliver <strong>freshly prepared meals daily</strong> in hygienic steel tiffins everyday.
      </>
    )
  },
  {
    question: "Can I try Kayal Meal Box before committing to a long-term plan?",
    answer: (
      <>
        Yes! We offer a <strong>2-day trial plan for ₹349</strong> and one-week trial plans 
        so you can experience the home-style taste and service quality before subscribing to our monthly plans.
      </>
    )
  },
  {
    question: "Can I pause or resume my subscription anytime?",
    answer: (
      <>
        Absolutely. If you are travelling or want to skip meals, you can <strong>pause your subscription</strong> by 
        contacting us on WhatsApp. Your remaining days will be carried forward.
      </>
    )
  },
  {
    question: "Can I change my delivery address after subscribing?",
    answer: (
      <>
        Yes, you can change your delivery address by notifying us. You can even set 
        <strong>multiple delivery addresses</strong> — for example, office for weekday lunch and home for dinner/weekends.
      </>
    )
  },
  {
    question: "What type of cuisine does Kayal Meal Box offer?",
    answer: (
      <>
        We specialize in authentic, <strong>home-style South Indian and Kerala cuisine</strong>. 
        Our menu features traditional items like Veg Meals, Puttu + Kadala Curry, Appam/Parotta with curry, 
        Tea + Pazhampori, and our Saturday special Biriyani.
      </>
    )
  },
  {
    question: "How do you ensure hygiene, food safety, and tiffin cleanliness?",
    answer: (
      <>
        We maintain strict hygiene protocols in our kitchen. All meals are <strong>cooked fresh daily</strong> with 
        premium ingredients, and we deliver them in reusable, <strong>professionally sanitized steel tiffins</strong>, 
        completely avoiding plastic.
      </>
    )
  },
  {
    question: "Where do you currently provide tiffin service in Hyderabad?",
    answer: (
      <>
        We deliver across <strong>Nallagandla, Gopanpalle, and surrounding nearby residential and office areas</strong> in Hyderabad.
      </>
    )
  },
  {
    question: "Can I subscribe for only lunch or only dinner?",
    answer: (
      <>
        Yes, we have flexible plans including <strong>Lunch Only, Dinner Only, Lunch + Dinner</strong>, and 
        the <strong>Full Meal Plan</strong> (Lunch + Tea Snacks + Dinner) to match your schedule.
      </>
    )
  },
  {
    question: "What are your delivery timings?",
    answer: (
      <>
        <strong>Lunch</strong> is delivered between 12:00 PM – 3:00 PM, 
        <strong>Tea Snacks</strong> from 4:30 PM – 6:30 PM, and 
        <strong>Dinner</strong> from 7:00 PM – 9:30 PM.
      </>
    )
  },
  {
    question: "Do you charge any delivery fee or tiffin deposit?",
    answer: (
      <>
        Doorstep delivery is <strong>completely free</strong>. We do not charge a delivery fee, 
        but we expect the steel tiffin from the previous delivery to be returned when the next meal is delivered.
      </>
    )
  },
  {
    question: "How do I return the tiffin after finishing my meal?",
    answer: (
      <>
        Simply wash the steel tiffin lightly and <strong>hand it back to our delivery partner</strong> during your next meal delivery. 
        It is a simple swap system!
      </>
    )
  },
  {
    question: "What does \"multiple delivery addresses\" mean?",
    answer: (
      <>
        It means you can have your lunch delivered to your workspace/office and your dinner or weekend meals 
        delivered to your residential address, keeping your meal plan aligned with your routine.
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
          <span className="font-extrabold text-[#0B0C10] text-sm md:text-[15px] leading-snug">
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
              <div className="px-4 pb-4 md:px-5 md:pb-5 pt-1 text-xs md:text-sm text-[#0B0C10]/85 font-medium leading-relaxed">
                {item.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-[#0B0C10] tracking-tight">
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
          <h3 className="text-lg md:text-xl font-extrabold text-[#0B0C10]">
            Still have a Question?
          </h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-[#0B0C10] hover:bg-black text-white font-extrabold text-sm rounded-full transition-all shadow-md active:scale-95 text-center"
          >
            Contact Us Now
          </a>
        </div>

      </div>
    </section>
  );
}
