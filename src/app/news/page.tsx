import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { POSTS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";
import { NewsCard } from "@/components/news-card";
import { AnimatedSection } from "@/components/animated-section";

export const metadata: Metadata = {
  title: "News | Борец Баскет",
  description: "Latest news from Borec Basketball club.",
};

export const revalidate = 60;

export default async function NewsPage() {
  let posts: Post[] = [];
  try {
    posts = await client.fetch<Post[]>(POSTS_QUERY);
  } catch {
    posts = [];
  }
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <h1 className="mb-12 font-heading text-5xl uppercase text-white md:text-6xl">
        <span className="text-brand-red">News</span>
      </h1>
      {posts.length === 0 ? (
        <p className="text-white/50">No news posts yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post._id} delay={i * 0.1}>
              <NewsCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      )}
    </section>
  );
}
