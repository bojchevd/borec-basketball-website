import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/lib/sanity/queries";
import type { Post } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";
import { formatPostDate } from "@/lib/utils";
import { PortableText } from "@/components/portable-text";
import { ShareButtons } from "@/components/share-buttons";
import { getTranslations } from "@/lib/i18n";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<Post[]>(POSTS_QUERY);
    return posts.map((post) => ({ slug: post.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug }).catch(() => null);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | Борец Баскет`, description: post.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTranslations("mk");
  const { slug } = await params;
  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug }).catch(() => null);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <Link href="/news" className="mb-8 inline-block text-sm text-white/50 hover:text-white">{t.news.backToNews}</Link>
      <p className="text-sm font-medium uppercase tracking-wider text-brand-red">{formatPostDate(post.publishedAt)}</p>
      <h1 className="mt-2 font-heading text-4xl uppercase text-white md:text-5xl">{post.title}</h1>
      {post.coverImage && (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
          <Image src={urlFor(post.coverImage).width(1200).height(675).url()} alt={post.title} fill className="object-cover" priority />
        </div>
      )}
      <div className="mt-8"><PortableText value={post.body} /></div>
      <div className="mt-12 border-t border-white/10 pt-6">
        <ShareButtons url={`/news/${post.slug.current}`} title={post.title} />
      </div>
    </article>
  );
}
