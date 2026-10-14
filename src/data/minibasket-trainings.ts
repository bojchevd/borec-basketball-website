/** Minibasket training halls and times — shown on /minibasket and /upis. */
export const trainingHalls = [
  {
    name: "ООУ „Васил Главинов“",
    shortName: "Васил Главинов",
    shortDays: "вт / чт",
    sessions: [
      { day: "Вторник", time: "20:00–21:00" },
      { day: "Четврток", time: "20:00–21:00" },
    ],
  },
  {
    name: "СОУ Гимназија „Кочо Рацин“",
    shortName: "Гимназија",
    shortDays: "ср / пе",
    isNew: true,
    sessions: [
      { day: "Среда", time: "20:00–21:00" },
      { day: "Петок", time: "19:00–20:00" },
    ],
  },
];

/** Value sent by the signup forms when the parent has no preference. */
export const ANY_HALL = "Сеедно";
