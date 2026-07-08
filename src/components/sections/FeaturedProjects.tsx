"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Featured Projects"
          title="Enterprise systems I've built."
          description="Case studies focused on architecture, impact, and business outcomes — not just screenshots."
        />

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project, i) => {
            const isOpen = expanded === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  onClick={() => toggle(project.id)}
                  className={`group cursor-pointer rounded-2xl border ${
                    isOpen ? "border-border-strong bg-surface-raised" : "border-border bg-surface hover:border-border-strong hover:bg-surface-raised"
                  } p-6 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-tertiary mt-0.5">
                        {project.company}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 flex-shrink-0 text-text-tertiary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </motion.div>
                  </div>

                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {project.headline}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-5 border-t border-border mt-5">
                          <div>
                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                              Problem
                            </h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                              Solution
                            </h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {project.solution}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                              Impact
                            </h4>
                            <ul className="space-y-1.5">
                              {project.impact.map((item, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-text-secondary"
                                >
                                  <svg
                                    className="mt-0.5 flex-shrink-0 text-accent"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
