import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity/client";
import { LATEST_POSTS_QUERY, NEXT_GAMES_QUERY, LAST_RESULT_QUERY, SEASON_RECORD_QUERY } from "@/lib/sanity/queries";
import type { Post, Game } from "@/lib/sanity/types";
import { FriendsMarquee } from "@/components/friends-marquee";
import { GoldenSponsor } from "@/components/golden-sponsor";
import { HeroGameCard, LastResultStrip } from "@/components/hero-game-card";
import { currentSeason } from "@/data/rosters";
import { Marquee } from "@/components/marquee";
import { AnimatedSection } from "@/components/animated-section";
import { NewsCard } from "@/components/news-card";
import { getTranslations } from "@/lib/i18n";

export const revalidate = 60;

async function fetchData() {
  try {
    const [posts, games] = await Promise.all([
      client.fetch<Post[]>(LATEST_POSTS_QUERY),
      client.fetch<Game[]>(NEXT_GAMES_QUERY),
    ]);
    return { posts, games };
  } catch {
    return { posts: [] as Post[], games: [] as Game[] };
  }
}

async function fetchSeasonResults() {
  try {
    const [lastGame, record] = await Promise.all([
      client.fetch<Game | null>(LAST_RESULT_QUERY),
      client.fetch<{ wins: number; losses: number }>(SEASON_RECORD_QUERY, { seasonStart: currentSeason.startDate }),
    ]);
    return { lastGame, record };
  } catch {
    return { lastGame: null, record: null };
  }
}

export default async function Home() {
  const t = getTranslations("mk");
  const [{ posts, games }, { lastGame, record }] = await Promise.all([fetchData(), fetchSeasonResults()]);
  const nextGame = games[0];

  return (
    <>
      {/* Hero — split layout */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Subtle diagonal accent */}
        <div className="absolute -right-[20%] -top-[20%] h-[140%] w-[60%] rotate-12 bg-brand-red/5" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-red/40 to-transparent" />

        <div className="mx-auto flex h-full max-w-7xl items-center px-4">
          <div className="grid min-h-[85vh] w-full items-center gap-12 md:grid-cols-2">
            {/* Left — branding */}
            <div className="flex flex-col justify-center pt-16 md:pt-0">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-brand-red" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red">
                  {t.home.established}
                </span>
              </div>

              <h1 className="mt-6 font-heading text-5xl uppercase leading-[0.9] text-white md:text-6xl lg:text-7xl">
                Борец
                <br />
                Баскет
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-white/40">
                {t.home.league}
              </p>

              <div className="mt-8 flex gap-3">
                <Link href="/schedule" className="inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white hover:bg-brand-red/80 font-body">
                  {t.home.schedule}
                </Link>
                <Link href="/roster" className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/5 font-body">
                  {t.home.roster}
                </Link>
              </div>
            </div>

            {/* Right — next game, or last result when nothing is scheduled */}
            <div className="flex flex-col justify-center">
              {nextGame ? (
                <>
                  <HeroGameCard game={nextGame} variant="next" />
                  {lastGame && <LastResultStrip game={lastGame} />}
                </>
              ) : (
                lastGame && <HeroGameCard game={lastGame} variant="last" />
              )}

              {/* Season stats teaser */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className="font-heading text-2xl text-brand-red">{record?.wins ?? "–"}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    {t.home.wins}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className="font-heading text-2xl text-white">{record?.losses ?? "–"}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    {t.home.loss}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className="font-heading text-2xl text-brand-gold">3</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    {t.home.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee text={t.marquee1} />

      {/* Latest News */}
      {posts.length > 0 && (
        <AnimatedSection>
          <section className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
              {t.home.latestNews} <span className="text-brand-red">{t.home.latestNewsAccent}</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <NewsCard key={post._id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/news" className="inline-flex items-center justify-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 font-body">
                {t.home.allNews}
              </Link>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Golden Sponsor */}
      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-4 pb-20">
          <GoldenSponsor />
        </section>
      </AnimatedSection>

      <Marquee text={t.marquee2} />

      {/* Programs */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
            {t.home.ourPrograms} <span className="text-brand-red">{t.home.ourProgramsAccent}</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/academy"
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-brand-red p-6"
            >
              <div>
                <h3 className="font-heading text-4xl uppercase text-white md:text-5xl">
                  {t.home.basketballAcademy.split("\n")[0]}
                  <br />
                  {t.home.basketballAcademy.split("\n")[1]}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {t.home.academyDesc}
                </p>
              </div>
            </Link>
            <Link
              href="/minibasket"
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-white/5 p-6 border border-white/10"
            >
              <div>
                <h3 className="font-heading text-4xl uppercase text-white md:text-5xl">
                  {t.home.miniBasket.split("\n")[0]}
                  <br />
                  <span className="text-brand-gold">{t.home.miniBasket.split("\n")[1]}</span>
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  {t.home.miniBasketDesc}
                </p>
              </div>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* Sponsors */}
      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="mb-12 text-center font-heading text-3xl uppercase text-white/30">
            Пријатели на клубот
          </h2>
          <FriendsMarquee />
        </section>
      </AnimatedSection>

      {/* Fan Shop Promo */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <Link href="/shop" className="group block">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] transition-colors hover:border-brand-red/40">
              <div className="grid grid-cols-3 md:grid-cols-5">
                {[
                  { src: "/merch/hoodie.jpg", alt: "Дуксер", hide: false },
                  { src: "/merch/termos.jpg", alt: "Термос", hide: false },
                  { src: "/merch/mug.jpg", alt: "Шолја", hide: false },
                  { src: "/merch/jersey_home.png", alt: "Домашен дрес", hide: true },
                  { src: "/merch/jersey_away.png", alt: "Гостински дрес", hide: true },
                ].map((item) => (
                  <div key={item.src} className={`relative aspect-square overflow-hidden ${item.hide ? "hidden md:block" : ""}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h2 className="font-heading text-2xl uppercase text-white md:text-3xl">
                    Фан <span className="text-brand-red">Шоп</span>
                  </h2>
                  <p className="mt-1 text-sm text-white/50">
                    Дуксери, термоси, шолји и официјални дресови на Борец Баскет.
                  </p>
                </div>
                <span className="hidden md:inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors group-hover:border-brand-red group-hover:text-brand-red font-body">
                  Нарачај →
                </span>
              </div>
            </div>
          </Link>
        </section>
      </AnimatedSection>
    </>
  );
}
