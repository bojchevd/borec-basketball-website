import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-heading text-[20rem] leading-none text-white/5 select-none md:text-[30rem]">404</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-4xl uppercase text-white md:text-6xl">You Missed <span className="text-brand-red">The Shot</span></h1>
        <p className="mt-4 text-white/50">The page you&apos;re looking for didn&apos;t make the play.<br />No worries — the game&apos;s still on elsewhere.</p>
        <Button
          render={<Link href="/" />}
          className="mt-8 bg-brand-red hover:bg-brand-red/80 font-body"
        >
          Get Me Home
        </Button>
      </div>
    </div>
  );
}
