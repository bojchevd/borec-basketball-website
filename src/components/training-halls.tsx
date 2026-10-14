import { trainingHalls } from "@/data/minibasket-trainings";
import { cn } from "@/lib/utils";

export function TrainingHalls({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {trainingHalls.map((hall) => (
        <div
          key={hall.name}
          className={cn(
            "rounded-lg border p-5",
            hall.isNew ? "border-brand-gold/20 bg-brand-gold/5" : "border-white/10 bg-white/5",
          )}
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-body text-xs uppercase tracking-widest text-brand-gold">Сала</p>
            {hall.isNew && (
              <span className="rounded-full bg-brand-gold/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-gold">
                Нов термин
              </span>
            )}
          </div>
          <p className="font-heading text-lg text-white">{hall.name}</p>
          <ul className="mt-3 space-y-1.5">
            {hall.sessions.map((s) => (
              <li key={s.day} className="flex justify-between text-sm">
                <span className="text-white/60">{s.day}</span>
                <span className="font-medium text-white">{s.time}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
