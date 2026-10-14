import type { Metadata } from "next";
import { currentSeason } from "@/data/rosters";
import { ScheduleContent } from "@/components/schedule-content";

export const metadata: Metadata = {
  title: "Schedule | Борец Баскет",
  description: "Borec Basketball game schedule and results.",
};

export const revalidate = 60;

export default function SchedulePage() {
  return <ScheduleContent season={currentSeason} />;
}
