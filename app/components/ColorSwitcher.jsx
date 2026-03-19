"use client";
import { useEffect, useState } from "react";

const themes = [
  { name: "theme-blue", color: "#3b82f6" },
  { name: "theme-red", color: "#ef4444" },
  { name: "theme-green", color: "#07C42C" },
  { name: "theme-purple", color: "#a855f7" },
  { name: "theme-orange", color: "#f97316" },
  { name: "theme-yellow", color: "#fde047" },
];

const ColorSwitcher = () => {
  const [active, setActive] = useState("theme-green");

  useEffect(() => {
    const saved = localStorage.getItem("accent-theme") ?? "theme-green";
    applyTheme(saved);
    setActive(saved);
  }, []);

  const applyTheme = (themeName) => {
    const root = document.documentElement;
    root.classList.remove(...themes.map((t) => t.name));
    root.classList.add(themeName);
  };

  const handleChange = (themeName) => {
    applyTheme(themeName);
    localStorage.setItem("accent-theme", themeName);
    setActive(themeName);
  };

  return (
    <div className="grid grid-cols-6 gap-3 md:gap-x-3 md:gap-y-2">
      {themes.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => handleChange(name)}
          className={` w-7 md:w-8 aspect-square rounded-full 
             transition-all border ${
            active === name ? "scale-110 border-black dark:border-white" : ""
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorSwitcher;
