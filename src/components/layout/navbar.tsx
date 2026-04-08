"use client";

import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { LanguageSwitcher } from "./language-switcher";
import { useI18n } from "@/lib/i18n/provider";

export function Navbar() {
  const { t } = useI18n();

  const navLinks = [
    { href: "/news", label: t.nav.news },
    { href: "/schedule", label: t.nav.schedule },
    { href: "/roster", label: t.nav.roster },
    { href: "/academy", label: t.nav.academy },
    { href: "/minibasket", label: t.nav.minibasket },
    { href: "/history", label: t.nav.history },
    { href: "/sponsors", label: t.nav.sponsors },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Borec Basketball" width={40} height={40} />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>
        <MobileNav links={navLinks} />
      </div>
    </nav>
  );
}
