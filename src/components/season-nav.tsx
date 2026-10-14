"use client";

import { useRouter } from "next/navigation";
import { seasons, currentSeason } from "@/data/rosters";
import { RosterSelector } from "@/components/roster-selector";

const seasonOptions = seasons.map((s) => ({ value: s.slug, label: s.label }));

/** Season dropdown that navigates between `basePath` (current season) and `basePath/<slug>` (archive). */
export function SeasonNav({ basePath, value }: { basePath: string; value: string }) {
  const router = useRouter();
  return (
    <RosterSelector
      options={seasonOptions}
      value={value}
      onChange={(slug) => router.push(slug === currentSeason.slug ? basePath : `${basePath}/${slug}`)}
    />
  );
}
