import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";


export const metadata: Metadata = {
  title: "Academy | Борец Баскет",
  description:
    "Борец Кошаркарска Академија — натпреварувачки младински тренинг за играчи од 12–18 години во Велес, Северна Македонија.",
};

const ageGroups = [
  {
    label: "M-12",
    ages: "до 12 години",
    description:
      "Влезна точка во натпреварувачката кошарка. Играчите градат техничка основа — дриблинг, додавање, форма на шут — во структурирана но забавна средина.",
    highlight: "Основа",
  },
  {
    label: "M-14",
    ages: "до 14 години",
    description:
      "Тактичката свест започнува тука. Играчите учат позициска игра, тимски системи и се вклучуваат во значајни лигашки натпревари.",
    highlight: "Развој",
  },
  {
    label: "M-16",
    ages: "до 16 години",
    description:
      "Високо-интензивен тренинг со фокус на атлетизам, одлучување под притисок и подготовка за натпревари на национално ниво.",
    highlight: "Натпревар",
  },
  {
    label: "M-18",
    ages: "до 18 години",
    description:
      "Последниот чекор пред сениорскиот тим. Играчите тренираат заедно со првиот тим и се оценуваат за промоција во сениорската програма на Борец.",
    highlight: "Елита",
  },
];

const philosophyPoints = [
  {
    title: "Дисциплина пред сè",
    body: "Веруваме дека извонредноста на терен започнува со карактерот надвор од него. Секој играч во Академијата се држи до високи стандарди на точност, почит и посветеност.",
  },
  {
    title: "Индивидуален развој",
    body: "Тренерите го следат развојот на секој играч поединечно. Лични цели се поставуваат на почетокот на секоја сезона и редовно се ревидираат.",
  },
  {
    title: "Играчкото време е важно",
    body: "Играчите од Академијата се натпреваруваат во официјални лигашки натпревари на КФСМ од М-12 па нагоре. Вистински натпревари, вистински предизвици, вистински развој.",
  },
  {
    title: "Патот на Борец",
    body: "Од Минибаскет до Академија до сениорскиот прв тим — секој голем играч на Борец го поминал истиот пат. Системот функционира.",
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
            Кошаркарска<br />
            <span className="text-brand-red">Академија</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Натпреварувачка младинска кошарка во срцето на Македонија. Четири
            возрасни групи, една цел — развој на следната генерација играчи на Борец.
          </p>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-5 text-white/70 leading-relaxed">
              <h2 className="font-heading text-3xl uppercase text-white">
                Сериозен тренинг.<br />
                <span className="text-brand-gold">Сериозни тренери.</span>
              </h2>
              <p>
                Кошаркарската Академија на Борец функционира како една целина со КК
                Борец Велес. Нашите
                тренери во Академијата се лиценцирани од Кошаркарската Федерација на Македонија (КФСМ) и носат искуство од играње и тренирање
                на највисоко младинско и сениорско ниво.
              </p>
              <p>
                Тренинзите се одржуваат во две сали{" "}
                <strong className="text-white">Спортската сала Гемиџии / УЗУС</strong> во
                Велес — добро опремени објекти каде се одржуваат и тренинзите на
                Академијата и на сениорскиот тим.
              </p>
              <p className="text-sm text-white/40">
                Спортска сала Гемиџии · Сала УЗУС · Велес, Македонија
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
                Фото наскоро
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
              Програми
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Возрасни <span className="text-brand-red">групи</span>
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
                  Патот на Борец
                </h2>
                <p className="mt-3 max-w-lg text-white/80 leading-relaxed">
                  Минибаскет → M-12 → M-14 → M-16 → M-18 → Сениорски тим. Секој
                  чекор е намерен. Секоја сезона гради врз претходната. Така
                  создаваме играчи кои се натпреваруваат на национално ниво.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 font-heading text-2xl uppercase text-white/20 md:items-end">
                <span className="text-white">Сениори</span>
                <span>M-18</span>
                <span>M-16</span>
                <span>M-14</span>
                <span>M-12</span>
                <span className="text-brand-gold/60">Минибаскет</span>
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
              Наш пристап
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Тренинг <span className="text-brand-red">филозофија</span>
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
                  Фото наскоро
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
                Приклучи се
              </p>
              <h2 className="mb-6 font-heading text-4xl uppercase text-white md:text-5xl">
                Како да се <span className="text-brand-red">запишете</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Селекции се одржуваат на почетокот на секоја сезона
                  (септември) и среде сезона (јануари) за пријава во лига. Играчите се оценуваат по подготвеност за тренирање и работна етика — не само
                  по талент.
                </p>
                <p>
                  За да го пријавите вашиот интерес или да прашате за следниот
                  термин за селекција, контактирајте нè преку нашата контакт страница.
                  Член од тимот на Академијата ќе одговори во најкраток можен рок.
                </p>
                <p className="text-sm text-white/40">
                  Тренинзи: Сала УЗУС / Спортска сала Гемиџии, Велес
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white hover:bg-brand-red/80 font-body">
                  Контактирајте нè
                </Link>
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
                Фото наскоро
              </span>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
