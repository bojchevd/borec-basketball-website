"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/lib/i18n/provider";

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const data = { name: formData.get("name"), email: formData.get("email"), message: formData.get("message") };
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
      <div>
        <Label htmlFor="name" className="text-white/70">{t.contact.form.name}</Label>
        <Input id="name" name="name" required className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30" placeholder={t.contact.form.namePlaceholder} />
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
