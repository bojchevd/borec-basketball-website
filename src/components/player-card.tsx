import Image from "next/image";

interface Player { name: string; number: number; position: string; photo: string; }

export function PlayerCard({ player }: { player: Player }) {
  const hasPhoto = player.photo && !player.photo.includes("placeholder");

  return (
    <div className="group relative overflow-hidden rounded-lg bg-white/5">
      <div className="relative aspect-[3/4] overflow-hidden">
        {hasPhoto ? (
          <Image src={player.photo} alt={player.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-b from-white/[0.03] to-brand-black">
            <Image src="/logo.png" alt="Борец Баскет" width={80} height={80} className="opacity-15" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="font-heading text-4xl text-brand-red">#{player.number}</div>
        <h3 className="font-heading text-lg text-white">{player.name}</h3>
        <p className="text-xs uppercase tracking-wider text-white/50">{player.position}</p>
      </div>
    </div>
  );
}
