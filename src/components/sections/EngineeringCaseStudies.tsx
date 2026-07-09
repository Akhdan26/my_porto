"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/data";

export function EngineeringCaseStudies() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const toggle = (id: string) => setExpanded(expanded === id ? null : id);

  return (
    <section id="case-studies" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Engineering Case Studies"
          title="How I approach engineering problems."
          description="Each case study explains the business context, engineering decisions, and measurable outcomes — not just what was built, but why and how."
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
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div
                  onClick={() => toggle(project.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(project.id);
                    }
                  }}
                  className={`group cursor-pointer rounded-2xl border ${
                    isOpen
                      ? "border-border-strong bg-surface-raised"
                      : "border-border bg-surface hover:border-border-strong hover:bg-surface-raised"
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
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
                              Business Problem
                            </h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {project.businessProblem}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                              Engineering Approach
                            </h4>
                            <p className="text-sm text-text-secondary leading-relaxed">
                              {project.engineeringApproach}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                              Key Features
                            </h4>
                            <ul className="space-y-1.5">
                              {project.keyFeatures.map((item, j) => (
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

                          <div>
                            <h4 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2">
                              Technical Challenges
                            </h4>
                            <ul className="space-y-1.5">
                              {project.technicalChallenges.map((item, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-text-secondary"
                                >
                                  <span className="mt-1.5 block w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
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

                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tech.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 text-accent hover:bg-accent/15 px-4 py-2 text-sm font-medium transition-colors duration-200"
                              >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                  <polyline points="15 3 21 3 21 9" />
                                  <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Live Demo
                              </a>
                            )}
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 rounded-lg border border-border hover:border-border-strong bg-surface hover:bg-surface-raised px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-200"
                              >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                Source Code
                              </a>
                            )}
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
