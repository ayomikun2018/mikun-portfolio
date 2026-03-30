"use client";

import { education, aboutText } from "@/data/portfolio";
import FadeUp from "@/components/ui/FadeUp";
import { Download, GraduationCap, Award, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white/60 py-24 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — text */}
          <FadeUp>
            <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent">
              About
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold tracking-tighter text-navy dark:text-white sm:text-4xl">
              Passionate about craft,
              <br />
              obsessed with detail.
            </h2>
            <p className="mb-8 leading-relaxed text-navy/60 dark:text-white/50">
              {aboutText}
            </p>
            <a
              href="/Ayomikun-Agbeja-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Download CV <Download size={16} />
            </a>
          </FadeUp>

          {/* Right — info card */}
          <FadeUp delay={0.2}>
            <div className="rounded-2xl border border-navy/10 bg-white p-6 dark:border-white/10 dark:bg-navy-light/30 lg:p-8">
              <div className="space-y-6">
                {/* Education */}
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-navy/40 dark:text-white/40">
                    <GraduationCap size={16} /> Education
                  </div>
                  {education
                    .filter((e) => e.institution === "Bowen University")
                    .map((e) => (
                      <div key={e.institution} className="mb-1">
                        <p className="font-medium text-navy dark:text-white">
                          {e.degree}
                        </p>
                        <p className="text-sm text-navy/50 dark:text-white/50">
                          {e.institution} &middot; {e.year}
                        </p>
                      </div>
                    ))}
                </div>

                <div className="h-px bg-navy/10 dark:bg-white/10" />

                {/* Certifications */}
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-navy/40 dark:text-white/40">
                    <Award size={16} /> Certifications
                  </div>
                  {education
                    .filter((e) => e.institution !== "Bowen University")
                    .map((e) => (
                      <div key={e.institution} className="mb-2">
                        <p className="font-medium text-navy dark:text-white">
                          {e.degree}
                        </p>
                        <p className="text-sm text-navy/50 dark:text-white/50">
                          {e.institution} &middot; {e.year}
                        </p>
                      </div>
                    ))}
                </div>

                <div className="h-px bg-navy/10 dark:bg-white/10" />

                {/* Currently */}
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-navy/40 dark:text-white/40">
                    <Briefcase size={16} /> Currently
                  </div>
                  <p className="font-medium text-navy dark:text-white">
                    Open to Full-Time &amp; Contract Roles
                  </p>
                  <p className="text-sm text-navy/50 dark:text-white/50">
                    Remote &middot; Available immediately
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
