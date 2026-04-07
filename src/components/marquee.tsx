export function Marquee({ text, className }: { text: string; className?: string }) {
  const repeated = `${text} · `.repeat(10);
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 ${className ?? ""}`}>
      <div className="animate-marquee inline-block">
        <span className="font-heading text-2xl uppercase tracking-widest text-white/20 md:text-4xl">
          {repeated}
        </span>
      </div>
    </div>
  );
}
