import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSeason, pastSeasons } from "@/data/rosters";
import { ScheduleContent } from "@/components/schedule-content";

export const dynamicParams = false;
export const revalidate = 60;

export function generateStaticParams() {
  return pastSeasons.map((s) => ({ season: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }): Promise<Metadata> {
  const { season: slug } = await params;
  const season = getSeason(slug);
  return {
    title: `Schedule ${season?.label ?? ""} | Борец Баскет`,
    description: `Borec Basketball results from the ${season?.label} season.`,
  };
}

export default async function PastSeasonSchedulePage({ params }: { params: Promise<{ season: string }> }) {
  const { season: slug } = await params;
  const season = getSeason(slug);
  if (!season) notFound();
  return <ScheduleContent season={season} />;
}
