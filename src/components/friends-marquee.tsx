"use client";

import { partners as friends } from "@/data/sponsors";

export function FriendsMarquee() {
  const row1 = friends.slice(0, Math.ceil(friends.length / 2));
  const row2 = friends.slice(Math.ceil(friends.length / 2));

  return (
    <div className="space-y-4 overflow-hidden">
      <MarqueeRow names={row1} direction="left" />
      <MarqueeRow names={row2} direction="right" />
    </div>
  );
}

function MarqueeRow({ names, direction }: { names: string[]; direction: "left" | "right" }) {
  const text = names.join("  ·  ");
  const repeated = `${text}  ·  `.repeat(4);

  return (
    <div className="relative overflow-hidden whitespace-nowrap py-2">
      <div
        className={direction === "left" ? "animate-marquee inline-block" : "animate-marquee-reverse inline-block"}
        style={{ animationDuration: "120s" }}
      >
        <span className="font-heading text-lg uppercase tracking-widest text-white/20 md:text-2xl">
          {repeated}
        </span>
      </div>
    </div>
  );
}
