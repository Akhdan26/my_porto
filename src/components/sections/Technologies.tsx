"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

function TechGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="font-mono text-xs font-medium tracking-widest uppercase text-text-tertiary mb-5">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="py-2.5 px-3 rounded-lg bg-surface border border-border hover:border-border-strong transition-colors duration-200"
          >
            <span className="text-sm font-medium text-text-secondary">
              {item}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Technologies() {
  return (
    <section id="technologies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Technologies"
          title="The tools I use — organized by domain, not by trend."
          description="These technologies support my engineering practice. They are means to an end: reliable, maintainable software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechGroup title="Backend" items={techStack.backend} delay={0} />
          <TechGroup title="Database" items={techStack.database} delay={0.1} />
          <TechGroup title="Infrastructure" items={techStack.infrastructure} delay={0.2} />
          <TechGroup title="Architecture" items={techStack.architecture} delay={0.3} />
          <TechGroup title="Frontend" items={techStack.frontend} delay={0.4} />
        </div>
      </div>
    </section>
  );
}
