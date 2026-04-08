import type { Metadata } from "next";
import { roster, coachingStaff } from "@/data/roster";
import { PlayerCard } from "@/components/player-card";
import { AnimatedSection } from "@/components/animated-section";
import { getTranslations } from "@/lib/i18n";

export const metadata: Metadata = { title: "Roster | Борец Баскет", description: "Meet the Borec Basketball team." };

export default function RosterPage() {
  const t = getTranslations("mk");
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl"><span className="text-brand-red">{t.roster.title}</span></h1>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {roster.map((player, i) => (
          <AnimatedSection key={player.number} delay={i * 0.05}><PlayerCard player={player} /></AnimatedSection>
        ))}
      </div>
      <AnimatedSection>
        <div className="mt-20">
          <h2 className="mb-8 font-heading text-3xl uppercase text-white/30">{t.roster.coachingStaff}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {coachingStaff.map((member) => (
              <div key={member.name} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <h3 className="font-heading text-lg text-white">{member.name}</h3>
                <p className="text-sm text-brand-red">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
