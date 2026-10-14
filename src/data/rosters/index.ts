import type { Season } from "./types";
import { season as s2026_27 } from "./2026-27";
import { season as s2025_26 } from "./2025-26";

export type { Player, Staff, YouthPlayer, YouthCategory, Season } from "./types";

/** All seasons, newest first. To start a new season, add its file and put it at the top. */
export const seasons: Season[] = [s2026_27, s2025_26];

export const currentSeason = seasons[0];
export const pastSeasons = seasons.slice(1);

export function getSeason(slug: string): Season | undefined {
  return seasons.find((s) => s.slug === slug);
}

/** Date range for a season's games: from its start date until the next season starts. */
export function getSeasonRange(season: Season) {
  const newer = seasons[seasons.indexOf(season) - 1];
  return { seasonStart: season.startDate, seasonEnd: newer?.startDate ?? "9999-12-31" };
}
