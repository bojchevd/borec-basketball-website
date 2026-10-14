import Link from "next/link";
import type { Game } from "@/lib/sanity/types";
import { getTranslations } from "@/lib/i18n";
import { formatGameDate } from "@/lib/utils";

function day(date: string) {
  return formatGameDate(date).day;
}

function month(date: string) {
  return formatGameDate(date).month;
}

function versus(game: Game) {
  return `${game.homeAway === "home" ? "vs" : "@"} ${game.opponent}`;
}

function ResultBadge({ game }: { game: Game }) {
  const t = getTranslations("mk");
  if (game.isWin === undefined || game.isWin === null) return null;
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase ${
        game.isWin ? "bg-green-500/10 text-green-500" : "bg-brand-red/10 text-brand-red"
      }`}
    >
      {game.isWin ? t.game.win : t.game.loss}
    </span>
  );
}

/** Big hero card: the next game, or the last result when nothing is scheduled. */
export function HeroGameCard({ game, variant }: { game: Game; variant: "next" | "last" }) {
  const t = getTranslations("mk");
  const isLast = variant === "last";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">
        {isLast ? t.home.lastGame : t.home.nextGame}
      </span>

      <div className="mt-6 flex items-center gap-6">
        <div>
          <div className="font-heading text-6xl leading-none text-white md:text-7xl">{day(game.date)}</div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/40">{month(game.date)}</div>
        </div>
        <div className="h-16 w-px bg-white/10" />
        <div>
          <div className="text-xl font-semibold text-white">{versus(game)}</div>
          {isLast ? (
            <div className="mt-2 flex items-center gap-3">
              <span className="font-heading text-3xl text-white">{game.result}</span>
              <ResultBadge game={game} />
            </div>
          ) : (
            <>
              <div className="mt-1 text-sm text-white/40">{game.location}</div>
              <div className="mt-2 inline-block rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold uppercase text-brand-red">
                {game.homeAway}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Link href="/schedule" className="inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white/60 hover:bg-white/5 font-body">
          {t.home.fullSchedule} →
        </Link>
        {game.youtubeUrl && (
          <a
            href={game.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Гледај на YouTube"
            className="inline-flex items-center justify-center rounded-md bg-brand-red p-2.5 text-white transition-opacity hover:opacity-80"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

/** One-line strip for the last result, shown under the next-game card. */
export function LastResultStrip({ game }: { game: Game }) {
  const t = getTranslations("mk");
  return (
    <Link
      href="/schedule"
      className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3 text-sm transition-colors hover:bg-white/[0.05]"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">{t.home.lastGame}</span>
      <span className="text-white/60">{versus(game)}</span>
      <span className="ml-auto flex items-center gap-3">
        <span className="font-heading text-lg text-white">{game.result}</span>
        <ResultBadge game={game} />
      </span>
    </Link>
  );
}
