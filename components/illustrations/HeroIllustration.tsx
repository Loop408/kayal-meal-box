"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 480 420" fill="none" className="w-full h-auto" aria-hidden>
        {/* Background blob */}
        <ellipse cx="240" cy="210" rx="200" ry="180" fill="#F6EEDB" opacity="0.6" />

        {/* Kitchen backdrop */}
        <rect x="80" y="120" width="200" height="140" rx="16" fill="#FFFDF8" stroke="#2F6B45" strokeWidth="2" />
        <rect x="100" y="140" width="60" height="50" rx="8" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="1.5" />
        <circle cx="130" cy="165" r="12" fill="#F4A261" opacity="0.6" />
        <path d="M110 200h40" stroke="#2F6B45" strokeWidth="2" strokeLinecap="round" />

        {/* Grandmother cooking */}
        <circle cx="160" cy="200" r="28" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="2" />
        <path d="M140 195 Q160 175 180 195" fill="#2C2C2C" />
        <ellipse cx="160" cy="240" rx="35" ry="40" fill="#2F6B45" />
        <path d="M125 250 L160 220 L195 250" fill="#F4A261" stroke="#2F6B45" strokeWidth="1.5" />
        {/* Stirring arm */}
        <path d="M195 230 Q220 210 235 195" stroke="#FFDAB9" strokeWidth="8" strokeLinecap="round" fill="none" />
        <line x1="235" y1="195" x2="250" y2="180" stroke="#2F6B45" strokeWidth="3" strokeLinecap="round" />

        {/* Steam */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M${220 + i * 15} 170 Q${225 + i * 15} 150 ${220 + i * 15} 130`}
            stroke="#2F6B45"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Tiffin boxes */}
        <rect x="300" y="260" width="50" height="35" rx="6" fill="#2F6B45" />
        <rect x="305" y="255" width="40" height="8" rx="3" fill="#245234" />
        <rect x="310" y="230" width="50" height="30" rx="6" fill="#F4A261" />
        <rect x="315" y="225" width="40" height="8" rx="3" fill="#e8924f" />

        {/* Delivery person */}
        <circle cx="360" cy="180" r="22" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="2" />
        <rect x="338" y="200" width="44" height="50" rx="10" fill="#3B7DD8" />
        <rect x="350" y="175" width="20" height="8" rx="4" fill="#2F6B45" />
        <motion.g
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <rect x="380" y="210" width="30" height="25" rx="4" fill="#F6EEDB" stroke="#2F6B45" strokeWidth="1.5" />
        </motion.g>

        {/* Happy family eating */}
        <g transform="translate(320, 300)">
          <circle cx="0" cy="0" r="16" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="1.5" />
          <circle cx="30" cy="5" r="14" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="1.5" />
          <circle cx="60" cy="0" r="16" fill="#FFDAB9" stroke="#2F6B45" strokeWidth="1.5" />
          <path d="M-8 8 Q0 16 8 8" stroke="#2F6B45" strokeWidth="1.5" fill="none" />
          <path d="M22 13 Q30 21 38 13" stroke="#2F6B45" strokeWidth="1.5" fill="none" />
          <path d="M52 8 Q60 16 68 8" stroke="#2F6B45" strokeWidth="1.5" fill="none" />
        </g>

        {/* Floating vegetables */}
        <motion.g
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <ellipse cx="100" cy="100" rx="14" ry="10" fill="#2F6B45" />
          <circle cx="400" cy="120" r="12" fill="#F4A261" />
        </motion.g>
        <motion.g
          animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        >
          <ellipse cx="420" cy="280" rx="10" ry="14" fill="#2F6B45" opacity="0.8" />
          <circle cx="70" cy="320" r="10" fill="#F4A261" opacity="0.8" />
        </motion.g>

        {/* Leaves */}
        <path d="M50 180 Q30 160 50 140 Q70 160 50 180" fill="#2F6B45" opacity="0.5" />
        <path d="M430 200 Q450 180 430 160 Q410 180 430 200" fill="#2F6B45" opacity="0.5" />
      </svg>
    </motion.div>
  );
}
