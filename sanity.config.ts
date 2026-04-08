import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { post } from "./sanity/schemas/post";
import { game } from "./sanity/schemas/game";

export default defineConfig({
  name: "borec-basketball",
  title: "Borec Basketball CMS",
  projectId: "3juqa5k6",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: [post, game] },
});
