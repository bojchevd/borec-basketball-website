import Link from "next/link";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";


export const metadata: Metadata = {
  title: "Minibasket | Борец Баскет",
  description:
    "Борец Minibasket — кошарка за деца од 7–12 години во Велес, Северна Македонија. Секој вторник и четврток во Сала Васил Главинов.",
};

const benefits = [
  {
    title: "Моторни вештини",
    body: "Кошарката ја развива координацијата око-рака, работата со нозе и просторната свесност кај малите деца во најкритичната фаза од физичкиот развој.",
    icon: "🏃",
  },
  {
    title: "Координација и баланс",
    body: "Дриблањето, фаќањето и движењето истовремено го тренираат мозокот и телото да работат заедно — вештини што се пренесуваат далеку надвор од теренот.",
    icon: "⚖️",
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
  {
    title: "Активен начин на живот",
    body: "Два тренинзи неделно создаваат здрава рутина. Децата кои ќе се вљубат во спортот на мала возраст имаат тенденција да останат активни цел живот.",
    icon: "💪",
  },
  {
    title: "Забава, секогаш",
    body: "На Minibasket ниво, забавата не е опционална. Нашите тренери се обучени да ги одржуваат сесиите енергични, позитивни и нешто на што децата се радуваат цела недела.",
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
            Борец Баскет · Велес · Возраст 7–12
          </p>
          <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl">
            Mini
            <span className="text-brand-gold">basket</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Најдоброто нешто што можете да му дадете на дете е топка, терен и тим.
            Борец Minibasket е местото каде што започнува љубовта кон играта.
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
                Распоред
              </p>
              <h2 className="mb-4 font-heading text-3xl text-white">
                Секој вторник и четврток
              </h2>
              <p className="text-white/60 leading-relaxed">
                Секој вторник и четврток — две сесии неделно, совршено
                распоредени за градење ритам и опоравување. Точните термини
                се соопштуваат при регистрација и може да варираат по возрасна група.
              </p>
            </div>

            {/* Location */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="mb-1 font-body text-xs uppercase tracking-widest text-white/40">
                Локација
              </p>
              <h3 className="mb-2 font-heading text-xl text-white">
                Сала Васил Главинов
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Велес, Северна Македонија
              </p>
              <div className="mt-4 h-px w-full bg-white/10" />
              <p className="mt-4 text-sm text-white/40">
                Салата е централно лоцирана и лесно достапна од сите
                делови на Велес.
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
                Фото наскоро
              </span>
            </div>

            <div className="space-y-5 text-white/70 leading-relaxed">
              <h2 className="font-heading text-3xl uppercase text-white">
                Каде сè<br />
                <span className="text-brand-gold">започнува</span>
              </h2>
              <p>
                Борец Minibasket е влезната точка во нашиот целосен пат за
                развој на играчи. Децата од 7 до 12 години се запознаваат со
                кошарката на начин кој приоритизира уживање и љубопитност
                прво, а техничка вештина второ.
              </p>
              <p>
                Нашите тренери се искусни во работа со мали деца и
                разбираат дека на оваа возраст, да дојдеш со насмевка е
                најважното нешто. Сесиите се живи, структурирани и
                секогаш завршуваат со натпревар — затоа што ништо не е подобро
                од вистинската игра.
              </p>
              <p>
                Најдобрите играчи на Академијата во нашата историја поминале
                низ Minibasket. Некои од нашите сегашни сениорски играчи за прв
                пат допреле топка во Сала Васил Главинов.
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
              Зошто кошарка?
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Предности на ран <span className="text-brand-gold">почеток</span>
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
                  Фото наскоро
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
                За родители
              </p>
              <h2 className="mb-6 font-heading text-4xl uppercase text-white md:text-5xl">
                Што да <span className="text-brand-gold">очекувате</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Не е потребно претходно искуство. Вашето дете не мора да знае
                  да игра кошарка — токму за тоа сме тука.
                  Целата опрема е обезбедена на тренинзите; само донесете удобна
                  спортска облека и шише вода.
                </p>
                <p>
                  Сесиите траат приближно 60–75 минути и секогаш вклучуваат
                  загревање, вежби за вештини, мали натпревари и разладување.
                  Групите ги одржуваме мали за да обезбедиме секое дете да добие
                  индивидуално внимание од тренерот.
                </p>
                <p>
                  Талентираните и мотивирани играчи природно ќе напредуваат во
                  програмата на Академијата (M-12). Нема притисок — секое
                  дете се развива со свое темпо.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { q: "На која возраст може да почне моето дете?", a: "Од 7 години. Работиме со деца до 12 години во Minibasket програмата." },
                { q: "Дали треба однапред да се пријавам?", a: "Да. Контактирајте нè преку формуларот подолу и ќе ви потврдиме достапност и детали за термините." },
                { q: "Дали има членарина?", a: "Има скромен месечен членски придонес. Деталите се обезбедуваат при регистрација." },
                { q: "Што ако моето дете пропушти тренинг?", a: "Нема проблем — животот се случува. Редовното доаѓање се поттикнува, но не е строго задолжително на Minibasket ниво." },
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
              Спремни сте?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/60 leading-relaxed">
              Секој вторник и четврток, Сала Васил Главинов. Контактирајте нè и
              ние ќе се погрижиме за останатото.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white hover:bg-brand-red/80 font-body">
                Контактирајте нè
              </Link>
              <Link href="/academy" className="inline-flex items-center justify-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 font-body">
                Погледни Академија →
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
