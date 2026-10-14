import Image from "next/image";
import { goldenSponsor } from "@/data/sponsors";

export function GoldenSponsor() {
  return (
    <a
      href={goldenSponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${goldenSponsor.name} — златен спонзор`}
      className="mx-auto mb-16 flex max-w-xl items-center justify-center rounded-lg border border-brand-gold/40 bg-brand-gold/[0.04] px-8 py-10 shadow-[0_0_60px_-10px_rgba(250,215,68,0.35)] transition-all hover:border-brand-gold/70 hover:shadow-[0_0_80px_-5px_rgba(250,215,68,0.5)] md:px-12 md:py-14"
    >
      <Image
        src={goldenSponsor.logo}
        alt={goldenSponsor.name}
        width={6488}
        height={1032}
        className="h-auto w-full max-w-[320px]"
      />
    </a>
  );
}
