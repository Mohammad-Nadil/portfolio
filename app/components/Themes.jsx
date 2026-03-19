"use client";
import React, { useEffect, useRef, useState } from "react";
import ColorSwitcher from "./ColorSwitcher";
import ThemeToggle from "./ThemeToggle";
import { PiGear } from "react-icons/pi";

const Themes = () => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <div
        ref={panelRef}
        className={`fixed flex bottom-0 md:bottom-1/2 right-0 transform -translate-y-1/2   flex-col gap-5 p-4 rounded-l-2xl  bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 z-20 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div>
          <h1 className="font-semibold mb-1 ">Accent Color</h1>
          <ColorSwitcher />
        </div>
        <div>
          <h1 className="font-semibold mb-1 ">Theme Mode</h1>
          <ThemeToggle />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="hidden md:block absolute top-1/2 -left-10 transform -translate-y-1/2   bg-accent dark:bg-yellow-400 text-black p-1 md:p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all"
        >
          <PiGear className="text-2xl aspect-square" />
        </div>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed md:hidden bottom-0 right-0 -translate-1/3 bg-accent rounded-full p-1.5 z-20"
      >
        <PiGear className="text-3xl aspect-square text-white dark:text-black" />
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[3px]  z-10"></div>
      )}
    </>
  );
};

export default Themes;
