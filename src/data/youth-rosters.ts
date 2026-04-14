export interface YouthPlayer {
  name: string;
  number: number;
}

export interface YouthCategory {
  slug: string;
  label: string;
  players: YouthPlayer[];
}

export const youthRosters: YouthCategory[] = [
  {
    slug: "u18",
    label: "U-18",
    players: [
      { name: "Христијан Андов", number: 7 },
      { name: "Огнен Јорданов", number: 23 },
      { name: "Димитар Љутков", number: 3 },
      { name: "Мартин Захариев", number: 11 },
      { name: "Марко Јовановски", number: 0 },
      { name: "Кристијан Коцевски", number: 14 },
      { name: "Мартин Буов", number: 33 },
      { name: "Андреј Кузмановски", number: 5 },
      { name: "Тео Симонов", number: 20 },
      { name: "Мартин Стојанов", number: 8 },
      { name: "Ристе Цебов", number: 48 },
      { name: "Милан Ѓоргов", number: 1 },
      { name: "Кристијан Јанушев", number: 24 },
      { name: "Никола Бобевски", number: 10 },
      { name: "Мартин Ефтимов", number: 30 },
      { name: "Антонио Неделчев", number: 12 },
    ],
  },
  {
    slug: "u16",
    label: "U-16",
    players: [
      { name: "Димитар Љутков", number: 4 },
      { name: "Андреј Богдановски", number: 11 },
      { name: "Марко Јовановски", number: 23 },
      { name: "Филип Кимов", number: 7 },
      { name: "Марко Пановски", number: 0 },
      { name: "Андреј Дамјановски", number: 15 },
      { name: "Дамјан Ќимов", number: 33 },
      { name: "Адам Шопов", number: 9 },
      { name: "Стефан Танев", number: 20 },
      { name: "Кристијан Јанушев", number: 3 },
      { name: "Даниел Ѓорѓиевски", number: 48 },
      { name: "Андреј Ѓорѓиев", number: 1 },
      { name: "Христијан Шопов", number: 24 },
      { name: "Лука Темелковски", number: 14 },
      { name: "Даниел Крстески", number: 5 },
      { name: "Матеј Наковски", number: 30 },
      { name: "Алексеј Зафиров", number: 10 },
      { name: "Душан Димовски", number: 35 },
    ],
  },
  {
    slug: "u14",
    label: "U-14",
    players: [
      { name: "Војдан Јанковски", number: 8 },
      { name: "Филип Кимов", number: 23 },
      { name: "Стефан Љутков", number: 0 },
      { name: "Марко Пановски", number: 14 },
      { name: "Дамјан Ќимов", number: 6 },
      { name: "Ангел Здравкин", number: 33 },
      { name: "Мартин Попов", number: 11 },
      { name: "Христијан Шопов", number: 4 },
      { name: "Александар Стојанов", number: 20 },
      { name: "Горјан Ристов", number: 1 },
      { name: "Диме Давчевски", number: 48 },
      { name: "Ангел Банов", number: 9 },
      { name: "Алексеј Зафиров", number: 35 },
      { name: "Марко Стефанов", number: 15 },
      { name: "Димитар Ташев", number: 3 },
      { name: "Зоран Атанасов", number: 24 },
      { name: "Бодан Јаневски", number: 12 },
      { name: "Андреј Бошков", number: 30 },
    ],
  },
  {
    slug: "u12",
    label: "U-12",
    players: [
      { name: "Војдан Јанковски", number: 5 },
      { name: "Благој Крстевски", number: 20 },
      { name: "Новак Палески", number: 13 },
      { name: "Павел Трендафилов", number: 0 },
      { name: "Виктор Глушков", number: 33 },
      { name: "Јосиф Танев", number: 7 },
      { name: "Горјан Ристов", number: 24 },
      { name: "Роман Петков", number: 2 },
      { name: "Марко Јорданов", number: 48 },
      { name: "Илија Симитчиев", number: 11 },
      { name: "Кристијан Спиркоски", number: 9 },
      { name: "Теодор Настев", number: 35 },
      { name: "Дамјан Петрушев", number: 3 },
      { name: "Марко Мечалов", number: 14 },
      { name: "Јован Димовски", number: 23 },
      { name: "Петар Стојанов", number: 30 },
      { name: "Михаил Гајдов", number: 10 },
      { name: "Давид Мирчевски", number: 15 },
    ],
  },
];
