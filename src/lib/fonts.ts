import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const rogLyonsType = localFont({
  src: "../../branding/Font/ROGLyonsType.ttf",
  variable: "--font-rog",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
