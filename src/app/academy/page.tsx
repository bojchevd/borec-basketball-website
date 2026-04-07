import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Academy | Борец Баскет",
  description:
    "Борец Basketball Academy — competitive youth training for players aged 12–18 in Велес, North Macedonia.",
};

const ageGroups = [
  {
    label: "M-12",
    ages: "до 12 години",
    description:
      "The entry point into competitive basketball. Players build a technical foundation — dribbling, passing, shooting form — in a structured but fun environment.",
    highlight: "Foundation",
  },
  {
    label: "M-14",
    ages: "до 14 години",
    description:
      "Tactical awareness begins here. Players start learning positional play, team sets, and are introduced to regional league competition.",
    highlight: "Development",
  },
  {
    label: "M-16",
    ages: "до 16 години",
    description:
      "High-intensity training with a focus on athleticism, decision-making under pressure, and preparation for national-level competition.",
    highlight: "Competition",
  },
  {
    label: "M-18",
    ages: "до 18 години",
    description:
      "The final step before the senior squad. Players train alongside the first team and are evaluated for promotion into Борец's senior program.",
    highlight: "Elite",
  },
];

const philosophyPoints = [
  {
    title: "Discipline First",
    body: "We believe that on-court excellence starts with off-court character. Every academy player is held to high standards of punctuality, respect, and commitment.",
  },
  {
    title: "Individual Growth",
    body: "Coaches track each player's development individually. Personal goals are set at the start of each season and reviewed regularly.",
  },
  {
    title: "Playing Time Matters",
    body: "Academy players compete in official ФБСМ league fixtures from M-12 upward. Real games, real stakes, real development.",
  },
  {
    title: "The Борец Pathway",
    body: "From Minibasket to Academy to the senior first team — every great Борец player walked this same road. The pipeline is real.",
  },
];

export default function AcademyPage() {
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
        {/* Red accent bar */}
        <div className="absolute left-0 top-0 h-1 w-full bg-brand-red" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <p className="mb-3 font-body text-sm uppercase tracking-widest text-brand-red">
            Борец Баскет · Велес
          </p>
          <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl">
            Basketball<br />
            <span className="text-brand-red">Academy</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Competitive youth basketball in the heart of North Macedonia. Four
            age groups, one goal — developing the next generation of Борец
            players.
          </p>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-5 text-white/70 leading-relaxed">
              <h2 className="font-heading text-3xl uppercase text-white">
                Serious Training.<br />
                <span className="text-brand-gold">Serious Coaches.</span>
              </h2>
              <p>
                Борец Basketball Academy operates under the umbrella of КК
                Борец Велес, one of Macedonia&apos;s most storied clubs. Our
                Academy coaches are licensed by the Basketball Federation of
                North Macedonia (ФБСМ) and bring both playing and coaching
                experience at the highest domestic level.
              </p>
              <p>
                Training takes place at{" "}
                <strong className="text-white">Спортска сала Гемиџии</strong> in
                Велес — a well-equipped facility that hosts both Academy
                sessions and senior team practices. Players breathe the same
                air as the pros from day one.
              </p>
              <p className="text-sm text-white/40">
                Спортска сала Гемиџии · Велес, Северна Македонија
              </p>
            </div>

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
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Age Groups ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20 border-t border-white/10">
          <div className="mb-12">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-red">
              Programs
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Age <span className="text-brand-red">Groups</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ageGroups.map((group, i) => (
              <AnimatedSection key={group.label} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-lg border border-white/10 bg-white/5 p-6 hover:border-brand-red/50 transition-colors duration-300">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="font-heading text-5xl text-white">
                      {group.label}
                    </span>
                    <span className="mt-1 rounded-full bg-brand-red/10 px-2 py-1 font-body text-xs uppercase tracking-wider text-brand-red">
                      {group.highlight}
                    </span>
                  </div>
                  <p className="mb-3 font-body text-xs uppercase tracking-wider text-white/40">
                    {group.ages}
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-white/60">
                    {group.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Pathway Banner ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-10">
          <div className="overflow-hidden rounded-lg bg-brand-red p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-heading text-3xl uppercase text-white md:text-4xl">
                  The Борец Pathway
                </h2>
                <p className="mt-3 max-w-lg text-white/80 leading-relaxed">
                  Minibasket → M-12 → M-14 → M-16 → M-18 → Senior Team. Every
                  step is deliberate. Every season builds on the last. This is
                  how we produce players who compete at the national level.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 font-heading text-2xl uppercase text-white/20 md:items-end">
                <span className="text-white">Senior</span>
                <span>M-18</span>
                <span>M-16</span>
                <span>M-14</span>
                <span>M-12</span>
                <span className="text-brand-gold/60">Minibasket</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Philosophy ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20 border-t border-white/10">
          <div className="mb-12">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-red">
              Our Approach
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Training <span className="text-brand-red">Philosophy</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {philosophyPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.08}>
                <div className="rounded-lg border border-white/10 bg-white/5 p-6">
                  <h3 className="mb-3 font-heading text-xl text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {point.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Photo placeholder row ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="grid gap-4 grid-cols-3">
            {[0, 1, 2].map((n) => (
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

      {/* ─── How to Join ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20 border-t border-white/10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-red">
                Join the Academy
              </p>
              <h2 className="mb-6 font-heading text-4xl uppercase text-white md:text-5xl">
                How to <span className="text-brand-red">Enroll</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Tryouts are held at the beginning of each season
                  (September) and mid-season (January) for exceptional
                  candidates. Players are evaluated on physical attributes,
                  basketball IQ, coachability, and work ethic — not just
                  raw skill.
                </p>
                <p>
                  To register your interest or ask about the next tryout
                  date, reach out through our contact page. A member of the
                  Academy staff will respond within 48 hours.
                </p>
                <p className="text-sm text-white/40">
                  Тренинзи: Спортска сала Гемиџии, Велес
                </p>
              </div>
              <div className="mt-8">
                <Button
                  className="bg-brand-red hover:bg-brand-red/80 font-body"
                  render={<Link href="/contact">Contact Us</Link>}
                />
              </div>
            </div>

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
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
