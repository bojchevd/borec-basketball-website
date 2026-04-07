import type { Metadata } from "next";
import { sponsors } from "@/data/sponsors";
import { SponsorGrid } from "@/components/sponsor-grid";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = { title: "Sponsors | Борец Баскет", description: "Our sponsors and partners." };

export default function SponsorsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">Our <span className="text-brand-red">Sponsors</span></h1>
      <AnimatedSection><SponsorGrid sponsors={[...sponsors]} /></AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="mt-20 rounded-lg border border-white/10 bg-white/5 p-8 text-center">
          <h2 className="font-heading text-2xl text-white">Become a Sponsor</h2>
          <p className="mt-2 text-white/50">Interested in supporting Borec Basketball? Get in touch.</p>
          <a href="/contact" className="mt-4 inline-block rounded-md bg-brand-red px-6 py-2 text-sm font-medium text-white hover:bg-brand-red/80">Contact Us</a>
        </div>
      </AnimatedSection>
    </section>
  );
}
