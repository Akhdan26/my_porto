"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Experience"
          title="Where I've shipped enterprise software."
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 sm:pl-12"
              >
                <div className="absolute left-0 sm:left-[3px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-accent/20" />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {exp.company}
                  </h3>
                  <span className="text-sm font-mono text-text-tertiary whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-accent mb-3">
                  {exp.role} &mdash; {exp.location}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="mt-[5px] block w-1.5 h-1.5 rounded-full bg-border flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
