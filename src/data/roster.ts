export interface Player {
  name: string;
  number: number;
  position: string;
  photo: string;
}

export const roster: Player[] = [
  // Foreign players
  { name: "Derrick Dion Ellis", number: 1, position: "Point Guard", photo: "/players/placeholder.png" },
  { name: "Zion Timothy James Young", number: 0, position: "Shooting Guard", photo: "/players/placeholder.png" },
  // Macedonian players
  { name: "Александар Штерјов", number: 21, position: "Center", photo: "/players/placeholder.png" },
  { name: "Предраг Пајиќ", number: 5, position: "Forward", photo: "/players/placeholder.png" },
  { name: "Стефан Митрев", number: 28, position: "Forward", photo: "/players/placeholder.png" },
  { name: "Никола Зафирчев", number: 13, position: "Guard", photo: "/players/placeholder.png" },
  { name: "Суад Карталовиќ", number: 11, position: "Forward", photo: "/players/placeholder.png" },
  { name: "Давид Трпески", number: 9, position: "Guard", photo: "/players/placeholder.png" },
  { name: "Петар Виларов", number: 86, position: "Forward", photo: "/players/placeholder.png" },
  { name: "Кристијан Петровски", number: 12, position: "Forward", photo: "/players/placeholder.png" },
  { name: "Кристијан Коцевски", number: 6, position: "Guard", photo: "/players/placeholder.png" },
  { name: "Александар Анчевски", number: 16, position: "Guard", photo: "/players/placeholder.png" },
  { name: "Маријан Климкаров", number: 10, position: "Guard", photo: "/players/placeholder.png" },
  { name: "Мартин Захариев", number: 22, position: "Point Guard", photo: "/players/placeholder.png" },
  { name: "Дамјан Ивановски", number: 15, position: "Forward", photo: "/players/placeholder.png" },
  { name: "Стефан Сапроновски", number: 4, position: "Point Guard", photo: "/players/placeholder.png" },
];

// Coaching staff
export interface Staff {
  name: string;
  role: string;
}

export const coachingStaff: Staff[] = [
  { name: "Васко Бојчев", role: "Head Coach" },
  { name: "Ангел Љутков", role: "President" },
  { name: "Сашко Ристов", role: "Assistant Coach" },
  { name: "Панче Јанковски", role: "Representative" },
];
