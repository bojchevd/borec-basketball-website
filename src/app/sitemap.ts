import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";

const BASE_URL = "https://borecbasketball.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: Post[] = [];
  try { posts = await client.fetch<Post[]>(POSTS_QUERY); } catch {}

  const staticPages = ["", "/news", "/schedule", "/roster", "/history", "/academy", "/minibasket", "/sponsors", "/contact"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postPages = posts.map((post) => ({
    url: `${BASE_URL}/news/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...postPages];
}
