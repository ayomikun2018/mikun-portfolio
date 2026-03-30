interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-brand/10 text-brand dark:bg-brand/20 dark:text-blue-300",
    outline:
      "border border-navy/20 text-navy dark:border-white/20 dark:text-white",
    accent:
      "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-light",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
