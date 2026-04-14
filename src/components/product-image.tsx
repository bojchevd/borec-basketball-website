"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  name: string;
  image: string | null;
  imageAlt?: string;
  tag?: string;
}

export function ProductImage({ product }: { product: Product }) {
  const [showAlt, setShowAlt] = useState(false);
  const hasAlt = !!product.imageAlt;

  // Auto-fade on mobile only
  useEffect(() => {
    if (!hasAlt) return;

    const mq = window.matchMedia("(max-width: 767px)");
    if (!mq.matches) return;

    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 3500);

    const handleChange = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setShowAlt(false);
      }
    };
    mq.addEventListener("change", handleChange);

    return () => {
      clearInterval(interval);
      mq.removeEventListener("change", handleChange);
    };
  }, [hasAlt]);

  if (!product.image) {
    return (
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-brand-black">
        <div className="flex h-full flex-col items-center justify-center gap-3 text-white/15">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <span className="font-body text-xs uppercase tracking-widest">Фото наскоро</span>
        </div>
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-white">
            {product.tag}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white/5 to-brand-black">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className={`object-cover transition-all duration-700 ${
          hasAlt
            ? `${showAlt ? "opacity-0" : "opacity-100"} md:opacity-100 md:group-hover:opacity-0`
            : "group-hover:scale-105"
        }`}
      />
      {hasAlt && (
        <Image
          src={product.imageAlt!}
          alt={`${product.name} — друг агол`}
          fill
          className={`object-cover transition-all duration-700 ${showAlt ? "opacity-100" : "opacity-0"} md:opacity-0 md:group-hover:opacity-100`}
        />
      )}
      {product.tag && (
        <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-white">
          {product.tag}
        </span>
      )}
    </div>
  );
}
