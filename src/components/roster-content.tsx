"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { seasons, currentSeason } from "@/data/rosters";
import type { Player, YouthPlayer } from "@/data/rosters";
import { PlayerCard } from "@/components/player-card";
import { RosterSelector } from "@/components/roster-selector";
import { AnimatedSection } from "@/components/animated-section";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

const seasonOptions = seasons.map((s) => ({ value: s.slug, label: s.label }));

export function RosterContent({
  seasonSlug,
  translations,
}: {
  seasonSlug: string;
  translations: { title: string; coachingStaff: string; pastSeason: string };
}) {
  const router = useRouter();
  const [team, setTeam] = useState("senior");

  const season = seasons.find((s) => s.slug === seasonSlug) ?? currentSeason;
  const { roster, coachingStaff, youthRosters } = season;
  const isPastSeason = season.slug !== currentSeason.slug;

  const teamOptions = [
    { value: "senior", label: "Сениори" },
    ...youthRosters.map((r) => ({ value: r.slug, label: r.label })),
  ];

  const isSenior = team === "senior";
  const youthRoster = youthRosters.find((r) => r.slug === team);

  return (
    <>
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="font-heading text-5xl uppercase text-white md:text-6xl">
            <span className="text-brand-red">{translations.title}</span>
          </h1>
          <RosterSelector
            options={seasonOptions}
            value={season.slug}
            onChange={(slug) => router.push(slug === currentSeason.slug ? "/roster" : `/roster/${slug}`)}
          />
        </div>
        <div role="tablist" className="mt-8 flex items-end gap-5 overflow-x-auto shadow-[inset_0_-1px_0_rgba(255,255,255,0.1)] md:gap-8">
          {teamOptions.map((option) => {
            const selected = option.value === team;
            return (
              <button
                key={option.value}
                role="tab"
                aria-selected={selected}
                onClick={() => setTeam(option.value)}
                className={`shrink-0 whitespace-nowrap border-b-2 pb-3 font-heading uppercase tracking-wider transition-all ${
                  selected
                    ? "border-brand-red text-lg text-white"
                    : "border-transparent text-sm text-white/50 hover:text-white"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
        {isPastSeason && (
          <p className="mt-4 text-sm text-white/50">
            {translations.pastSeason} {season.label}
          </p>
        )}
      </div>

      {isSenior ? (
        <>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {roster.map((player: Player, i: number) => (
              <AnimatedSection key={player.number} delay={i * 0.05}>
                <PlayerCard player={player} />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="mt-20">
              <h2 className="mb-8 font-heading text-3xl uppercase text-white/30">{translations.coachingStaff}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {coachingStaff.map((member) => (
                  <div key={member.name} className="rounded-lg border border-white/10 bg-white/5 p-6">
                    <h3 className="font-heading text-lg text-white">{member.name}</h3>
                    <p className="text-sm text-brand-red">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </>
      ) : youthRoster ? (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {youthRoster.players.map((player: YouthPlayer, i: number) => (
            <AnimatedSection key={player.name} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-lg bg-white/5">
                <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-white/[0.03] to-brand-black p-4">
                  <span className="font-heading text-6xl text-white/[0.07] md:text-8xl">
                    {player.number !== undefined ? `#${player.number}` : initials(player.name)}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                  {player.number !== undefined && (
                    <div className="font-heading text-3xl text-brand-red md:text-4xl">#{player.number}</div>
                  )}
                  <h3 className="font-heading text-base text-white md:text-lg">{player.name}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      ) : null}
    </>
  );
}
