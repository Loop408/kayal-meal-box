"use client";

import { ClockIllustration } from "@/components/illustrations/ClockIllustration";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deliveryTimings } from "@/lib/data";
import { motion } from "framer-motion";

export function DeliveryTimings() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
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
                <h3 className="text-xl font-bold text-text mt-4 mb-2">
                  {slot.label}
                </h3>
                <p className="text-lg font-semibold text-primary">{slot.time}</p>
              </motion.div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
