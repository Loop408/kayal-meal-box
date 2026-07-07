"use client";

import { motion } from "framer-motion";

interface StepIllustrationProps {
  step: 1 | 2 | 3;
}

export function StepIllustration({ step }: StepIllustrationProps) {
  return (
    <svg viewBox="0 0 160 140" className="mx-auto h-32 w-32" aria-hidden>
      {step === 1 && (
        <>
          <rect x="30" y="20" width="100" height="90" rx="12" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="2" />
          <rect x="45" y="35" width="70" height="55" rx="6" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="1.5" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={50 + (i % 3) * 22}
              y={40 + Math.floor(i / 3) * 22}
              width="16"
              height="16"
              rx="3"
              fill={i === 2 ? "#F4A261" : "#2F6B45"}
              opacity={i === 2 ? 1 : 0.3}
            />
          ))}
          <rect x="55" y="100" width="50" height="20" rx="8" fill="#2F6B45" />
          <rect x="60" y="105" width="15" height="10" rx="2" fill="#F4A261" />
        </>
      )}
      {step === 2 && (
        <>
          <circle cx="80" cy="45" r="25" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="2" />
          <rect x="55" y="68" width="50" height="45" rx="12" fill="#2F6B45" />
          <path d="M55 85 Q80 70 105 85" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="1.5" />
          <ellipse cx="115" cy="90" rx="20" ry="12" fill="#F4A261" stroke="#2F6B45" strokeWidth="1.5" />
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M${100 + i * 8} 75 Q${105 + i * 8} 60 ${100 + i * 8} 50`}
              stroke="#2F6B45"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </>
      )}
      {step === 3 && (
        <>
          <motion.g animate={{ x: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <circle cx="70" cy="50" r="20" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="2" />
            <rect x="52" y="68" width="36" height="40" rx="8" fill="#3B7DD8" />
            <rect x="85" y="80" width="35" height="30" rx="6" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="1.5" />
            <rect x="90" y="75" width="25" height="8" rx="3" fill="#2F6B45" />
          </motion.g>
          <path d="M20 120 Q80 100 140 120" stroke="#2F6B45" strokeWidth="2" fill="none" opacity="0.3" strokeDasharray="6 4" />
          <rect x="120" y="60" width="30" height="40" rx="4" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="1.5" />
          <path d="M125 70 h20 M125 78 h15 M125 86 h18" stroke="#F4A261" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
