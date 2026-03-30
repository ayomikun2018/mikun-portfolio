"use client";

import { stats } from "@/data/portfolio";
import FadeUp from "@/components/ui/FadeUp";

export default function Stats() {
  return (
    <section className="border-y border-navy/[0.06] bg-white/80 py-8 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeUp key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-display text-3xl font-bold tracking-tighter text-brand lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-navy/50 dark:text-white/50">
                {stat.label}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
