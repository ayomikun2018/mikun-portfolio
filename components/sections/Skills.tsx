"use client";

import { technicalSkills, softSkills } from "@/data/portfolio";
import FadeUp from "@/components/ui/FadeUp";
import Badge from "@/components/ui/Badge";
import { Check } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent">
            Skills
          </span>
          <h2 className="mb-12 font-display text-3xl font-bold tracking-tighter text-navy dark:text-white sm:text-4xl">
            What I work with.
          </h2>
        </FadeUp>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Technical */}
          <FadeUp delay={0.1}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-navy/40 dark:text-white/40">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </FadeUp>

          {/* Soft */}
          <FadeUp delay={0.2}>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-navy/40 dark:text-white/40">
              Soft Skills
            </h3>
            <ul className="space-y-3">
              {softSkills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-3 text-sm text-navy/70 dark:text-white/60"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand dark:bg-brand/20">
                    <Check size={12} />
                  </div>
                  {skill.name}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
