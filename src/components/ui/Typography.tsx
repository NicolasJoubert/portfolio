interface TypoProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = "" }: TypoProps) => (
  <h1
    className={`text-5xl font-medium tracking-[-0.03em] leading-[1.1] text-foreground ${className}`}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }: TypoProps) => (
  <h2
    className={`text-2xl font-medium tracking-[-0.01em] text-foreground ${className}`}
  >
    {children}
  </h2>
);

export const Body = ({ children, className = "" }: TypoProps) => (
  <p className={`text-[15px] text-muted-foreground leading-[1.8] ${className}`}>
    {children}
  </p>
);

export const Small = ({ children, className = "" }: TypoProps) => (
  <p className={`text-[13px] text-muted-foreground ${className}`}>{children}</p>
);

export const AccentLink = ({
  children,
  href,
  className = "",
}: TypoProps & { href: string }) => (
  <a
    href={href}
    className={`text-[13px] text-accent hover:opacity-80 transition-opacity ${className}`}
  >
    {children}
  </a>
);
