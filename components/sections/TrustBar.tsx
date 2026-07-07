"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { trustItems } from "@/lib/data";
import { motion } from "framer-motion";

export function TrustBar() {
  return (
    <section className="relative -mt-8 pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustItems.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <motion.div
                className="rounded-[20px] bg-white p-6 card-shadow card-shadow-hover transition-shadow border border-primary/5"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-3xl mb-4 block" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
