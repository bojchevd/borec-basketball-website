import type { Metadata } from "next";
import { currentSeason } from "@/data/rosters";
import { ScheduleContent } from "@/components/schedule-content";

export const metadata: Metadata = {
  title: "Распоред",
  description: "Распоред на натпревари и резултати на КК Борец Баскет.",
};

export const revalidate = 60;

export default function SchedulePage() {
  return <ScheduleContent season={currentSeason} />;
}
