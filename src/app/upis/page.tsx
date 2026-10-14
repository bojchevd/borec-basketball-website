import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { TrainingHalls } from "@/components/training-halls";
import { LightboxImage } from "@/components/lightbox";
import { UpisLeadForm } from "@/components/upis-lead-form";

export const metadata: Metadata = {
  title: "Упис на Минибаскет",
  description:
    "Борец Минибаскет — кошарка за деца од 5–12 години во Велес. Пријави се за упис во новата сезона!",
};

const benefits = [
  {
    title: "Активен начин на живот",
    body: "Два тренинзи неделно создаваат здрава рутина. Децата кои ќе се вљубат во спортот на мала возраст имаат тенденција да останат активни цел живот.",
    icon: "💪",
  },
  {
    title: "Тимска работа",
    body: "Децата учат дека победата е тимски напор. Споделувањето на топката, поддршката на соиграчите и заедничкото славење градат моќни социјални навики.",
    icon: "🤝",
  },
  {
    title: "Самодоверба",
    body: "Да постигнеш кош, да научиш нов потег или да добиеш пофалба од тренерот — секоја мала победа гради самодоверба што трае цел живот.",
    icon: "⭐",
  },
];

function ScrollCTA({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#form"
      className="inline-flex items-center justify-center rounded-md bg-brand-red px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red/80 transition-colors"
    >
      {children}
    </a>
  );
}

export default function UpisPage() {
  return (
    <div className="-mt-16 min-h-screen bg-[#0a0a0a]">
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="absolute left-0 top-0 h-1 w-full bg-brand-gold" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="mb-4 font-body text-sm uppercase tracking-widest text-brand-gold">
            Борец Баскет · Велес · Возраст 5–12
          </p>
          <h1 className="font-heading text-5xl uppercase leading-tight text-white sm:text-6xl md:text-7xl">
            Мини<span className="text-brand-gold">баскет</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/60">
            Најдоброто нешто што можете да му дадете на дете е топка, терен и
            тим. Борец Минибаскет е местото каде што започнува љубовта кон
            играта.
          </p>
          <div className="mt-8">
            <ScrollCTA>Пријави се</ScrollCTA>
          </div>
        </div>
      </section>

      {/* ─── Benefits ─── */}
      <AnimatedSection>
        <section className="mx-auto max-w-5xl px-4 py-20">
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-lg border border-white/10 bg-white/5 p-6 text-center"
              >
                <span className="text-4xl">{b.icon}</span>
                <h3 className="mt-3 font-heading text-lg text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {b.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ScrollCTA>Запиши го твоето дете</ScrollCTA>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Photos + Callout ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-5xl px-4 pb-20">
          <div className="grid gap-4 grid-cols-3">
            {[
              { src: "/minibasket/practice_01.jpg", alt: "Минибаскет тренинг" },
              { src: "/minibasket/practice_02.jpg", alt: "Минибаскет тренинг" },
              { src: "/minibasket/practice_03.jpg", alt: "Минибаскет тренинг" },
            ].map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <LightboxImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-brand-gold/30 bg-brand-gold/5 p-5 text-center">
            <p className="text-sm font-medium text-brand-gold">
              Охрабрете се да дојдете на пробен тренинг, истиот е бесплатен!
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Info Cards ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-5xl px-4 pb-20">
          <p className="mb-4 text-center text-sm text-white/60">
            Уписот се врши за време на тренинзите, во двете сали.
          </p>
          <TrainingHalls />

          {/* Coach contacts */}
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { name: "Тренер Васе", phone: "072/306-635", viber: "38972306635" },
              { name: "Тренер Аце", phone: "076/213-975", viber: "38976213975" },
              { name: "Тренер Ане", phone: "078/245-559", viber: "38978245559" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <a
                    href={`tel:${c.phone.replace(/\//g, "")}`}
                    className="text-sm text-white/50 hover:text-brand-gold transition-colors"
                  >
                    {c.phone}
                  </a>
                </div>
                <a
                  href={`viber://chat?number=%2B${c.viber}`}
                  className="inline-flex items-center rounded-full bg-[#7360f2]/15 px-2.5 py-1 text-xs font-medium text-[#7360f2] hover:bg-[#7360f2]/25 transition-colors"
                >
                  Viber
                </a>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Lead Form ─── */}
      <AnimatedSection delay={0.05}>
        <section id="form" className="mx-auto max-w-lg px-4 pb-20 scroll-mt-8">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="mb-1 text-center font-heading text-2xl uppercase text-white">
              Пријави <span className="text-brand-gold">се</span>
            </h2>
            <p className="mb-6 text-center text-sm text-white/40">
              Остави контакт и ќе те контактираме со детали за уписот.
            </p>
            <UpisLeadForm />
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Mini Footer ─── */}
      <footer className="border-t border-white/10 py-6 text-center">
        <p className="text-xs text-white/30">
          Борец Баскет · Велес
        </p>
      </footer>
    </div>
  );
}
