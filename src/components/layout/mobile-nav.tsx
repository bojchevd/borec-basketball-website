"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./language-switcher";

interface MobileNavProps {
  links: { href: string; label: string }[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="md:hidden"
        render={
          <Button variant="ghost" size="icon" className="text-white" />
        }
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-brand-black p-0">
        {/* Header with logo */}
        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
          <Image src="/logo.png" alt="Borec Basketball" width={32} height={32} />
          <span className="font-heading text-lg uppercase text-white">Борец Баскет</span>
        </div>

        {/* Red accent line */}
        <div className="h-[2px] bg-gradient-to-r from-brand-red via-brand-red/60 to-transparent" />

        {/* Nav links */}
        <nav className="flex flex-col px-3 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-medium text-white/60 transition-all hover:bg-white/5 hover:text-white"
            >
              <span className="h-1 w-1 rounded-full bg-brand-red opacity-0 transition-opacity group-hover:opacity-100" />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-6 py-5">
          <LanguageSwitcher />
          <p className="mt-3 font-body text-[10px] uppercase tracking-widest text-white/20">
            КК Борец Велес
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
