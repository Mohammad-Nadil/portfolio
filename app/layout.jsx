import "./globals.css";
import Providers from "./Providers";
import { Figtree, Audiowide, Oxanium } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const audiowide = Audiowide({
  subsets: ["latin"],
  variable: "--font-audiowide",
  weight: ["400"],
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Portfolio",
  description:
    "My personal portfolio website showcasing my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`overflow-x-clip dark:bg-primary-dark ${figtree.variable} ${audiowide.variable} ${oxanium.variable} font-figtree`}
        cz-shortcut-listen="true"
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
