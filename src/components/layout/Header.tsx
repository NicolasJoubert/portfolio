import { NAV_LINKS } from "@/lib/constants.ts";
import { Menu } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils.ts";

const listenToScroll = (callback: () => void) => {
  window.addEventListener("scroll", callback);
  return () => window.removeEventListener("scroll", callback);
};
const hasScroll = () => window.scrollY > 20;
const getDefaultScroll = () => false;

export default function Header() {
  const isScrolled = useSyncExternalStore(
    listenToScroll,
    hasScroll,
    getDefaultScroll,
  );
  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100]",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="mx-auto max-w-[1080px] px-8 py-6 flex items-center justify-between">
        <span className="font-medium text-accent text-base">
          Nicolas Joubert
        </span>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-muted-foreground hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile nav */}
        <div className="flex md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
              >
                <span className="sr-only">Open main menu</span>
                <Menu aria-hidden="true" className="size-6" />
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
