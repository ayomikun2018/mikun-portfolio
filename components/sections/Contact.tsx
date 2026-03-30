"use client";

import { useForm } from "react-hook-form";
import FadeUp from "@/components/ui/FadeUp";
import { Mail, GitBranch, Globe, Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const mailtoLink = `mailto:ayomikunesther12@gmail.com?subject=Portfolio Contact from ${data.name}&body=${encodeURIComponent(data.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp>
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tighter sm:text-4xl">
            Let&apos;s build something great.
          </h2>
          <p className="mb-12 max-w-lg text-white/50">
            Open to full-time roles, contract work, and interesting
            collaborations. Response within 24 hours.
          </p>
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <FadeUp delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-accent">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-accent">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                  })}
                  rows={5}
                  placeholder="Your message"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-accent">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </FadeUp>

          {/* Contact info */}
          <FadeUp delay={0.2}>
            <div className="space-y-4">
              <a
                href="mailto:ayomikunesther12@gmail.com"
                className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-brand-light">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="text-sm font-medium">
                    ayomikunesther12@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/ayomikunagbeja"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-brand-light">
                  <GitBranch size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40">GitHub</p>
                  <p className="text-sm font-medium">github.com/ayomikunagbeja</p>
                </div>
              </a>

              <a
                href="https://mikun-e5uq.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/20 text-brand-light">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40">Portfolio</p>
                  <p className="text-sm font-medium">
                    mikun-e5uq.vercel.app
                  </p>
                </div>
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
