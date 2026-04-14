"use client";

import { useState } from "react";
import { roster, coachingStaff } from "@/data/roster";
import type { Player } from "@/data/roster";
import { youthRosters } from "@/data/youth-rosters";
import type { YouthPlayer } from "@/data/youth-rosters";
import { PlayerCard } from "@/components/player-card";
import { RosterSelector } from "@/components/roster-selector";
import { AnimatedSection } from "@/components/animated-section";

const teamOptions = [
  { value: "senior", label: "Сениори" },
  ...youthRosters.map((r) => ({ value: r.slug, label: r.label })),
];

export function RosterContent({ translations }: { translations: { title: string; coachingStaff: string } }) {
  const [team, setTeam] = useState("senior");

  const isSenior = team === "senior";
  const youthRoster = youthRosters.find((r) => r.slug === team);

  return (
    <>
      <div className="mb-12 flex items-center gap-4">
        <h1 className="font-heading text-5xl uppercase text-white md:text-6xl">
          <span className="text-brand-red">{translations.title}</span>
        </h1>
        <RosterSelector options={teamOptions} value={team} onChange={setTeam} />
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
            <AnimatedSection key={`${player.name}-${player.number}`} delay={i * 0.05}>
              <div className="group relative overflow-hidden rounded-lg bg-white/5">
                <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-white/[0.03] to-brand-black p-4">
                  <span className="font-heading text-6xl text-white/[0.07] md:text-8xl">#{player.number}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                  <div className="font-heading text-3xl text-brand-red md:text-4xl">#{player.number}</div>
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
