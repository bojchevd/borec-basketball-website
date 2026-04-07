import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./sanity/schemas/post";
import { game } from "./sanity/schemas/game";

export default defineConfig({
  name: "borec-basketball",
  title: "Borec Basketball CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: [post, game] },
});
