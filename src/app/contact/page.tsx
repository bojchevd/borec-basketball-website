import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { AnimatedSection } from "@/components/animated-section";
import { socialLinks } from "@/data/social-links";
import { getTranslations } from "@/lib/i18n";

export const metadata: Metadata = { title: "Contact | Борец Баскет", description: "Get in touch with Borec Basketball." };

export default function ContactPage() {
  const t = getTranslations("mk");
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl"><span className="text-brand-red">{t.contact.title}</span></h1>
      <div className="grid gap-12 md:grid-cols-2">
        <AnimatedSection>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-xl text-white">{t.contact.locationLabel}</h2>
              <p className="mt-2 text-white/50">{t.contact.locationValue}</p>
            </div>
            <div>
              <h2 className="font-heading text-xl text-white">{t.contact.emailLabel}</h2>
              <a href="mailto:borecbasketball@gmail.com" className="mt-2 block text-brand-red hover:text-brand-red/80">borecbasketball@gmail.com</a>
            </div>
            <div>
              <h2 className="font-heading text-xl text-white">{t.contact.socialLabel}</h2>
              <div className="mt-2 flex gap-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-red">{link.name}</a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}><ContactForm /></AnimatedSection>
      </div>
    </section>
  );
}
