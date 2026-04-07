import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/news", label: "News" },
  { href: "/schedule", label: "Schedule" },
  { href: "/roster", label: "Roster" },
  { href: "/academy", label: "Academy" },
  { href: "/minibasket", label: "Minibasket" },
  { href: "/history", label: "History" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
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
        </div>
        <MobileNav links={navLinks} />
      </div>
    </nav>
  );
}
