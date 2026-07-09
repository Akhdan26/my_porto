"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { experiences } from "@/lib/data";

export function ProfessionalExperience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Professional Experience"
          title="Where I have delivered enterprise software."
          description="Every role involved solving real business problems through software — from government cybersecurity platforms to enterprise operational systems."
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-surface hover:border-border-strong hover:bg-surface-raised p-6 sm:p-8 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-accent mt-1">
                    {exp.role}
                    {exp.designation !== exp.role && (
                      <span className="text-text-tertiary font-normal">
                        {" "}
                        — {exp.designation}
                      </span>
                    )}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-text-tertiary whitespace-nowrap">
                    {exp.period}
                  </span>
                  <p className="text-xs text-text-tertiary/70 mt-0.5">
                    {exp.location}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1.5">
                  Business Domain
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {exp.businessDomain}
                </p>
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1.5">
                  Engineering Impact
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {exp.engineeringImpact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.coreTechnologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
