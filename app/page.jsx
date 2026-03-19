import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import ColorSwitcher from "./components/ColorSwitcher";

const page = () => {
  return (
    <div className=" ">
      <h1 className="text-3xl font-bold underline dark:text-white ">Home</h1>
      <button className="text-accent  px-4 py-2 rounded">Hire Me</button>
    </div>
  );
};

export default page;
