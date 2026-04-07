import type { Metadata } from "next";
import { rogLyonsType, poppins } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Борец Баскет | Borec Basketball",
    template: "%s | Борец Баскет",
  },
  description: "Official website of Borec Basketball club from Veles, North Macedonia.",
  openGraph: {
    title: "Борец Баскет | Borec Basketball",
    description: "Official website of Borec Basketball club from Veles, North Macedonia.",
    url: "https://borecbasketball.com",
    siteName: "Борец Баскет",
    locale: "mk_MK",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk" className={`${rogLyonsType.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
