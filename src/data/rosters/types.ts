export interface Player {
  name: string;
  /** Shirt number — leave out until it's known */
  number?: number;
  /** Leave out until it's known */
  position?: string;
  photo: string;
}

export interface Staff {
  name: string;
  role: string;
}

export interface YouthPlayer {
  name: string;
  /** Shirt number — leave out until it's known */
  number?: number;
}

export interface YouthCategory {
  slug: string;
  label: string;
  players: YouthPlayer[];
}

export interface Season {
  /** URL segment, e.g. "2025-26" */
  slug: string;
  /** Display label, e.g. "2025/26" */
  label: string;
  roster: Player[];
  coachingStaff: Staff[];
  youthRosters: YouthCategory[];
}
