import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Minibasket | Борец Баскет",
  description:
    "Борец Minibasket — basketball for kids aged 7–12 in Велес, North Macedonia. Every Tuesday & Thursday at Сала Васил Главинов.",
};

const benefits = [
  {
    title: "Motor Skills",
    body: "Basketball develops hand-eye coordination, footwork, and spatial awareness in young children at the most critical stage of physical development.",
    icon: "🏃",
  },
  {
    title: "Coordination & Balance",
    body: "Dribbling, catching, and moving simultaneously trains the brain and body to work together — skills that transfer far beyond the court.",
    icon: "⚖️",
  },
  {
    title: "Teamwork",
    body: "Kids learn that winning is a team effort. Sharing the ball, supporting teammates, and celebrating together builds powerful social habits.",
    icon: "🤝",
  },
  {
    title: "Confidence",
    body: "Making a basket, learning a new move, or earning praise from a coach — each small win builds self-belief that lasts a lifetime.",
    icon: "⭐",
  },
  {
    title: "Active Lifestyle",
    body: "Two training sessions per week create a healthy routine. Kids who fall in love with sport at a young age tend to stay active for life.",
    icon: "💪",
  },
  {
    title: "Fun, Always",
    body: "At Minibasket level, fun is non-negotiable. Our coaches are trained to keep sessions energetic, positive, and something kids look forward to all week.",
    icon: "🎉",
  },
];

export default function MinibasketPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="absolute left-0 top-0 h-1 w-full bg-brand-gold" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <p className="mb-3 font-body text-sm uppercase tracking-widest text-brand-gold">
            Борец Баскет · Велес · Ages 7–12
          </p>
          <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl">
            Mini
            <span className="text-brand-gold">basket</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            The best thing you can give a kid is a ball, a court, and a team.
            Борец Minibasket is where the love of the game begins.
          </p>
        </div>
      </section>

      {/* ─── Schedule & Location Card ─── */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Schedule */}
            <div className="rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-6 md:col-span-2">
              <p className="mb-1 font-body text-xs uppercase tracking-widest text-brand-gold">
                Schedule
              </p>
              <h2 className="mb-4 font-heading text-3xl text-white">
                Секој вторник и четврток
              </h2>
              <p className="text-white/60 leading-relaxed">
                Every Tuesday and Thursday — two sessions per week, perfectly
                spaced to build rhythm and let kids recover. Exact session times
                are communicated upon registration and may vary by age group.
              </p>
            </div>

            {/* Location */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="mb-1 font-body text-xs uppercase tracking-widest text-white/40">
                Location
              </p>
              <h3 className="mb-2 font-heading text-xl text-white">
                Сала Васил Главинов
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Велес, Северна Македонија
              </p>
              <div className="mt-4 h-px w-full bg-white/10" />
              <p className="mt-4 text-sm text-white/40">
                The hall is centrally located and easily accessible from all
                parts of Велес.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── About / Intro ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-7xl px-4 pb-20 border-t border-white/10 pt-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Image placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-body text-sm uppercase tracking-widest">
                Photo coming soon
              </span>
            </div>

            <div className="space-y-5 text-white/70 leading-relaxed">
              <h2 className="font-heading text-3xl uppercase text-white">
                Where It All<br />
                <span className="text-brand-gold">Begins</span>
              </h2>
              <p>
                Борец Minibasket is the entry point into our complete player
                development pathway. Kids aged 7 to 12 are introduced to
                basketball in a way that prioritises enjoyment and curiosity
                first, technical skill second.
              </p>
              <p>
                Our coaches are experienced in working with young children and
                understand that at this age, showing up with a smile is the
                most important thing. Sessions are lively, structured, and
                always finish with a game — because nothing beats the real
                thing.
              </p>
              <p>
                The best Academy players in our history came through
                Minibasket. Some of our current senior squad members first
                touched a basketball at Сала Васил Главинов.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Benefits ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20 border-t border-white/10">
          <div className="mb-12">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-gold">
              Why Basketball?
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Benefits of Starting <span className="text-brand-gold">Early</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 hover:border-brand-gold/40 transition-colors duration-300">
                  <span className="mb-4 text-3xl">{benefit.icon}</span>
                  <h3 className="mb-2 font-heading text-xl text-white">
                    {benefit.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-white/60">
                    {benefit.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Photo placeholders ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[0, 1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-square rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-white/15"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-body text-xs uppercase tracking-widest">
                  Photo coming soon
                </span>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── What to Expect ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20 border-t border-white/10">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-gold">
                For Parents
              </p>
              <h2 className="mb-6 font-heading text-4xl uppercase text-white md:text-5xl">
                What to <span className="text-brand-gold">Expect</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  No prior experience needed. Your child does not need to know
                  how to play basketball — that is exactly what we are here for.
                  All equipment is provided at sessions; just bring comfortable
                  sports clothes and a water bottle.
                </p>
                <p>
                  Sessions last approximately 60–75 minutes and always include
                  a warm-up, skill drills, small-sided games, and a cool-down.
                  We keep groups small to ensure every child gets individual
                  attention from the coach.
                </p>
                <p>
                  Talented and motivated players will naturally progress into
                  the Academy (M-12) program. There is no pressure — every
                  child develops at their own pace.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { q: "What age can my child start?", a: "From 7 years old. We work with children up to age 12 in the Minibasket program." },
                { q: "Do I need to register in advance?", a: "Yes. Contact us through the form below and we will confirm availability and session details." },
                { q: "Is there a fee?", a: "There is a modest monthly membership contribution. Details are provided upon registration." },
                { q: "What if my child misses a session?", a: "No problem — life happens. Consistent attendance is encouraged but not strictly required at Minibasket level." },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-lg border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="mb-2 font-heading text-base text-white">
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── CTA ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="overflow-hidden rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-8 text-center md:p-16">
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Ready to Join?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60 leading-relaxed">
              Секој вторник и четврток, Сала Васил Главинов. Get in touch and
              we will take care of the rest.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                className="bg-brand-red hover:bg-brand-red/80 font-body"
                render={<Link href="/contact">Contact Us</Link>}
              />
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-body"
                render={<Link href="/academy">View Academy →</Link>}
              />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
