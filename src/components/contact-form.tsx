"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n/provider";
import { contactTopics, type ContactTopic, type ContactType } from "@/lib/contact";

const pill =
  "cursor-pointer rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/60 transition-colors hover:border-white/40 hover:text-white has-[:checked]:border-brand-red has-[:checked]:bg-brand-red/15 has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-red/60";

export function ContactForm({
  initialType = "person",
  initialTopic,
}: {
  initialType?: ContactType;
  initialTopic?: ContactTopic;
}) {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [type, setType] = useState<ContactType>(initialType);
  const isBusiness = type === "business";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const data = {
      type,
      topic: isBusiness ? formData.get("topic") : null,
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-8 text-center">
        <h3 className="font-heading text-xl text-white">{t.contact.form.sent}</h3>
        <p className="mt-2 text-white/50">{t.contact.form.sentDesc}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div role="radiogroup" className="inline-flex rounded-lg border border-white/20 bg-white/5 p-1">
        {(["person", "business"] as const).map((value) => (
          <label
            key={value}
            className="cursor-pointer rounded-md px-5 py-2 text-sm text-white/60 transition-colors hover:text-white has-[:checked]:bg-brand-red has-[:checked]:text-white has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-white/60"
          >
            <input
              type="radio"
              name="type"
              value={value}
              checked={type === value}
              onChange={() => setType(value)}
              className="sr-only"
            />
            {value === "person" ? t.contact.form.typePerson : t.contact.form.typeBusiness}
          </label>
        ))}
      </div>
      {isBusiness && (
        <fieldset>
          <legend className="text-sm font-medium text-white/70">{t.contact.form.topic}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {contactTopics.map((topic) => (
              <label key={topic} className={pill}>
                <input type="radio" name="topic" value={topic} defaultChecked={topic === initialTopic} className="sr-only" />
                {t.contact.form.topics[topic]}
              </label>
            ))}
          </div>
        </fieldset>
      )}
      <div>
        <Label htmlFor="name" className="text-white/70">{isBusiness ? t.contact.form.company : t.contact.form.name}</Label>
        <Input
          id="name"
          name="name"
          required
          className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30"
          placeholder={isBusiness ? t.contact.form.companyPlaceholder : t.contact.form.namePlaceholder}
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-white/70">{t.contact.form.email}</Label>
        <Input id="email" name="email" type="email" required className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30" placeholder={t.contact.form.emailPlaceholder} />
      </div>
      <div>
        <Label htmlFor="message" className="text-white/70">{t.contact.form.message}</Label>
        <Textarea id="message" name="message" required rows={5} className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30" placeholder={t.contact.form.messagePlaceholder} />
      </div>
      <Button type="submit" disabled={status === "sending"} className="bg-brand-red hover:bg-brand-red/80 font-body">
        {status === "sending" ? t.contact.form.sending : t.contact.form.send}
      </Button>
      {status === "error" && <p className="text-sm text-brand-red">{t.contact.form.error}</p>}
    </form>
  );
}
