"use client";

import { Project } from "@/types";
import Badge from "./Badge";
import GlowingEffect from "./GlowingEffect";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty(
        "--mouse-x",
        `${((e.clientX - rect.left) / rect.width) * 100}%`
      );
      e.currentTarget.style.setProperty(
        "--mouse-y",
        `${((e.clientY - rect.top) / rect.height) * 100}%`
      );
    },
    []
  );

  const isExternal = project.link && project.link !== "#";

  const CardWrapper = isExternal ? "a" : "div";
  const cardProps = isExternal
    ? {
        href: project.link,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={project.featured ? "md:col-span-2" : ""}
    >
      <CardWrapper
        {...cardProps}
        className={`group relative flex flex-col overflow-hidden rounded-2xl border border-navy/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/[0.08] dark:border-white/10 dark:bg-navy-light/50 ${
          isExternal ? "cursor-pointer" : ""
        } ${project.featured ? "md:flex-row" : ""}`}
        onMouseMove={handleMouseMove}
      >
        <GlowingEffect />

        {/* Project image */}
        {project.image && (
          <div
            className={`relative overflow-hidden bg-navy/[0.03] dark:bg-white/[0.03] ${
              project.featured
                ? "aspect-[16/10] md:aspect-auto md:w-1/2"
                : "aspect-[16/10]"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-brand/0 transition-colors duration-300 group-hover:bg-brand/[0.03]" />
          </div>
        )}

        {/* Content */}
        <div
          className={`relative z-10 flex flex-1 flex-col p-6 ${
            project.featured ? "md:p-8" : ""
          }`}
        >
          <div className="mb-3 flex items-start justify-between">
            <div>
              <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-accent">
                {project.year}
              </span>
              <h3 className="font-display text-xl font-bold tracking-tighter text-navy dark:text-white lg:text-2xl">
                {project.title}
              </h3>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-navy/10 text-navy/30 transition-all group-hover:border-brand group-hover:bg-brand group-hover:text-white dark:border-white/10 dark:text-white/30">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-navy/60 dark:text-white/50">
            {project.featured && project.longDescription
              ? project.longDescription
              : project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}
