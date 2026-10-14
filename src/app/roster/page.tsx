import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n";
import { currentSeason } from "@/data/rosters";
import { RosterContent } from "@/components/roster-content";

export const metadata: Metadata = { title: "Состав", description: "Играчите и стручниот штаб на КК Борец Баскет за тековната сезона." };

export default function RosterPage() {
  const t = getTranslations("mk");
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <RosterContent
        seasonSlug={currentSeason.slug}
        translations={{ title: t.roster.title, coachingStaff: t.roster.coachingStaff, pastSeason: t.roster.pastSeason }}
      />
    </section>
  );
}
