import { trainingHalls, ANY_HALL } from "@/data/minibasket-trainings";

const pill =
  "flex cursor-pointer flex-col items-center rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/60 transition-colors hover:border-white/40 has-[:checked]:border-brand-gold has-[:checked]:bg-brand-gold/10 has-[:checked]:text-brand-gold has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand-gold/60";

/** "Which hall suits you?" radio pills for the minibasket signup forms; submits as `hall`. */
export function HallChoice({ label = "Која сала ви одговара?" }: { label?: string }) {
  const options = [
    ...trainingHalls.map((h) => ({ value: h.shortName, title: h.shortName, sub: h.shortDays })),
    { value: ANY_HALL, title: ANY_HALL, sub: "која било" },
  ];
  return (
    <fieldset>
      <legend className="mb-2 text-sm text-white/70">{label}</legend>
      <div className="grid grid-cols-3 gap-2">
        {options.map((o) => (
          <label key={o.value} className={pill}>
            <input type="radio" name="hall" value={o.value} defaultChecked={o.value === ANY_HALL} className="sr-only" />
            <span className="font-medium">{o.title}</span>
            <span className="text-[11px] opacity-70">{o.sub}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
