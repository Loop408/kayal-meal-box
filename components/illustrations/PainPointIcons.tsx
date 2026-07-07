"use client";

import { motion } from "framer-motion";

const icons = ["clock", "wallet", "hygiene"] as const;

interface PainPointIconProps {
  type: (typeof icons)[number];
}

export function PainPointIcon({ type }: PainPointIconProps) {
  return (
    <svg viewBox="0 0 120 100" className="h-24 w-full" aria-hidden>
      {type === "clock" && (
        <>
          <circle cx="60" cy="50" r="35" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="2" />
          <circle cx="60" cy="50" r="28" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="1.5" />
          <line x1="60" y1="50" x2="60" y2="30" stroke="#2F6B45" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="50" x2="72" y2="50" stroke="#F4A261" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="50" r="3" fill="#2F6B45" />
          <motion.path
            d="M30 75 Q60 90 90 75"
            stroke="#2F6B45"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            animate={{ pathLength: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </>
      )}
      {type === "wallet" && (
        <>
          <rect x="25" y="30" width="70" height="45" rx="10" fill="#F4A261" stroke="#2F6B45" strokeWidth="2" />
          <rect x="30" y="35" width="60" height="35" rx="6" fill="#FFFDF8" />
          <circle cx="75" cy="52" r="8" fill="#2F6B45" />
          <text x="60" y="58" textAnchor="middle" fill="#8B3A4A" fontSize="16" fontWeight="bold">
            ₹
          </text>
          <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <path d="M50 20 L55 10 L60 20" fill="#2F6B45" />
          </motion.g>
        </>
      )}
      {type === "hygiene" && (
        <>
          <ellipse cx="60" cy="55" rx="30" ry="25" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="2" />
          <path d="M45 45 Q60 30 75 45 L70 70 Q60 80 50 70 Z" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="1.5" />
          <line x1="50" y1="55" x2="70" y2="55" stroke="#8B3A4A" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="62" x2="65" y2="62" stroke="#8B3A4A" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
