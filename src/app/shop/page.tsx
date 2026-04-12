import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "Фан Шоп | Борец Баскет",
  description:
    "Официјален мерч на Борец Баскет — дуксери, термоси, шолји и дресови. Нарачај преку телефон или е-пошта.",
};

const PHONE = "+38972302214";
const EMAIL = "borecbasketball@gmail.com";

interface Product {
  name: string;
  subtitle: string;
  price: string;
  image: string | null;
  imageAlt?: string;
  tag?: string;
}

const products: Product[] = [
  {
    name: "«Fadeaway» дуксер",
    subtitle: "Црвен дуксер со Борец брендирање",
    price: "1.000 ден.",
    image: "/merch/hoodie.jpg",
    imageAlt: "/merch/hoodie_alt.jpg",
  },
  {
    name: "«Clean» термос",
    subtitle: "Бел тренинг термос",
    price: "600 ден.",
    image: "/merch/termos.jpg",
    imageAlt: "/merch/termos_alt.jpg",
  },
  {
    name: "«Timeout» шолја",
    subtitle: "Класична шолја за кафе",
    price: "300 ден.",
    image: "/merch/mug.jpg",
    imageAlt: "/merch/mug_alt.jpg",
  },
  {
    name: "Домашен дрес 25/26",
    subtitle: "Официјален натпреварувачки дрес — домашен",
    price: "Побарај цена",
    image: "/merch/jersey_home.png",
    tag: "Нов",
  },
  {
    name: "Гостински дрес 25/26",
    subtitle: "Официјален натпреварувачки дрес — гостински",
    price: "Побарај цена",
    image: "/merch/jersey_away.png",
    tag: "Нов",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[45vh] items-end overflow-hidden pb-12 pt-32">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(/pattern.png)",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="absolute left-0 top-0 h-1 w-full bg-brand-red" />

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <p className="mb-3 font-body text-sm uppercase tracking-widest text-brand-red">
            Борец Баскет · Велес
          </p>
          <h1 className="font-heading text-[7vw] sm:text-5xl uppercase leading-none text-white md:text-8xl">
            Фан <span className="text-brand-red">Шоп</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Официјален мерч на Борец Баскет. Нарачките се прават преку
            телефон или е-пошта.
          </p>
        </div>
      </section>

      {/* ─── Products Grid ─── */}
      <AnimatedSection>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.07}>
                <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-colors hover:border-brand-red/40">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-brand-black">
                    {product.image ? (
                      <>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className={`object-cover transition-all duration-500 ${product.imageAlt ? "group-hover:opacity-0" : "group-hover:scale-105"}`}
                        />
                        {product.imageAlt && (
                          <Image
                            src={product.imageAlt}
                            alt={`${product.name} — друг агол`}
                            fill
                            className="object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                          />
                        )}
                      </>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3 text-white/15">
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
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <span className="font-body text-xs uppercase tracking-widest">
                          Фото наскоро
                        </span>
                      </div>
                    )}
                    {product.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-white">
                        {product.tag}
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-heading text-xl text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">
                      {product.subtitle}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="font-heading text-2xl text-brand-red">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ─── How to Order ─── */}
      <AnimatedSection delay={0.1}>
        <section className="mx-auto max-w-7xl px-4 py-20 border-t border-white/10">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-2 font-body text-sm uppercase tracking-widest text-brand-red">
                Нарачка
              </p>
              <h2 className="mb-6 font-heading text-4xl uppercase text-white md:text-5xl">
                Како да <span className="text-brand-red">нарачате</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Моментално не нудиме онлајн нарачки. За да нарачате,
                  контактирајте нè директно преку телефон или е-пошта.
                  Кажете ни што сакате и ние ќе се погрижиме за останатото.
                </p>
                <p>
                  Испораката е лично преземање во Велес. За дресови,
                  контактирајте нè за достапни големини и цена.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:border-brand-red/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Телефон
                  </p>
                  <p className="font-heading text-lg text-white">
                    {PHONE}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}?subject=Нарачка — Борец Фан Шоп`}
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:border-brand-red/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-brand-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Е-пошта
                  </p>
                  <p className="font-heading text-lg text-white">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ─── Note ─── */}
      <AnimatedSection delay={0.05}>
        <section className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-lg border border-brand-red/20 bg-brand-red/5 p-6 text-center">
            <p className="text-sm text-white/50">
              Сите цени се во македонски денари (МКД). Достапноста на
              производите може да варира. За прашања, слободно контактирајте нè.
            </p>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
