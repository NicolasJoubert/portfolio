import { cn } from "@/lib/utils";

interface TypoProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypoProps) => (
  <h1
    className={cn(
      "text-3xl sm:text-4xl lg:text-5xl font-medium tracking-[-0.04em] leading-[1.05] text-foreground",
      className,
    )}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className }: TypoProps) => (
  <h2
    className={cn(
      "text-xl md:text-2xl font-semibold tracking-[-0.03em] leading-tight text-foreground",
      className,
    )}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className }: TypoProps) => (
  <h3
    className={cn(
      "text-xl md:text-2xl font-semibold tracking-[-0.02em] leading-snug text-foreground",
      className,
    )}
  >
    {children}
  </h3>
);

export const Body = ({ children, className }: TypoProps) => (
  <p
    className={cn(
      "text-[14px] md:text-base text-muted-foreground leading-relaxed",
      className,
    )}
  >
    {children}
  </p>
);

export const Small = ({ children, className }: TypoProps) => (
  <p
    className={cn(
      "text-xs md:text-sm text-muted-foreground leading-snug",
      className,
    )}
  >
    {children}
  </p>
);

export const AccentLink = ({
  children,
  href,
  className,
}: TypoProps & { href: string }) => (
  <a
    href={href}
    className={cn(
      "text-sm text-accent hover:opacity-80 transition-opacity",
      className,
    )}
  >
    {children}
  </a>
);
