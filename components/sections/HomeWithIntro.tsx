"use client";

import React, { useState, useEffect } from "react";
import { CinematicIntro } from "@/components/sections/CinematicIntro";

interface HomeWithIntroProps {
  children: React.ReactNode;
}

export function HomeWithIntro({ children }: HomeWithIntroProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Show intro on every reload
    setShowIntro(true);
  }, []);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && (
        <CinematicIntro onComplete={handleIntroComplete} />
      )}
      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: "opacity 0.8s ease",
          pointerEvents: introComplete ? "all" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
