import { client } from "@/lib/sanity/client";
import { UPCOMING_GAMES_QUERY, PAST_GAMES_QUERY } from "@/lib/sanity/queries";
import type { Game } from "@/lib/sanity/types";
import { currentSeason, getSeasonRange, type Season } from "@/data/rosters";
import { GameCard } from "@/components/game-card";
import { SeasonNav } from "@/components/season-nav";
import { AnimatedSection } from "@/components/animated-section";
import { getTranslations } from "@/lib/i18n";

export async function ScheduleContent({ season }: { season: Season }) {
  const t = getTranslations("mk");
  const isPastSeason = season.slug !== currentSeason.slug;
  const range = getSeasonRange(season);

  let upcoming: Game[] = [];
  let past: Game[] = [];
  try {
    [upcoming, past] = await Promise.all([
      isPastSeason ? Promise.resolve([]) : client.fetch<Game[]>(UPCOMING_GAMES_QUERY, range),
      client.fetch<Game[]>(PAST_GAMES_QUERY, range),
    ]);
  } catch {
    upcoming = [];
    past = [];
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="font-heading text-5xl uppercase text-white md:text-6xl">
            <span className="text-brand-red">{t.schedule.title}</span>
          </h1>
          <SeasonNav basePath="/schedule" value={season.slug} />
        </div>
        {isPastSeason && (
          <p className="mt-4 text-sm text-white/50">
            {t.schedule.pastSeason} {season.label}
          </p>
        )}
      </div>

      {!isPastSeason && (
        <AnimatedSection>
          <div>
            <h2 className="mb-6 font-heading text-2xl uppercase text-white/30">{t.schedule.upcoming}</h2>
            {upcoming.length === 0 ? (
              <p className="py-8 text-white/50">{t.schedule.noUpcoming}</p>
            ) : (
              upcoming.map((game) => <GameCard key={game._id} game={game} />)
            )}
          </div>
        </AnimatedSection>
      )}

      {past.length > 0 && (
        <AnimatedSection>
          <div className={isPastSeason ? "" : "mt-16"}>
            <h2 className="mb-6 font-heading text-2xl uppercase text-white/30">{t.schedule.results}</h2>
            {past.map((game) => <GameCard key={game._id} game={game} />)}
          </div>
        </AnimatedSection>
      )}
    </section>
  );
}
