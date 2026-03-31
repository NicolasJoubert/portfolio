import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  onClick?: () => void;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  href,
  className,
  target,
  rel,
}: ButtonProps) {
  const styles = {
    primary: "bg-foreground text-background",
    secondary: "bg-transparent text-foreground border border-border",
    accent: "bg-transparent text-accent border border-accent",
    ghost: "bg-transparent text-accent border-none",
  };

  const base = cn(
    "text-[13px] px-6 py-2.5 rounded-full cursor-pointer transition-opacity hover:opacity-80",
    styles[variant],
    className,
  );

  if (href)
    return (
      <a href={href} className={base} target={target} rel={rel}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
