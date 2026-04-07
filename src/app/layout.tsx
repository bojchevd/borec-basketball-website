import type { Metadata } from "next";
import { rogLyonsType, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Борец Баскет | Borec Basketball",
  description: "Official website of Borec Basketball club from Veles, North Macedonia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk" className={`${rogLyonsType.variable} ${poppins.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
