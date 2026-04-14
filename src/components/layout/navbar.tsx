"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { useI18n } from "@/lib/i18n/provider";

export function Navbar() {
  const { t } = useI18n();
  const pathname = usePathname();
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    setAboutOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/news", label: t.nav.news },
    { href: "/schedule", label: t.nav.schedule },
    { href: "/roster", label: t.nav.roster },
    { href: "/academy", label: t.nav.academy },
    { href: "/minibasket", label: t.nav.minibasket },
    { href: "/shop", label: t.nav.shop },
  ];

  const aboutLinks = [
    { href: "/history", label: t.nav.history },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/contact", label: t.nav.contact },
  ];

  const allLinks = [...navLinks, ...aboutLinks];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Borec Basketball" width={40} height={40} />
          <span className="font-heading text-lg uppercase text-white">Борец Баскет</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
          <div
            className="relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setAboutOpen(false);
              }
            }}
          >
            <button
              onClick={() => setAboutOpen((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === "Escape") setAboutOpen(false);
              }}
              aria-expanded={aboutOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              За Нас
              <svg
                className={`h-3.5 w-3.5 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aboutOpen && (
              <div
                role="menu"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setAboutOpen(false);
                }}
                className="absolute right-0 top-full mt-3 min-w-[160px] overflow-hidden rounded-lg border border-white/10 bg-brand-black shadow-xl"
              >
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <LanguageSwitcher />
        </div>
        <MobileNav links={allLinks} />
      </div>
    </nav>
  );
}
