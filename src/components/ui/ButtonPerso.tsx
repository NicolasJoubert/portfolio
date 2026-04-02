import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  target,
  rel,
  ...props
}: ButtonProps) {
  const styles = {
    primary:
      "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
    secondary:
      "bg-transparent text-foreground border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent",
    accent:
      "bg-transparent text-accent border border-accent hover:bg-accent hover:text-accent-foreground",
    ghost:
      "bg-transparent text-accent border-none hover:bg-accent/10 hover:text-accent",
  };

  const base = cn(
    "text-sm md:text-base px-6 py-2.5 rounded-full cursor-pointer transition-all inline-flex items-center justify-center font-medium",
    styles[variant],
    className,
  );

  if (href)
    return (
      <a
        href={href}
        className={base}
        target={target}
        rel={rel}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
