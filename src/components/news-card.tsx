import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import { formatPostDate } from "@/lib/utils";
import type { Post } from "@/lib/sanity/types";

export function NewsCard({ post }: { post: Post }) {
  return (
    <Link href={`/news/${post.slug.current}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-white/5">
        <div className="relative aspect-[16/9] overflow-hidden">
          {post.coverImage ? (
            <Image src={urlFor(post.coverImage).width(600).height(340).url()} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-brand-red/20 to-brand-black">
              <span className="font-heading text-4xl text-white/10">BB</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-brand-red">{formatPostDate(post.publishedAt)}</p>
          <h3 className="mt-2 font-heading text-lg text-white group-hover:text-brand-red transition-colors">{post.title}</h3>
          {post.excerpt && <p className="mt-2 text-sm text-white/50 line-clamp-2">{post.excerpt}</p>}
        </div>
      </div>
    </Link>
  );
}
