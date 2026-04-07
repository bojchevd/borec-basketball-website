"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
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
        <h3 className="font-heading text-xl text-white">Message Sent!</h3>
        <p className="mt-2 text-white/50">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-white/70">Name</Label>
        <Input id="name" name="name" required className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30" placeholder="Your name" />
      </div>
      <div>
        <Label htmlFor="email" className="text-white/70">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30" placeholder="your@email.com" />
      </div>
      <div>
        <Label htmlFor="message" className="text-white/70">Message</Label>
        <Textarea id="message" name="message" required rows={5} className="mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30" placeholder="Your message..." />
      </div>
      <Button type="submit" disabled={status === "sending"} className="bg-brand-red hover:bg-brand-red/80 font-body">
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
      {status === "error" && <p className="text-sm text-brand-red">Failed to send. Please try again or email us directly.</p>}
    </form>
  );
}
