import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import ColorSwitcher from "./components/ColorSwitcher";
import Hero from "./components/Hero";
import Test from "./components/BlankSpace";
import About from "./components/About";

const page = () => {
  return (
    <div className="relative ">
      <Hero />
      <About />
      {/* <Test /> */}
    </div>
  );
};

export default page;
