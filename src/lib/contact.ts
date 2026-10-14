export type ContactType = "person" | "business";
export const contactTopics = ["sponsorship", "donation", "advertising", "event", "other"] as const;
export type ContactTopic = (typeof contactTopics)[number];

export function isContactTopic(value: unknown): value is ContactTopic {
  return contactTopics.includes(value as ContactTopic);
}

/** Latin URL slugs, e.g. /contact?tip=firma&tema=sponzorstvo */
const topicSlugs: Record<string, ContactTopic> = {
  sponzorstvo: "sponsorship",
  donacija: "donation",
  reklama: "advertising",
  nastan: "event",
  drugo: "other",
};

export function parseContactParams(params: { tip?: string | string[]; tema?: string | string[] }) {
  const tip = typeof params.tip === "string" ? params.tip : undefined;
  const tema = typeof params.tema === "string" ? params.tema : undefined;
  const topic = tema ? topicSlugs[tema] : undefined;
  return {
    type: (tip === "firma" || topic ? "business" : "person") as ContactType,
    topic,
  };
}
