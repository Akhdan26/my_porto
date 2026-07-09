"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertise } from "@/lib/data";

export function CoreExpertise() {
  return (
    <section id="expertise" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Core Expertise"
          title="Engineering competencies — not just technologies."
          description="These are the areas where I deliver value. Technologies change. These capabilities compound."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((item, i) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-surface hover:border-border-strong hover:bg-surface-raised p-6 transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {item.area}
              </h3>
              <p className="text-sm text-text-tertiary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
