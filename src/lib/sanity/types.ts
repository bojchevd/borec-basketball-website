import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: any;
  excerpt: string;
  body: PortableTextBlock[];
  publishedAt: string;
}

export interface Game {
  _id: string;
  date: string;
  opponent: string;
  homeAway: "home" | "away";
  location: string;
  result?: string;
  isWin?: boolean;
}
