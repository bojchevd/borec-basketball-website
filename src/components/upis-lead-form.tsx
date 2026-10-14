"use client";

import { useState } from "react";
import { HallChoice } from "@/components/hall-choice";

export function UpisLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const data = {
      childName: fd.get("childName"),
      childAge: fd.get("childAge"),
      parentName: fd.get("parentName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      hall: fd.get("hall"),
      notifications: fd.get("notifications") === "on" ? "yes" : "no",
    };
    try {
      const res = await fetch("/api/upis-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-8 text-center">
        <h3 className="font-heading text-xl text-white">Ви благодариме!</h3>
        <p className="mt-2 text-white/50">
          Ќе ве контактираме наскоро со повеќе детали.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-brand-gold transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="childName"
          required
          className={inputClass}
          placeholder="Име на дете"
        />
        <input
          name="childAge"
          type="number"
          min={5}
          max={12}
          required
          className={inputClass}
          placeholder="Возраст (5–12)"
        />
      </div>
      <input
        name="parentName"
        required
        className={inputClass}
        placeholder="Име на родител/старател"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="phone"
          type="tel"
          required
          className={inputClass}
          placeholder="Телефон — 07X/XXX-XXX"
        />
        <input
          name="email"
          type="email"
          required
          pattern=".*@.*\..*"
          className={inputClass}
          placeholder="Е-маил адреса"
        />
      </div>

      <HallChoice />

      <label className="flex items-start gap-2.5 cursor-pointer group">
        <input
          type="checkbox"
          name="notifications"
          className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-brand-gold"
        />
        <span className="text-xs leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
          Се согласувам да добивам СМС и/или Емаил известувања за следни
          тренинзи, натпревари и случувања на КК Борец Баскет.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-md bg-brand-red py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-red/80 transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Се испраќа..." : "Пријави се"}
      </button>

      <p className="text-center text-[11px] text-white/30">
        Со пријавувањето се согласувате да ве контактираме за повеќе детали и упис.
      </p>

      {status === "error" && (
        <p className="text-center text-sm text-brand-red">
          Грешка при испраќање. Обидете се повторно.
        </p>
      )}
    </form>
  );
}
