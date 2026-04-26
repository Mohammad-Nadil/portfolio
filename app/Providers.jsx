"use client";

import { ThemeProvider } from "next-themes";
import LenisProvider from "./components/LenisProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Themes from "./components/Themes";
import MouseTracker from "./components/MouseTracker";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Providers({ children }) {
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") handleLoad();
    else window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (loading) return <Loader />;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LenisProvider>
        <Navbar />
        {/* <ParticlesBackground /> */}
        {children}
        {!mobile && <MouseTracker />}
        <Themes />
        <Footer />
      </LenisProvider>
    </ThemeProvider>
  );
}
