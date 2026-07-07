"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { WHATSAPP_URL } from "@/lib/data";
import { AnimatedCharacter } from "@/components/illustrations/AnimatedCharacter";
import Link from "next/link";

const SpeechBubble = ({ text, className, tailCorner }: { text: React.ReactNode, className?: string, tailCorner: 'br' | 'tr' | 'bl' | 'tl' }) => {
  const corners = {
    'br': 'rounded-[2rem] rounded-br-[0.25rem]',
    'tr': 'rounded-[2rem] rounded-tr-[0.25rem]',
    'bl': 'rounded-[2rem] rounded-bl-[0.25rem]',
    'tl': 'rounded-[2rem] rounded-tl-[0.25rem]',
  };
  return (
    <div className={`relative bg-white border-[2.5px] border-text px-6 py-4 font-bold text-[15px] md:text-[15px] leading-snug text-center max-w-[220px] shadow-[4px_4px_0px_0px_rgba(45,45,45,1)] z-20 ${corners[tailCorner]} ${className}`}>
      {text}
    </div>
  )
}

export function PainPoints() {
  return (
    <section className="pt-6 pb-16 md:pt-10 md:pb-24 bg-[#FFFDF8] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[32px] md:text-5xl font-extrabold text-text tracking-tight leading-tight">
            Do these food problems<br className="hidden md:block" /> sound familiar?
          </h2>
        </div>

        {/* Animated Graphic & Bubbles Section */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center mb-16 md:mb-24">
          
          <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] flex items-center justify-center z-10 my-8 md:my-0">
            <AnimatedCharacter />
          </div>

          {/* Desktop Absolute Bubbles */}
          <div className="hidden md:block absolute top-4 left-4 xl:-left-12">
            <AnimateIn delay={0.1}>
              <SpeechBubble 
                text={<>Unhygienic, 👎<br/>Low Quality Meals</>} 
                tailCorner="br" 
                className="rotate-[-2deg]"
              />
            </AnimateIn>
          </div>

          <div className="hidden md:block absolute top-10 right-4 xl:-right-12">
            <AnimateIn delay={0.2}>
              <SpeechBubble 
                text={<>No time or energy<br/>to Cook 🕐</>} 
                tailCorner="bl" 
                className="rotate-[3deg]"
              />
            </AnimateIn>
          </div>

          <div className="hidden md:block absolute bottom-8 left-0 xl:-left-16">
            <AnimateIn delay={0.3}>
              <SpeechBubble 
                text={<>Same boring mess<br/>menu every day 🙁</>} 
                tailCorner="tr" 
                className="rotate-[1deg]"
              />
            </AnimateIn>
          </div>

          <div className="hidden md:block absolute bottom-12 right-0 xl:-right-16">
            <AnimateIn delay={0.4}>
              <SpeechBubble 
                text={<>Daily Ordering 💸<br/>is too Expensive</>} 
                tailCorner="tl" 
                className="rotate-[-1deg]"
              />
            </AnimateIn>
          </div>
          
          {/* Mobile Bubbles Grid */}
          <div className="grid grid-cols-1 gap-5 md:hidden w-full relative z-20 -mt-4">
             <AnimateIn delay={0.1}>
               <SpeechBubble text={<>Unhygienic, 👎<br/>Low Quality Meals</>} tailCorner="bl" className="mx-auto" />
             </AnimateIn>
             <AnimateIn delay={0.2}>
               <SpeechBubble text={<>No time or energy<br/>to Cook 🕐</>} tailCorner="br" className="mx-auto" />
             </AnimateIn>
             <AnimateIn delay={0.3}>
               <SpeechBubble text={<>Same boring mess<br/>menu every day 🙁</>} tailCorner="tl" className="mx-auto" />
             </AnimateIn>
             <AnimateIn delay={0.4}>
               <SpeechBubble text={<>Daily Ordering 💸<br/>is too Expensive</>} tailCorner="tr" className="mx-auto" />
             </AnimateIn>
          </div>
        </div>

        {/* Description & Buttons */}
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn delay={0.5}>
            <p className="text-[15px] md:text-[17px] text-text-muted mb-6 leading-relaxed max-w-3xl mx-auto">
              Tired of unhygienic restaurant food? Is your mess serving the same boring menu every day? Daily ordering through food delivery apps feels expensive? And cooking daily is simply exhausting?
            </p>
            <p className="text-[16px] md:text-[18px] text-text font-bold mb-10 leading-relaxed max-w-3xl mx-auto">
              <span className="text-primary font-extrabold">Kayal Meal Box</span> is built for busy professionals, students, and families who want reliable, affordable home-style tiffin service without the stress of daily cooking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-text font-bold rounded-full transition-colors shadow-sm text-center text-lg"
              >
                Subscribe Now
              </a>
              <a 
                href="#menu"
                className="w-full sm:w-auto px-10 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full transition-colors shadow-sm text-center text-lg"
              >
                View Menu
              </a>
            </div>
          </AnimateIn>
        </div>

      </div>
    </section>
  );
}
