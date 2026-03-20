import React from "react";
import Container from "./Container";
import { FaCode, FaPaintbrush } from "react-icons/fa6";
import { MdAnimation } from "react-icons/md";
import Header from "./Header";

const About = () => {
  const languages = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "GSAP ",
    "Responsive Design",
    "Backend ( MERN )",
  ];

  const skills = [
    {
      title: "Frontend Engineering",
      desc: "Crafting scalable and high-performance user interfaces with React, Next.js, and modern CSS frameworks like Tailwind.",
      icon: <FaCode />,
    },
    {
      title: "Motion & Interaction",
      desc: "Designing fluid and engaging user experiences through advanced animations using GSAP and Framer Motion.",
      icon: <MdAnimation />,
    },
    {
      title: "Client Projects",
      desc: "Delivering pixel-perfect, responsive websites by converting Figma, PSD, and XD designs into production-ready code.",
      icon: <FaPaintbrush />,
    },
  ];

  return (
    <section id="about" className="py-20">
      <Container>
       <Header text="About Me" />
        <main>
          <section className="flex flex-col gap-12">
            {/* ===== Intro ===== */}
            <div className="flex flex-col lg:flex-row gap-5 md:gap-12 justify-between items-center">
              {/* Text */}
              <div className="w-full lg:w-7/12 flex flex-col gap-5 md:gap-8">
                <span className="text-accent uppercase tracking-widest">
                  Introduction
                </span>

                <h1 className="text-5xl sm:text-7xl md:text-9xl font-medium tracking-tight  leading-none">
                  Hossainur <br /> Rashid Nadil
                  <span className="text-accent">_</span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl font-medium /90 max-w-2xl leading-snug">
                  I'm a{" "}
                  <span className="text-primary italic">
                    Frontend Developer
                  </span>{" "}
                  from Dhaka, focused on building modern, responsive and
                  visually engaging web experiences using React and Next.js.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {languages.map((skill, idx) => (
                    <span
                      key={idx}
                      className=" px-3 sm:px-4 py-2 text-xs  rounded-full border dark:border-white/10 dark:bg-white/15  bg-black/5 border-black/10 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="w-full lg:w-5/12 relative hidden lg:block dark:brightness-75">
                <div className="aspect-4/5 rounded-xl overflow-hidden group relative">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />

                  <img
                    src="/image/image.jpg"
                    alt="Nadil"
                    className="w-full h-full object-cover transition duration-700 scale-105 group-hover:scale-100"
                  />

                  <div className="absolute bottom-5 right-5 z-20">
                    <div className=" backdrop-blur-md bg-black/5 px-4 py-3 rounded-lg border border-white/10 text-white">
                      <p className="text-[10px] uppercase tracking-widest text-primary">
                        Available for
                      </p>
                      <p className="text-sm font-semibold ">
                        Freelance Projects
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 w-32 h-32 border-l border-b border-primary/30 hidden xl:block" />
              </div>
            </div>

            {/* ===== About ===== */}
            <div className="grid md:grid-cols-12 gap-4 ">
              {/* Philosophy */}
              <div className="md:col-span-4">
                <h2 className="uppercase tracking-widest /40 mb-3 border-b border-white/10 pb-3 text-accent text-lg">
                  My Approach
                </h2>

                <p className="text-base leading-relaxed ">
                  I focus on creating clean, smooth and user-friendly
                  interfaces. My goal is to make websites not only functional
                  but also visually engaging with subtle animations and modern
                  UI.
                </p>
              </div>

              {/* Bio */}
              <div className="md:col-span-7 md:col-start-6">
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl   leading-snug">
                    I build modern web interfaces that feel {""}
                    <span className="text-accent">
                      smooth, fast and interactive
                    </span>
                    .
                  </p>

                  <p className=" max-w-xl">
                    Currently, I'm improving my backend skills with the MERN
                    stack and working on real-world projects to grow as a
                    full-stack developer. I also do freelance work, helping
                    clients turn their designs into fully responsive websites.
                  </p>
                </div>
              </div>
            </div>
            {/* ===== Skills / Expertise ===== */}
            <div>
              <h2 className=" uppercase tracking-widest text-accent mb-5">
                What I Do
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {skills.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 rounded-xl border border-black/10 dark:border-white/10  dark:bg-white/5 hover:bg-white/10 transition group hover:bg-linear-to-br hover:from-accent/20 hover:via-accent/0 hover:border-accent/70"
                  >
                    {/* ICON */}
                    <div className="text-2xl mb-4 text-accent transition">
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="font-semibold text-lg mb-2 ">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Container>
    </section>
  );
};

export default About;
