import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { FriendsPills } from "@/components/friends-pills";
import { getTranslations } from "@/lib/i18n";

export const metadata: Metadata = { title: "Пријатели | Борец Баскет", description: "Пријатели на клубот Борец Баскет." };

export default function SponsorsPage() {
  const t = getTranslations("mk");
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        Пријатели <span className="text-brand-red">на клубот</span>
      </h1>
      <AnimatedSection>
        <FriendsPills />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="mt-20 rounded-lg border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="font-heading text-2xl text-white">Стани дел од Борец</h2>
          <p className="mt-2 text-white/50">{t.sponsors.becomeSponsorDesc}</p>
          <a href="/contact" className="mt-4 inline-block rounded-md bg-brand-red px-6 py-2 text-sm font-medium text-white hover:bg-brand-red/80">{t.sponsors.contactUs}</a>
        </div>
      </AnimatedSection>
    </section>
  );
}
