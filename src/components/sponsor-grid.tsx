import Image from "next/image";

interface Sponsor { name: string; logo: string; url?: string; }

export function SponsorGrid({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {sponsors.map((sponsor) => {
        const hasLogo = sponsor.logo && !sponsor.logo.includes("sponsor1") && !sponsor.logo.includes("sponsor2");
        const img = hasLogo ? (
          <Image src={sponsor.logo} alt={sponsor.name} width={120} height={60} className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0" />
        ) : (
          <div className="flex h-[60px] w-[120px] items-center justify-center rounded border border-white/10 bg-white/[0.03]">
            <Image src="/logo.png" alt={sponsor.name} width={36} height={36} className="opacity-15" />
          </div>
        );
        return sponsor.url ? (
          <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer">{img}</a>
        ) : (
          <div key={sponsor.name}>{img}</div>
        );
      })}
    </div>
  );
}
