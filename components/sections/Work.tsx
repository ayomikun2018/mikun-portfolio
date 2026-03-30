"use client";

import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeUp from "@/components/ui/FadeUp";

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent">
            Selected Work
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tighter text-navy dark:text-white sm:text-4xl">
            Things I&apos;ve built.
          </h2>
          <p className="mb-12 max-w-xl text-base text-navy/50 dark:text-white/40">
            A mix of client projects and products I&apos;ve shipped — from
            healthcare AI to fintech platforms.
          </p>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
