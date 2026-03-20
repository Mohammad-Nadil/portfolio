"use client";
import { Figtree } from "next/font/google";
import LenisProvider from "./components/LenisProvider";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Themes from "./components/Themes";

export const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Portfolio",
//   description: "",
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  if (loading)
    return (
      <html lang="en" suppressHydrationWarning className="overflow-x-clip">
        <body
          cz-shortcut-listen="true"
          className={` font-figtree! overflow-x-clip relative ${figtree.variable}`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Loader />
          </ThemeProvider>
        </body>
      </html>
    );
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-clip">
      <head>
        {/* <title>Portfolio</title> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          try {
            const theme = localStorage.getItem('theme');
            document.documentElement.classList.add(theme || 'light');
          } catch(e) {}
        })()
      `,
          }}
        />
      </head>
      <body
        cz-shortcut-listen="true"
        className={` font-figtree! overflow-x-clip relative bg-white dark:bg-black ${figtree.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Navbar />
            {children}
            <Themes />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
