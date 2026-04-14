import type { Metadata } from "next";
import { getTranslations } from "@/lib/i18n";
import { RosterContent } from "@/components/roster-content";

export const metadata: Metadata = { title: "Roster | Борец Баскет", description: "Meet the Borec Basketball team." };

export default function RosterPage() {
  const t = getTranslations("mk");
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <RosterContent translations={{ title: t.roster.title, coachingStaff: t.roster.coachingStaff }} />
    </section>
  );
}
