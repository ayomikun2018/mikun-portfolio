"use client";

import { experiences } from "@/data/portfolio";
import FadeUp from "@/components/ui/FadeUp";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white/60 py-24 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent">
            Experience
          </span>
          <h2 className="mb-12 font-display text-3xl font-bold tracking-tighter text-navy dark:text-white sm:text-4xl">
            Where I&apos;ve worked.
          </h2>
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-navy/10 dark:bg-white/10 md:left-8" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-white dark:bg-navy md:left-6.5" />

                <div className="rounded-xl border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-navy-light/30">
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-navy dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-medium text-brand">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-navy/40 dark:text-white/40">
                      {exp.dateRange}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="flex gap-2 text-sm leading-relaxed text-navy/60 dark:text-white/50"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
