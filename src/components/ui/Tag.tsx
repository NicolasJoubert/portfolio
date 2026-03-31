// src/components/ui/Tag.tsx
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  category?: "techno" | "expertise" | "other";
  variant?: "default" | "accent" | "badge";
  className?: string;
  size?: "sm" | "md";
}

export default function Tag({
  children,
  category,
  className,
  size = "sm",
}: TagProps) {
  const categoryStyles = {
    techno: "bg-accent/5 border-accent/10 text-accent group-hover:bg-accent/10",
    expertise:
      "bg-muted/50 border-border/50 text-muted-foreground group-hover:bg-muted",
    other: "bg-secondary text-muted-foreground border-border",
  };

  const sizes = {
    sm: "text-[10px] px-2.5 py-0.5 uppercase tracking-wide font-semibold",
    md: "text-[11px] px-3 py-1",
  };

  return (
    <span
      className={cn(
        "rounded-full border transition-all duration-300 inline-flex items-center justify-center",
        category
          ? categoryStyles[category]
          : "bg-secondary text-muted-foreground border-border",
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
