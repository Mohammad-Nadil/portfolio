"use client";
import React from "react";
import Container from "./Container";
import Header from "./Header";

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const links = [
  {
    id: 1,
    name: "mdnadil50@gmail.com",
    href: "mailto:mdnadil50@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 2,
    name: "Facebook",
    href: "https://www.facebook.com/mdhossain.dev",
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    name: "Github",
    href: "https://github.com/Mohammad-Nadil",
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mdhossain-dev",
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    name: "+8801760152349",
    href: "tel:+8801760152349",
    icon: <FaPhone />,
  },
  {
    id: 6,
    name: "WhatsApp",
    href: "https://wa.me/8801760152349",
    icon: <FaWhatsapp />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white dark:bg-primary-dark"
    >
      <Container>
        <Header text="Contact" />

        <p className="text-center text-sm text-secondary/60  mb-12 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Let’s connect.
        </p>

        <div className="grid lg:grid-cols-3 gap-7">
          <div className="flex flex-col gap-2.5">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                className="group flex items-center justify-between px-4 py-3 rounded-xl dark:bg-white/5 border border-black/10  dark:border-white/10 hover:border-accent/40 hover:bg-accent/5 active:scale-[0.98] transition-all duration-300"
              >
                <div className="flex items-start  gap-3">
                  <div className="text-accent text-lg mt-0.5">{link.icon}</div>

                  <div className="flex flex-col leading-tight">
                    <span className="text-sm  uppercase tracking-wider text-secondary/70">
                      {link.name.includes("@")
                        ? "Email"
                        : link.name.includes("+")
                          ? "Phone"
                          : "Social"}
                    </span>

                    <span className="text-sm text-secondary group-hover:text-accent transition">
                      {link.name}
                    </span>
                  </div>
                </div>

                <FaArrowRightLong className="text-xs opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition -rotate-35" />
              </a>
            ))}
          </div>

          <div className="rounded-2xl border lg:col-span-2 border-black/10 dark:bg-white/5 p-5 md:p-8 backdrop-blur-xl">
            <h3 className="text-lg font-semibold mb-5">Send Message</h3>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:border-accent transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:border-accent transition"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:border-accent transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 outline-none focus:border-accent resize-none transition"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-accent text-white font-semibold hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
