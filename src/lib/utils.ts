import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Games are in Macedonia; format in local time no matter where the server runs (Vercel is UTC). */
const GAME_TIME_ZONE = "Europe/Skopje";

export function formatGameDate(dateString: string) {
  const date = new Date(dateString);
  const timeZone = GAME_TIME_ZONE;
  return {
    day: Number(date.toLocaleDateString("en-US", { day: "numeric", timeZone })),
    month: date.toLocaleDateString("en-US", { month: "short", timeZone }).toUpperCase(),
    weekday: date.toLocaleDateString("en-US", { weekday: "short", timeZone }).toUpperCase(),
    time: date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }),
    full: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone,
    }),
  };
}

export function formatPostDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
