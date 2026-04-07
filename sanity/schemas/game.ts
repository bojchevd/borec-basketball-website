import { defineField, defineType } from "sanity";

export const game = defineType({
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date & Time",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "opponent",
      title: "Opponent",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "homeAway",
      title: "Home / Away",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Away", value: "away" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "result",
      title: "Result",
      type: "string",
      description: 'Score after game, e.g. "84-72"',
    }),
    defineField({
      name: "isWin",
      title: "Win?",
      type: "boolean",
      description: "Did Borec win this game?",
    }),
  ],
  orderings: [
    {
      title: "Game Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { opponent: "opponent", date: "date", homeAway: "homeAway", result: "result" },
    prepare({ opponent, date, homeAway, result }) {
      const d = date ? new Date(date).toLocaleDateString() : "TBD";
      const suffix = result ? ` — ${result}` : "";
      return {
        title: `${homeAway === "home" ? "vs" : "@"} ${opponent}${suffix}`,
        subtitle: d,
      };
    },
  },
});
