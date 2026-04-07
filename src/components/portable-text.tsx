import { PortableText as PortableTextReact } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { PortableTextBlock } from "@portabletext/types";

const components = {
  types: {
    image: ({ value }: { value: any }) => (
      <div className="my-8">
        <Image src={urlFor(value).width(1200).url()} alt={value.alt || ""} width={1200} height={675} className="rounded-lg" />
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="mb-4 mt-8 font-heading text-2xl text-white">{children}</h2>,
    h3: ({ children }: any) => <h3 className="mb-3 mt-6 font-heading text-xl text-white">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 leading-relaxed text-white/70">{children}</p>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-white">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-brand-red underline hover:text-brand-red/80">{children}</a>
    ),
  },
};

export function PortableText({ value }: { value: PortableTextBlock[] }) {
  return <PortableTextReact value={value} components={components} />;
}
