import { formatGameDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Game } from "@/lib/sanity/types";
import { GameShare } from "@/components/game-share";
import { getTranslations } from "@/lib/i18n";

export function GameCard({ game }: { game: Game }) {
  const t = getTranslations("mk");
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
            {game.homeAway === "home" ? t.game.home : t.game.away}
          </Badge>
        </div>
        <div className="mt-1 text-sm text-white/50">{game.location} · {weekday} {time}</div>
      </div>
      {isPast && game.result && (
        <div className="text-right">
          <div className="font-heading text-2xl text-white">{game.result}</div>
          <div className={`text-xs font-bold uppercase ${game.isWin ? "text-green-500" : "text-brand-red"}`}>
            {game.isWin ? t.game.win : t.game.loss}
          </div>
        </div>
      )}
      <GameShare text={`Борец Баскет ${game.result ? game.result + " " : ""}${game.homeAway === "home" ? "vs" : "@"} ${game.opponent} · ${day} ${month}`} />
      {game.youtubeUrl && (
        <a
          href={game.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Гледај на YouTube"
          className="flex-shrink-0 rounded-lg bg-brand-red p-2.5 text-white transition-opacity hover:opacity-80"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      )}
    </div>
  );
}
