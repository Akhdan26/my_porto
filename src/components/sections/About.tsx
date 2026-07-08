"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutText } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="About"
          title="I build enterprise backend systems."
          description="Not websites. Not landing pages. Backend infrastructure that handles thousands of users, millions of records, and mission-critical workflows."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="space-y-4 text-text-tertiary leading-relaxed text-base sm:text-lg">
            {aboutText.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "40K+", label: "Users Served" },
              { value: "16+", label: "Enterprise Modules" },
              { value: "5", label: "Production Systems" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-border rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                <div className="text-xs text-text-tertiary mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
