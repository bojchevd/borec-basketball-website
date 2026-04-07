import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { UPCOMING_GAMES_QUERY, PAST_GAMES_QUERY } from "@/lib/sanity/queries";
import type { Game } from "@/lib/sanity/types";
import { GameCard } from "@/components/game-card";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Schedule | Борец Баскет",
  description: "Borec Basketball game schedule and results.",
};

export const revalidate = 60;

export default async function SchedulePage() {
  let upcoming: Game[] = [];
  let past: Game[] = [];
  try {
    [upcoming, past] = await Promise.all([
      client.fetch<Game[]>(UPCOMING_GAMES_QUERY),
      client.fetch<Game[]>(PAST_GAMES_QUERY),
    ]);
  } catch {
    upcoming = [];
    past = [];
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">Schedule</span>
      </h1>

      <AnimatedSection>
        <div>
          <h2 className="mb-6 font-heading text-2xl uppercase text-white/30">Upcoming Games</h2>
          {upcoming.length === 0 ? (
            <p className="py-8 text-white/50">No upcoming games scheduled.</p>
          ) : (
            upcoming.map((game) => <GameCard key={game._id} game={game} />)
          )}
        </div>
      </AnimatedSection>

      {past.length > 0 && (
        <AnimatedSection>
          <div className="mt-16">
            <h2 className="mb-6 font-heading text-2xl uppercase text-white/30">Results</h2>
            {past.map((game) => <GameCard key={game._id} game={game} />)}
          </div>
        </AnimatedSection>
      )}
    </section>
  );
}
