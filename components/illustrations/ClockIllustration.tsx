"use client";

import { motion } from "framer-motion";

interface ClockIllustrationProps {
  type: "sun" | "tea" | "moon";
}

export function ClockIllustration({ type }: ClockIllustrationProps) {
  const accent =
    type === "sun" ? "#F4A261" : type === "tea" ? "#2F6B45" : "#3B7DD8";

  return (
    <svg viewBox="0 0 140 140" className="mx-auto h-36 w-36" aria-hidden>
      <circle cx="70" cy="70" r="55" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="2" />
      <circle cx="70" cy="70" r="45" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="1.5" />
      {type === "sun" && (
        <>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="70"
              y1="20"
              x2="70"
              y2="28"
              stroke="#F4A261"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${deg} 70 70)`}
            />
          ))}
          <circle cx="70" cy="70" r="18" fill="#F4A261" opacity="0.5" />
        </>
      )}
      {type === "tea" && (
        <>
          <path
            d="M55 85 Q70 75 85 85 L82 95 H58 Z"
            fill="#F6EEDB"
            stroke="#2F6B45"
            strokeWidth="1.5"
          />
          <path d="M85 88 h12 q5 0 5 8 v2 h-17" fill="none" stroke="#2F6B45" strokeWidth="1.5" />
          <motion.path
            d="M65 70 Q68 55 72 70"
            stroke="#2F6B45"
            strokeWidth="1.5"
            fill="none"
            animate={{ y: [0, -4, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </>
      )}
      {type === "moon" && (
        <>
          <path
            d="M70 30 A25 25 0 1 0 70 80 A18 18 0 1 1 70 30"
            fill="#3B7DD8"
            opacity="0.4"
          />
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={50 + i * 20}
              cy={95 + (i % 2) * 5}
              r="1.5"
              fill="#3B7DD8"
              opacity="0.5"
            />
          ))}
        </>
      )}
      <line x1="70" y1="70" x2="70" y2="45" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <line x1="70" y1="70" x2="88" y2="70" stroke="#2F6B45" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="70" cy="70" r="4" fill="#2F6B45" />
    </svg>
  );
}
