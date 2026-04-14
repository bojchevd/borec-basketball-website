"use client";

import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/data/social-links";
import { useI18n } from "@/lib/i18n/provider";

export function Footer() {
  const { t } = useI18n();

  const footerLinks = [
    { href: "/news", label: t.nav.news },
    { href: "/schedule", label: t.nav.schedule },
    { href: "/roster", label: t.nav.roster },
    { href: "/academy", label: t.nav.academy },
    { href: "/minibasket", label: t.nav.minibasket },
    { href: "/history", label: t.nav.history },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/contact", label: t.nav.contact },
    { href: "/shop", label: t.nav.shop },
  ];

  return (
    <footer className="border-t border-white/10 bg-brand-black">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image src="/logo.png" alt="Borec Basketball" width={60} height={60} />
            <p className="mt-4 text-sm text-white/50">Борец Баскет — Велес</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">{t.footer.links}</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/30">{t.footer.followUs}</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 transition-colors hover:text-brand-red">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Борец Баскет. {t.footer.rights}</p>
          <p className="mt-2">
            Изработено од{" "}
            <a
              href="https://www.instagram.com/slowmorningmedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 transition-colors hover:text-brand-red"
            >
              Slow Morning Media
            </a>
            {" "}— контактирајте нè за соработка.
          </p>
        </div>
      </div>
    </footer>
  );
}
