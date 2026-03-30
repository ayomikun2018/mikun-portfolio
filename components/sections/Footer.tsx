import { navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        {/* Left */}
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            Ayomikun Agbeja
          </p>
          <p className="text-xs text-white/40">Front-End Engineer</p>
        </div>

        {/* Center — nav */}
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="text-center text-xs text-white/30 md:text-right">
          <p>Built with Next.js &amp; Tailwind</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
