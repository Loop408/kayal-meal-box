"use client";

import { motion } from "framer-motion";

export function BackwaterIllustration() {
  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 400 320" fill="none" className="w-full h-auto" aria-hidden>
        {/* Sky */}
        <rect width="400" height="200" fill="#F6EEDB" rx="20" />
        {/* Sun */}
        <circle cx="320" cy="60" r="30" fill="#F4A261" opacity="0.7" />

        {/* Backwater */}
        <path d="M0 180 Q100 160 200 180 T400 180 V320 H0 Z" fill="#2F6B45" opacity="0.25" />
        <path d="M0 200 Q100 185 200 200 T400 200 V320 H0 Z" fill="#2F6B45" opacity="0.35" />

        {/* Houseboat / kitchen */}
        <g transform="translate(120, 130)">
          <path d="M0 80 L160 80 L150 120 H10 Z" fill="#8B6914" stroke="#2F6B45" strokeWidth="2" />
          <rect x="20" y="30" width="120" height="55" rx="8" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="2" />
          <path d="M10 30 L80 0 L150 30" fill="#2F6B45" stroke="#2F6B45" strokeWidth="2" />
          <rect x="40" y="45" width="35" height="30" rx="4" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="1.5" />
          <circle cx="100" cy="58" r="12" fill="#F4A261" opacity="0.6" />
          <rect x="95" y="70" width="10" height="15" fill="#2F6B45" />
        </g>

        {/* Palm trees */}
        <g transform="translate(40, 100)">
          <rect x="-2" y="0" width="4" height="50" fill="#2F6B45" />
          <ellipse cx="0" cy="-5" rx="18" ry="8" fill="#2F6B45" transform="rotate(-25)" />
          <ellipse cx="0" cy="-5" rx="18" ry="8" fill="#2F6B45" transform="rotate(25)" />
        </g>
        <g transform="translate(340, 90)">
          <rect x="-2" y="0" width="4" height="55" fill="#2F6B45" />
          <ellipse cx="0" cy="-5" rx="20" ry="9" fill="#2F6B45" transform="rotate(-25)" />
          <ellipse cx="0" cy="-5" rx="20" ry="9" fill="#2F6B45" transform="rotate(25)" />
        </g>

        {/* Small boat */}
        <g transform="translate(280, 210)">
          <path d="M0 20 Q20 5 40 20 L35 35 H5 Z" fill="#F4A261" stroke="#2F6B45" strokeWidth="1.5" />
          <line x1="20" y1="5" x2="20" y2="20" stroke="#2F6B45" strokeWidth="2" />
        </g>

        {/* Steam from kitchen */}
        {[0, 1].map((i) => (
          <motion.path
            key={i}
            d={`M${160 + i * 20} 120 Q${165 + i * 20} 100 ${160 + i * 20} 85`}
            stroke="#2F6B45"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
