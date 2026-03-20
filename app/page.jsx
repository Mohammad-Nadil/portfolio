import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import ColorSwitcher from "./components/ColorSwitcher";
import Hero from "./components/Hero";
import Test from "./components/BlankSpace";
import About from "./components/About";
import BlankSpace from "./components/BlankSpace";
import Skills from "./components/Skills";

const page = () => {
  return (
    <div className="relative ">
      <Hero />
      <About />
      <Skills />
      <BlankSpace />
    </div>
  );
};

export default page;
