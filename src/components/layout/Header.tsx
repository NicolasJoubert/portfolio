import { NAV_LINKS } from "@/lib/constants.ts";
// import { cn } from '@/lib/utils.ts';
// TODO: Create mobile toggle
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 ">
      <nav className="mx-auto max-w-[760px] px-8 py-6 flex items-center justify-between border-b border-border/50">
        <a href="#" className="font-medium text-accent text-sm">
          Nicolas Joubert
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* TODO: Create mobile toggle */}
      </nav>
    </header>
  );
}
