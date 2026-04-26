"use client";
import React from "react";
import Container from "./Container";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "@/public/svg/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10 ">
      <Container>
        <div className="py-10 md:py-14 flex flex-col md:flex-row justify-between gap-8 ">
          {/* ─── BRAND / ABOUT ─── */}
          <div className="space-y-3">
            <Logo className={" w-5 md:w-7"} />

            <p className="text-sm text-secondary/60 leading-relaxed max-w-xs">
              Frontend Developer focused on building modern, responsive and
              user-friendly web experiences.
            </p>
          </div>

          {/* ─── SOCIALS ─── */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary/50">
              Connect
            </h3>

            <div className="flex items-center gap-3">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/Mohammad-Nadil",
                },
                {
                  icon: <FaLinkedinIn />,
                  link: "https://www.linkedin.com/in/mdhossain-dev",
                },
                {
                  icon: <FaFacebookF />,
                  link: "https://www.facebook.com/mdhossain.dev",
                },
                {
                  icon: <FaWhatsapp />,
                  link: "https://wa.me/8801760152349",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  className="p-2.5 rounded-full border border-black/10 dark:border-white/10
                    hover:border-accent hover:text-accent hover:bg-accent/5
                    transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── BOTTOM BAR ─── */}
        <div className="border-t border-black/10 dark:border-white/10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary/50">
          <p>© {new Date().getFullYear()} Nadil. All rights reserved.</p>

          <p className="text-center">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
