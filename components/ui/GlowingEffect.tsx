"use client";

import { motion } from "framer-motion";

interface GlowingEffectProps {
  className?: string;
}

export default function GlowingEffect({ className = "" }: GlowingEffectProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${className}`}
      style={{
        background:
          "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(30, 95, 232, 0.08), transparent 40%)",
      }}
    />
  );
}
