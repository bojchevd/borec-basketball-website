"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const friends = [
  "Тета Коп",
  "Пододекор",
  "Фурна Којник",
  "Escape Cafe",
  "Пескара Вел",
  "Џуниор Парк",
  "Collective",
  "ДД Транс",
  "Дисконт Риле",
  "АЦ Електрик",
  "ИВА 2003",
  "Слот Клуб 77777",
  "Енмон",
  "Ricco",
  "Минерали Метали",
  "Италеуромак",
  "Општина Велес",
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function seeded(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function FriendsPills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState(friends);
  const [depthSeed, setDepthSeed] = useState(0);

  const handleHover = useCallback(() => {
    setOrder(shuffle(friends));
    setDepthSeed((s) => s + 17);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let time = 0;

    function animate() {
      time += 0.003;
      const pills = container!.querySelectorAll<HTMLElement>("[data-pill]");

      pills.forEach((pill, i) => {
        const speed = 0.5 + seeded(i + 50) * 0.8;
        const phase = seeded(i + depthSeed) * Math.PI * 2;

        const floatY = Math.sin(time * speed + phase) * 14;
        const floatX = Math.cos(time * speed * 0.7 + phase) * 8;
        const floatZ = Math.sin(time * speed * 0.5 + phase + 2) * 30;
        const rotateX = Math.sin(time * speed * 0.3 + phase) * 4;
        const rotateY = Math.cos(time * speed * 0.4 + phase) * 4;

        pill.style.transform = `perspective(600px) translate3d(${floatX}px, ${floatY}px, ${floatZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [depthSeed]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleHover}
      className="flex flex-wrap justify-center gap-4 py-8"
      style={{ perspective: "800px" }}
    >
      {order.map((name, i) => {
        const depth = seeded(i + 10 + depthSeed);
        const opacity = 0.4 + depth * 0.5;
        const scale = 0.85 + depth * 0.25;

        return (
          <span
            key={name}
            data-pill
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-heading uppercase tracking-wider transition-all duration-700 ease-out hover:border-brand-red/50 hover:bg-brand-red/10 hover:text-white will-change-transform"
            style={{
              color: `rgba(255, 255, 255, ${opacity})`,
              fontSize: `${scale * 0.875}rem`,
            }}
          >
            {name}
          </span>
        );
      })}
    </div>
  );
}
