"use client";
import React, { useEffect, useState } from "react";
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
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const list = ["hero", "about", "skills", "projects", "faq", "contact"];

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [open]);

  const links = [
    {
      name: "mdnadil50@gmail.com",
      href: "mailto:mdnadil50@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "Github",
      href: "https://github.com/Mohammad-Nadil",
      icon: <FaGithub />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/mdhossain.dev",
      icon: <FaFacebookF />,
    },
    {
      name: "Linkedin",
      href: "www.linkedin.com/in/mdhossain-dev",
      icon: <FaLinkedinIn />,
    },
    {
      name: "+8801760152349",
      href: "tel:+8801760152349",
      icon: <FaPhone />,
    },
    {
      name: "whatsapp",
      href: "https://wa.me/8801760152349",
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <nav className=" sticky  top-0 z-100  ">
      <div className="absolute h-full w-full backdrop-blur bg-white/20 dark:bg-black/10 -z-10"></div>
      <Container
        className={`h-12 sm:py-3 px-0! flex justify-between items-center`}
      >
        <div className="left flex items-center gap-x-6 md:gap-x-11 px-3 ">
          <Logo className={" w-8 md:w-9"} />
          <ul className="menu hidden sm:flex items-center gap-4 md:gap-x-6">
            {list.map((item, index) => (
              <li
                key={index}
                className=" font-medium text-sm text-black dark:text-white uppercase hover:cursor-pointer hover:text-accent duration-300"
              >
                <a href={`#${item}`} className="flex items-start gap-1">
                  <span className="text-secondary text-[8px] ">
                    0{index + 1}/
                  </span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div
            onClick={() => setOpen(!open)}
            className="flex sm:hidden items-center gap-0.5 hover:cursor-pointer duration-300 text-2xl p-2 text-right"
          >
            {open ? <IoClose /> : <HiOutlineBars3BottomRight />}
            {open ? "Close" : "Menu"}
          </div>
          <a
            href="mailto:mdnadil50@gmail.com"
            className="text-secondary text-xs md:text-base hover:text-accent uppercase hidden lg:block"
          >
            mdnadil50@gmail.com
          </a>
        </div>
      </Container>
      <Container
        onClick={() => setOpen(false)}
        className={`fixed top-12 left-0 w-full h-[calc(100dvh-3rem)] bg-white/20 dark:bg-black/10 backdrop-blur flex flex-col items-end text-end gap-y-5 z-50 sm:hidden duration-300 py-3 px-2 xs:px-4
    ${open ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <ul className="menu flex flex-1 flex-col items-end w-full gap-y-3  ">
          {list.map((item, index) => (
            <li
              key={index}
              className=" font-bold text-4xl xs:text-6xl  text-black dark:text-white uppercase hover:cursor-pointer hover:text-accent duration-300 "
            >
              <a href={`#${item}`}>{item}</a>
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
        <div className="w-full flex flex-wrap font-medium items-center mb-3  gap-x-6 gap-y-3 font-oxanium">
          {links.map((link, index) => (
            <a
              key={index}
              target="_blank"
              href={link.href}
              className="flex items-center gap-1 "
            >
              <FaArrowRightLong className="text-xl -rotate-45 " />
              {link.icon}
              <p className="text-secondary xs:text-lg">{link.name}</p>
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
