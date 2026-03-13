interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "badge";
}

export default function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-secondary text-muted-foreground border border-border",
    accent: "bg-transparent text-accent border border-accent",
    badge: "bg-accent/10 text-accent border-none",
  };

  return (
    <span className={`text-[11px] px-3 py-1 rounded-full ${styles[variant]}`}>
      {children}
    </span>
  );
}
