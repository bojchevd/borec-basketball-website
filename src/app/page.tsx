import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { LATEST_POSTS_QUERY, NEXT_GAMES_QUERY } from "@/lib/sanity/queries";
import type { Post, Game } from "@/lib/sanity/types";
import { GameCard } from "@/components/game-card";
import { NewsCard } from "@/components/news-card";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Marquee } from "@/components/marquee";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { sponsors } from "@/data/sponsors";

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

export default async function Home() {
  const { posts, games } = await fetchData();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl lg:text-9xl">
            Борец<br /><span className="text-brand-red">Баскет</span>
          </h1>
          <p className="mt-6 text-lg text-white/50 font-body">
            Basketball Club · Veles, North Macedonia
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button
              className="bg-brand-red hover:bg-brand-red/80 font-body"
              render={<Link href="/schedule">View Schedule</Link>}
            />
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-body"
              render={<Link href="/news">Latest News</Link>}
            />
          </div>
        </div>
      </section>

      <Marquee text="BOREC BASKETBALL · VELES · БОРЕЦ БАСКЕТ" />

      {games.length > 0 && (
        <AnimatedSection>
          <section className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
              Upcoming <span className="text-brand-red">Games</span>
            </h2>
            <div>
              {games.map((game) => (
                <GameCard key={game._id} game={game} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-body"
                render={<Link href="/schedule">Full Schedule</Link>}
              />
            </div>
          </section>
        </AnimatedSection>
      )}

      {posts.length > 0 && (
        <AnimatedSection>
          <section className="mx-auto max-w-7xl px-4 py-20">
            <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
              Latest <span className="text-brand-red">News</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <NewsCard key={post._id} post={post} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-body"
                render={<Link href="/news">All News</Link>}
              />
            </div>
          </section>
        </AnimatedSection>
      )}

      <Marquee text="ACADEMY · MINIBASKET · JOIN US" />

      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="mb-8 font-heading text-4xl uppercase text-white md:text-5xl">
            Our <span className="text-brand-red">Programs</span>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/academy"
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-brand-red p-6"
            >
              <div>
                <h3 className="font-heading text-4xl uppercase text-white md:text-5xl">
                  Basketball<br />Academy
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Competitive training for serious players
                </p>
              </div>
            </Link>
            <Link
              href="/minibasket"
              className="group relative flex aspect-[4/3] items-end overflow-hidden rounded-lg bg-white/5 p-6 border border-white/10"
            >
              <div>
                <h3 className="font-heading text-4xl uppercase text-white md:text-5xl">
                  Mini<br /><span className="text-brand-gold">Basket</span>
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  Basketball for the youngest players
                </p>
              </div>
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-4 py-20">
          <h2 className="mb-12 text-center font-heading text-3xl uppercase text-white/30">
            Our Sponsors
          </h2>
          <SponsorGrid sponsors={[...sponsors]} />
        </section>
      </AnimatedSection>
    </>
  );
}
