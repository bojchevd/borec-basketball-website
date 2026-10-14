import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { TrainingHalls } from "@/components/training-halls";
import { LightboxImage } from "@/components/lightbox";
import { MinibasketSignupForm } from "@/components/minibasket-signup-form";


export const metadata: Metadata = {
  title: "Минибаскет",
  description:
    "Борец Минибаскет — кошарка за деца од 5–12 години во Велес, Македонија. Тренинзи во ООУ „Васил Главинов“ (вторник и четврток) и СОУ Гимназија „Кочо Рацин“ (среда и петок).",
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
    body: "На Минибаскет ниво, забавата не е опционална. Нашите тренери се обучени да ги одржуваат сесиите енергични, позитивни и нешто на што децата се радуваат цела недела.",
    icon: "🎉",
  },
];

export default function МинибаскетPage() {
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
            Борец Баскет · Велес · Возраст 5–12
          </p>
          <h1 className="font-heading text-[7vw] sm:text-5xl uppercase leading-none text-white md:text-8xl">
            Мини
            <span className="text-brand-gold">баскет</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Најдоброто нешто што можете да му дадете на дете е топка, терен и тим.
            Борец Минибаскет е местото каде што започнува љубовта кон играта.
          </p>
        </div>
      </section>

      {/* ─── УПИС ─── */}
      <AnimatedSection>
        <section id="upis" className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-gold">
              Нова сезона
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              <span className="text-brand-gold">Упис</span> на Минибаскет
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Main message */}
            <div className="rounded-lg border border-brand-gold/20 bg-brand-gold/5 p-6 md:col-span-2 lg:col-span-3">
              <p className="text-lg leading-relaxed text-white/80">
                Ако сакаш преку забава и игра со врсниците да ги научиш основите
                на кошаркарската игра, те чекаме на упис во новата сезона!
              </p>
              <div className="mt-4 inline-block rounded-md bg-brand-gold/10 border border-brand-gold/30 px-4 py-2">
                <p className="text-sm font-medium text-brand-gold">
                  Охрабрете се да дојдете на пробен тренинг, истиот е бесплатен!
                </p>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Уписот се врши за време на тренинзите, во двете сали.
              </p>
            </div>

            {/* Training halls & times */}
            <TrainingHalls className="md:col-span-2 lg:col-span-3" />

            {/* Contact */}
            <div className="rounded-lg border border-white/10 bg-white/5 p-6 md:col-span-2 lg:col-span-3">
              <p className="mb-3 font-body text-xs uppercase tracking-widest text-brand-gold">
                Контакт и инфо
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">Тренер Васе</p>
                    <a href="tel:072306635" className="text-sm text-white/50 hover:text-brand-gold transition-colors">072/306-635</a>
                  </div>
                  <a href="viber://chat?number=%2B38972306635" className="inline-flex items-center rounded-full bg-[#7360f2]/15 px-2.5 py-1 text-xs font-medium text-[#7360f2] hover:bg-[#7360f2]/25 transition-colors">Viber</a>
                </div>
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">Тренер Аце</p>
                    <a href="tel:076213975" className="text-sm text-white/50 hover:text-brand-gold transition-colors">076/213-975</a>
                  </div>
                  <a href="viber://chat?number=%2B38976213975" className="inline-flex items-center rounded-full bg-[#7360f2]/15 px-2.5 py-1 text-xs font-medium text-[#7360f2] hover:bg-[#7360f2]/25 transition-colors">Viber</a>
                </div>
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-white">Тренер Ане</p>
                    <a href="tel:078245559" className="text-sm text-white/50 hover:text-brand-gold transition-colors">078/245-559</a>
                  </div>
                  <a href="viber://chat?number=%2B38978245559" className="inline-flex items-center rounded-full bg-[#7360f2]/15 px-2.5 py-1 text-xs font-medium text-[#7360f2] hover:bg-[#7360f2]/25 transition-colors">Viber</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── About / Intro ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-7xl px-4 pb-20 border-t border-white/10 pt-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/minibasket/practice_01.jpg"
                alt="Минибаскет тренинг"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-5 text-white/70 leading-relaxed">
              <h2 className="font-heading text-3xl uppercase text-white">
                Каде сè<br />
                <span className="text-brand-gold">започнува</span>
              </h2>
              <p>
                Борец Минибаскет е влезната точка во нашиот целосен пат за
                развој на играчи. Децата од 5 до 12 години се запознаваат со
                кошарката на начин кој приоритизира уживање и љубопитност
                прво, а техничка вештина второ.
              </p>
              <p>
                Нашите тренери се искусни во работа со мали деца и
                разбираат дека на оваа возраст, да дојдеш со насмевка е
                најважното нешто.
              </p>
              <p>
                Најдобрите играчи на Академијата во нашата историја поминале
                низ Минибаскет. Некои од нашите сегашни сениорски играчи за прв
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

      {/* ─── Signup Form ─── */}
      <AnimatedSection delay={0.1}>
        <section id="prijava" className="mx-auto max-w-7xl scroll-mt-16 px-4 py-20 border-t border-white/10">
          <div className="mx-auto max-w-3xl rounded-lg border border-white/10 bg-white/5 p-6 md:p-10">
            <h3 className="mb-6 text-center font-heading text-2xl uppercase text-white">
              Формулар за <span className="text-brand-gold">пријава</span>
            </h3>
            <MinibasketSignupForm />
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Photo Gallery ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="mb-12">
            <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-gold">
              Галерија
            </p>
            <h2 className="font-heading text-4xl uppercase text-white md:text-5xl">
              Од <span className="text-brand-gold">теренот</span>
            </h2>
          </div>

          {/* Practice photos */}
          <div className="grid gap-4 grid-cols-3">
            {[
              { src: "/minibasket/practice_01.jpg", alt: "Минибаскет тренинг" },
              { src: "/minibasket/practice_02.jpg", alt: "Минибаскет тренинг" },
              { src: "/minibasket/practice_03.jpg", alt: "Минибаскет тренинг" },
            ].map((photo) => (
              <AnimatedSection key={photo.src} delay={0.05}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <LightboxImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Game photos — Minibasket Caravan */}
          <div className="mt-4 grid gap-4 grid-cols-2">
            {[
              { src: "/minibasket/game_01.jpg", alt: "Минибаскет Караван — КФСМ" },
              { src: "/minibasket/game_02.jpg", alt: "Минибаскет Караван — КФСМ" },
            ].map((photo) => (
              <AnimatedSection key={photo.src} delay={0.08}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <LightboxImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/30 text-right">
            Фотографии од натпревар: Минибаскет Караван во организација на Кошаркарската Федерација на Македонија (КФСМ)
          </p>
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
                  Тренингот трае 60 минути. Се трудиме секое дете да добие
                  подеднакво иднивидуално внимание од тренерот.
                </p>
                <p>
                  Нашите момчиња и девојчиња неколку пати во годината добиваат
                  шанса да учествуваат на забавни минибаскет дружби и натпревари
                  против нивните врсници од различни делови на Македонија,
                  вклучувајќи го и Минибаскет Караванот во организација на
                  Кошаркарската Федерација на Македонија (КФСМ). Ова е супер
                  основа и увертира да се припремат за компетитивни натпревари
                  почнувајќи од 11–12 години.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { q: "На која возраст може да почне моето дете?", a: "Од 5 години. Работиме со деца до 12 години во Минибаскет програмата." },
                { q: "Дали треба однапред да се пријавам?", a: "Да. Контактирајте нè преку формуларот подолу или на некој од телефонските броеви и ќе ви потврдиме достапност и детали за термините." },
                { q: "Дали има членарина?", a: "Има скромен месечен членски придонес. Деталите се обезбедуваат при регистрација." },
                { q: "Што ако моето дете пропушти тренинг?", a: "Нема проблем — животот се случува. Редовното доаѓање се поттикнува, но не е строго задолжително на Минибаскет ниво." },
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
              Четири термини неделно, во две сали низ Велес. Пополнете ја
              пријавата и ние ќе се погрижиме за останатото.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="#prijava" className="inline-flex items-center justify-center rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white hover:bg-brand-red/80 font-body">
                Пријави се
              </a>
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
