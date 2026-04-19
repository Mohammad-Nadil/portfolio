"use client";
import React, { useState } from "react";
import Container from "./Container";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// tech icons
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Fullstack",
    description:
      "MERN e-commerce with cart, auth, admin panel and payment system.",
    image: "https://picsum.photos/600/400?1",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description: "Modern animated portfolio using Next.js and GSAP.",
    image: "https://picsum.photos/600/400?2",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "React", icon: <SiReact /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Chat App",
    category: "Fullstack",
    description: "Real-time chat app .",
    image: "https://picsum.photos/600/400?3",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    description: "Modern animated portfolio using Next.js and GSAP.",
    image: "https://picsum.photos/600/400?2",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "React", icon: <SiReact /> },
    ],
    github: "#",
    live: "#",
  },
];

// 🔥 FILTERS (category + tech both)
const filters = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
  "React",
  "Next.js",
  "MongoDB",
  "Node",
  "Tailwind",
];

const Projects = () => {
  const [active, setActive] = useState("All");

  // 🔥 SMART FILTER LOGIC (category + tech match)
  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) => p.category === active || p.tech.some((t) => t.name === active),
        );

  return (
    <section id="projects" className="py-24">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-secondary/70 mt-3">
            Filter by category or tech stack
          </p>
        </div>

        {/* 🔥 ONE LINE SCROLL FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-2 sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300
        hover:scale-[1.05] active:scale-95
        ${
          active === f
            ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
            : "border-black/10 dark:border-white/20 hover:border-accent hover:text-accent"
        }`}
            >
              {f}

              {/* Active glow dot */}
              {active === f && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:grid-cols-4">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-white/5 dark:bg-black/20 border border-black/10 dark:border-white/10"
            >
              {/* IMAGE */}
              <div className="w-full aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* DESKTOP OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="bg-white text-black p-3 rounded-full hover:scale-110 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    className="bg-accent text-white p-3 rounded-full hover:scale-110 transition"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <span className="text-xs text-accent uppercase">
                  {project.category}
                </span>

                <h3 className="text-lg md:text-xl font-bold mt-1">
                  {project.title}
                </h3>

                <p className="text-sm text-secondary/70 mt-2 fl ">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-1 text-xs">
                      <span className="text-accent text-sm">{t.icon}</span>
                      {t.name}
                    </div>
                  ))}
                </div>

                {/* PUSH BUTTONS TO BOTTOM */}
                <div className="flex md:hidden gap-3 mt-auto pt-4">
                  <a
                    href={project.github}
                    className=" text-center py-2 rounded-lg border border-white/10 text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 text-center py-2 rounded-lg bg-accent text-white text-sm"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
