import { formatGameDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/sanity/types";

export function GameCard({ game }: { game: Game }) {
  const { day, month, weekday, time } = formatGameDate(game.date);
  const isPast = new Date(game.date) < new Date();
  return (
    <div className="flex items-center gap-6 border-b border-white/10 py-6">
      <div className="text-center">
        <div className="font-heading text-5xl leading-none text-white md:text-7xl">{day}</div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">{month}</div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">{game.homeAway === "home" ? "vs" : "@"} {game.opponent}</span>
          <Badge variant={game.homeAway === "home" ? "default" : "outline"} className={game.homeAway === "home" ? "bg-brand-red text-white" : "border-white/30 text-white/70"}>
            {game.homeAway.toUpperCase()}
          </Badge>
        </div>
        <div className="mt-1 text-sm text-white/50">{game.location} · {weekday} {time}</div>
      </div>
      {isPast && game.result && (
        <div className="text-right">
          <div className="font-heading text-2xl text-white">{game.result}</div>
          <div className={`text-xs font-bold uppercase ${game.isWin ? "text-green-500" : "text-brand-red"}`}>
            {game.isWin ? "WIN" : "LOSS"}
          </div>
        </div>
      )}
    </div>
  );
}
