import { NAV_LINKS } from "@/lib/constants.ts";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50">
      <nav className="mx-auto max-w-[800px] px-8 py-6 flex items-center justify-between border-b border-border/50">
        <a href="#" className="font-medium text-accent text-sm">
          Nicolas Joubert
        </a>
        {/* Desktop nav */}
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
        {/* Burger menu — DropdownMenu à brancher ici */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
