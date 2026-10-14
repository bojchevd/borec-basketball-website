"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { HallChoice } from "@/components/hall-choice";

type YesNo = "no" | "yes";

function RequiredMark() {
  return <span className="text-brand-red ml-0.5">*</span>;
}

function OptionalMark() {
  return <span className="ml-1 text-[10px] text-white/30">(опционално)</span>;
}

export function MinibasketSignupForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [healthIssues, setHealthIssues] = useState<YesNo>("no");
  const [boneInjury, setBoneInjury] = useState<YesNo>("no");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const data = {
      childName: fd.get("childName"),
      birthDate: fd.get("birthDate"),
      gender: fd.get("gender"),
      childPhone: fd.get("childPhone"),
      school: fd.get("school"),
      grade: fd.get("grade"),
      hall: fd.get("hall"),
      parentName: fd.get("parentName"),
      parentEmail: fd.get("parentEmail"),
      parentPhone: fd.get("parentPhone"),
      parentPhone2: fd.get("parentPhone2"),
      healthIssues: fd.get("healthIssues"),
      healthDetails: fd.get("healthDetails"),
      boneInjury: fd.get("boneInjury"),
      boneInjuryDetails: fd.get("boneInjuryDetails"),
      signedBy: fd.get("signedBy"),
      notifications: fd.get("notifications") === "on" ? "yes" : "no",
    };
    try {
      const res = await fetch("/api/minibasket-signup", {
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
        <h3 className="font-heading text-xl text-white">Пријавата е испратена!</h3>
        <p className="mt-2 text-white/50">
          Ви благодариме. Ќе ве контактираме наскоро за потврда.
        </p>
      </div>
    );
  }

  const inputClass = "mt-1 border-white/20 bg-white/5 text-white placeholder:text-white/30";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* ── Child info ── */}
      <div>
        <h3 className="mb-4 font-heading text-lg uppercase text-brand-gold">
          Податоци за детето
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="childName" className="text-white/70">Име и презиме<RequiredMark /></Label>
            <Input id="childName" name="childName" required className={inputClass} placeholder="Име и презиме на детето" />
          </div>
          <div>
            <Label htmlFor="birthDate" className="text-white/70">Датум на раѓање<RequiredMark /></Label>
            <Input id="birthDate" name="birthDate" type="date" required className={inputClass} />
          </div>
          <div>
            <Label className="text-white/70">Пол<RequiredMark /></Label>
            <div className="mt-1 flex gap-2">
              <label className="flex-1">
                <input type="radio" name="gender" value="М" required className="peer sr-only" />
                <span className="flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/60 cursor-pointer peer-checked:border-brand-gold peer-checked:bg-brand-gold/10 peer-checked:text-brand-gold transition-colors">
                  Машки
                </span>
              </label>
              <label className="flex-1">
                <input type="radio" name="gender" value="Ж" className="peer sr-only" />
                <span className="flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/60 cursor-pointer peer-checked:border-brand-gold peer-checked:bg-brand-gold/10 peer-checked:text-brand-gold transition-colors">
                  Женски
                </span>
              </label>
            </div>
          </div>
          <div>
            <Label htmlFor="childPhone" className="text-white/70">Тел. број<OptionalMark /></Label>
            <Input id="childPhone" name="childPhone" type="tel" className={inputClass} placeholder="07X/XXX-XXX" />
          </div>
          <div>
            <Label htmlFor="school" className="text-white/70">Училиште<RequiredMark /></Label>
            <Input id="school" name="school" required className={inputClass} placeholder="Име на училиште" />
          </div>
          <div>
            <Label htmlFor="grade" className="text-white/70">Одделение<RequiredMark /></Label>
            <Input id="grade" name="grade" required className={inputClass} placeholder="пр. 3-то" />
          </div>
        </div>
        <div className="mt-4">
          <HallChoice />
        </div>
      </div>

      {/* ── Parent info ── */}
      <div>
        <h3 className="mb-4 font-heading text-lg uppercase text-brand-gold">
          Податоци за родител / старател
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="parentName" className="text-white/70">Име на родител/старател<RequiredMark /></Label>
            <Input id="parentName" name="parentName" required className={inputClass} placeholder="Име и презиме" />
          </div>
          <div>
            <Label htmlFor="parentEmail" className="text-white/70">Е-маил адреса<RequiredMark /></Label>
            <Input id="parentEmail" name="parentEmail" type="email" required pattern=".*@.*\..*" className={inputClass} placeholder="example@email.com" />
          </div>
          <div>
            <Label htmlFor="parentPhone" className="text-white/70">Контакт тел.<RequiredMark /></Label>
            <Input id="parentPhone" name="parentPhone" type="tel" required className={inputClass} placeholder="07X/XXX-XXX" />
          </div>
          <div>
            <Label htmlFor="parentPhone2" className="text-white/70">Контакт тел. 2<OptionalMark /></Label>
            <Input id="parentPhone2" name="parentPhone2" type="tel" className={inputClass} placeholder="07X/XXX-XXX" />
          </div>
        </div>
      </div>

      {/* ── Medical ── */}
      <div>
        <h3 className="mb-4 font-heading text-lg uppercase text-brand-gold">
          Важни медицински забелешки
        </h3>
        <div className="space-y-5">
          {/* Q1: Health issues */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="mb-3 text-sm text-white/70">
              Дали детето има некакви здравствени проблеми, алергии или хронични заболувања (пр. астма, дијабетес, срцеви пречки)?<RequiredMark />
            </p>
            <input type="hidden" name="healthIssues" value={healthIssues} />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setHealthIssues("no")}
                className={`rounded-md border px-5 py-2 text-sm font-medium transition-colors ${
                  healthIssues === "no"
                    ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                    : "border-white/20 bg-white/5 text-white/60 hover:border-white/40"
                }`}
              >
                НЕ
              </button>
              <button
                type="button"
                onClick={() => setHealthIssues("yes")}
                className={`rounded-md border px-5 py-2 text-sm font-medium transition-colors ${
                  healthIssues === "yes"
                    ? "border-brand-red bg-brand-red/10 text-brand-red"
                    : "border-white/20 bg-white/5 text-white/60 hover:border-white/40"
                }`}
              >
                ДА
              </button>
            </div>
            {healthIssues === "yes" && (
              <div className="mt-3">
                <Label htmlFor="healthDetails" className="text-white/70">Наведете што:<RequiredMark /></Label>
                <Textarea
                  id="healthDetails"
                  name="healthDetails"
                  required
                  rows={2}
                  className={inputClass}
                  placeholder="Опишете ги здравствените состојби..."
                />
              </div>
            )}
          </div>

          {/* Q2: Bone injuries */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="mb-3 text-sm text-white/70">
              Дали детето во минатото претрпело потешка повреда на коските или зглобовите?<RequiredMark />
            </p>
            <input type="hidden" name="boneInjury" value={boneInjury} />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setBoneInjury("no")}
                className={`rounded-md border px-5 py-2 text-sm font-medium transition-colors ${
                  boneInjury === "no"
                    ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                    : "border-white/20 bg-white/5 text-white/60 hover:border-white/40"
                }`}
              >
                НЕ
              </button>
              <button
                type="button"
                onClick={() => setBoneInjury("yes")}
                className={`rounded-md border px-5 py-2 text-sm font-medium transition-colors ${
                  boneInjury === "yes"
                    ? "border-brand-red bg-brand-red/10 text-brand-red"
                    : "border-white/20 bg-white/5 text-white/60 hover:border-white/40"
                }`}
              >
                ДА
              </button>
            </div>
            {boneInjury === "yes" && (
              <div className="mt-3">
                <Label htmlFor="boneInjuryDetails" className="text-white/70">Наведете што:<RequiredMark /></Label>
                <Textarea
                  id="boneInjuryDetails"
                  name="boneInjuryDetails"
                  required
                  rows={2}
                  className={inputClass}
                  placeholder="Опишете ја повредата..."
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Signature ── */}
      <div>
        <h3 className="mb-4 font-heading text-lg uppercase text-brand-gold">
          Потпис на родител / старател
        </h3>
        <div>
          <Label htmlFor="signedBy" className="text-white/70">Име и презиме (наместо потпис)<RequiredMark /></Label>
          <Input id="signedBy" name="signedBy" required className={inputClass} placeholder="Внесете го вашето целосно име" />
        </div>
      </div>

      {/* ── Notifications opt-in ── */}
      <label className="flex items-start gap-2.5 cursor-pointer group">
        <input type="checkbox" name="notifications" className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-brand-gold" />
        <span className="text-xs leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
          Се согласувам да добивам СМС и/или Емаил известувања за следни тренинзи, натпревари и случувања на КК Борец Баскет.
        </span>
      </label>

      {/* ── Submit ── */}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-brand-red hover:bg-brand-red/80 font-body text-base py-3 sm:w-auto sm:px-12"
      >
        {status === "sending" ? "Се испраќа..." : "Испрати пријава"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-brand-red">
          Грешка при испраќање. Обидете се повторно или контактирајте нè директно.
        </p>
      )}
    </form>
  );
}
