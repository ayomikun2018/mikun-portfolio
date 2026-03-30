"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function             Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-brand/[0.04] blur-3xl dark:bg-brand/[0.08]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-3xl dark:bg-accent/[0.06]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Greeting line */}
          <motion.p
            variants={item}
            className="mb-4 flex items-center gap-2 text-base font-medium text-navy/50 dark:text-white/40 sm:text-lg"
          >
            <MapPin size={16} className="text-accent" />
            Lagos, Nigeria &middot; Open to remote
          </motion.p>

          {/* Name — big, bold, unmissable */}
          <motion.h1
            variants={item}
            className="mb-6 font-display text-5xl font-bold italic leading-[1.05] tracking-tighter text-navy dark:text-white sm:text-6xl lg:text-7xl"
          >
    
            <span className="text-brand">Ayomikun Agbeja.</span>
          </motion.h1>

          {/* One-liner — what you do, with personality */}
          <motion.h2
            variants={item}
            className="mb-6 font-display text-2xl font-bold leading-snug tracking-tight text-navy/80 dark:text-white/70 sm:text-3xl lg:text-4xl"
          >
            I build interfaces people{" "}
            <span className="italic text-accent">actually</span> enjoy using.
          </motion.h2>

          {/* Supporting copy */}
          <motion.p
            variants={item}
            className="mb-10 max-w-2xl text-base leading-relaxed text-navy/55 dark:text-white/45 sm:text-lg"
          >
            Front-end engineer with 4+ years crafting fast, accessible web apps
            in React, Next.js &amp; TypeScript. I care about the details — from
            smooth animations to clean component architecture — because good
            software should feel effortless.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/25"
            >
              See my work <ArrowDown size={16} />
            </a>
            <a
              href="/Ayomikun-Agbeja-CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-navy/5 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
            >
              Resume <Download size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
