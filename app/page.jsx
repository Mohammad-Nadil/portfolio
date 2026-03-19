import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import ColorSwitcher from "./components/ColorSwitcher";
import Hero from "./components/Hero";
import Test from "./components/Test";

const page = () => {
  return (
    <div className="relative ">
      <Hero />
      <Test/> 
    </div>
  );
};

export default page;
