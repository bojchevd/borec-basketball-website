import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "@/lib/i18n";
import { getSeason, pastSeasons } from "@/data/rosters";
import { RosterContent } from "@/components/roster-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return pastSeasons.map((s) => ({ season: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }): Promise<Metadata> {
  const { season: slug } = await params;
  const season = getSeason(slug);
  return {
    title: `Roster ${season?.label ?? ""} | Борец Баскет`,
    description: `Borec Basketball roster for the ${season?.label} season.`,
  };
}

export default async function PastSeasonRosterPage({ params }: { params: Promise<{ season: string }> }) {
  const { season: slug } = await params;
  const season = getSeason(slug);
  if (!season) notFound();

  const t = getTranslations("mk");
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <RosterContent
        seasonSlug={season.slug}
        translations={{ title: t.roster.title, coachingStaff: t.roster.coachingStaff, pastSeason: t.roster.pastSeason }}
      />
    </section>
  );
}
