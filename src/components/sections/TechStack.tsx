"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";

function TechCategory({
  title,
  items,
  delay,
}: {
  title: string;
  items: { name: string; level: string }[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="font-mono text-xs font-medium tracking-widest uppercase text-text-tertiary mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-surface border border-border hover:border-border-strong transition-colors duration-200 group"
          >
            <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
              {item.name}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {["expert", "advanced", "intermediate"].map((lvl) => {
                  const active =
                    (lvl === "expert" && item.level === "expert") ||
                    (lvl === "advanced" &&
                      (item.level === "expert" || item.level === "advanced")) ||
                    (lvl === "intermediate" &&
                      (item.level === "expert" ||
                        item.level === "advanced" ||
                        item.level === "intermediate"));
                  return (
                    <div
                      key={lvl}
                      className={`h-1 w-3 rounded-full ${
                        active ? "bg-accent" : "bg-border"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Tech Stack"
          title="Backend-first engineering toolkit."
          description="Organized by domain — not by trend. These are the technologies I use to build, deploy, and maintain production enterprise systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechCategory title="Backend" items={techStack.backend} delay={0} />
          <TechCategory title="Database" items={techStack.database} delay={0.1} />
          <TechCategory title="Infrastructure" items={techStack.infrastructure} delay={0.2} />
          <TechCategory title="Architecture" items={techStack.architecture} delay={0.3} />
          <TechCategory title="Supporting" items={techStack.supporting} delay={0.4} />
        </div>
      </div>
    </section>
  );
}
