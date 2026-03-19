"use client";
import React, { use, useEffect, useState } from "react";
import Container from "./Container";
import Logo from "@/public/svg/Logo";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import ColorSwitcher from "./ColorSwitcher";
import ThemeToggle from "./ThemeToggle";
import {
  FaArrowRightLong,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const list = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Projects",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("h-dvh");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("h-dvh");
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className=" sticky top-0 z-50 ">
      <Container 
      className={`h-12 sm:py-3 flex justify-between items-center`}>
        <div className="left flex items-center gap-x-6 md:gap-x-11 ">
          <Logo className={" w-8 md:w-9"} />
          <ul className="menu hidden sm:flex items-center gap-4 md:gap-x-6">
            {list.map((item) => (
              <li
                key={item.id}
                className=" font-medium text-xs text-black dark:text-white uppercase hover:cursor-pointer hover:text-accent duration-300"
              >
                <a href={`#${item.name}`} className="flex items-start gap-1">
                  <span className="text-secondary text-[8px] ">
                    0{item.id}/
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <button
            onClick={() => setOpen(!open)}
            className="flex sm:hidden items-center gap-0.5 hover:cursor-pointer duration-300 text-2xl"
          >
            {open ? <IoClose /> : <HiOutlineBars3BottomRight />}
            {open ? "Close" : "Menu"}
          </button>
          <a
            href="mailto:mdhossain.dev@gmail.com"
            className="text-secondary text-xs md:text-base hover:text-accent uppercase hidden sm:block"
          >
            mdhossain.dev@gmail.com
          </a>
        </div>
      </Container>
      <Container
        className={` bg-black/15 backdrop-blur-xs flex flex-col items-end text-end gap-y-5 absolute top-12 left-0 min-h-[calc(100dvh-3rem)] w-full px-5 z-999 sm:hidden duration-300 py-6 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="menu flex flex-1 flex-col items-end w-full gap-y-3 xs:gap-y-6  py-4">
          {list.map((item) => (
            <li
              key={item.id}
              className=" font-bold text-4xl xs:text-6xl  text-black dark:text-white uppercase hover:cursor-pointer hover:text-accent duration-300"
            >
              <a href={`#${item.name}`}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="hidden flex-col  items-end gap-y-4">
          <div className="w-4/5 ">
            <h1 className="font-semibold mb-1 ">Accent Color</h1>
            <ColorSwitcher />
          </div>
          <div>
            <h1 className="font-semibold mb-1 ">Theme Mode</h1>
            <ThemeToggle />
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href="mailto:mdhossain.dev@gmail.com"
            className="flex items-center gap-1 w-full"
          >
            <FaArrowRightLong className="text-xl -rotate-45 " />
            <FaEnvelope className="" />
            <p className="text-secondary">mdhossain.dev@gmail.com</p>
          </a>
          <a
            href="https://github.com/Mohammad-Nadil"
            className="flex items-center gap-1 "
          >
            <FaArrowRightLong className="text-xl -rotate-45 " />
            <FaGithub className="" />
            <p className="text-secondary">github</p>
          </a>
          <a
            href="https://www.facebook.com/"
            className="flex items-center gap-1 "
          >
            <FaArrowRightLong className="text-xl -rotate-45 " />
            <FaFacebookF className="" />
            <p className="text-secondary">facebook</p>
          </a>
          <a
            href="mailto:mdhossain.dev@gmail.com"
            className="flex items-center gap-1 "
          >
            <FaArrowRightLong className="text-xl -rotate-45 " />
            <FaPhone className="" />
            <p className="text-secondary">+8801760152349</p>
          </a>
          <a
            href="mailto:mdhossain.dev@gmail.com"
            className="flex items-center gap-1 "
          >
            <FaArrowRightLong className="text-xl -rotate-45 " />
            <FaLinkedinIn className="" />
            <p className="text-secondary">linkedin</p>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
