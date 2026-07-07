"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function AnimatedCharacter() {
  const [isBoy, setIsBoy] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBoy((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* A warm background circle like in the screenshot */}
      <div className="absolute inset-0 bg-[#FFFDF8] rounded-full scale-100 z-0 shadow-inner border border-primary/10" />
      <div className="absolute inset-4 bg-[#F5E8D3] rounded-full scale-100 z-0 opacity-70" />
      
      <AnimatePresence mode="wait">
        {isBoy ? (
          <motion.div
            key="boy"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full h-full"
          >
            <Image 
              src="/illustrations/boy_eating.png" 
              alt="Boy eating meal" 
              fill 
              className="object-contain drop-shadow-lg p-6"
            />
          </motion.div>
        ) : (
          <motion.div
            key="girl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full h-full"
          >
            <Image 
              src="/illustrations/girl_eating.png" 
              alt="Girl eating meal" 
              fill 
              className="object-contain drop-shadow-lg p-6"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
