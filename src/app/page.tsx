import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity/client";
import { LATEST_POSTS_QUERY, NEXT_GAMES_QUERY } from "@/lib/sanity/queries";
import type { Post, Game } from "@/lib/sanity/types";
import { GameCard } from "@/components/game-card";
import { FriendsMarquee } from "@/components/friends-marquee";
import { Marquee } from "@/components/marquee";
import { AnimatedSection } from "@/components/animated-section";
import { NewsCard } from "@/components/news-card";
import { formatPostDate } from "@/lib/utils";
import { getTranslations } from "@/lib/i18n";

export const revalidate = 60;

// ── Mock data (remove once Sanity is connected) ─────────────────────
const MOCK_GAMES: Game[] = [
  {
    _id: "mock-1",
    date: new Date(Date.now() + 3 * 86400000).toISOString(),
    opponent: "МЗТ Скопје Аеродром",
    homeAway: "home",
    location: "Спортска сала Гемиџии",
  },
  {
    _id: "mock-2",
    date: new Date(Date.now() + 8 * 86400000).toISOString(),
    opponent: "КК Куманово",
    homeAway: "away",
    location: "Спортска сала Куманово",
  },
  {
    _id: "mock-3",
    date: new Date(Date.now() + 15 * 86400000).toISOString(),
    opponent: "КК Работнички",
    homeAway: "home",
    location: "Спортска сала Гемиџии",
  },
];

const MOCK_POSTS: (Post & { mockImage?: boolean })[] = [
  {
    _id: "mock-p1",
    title: "Борец Баскет го освои првото место во Група Б",
    slug: { current: "first-place-group-b" },
    coverImage: null,
    excerpt:
      "По одличната серија од 9 победи и само 1 пораз, Борец Баскет се класираше за плеј-оф.",
    body: [],
    publishedAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    mockImage: true,
  },
  {
    _id: "mock-p2",
    title: "Derrick Ellis со просек од 19.2 поени по натпревар",
    slug: { current: "ellis-19-ppg" },
    coverImage: null,
    excerpt:
      "Американскиот плејмејкер го обележа дебитантскиот дел од сезоната со импресивна статистика.",
    body: [],
    publishedAt: new Date(Date.now() - 5 * 86400000).toISOString(),
    mockImage: true,
  },
  {
    _id: "mock-p3",
    title: "Отворен запис за Minibasket програмата 2026",
    slug: { current: "minibasket-enrollment-2026" },
    coverImage: null,
    excerpt:
      "Пријавете ги вашите деца на возраст од 7-12 години за новата сезона.",
    body: [],
    publishedAt: new Date(Date.now() - 9 * 86400000).toISOString(),
    mockImage: true,
  },
];
// ── End mock data ───────────────────────────────────────────────────

async function fetchData() {
  try {
    const [posts, games] = await Promise.all([
      client.fetch<Post[]>(LATEST_POSTS_QUERY),
      client.fetch<Game[]>(NEXT_GAMES_QUERY),
    ]);
    if (posts.length > 0 || games.length > 0) {
      return { posts, games };
    }
  } catch {}
  // Fall back to mock data
  return { posts: MOCK_POSTS as Post[], games: MOCK_GAMES };
}

// Mock-safe news card (doesn't need Sanity image URL builder)
function MockNewsCard({ post }: { post: Post & { mockImage?: boolean } }) {
  return (
    <Link href={`/news/${post.slug.current}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white/5">
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-brand-red/20 to-brand-black flex items-center justify-center">
          <span className="font-heading text-4xl text-white/10">BB</span>
        </div>
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-brand-red">
            {formatPostDate(post.publishedAt)}
          </p>
          <h3 className="mt-2 font-heading text-lg text-white group-hover:text-brand-red transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="mt-2 text-sm text-white/50 line-clamp-2">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default async function Home() {
  const t = getTranslations("mk");
  const { posts, games } = await fetchData();
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

            {/* Right — next game card */}
            <div className="flex flex-col justify-center">
              {nextGame && (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
                    {t.home.nextGame}
                  </span>

                  <div className="mt-6 flex items-center gap-6">
                    <div>
                      <div className="font-heading text-6xl leading-none text-white md:text-7xl">
                        {new Date(nextGame.date).getDate()}
                      </div>
                      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/40">
                        {new Date(nextGame.date)
                          .toLocaleDateString("en-US", { month: "short" })
                          .toUpperCase()}
                      </div>
                    </div>
                    <div className="h-16 w-px bg-white/10" />
                    <div>
                      <div className="text-xl font-semibold text-white">
                        {nextGame.homeAway === "home" ? "vs" : "@"}{" "}
                        {nextGame.opponent}
                      </div>
                      <div className="mt-1 text-sm text-white/40">
                        {nextGame.location}
                      </div>
                      <div className="mt-2 inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase text-brand-red">
                        {nextGame.homeAway}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link href="/schedule" className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white/60 hover:bg-white/5 font-body">
                      {t.home.fullSchedule} →
                    </Link>
                  </div>
                </div>
              )}

              {/* Season stats teaser */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className="font-heading text-2xl text-brand-red">15</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    {t.home.wins}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className="font-heading text-2xl text-white">5</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    {t.home.loss}
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className="font-heading text-2xl text-brand-gold">#4</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                    Позиција
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee text={t.marquee1} />

      {/* Latest News */}
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
