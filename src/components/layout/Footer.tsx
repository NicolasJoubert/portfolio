import { NAV_LINKS, SOCIALS } from "@/lib/constants";

import { Separator } from "@/components/ui/separator";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 mt-10">
      <div className="mx-auto max-w-[800px] px-8 py-12 flex flex-col items-center justify-center gap-8">
        {/* Badge de disponibilité dynamique */}
        <AvailabilityBadge />

        {/* Liens de navigation */}
        <div className="flex flex-wrap items-center justify-center gap-6 whitespace-nowrap">
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

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-6 text-muted-foreground">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="hover:text-accent transition-colors hover:scale-110 active:scale-95"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>

        <Separator />

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground text-balance mt-2">
          {`© ${new Date().getFullYear()}`}{" "}
          <a href="#" className="hover:text-accent transition-colors">
            Nicolas Joubert
          </a>
          , Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
