import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "badge";
  className?: string;
}

export default function Tag({
  children,
  variant = "default",
  className,
}: TagProps) {
  const variants = {
    default: "bg-secondary text-muted-foreground border-border",
    accent: "bg-transparent text-accent border-accent",
    badge: "bg-accent/10 text-accent border-transparent",
  };

  return (
    <span
      className={cn(
        "text-[11px] px-3 py-1 rounded-full border transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
