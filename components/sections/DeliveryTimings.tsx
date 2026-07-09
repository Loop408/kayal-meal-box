"use client";

import { ClockIllustration } from "@/components/illustrations/ClockIllustration";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deliveryTimings } from "@/lib/data";
import { motion } from "framer-motion";

export function DeliveryTimings() {
  return (
    <section className="py-20 md:py-[100px] lg:py-[120px] bg-secondary/30">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20">
        <SectionHeading
          eyebrow="Schedule"
          title="Delivery Timings"
          subtitle="We deliver fresh meals three times a day — right when you need them."
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {deliveryTimings.map((slot, i) => (
            <AnimateIn key={slot.label} delay={i * 0.1}>
              <motion.div
                className="rounded-[20px] bg-white p-8 text-center card-shadow border border-primary/5"
                whileHover={{ y: -6 }}
              >
                <ClockIllustration type={slot.icon} />
                <h3 className="text-2xl md:text-[28px] leading-[1.3] font-bold text-text mt-4 mb-2">
                  {slot.label}
                </h3>
                <p className="text-base md:text-[18px] font-semibold text-primary">{slot.time}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
