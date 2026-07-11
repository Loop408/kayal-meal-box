"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface CinematicIntroProps {
  onComplete?: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const kayalRef = useRef<HTMLDivElement>(null);
  const keralaRef = useRef<HTMLDivElement>(null);
  const restaurantRef = useRef<HTMLDivElement>(null);
  const skipBtnRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      if (onComplete) onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set(leafRef.current, { y: -300, opacity: 0, rotation: -15, scale: 0.9 });
      gsap.set(".char-kayal", { opacity: 0, y: 12, scale: 0.95 });
      gsap.set(".char-kerala", { opacity: 0, y: 12, scale: 0.95 });
      gsap.set(".char-restaurant", { opacity: 0, y: 12, scale: 0.95 });
      gsap.set(skipBtnRef.current, { opacity: 0 });

      // Create timeline
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
      tlRef.current = tl;

      // Leaf falling, swaying, and bouncing
      tl.to(leafRef.current, {
        y: 0,
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1.2,
        ease: "bounce.out",
      });

      // Show skip button early
      tl.to(skipBtnRef.current, { opacity: 1, duration: 0.5 }, "-=0.5");

      // Text reveal - KAYAL
      tl.to(".char-kayal", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.07,
        ease: "power2.out",
      });

      // Pause before KERALA
      // Text reveal - KERALA
      tl.to(
        ".char-kerala",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out",
        },
        "+=0.2"
      );

      // Pause before RESTAURANT
      // Text reveal - RESTAURANT
      tl.to(
        ".char-restaurant",
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.07,
          ease: "power2.out",
        },
        "+=0.2"
      );

      // Hold for 0.8 seconds
      tl.to({}, { duration: 0.8 });

      // Exit transition
      tl.to(leafRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      }, "exit");

      tl.to(
        [".char-kayal", ".char-kerala", ".char-restaurant", skipBtnRef.current],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "exit"
      );

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power1.inOut",
      }, "exit+=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, [isClient, onComplete]);

  const handleSkip = () => {
    if (tlRef.current) {
      tlRef.current.progress(1); // Jump to end
    }
  };

  if (!isClient) return null;

  const splitText = (text: string, className: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`${className} inline-block`}
        style={{ whiteSpace: "pre" }}
      >
        {char === " " ? " " : char}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center font-sans pointer-events-auto bg-transparent"
    >
      {/* Background protector to block clicks underneath during intro, but transparent as requested */}
      <div className="absolute inset-0 bg-transparent" />

      {/* Banana Leaf Image */}
      <div
        ref={leafRef}
        className="relative w-64 h-64 md:w-80 md:h-80 mb-6 z-10"
      >
        <Image
          src="/illustrations/logointro.png"
          alt="Kayal Kerala Logo Intro"
          fill
          className="object-contain drop-shadow-xl"
          priority
          sizes="(max-width: 768px) 256px, 320px"
        />
      </div>

      {/* Text Reveal */}
      <div className="flex flex-col items-center z-10">
        <div className="flex space-x-[4px] md:space-x-[8px] mb-2 text-3xl md:text-5xl font-bold tracking-wider" style={{ color: "var(--primary, #094926)" }}>
          <div ref={kayalRef} className="flex">
            {splitText("KAYAL", "char-kayal")}
          </div>
          <div className="w-2 md:w-4" /> {/* Space between words */}
          <div ref={keralaRef} className="flex">
            {splitText("KERALA", "char-kerala")}
          </div>
        </div>

        <div
          ref={restaurantRef}
          className="flex space-x-[6px] md:space-x-[10px] text-lg md:text-2xl font-semibold tracking-[0.3em]"
          style={{ color: "var(--accent, #F4B301)" }}
        >
          {splitText("RESTAURANT", "char-restaurant")}
        </div>
      </div>

      {/* Skip button for quick access */}
      <button
        ref={skipBtnRef}
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-6 py-2 rounded-full text-sm font-medium transition-colors hover:bg-black/5 z-20"
        style={{
          color: "var(--primary, #094926)",
          border: "1px solid rgba(9, 73, 38, 0.2)",
        }}
      >
        Skip Intro ›
      </button>
    </div>
  );
}
