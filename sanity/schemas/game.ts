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
      name: "timeTbd",
      title: "Time TBD",
      type: "boolean",
      description: "Tick while only the date is known — the site shows the date without a time",
      initialValue: false,
    }),
    defineField({
      name: "round",
      title: "Round",
      type: "number",
      description: "League round (коло), e.g. 3",
      validation: (rule) => rule.integer().positive(),
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
      description: 'Final score, HOME team first, e.g. "84-72"',
      validation: (rule) =>
        rule.custom((result) => {
          if (!result) return true;
          return /^\d{1,3}-\d{1,3}$/.test(result) || 'Use the format "84-72" (home team first)';
        }),
    }),
    defineField({
      name: "isWin",
      title: "Win?",
      type: "boolean",
      description: "Did Borec win this game? Required once a result is entered.",
      validation: (rule) =>
        rule.custom((isWin, context) => {
          const { result, homeAway } = (context.document ?? {}) as { result?: string; homeAway?: string };
          if (!result) return true;
          if (typeof isWin !== "boolean") return "Set Win? on or off — the homepage record only counts games where it is set";
          const [home, away] = result.split("-").map(Number);
          if (Number.isNaN(home) || Number.isNaN(away) || !homeAway) return true;
          const borecWon = homeAway === "home" ? home > away : away > home;
          return borecWon === isWin || {
            message: `The score (home team first) says Borec ${borecWon ? "won" : "lost"} — check Win? or the score`,
            level: "warning",
          };
        }),
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Stream",
      type: "url",
      description: "Link to YouTube live stream or game recording",
      validation: (rule) =>
        rule.uri({ scheme: ["https"] }).custom((url) => {
          if (!url) return true;
          if (url.includes("youtube.com") || url.includes("youtu.be")) return true;
          return "Must be a YouTube URL";
        }),
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
