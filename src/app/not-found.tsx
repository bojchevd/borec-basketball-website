import Link from "next/link";
import { getTranslations } from "@/lib/i18n";

export default function NotFound() {
  const t = getTranslations("mk");
  const [descLine1, descLine2] = t.notFound.description.split("\n");
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-[20rem] leading-none text-white/5 select-none md:text-[30rem]">404</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl uppercase text-white md:text-6xl">{t.notFound.title} <span className="text-brand-red">{t.notFound.titleAccent}</span></h1>
        <p className="mt-4 text-white/50">{descLine1}<br />{descLine2}</p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-md bg-brand-red px-6 py-2 text-sm font-medium text-white hover:bg-brand-red/80 font-body">
          {t.notFound.goHome}
        </Link>
      </div>
    </div>
  );
}
