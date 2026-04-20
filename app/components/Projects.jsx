"use client";
import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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
    description: "MERN e-commerce with cart, auth, admin panel and payment.",
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
    title: "Chat Application",
    category: "Fullstack",
    description: "Real-time chat app using Socket.io and authentication.",
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
    title: "Admin Dashboard",
    category: "Frontend",
    description: "Analytics dashboard with charts and responsive UI.",
    image: "https://picsum.photos/600/400?4",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    category: "Fullstack",
    description: "Full blog system with CRUD, auth and comments.",
    image: "https://picsum.photos/600/400?5",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Landing Page UI",
    category: "Frontend",
    description: "High-converting landing page with smooth animations.",
    image: "https://picsum.photos/600/400?6",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Authentication System",
    category: "Backend",
    description: "JWT auth system with login, register and roles.",
    image: "https://picsum.photos/600/400?7",
    tech: [
      { name: "Node", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager App",
    category: "Fullstack",
    description: "Task management with drag & drop and realtime updates.",
    image: "https://picsum.photos/600/400?8",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node", icon: <SiNodedotjs /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    category: "Frontend",
    description: "Weather app using API with modern UI design.",
    image: "https://picsum.photos/600/400?9",
    tech: [{ name: "React", icon: <SiReact /> }],
    github: "#",
    live: "#",
  },
  {
    title: "REST API System",
    category: "Backend",
    description: "Scalable REST API with Express and MongoDB.",
    image: "https://picsum.photos/600/400?10",
    tech: [
      { name: "Node", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Social Media App",
    category: "Fullstack",
    description: "Mini social app with posts, likes and comments.",
    image: "https://picsum.photos/600/400?11",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Movie App",
    category: "Frontend",
    description: "Movie browsing app using TMDB API.",
    image: "https://picsum.photos/600/400?12",
    tech: [{ name: "React", icon: <SiReact /> }],
    github: "#",
    live: "#",
  },
  {
    title: "File Upload System",
    category: "Backend",
    description: "Secure file upload with storage and validation.",
    image: "https://picsum.photos/600/400?13",
    tech: [{ name: "Node", icon: <SiNodedotjs /> }],
    github: "#",
    live: "#",
  },
  {
    title: "Realtime Notification System",
    category: "Frontend",
    description: "Socket based notification system.",
    image: "https://picsum.photos/600/400?14",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node", icon: <SiNodedotjs /> },
    ],
    github: "#",
    live: "#",
  },
  {
    title: "UI Component Library",
    category: "Frontend",
    description: "Reusable UI components using Tailwind.",
    image: "https://picsum.photos/600/400?15",
    tech: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "React", icon: <SiReact /> },
    ],
    github: "#",
    live: "#",
  },
];

const filters = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
  "Tailwind",
  "React",
  "Next.js",
  "Node",
  "MongoDB",

];

// ✅ একবার এখানে set করো, বাকি সব automatic
const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 3;

const Projects = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT); // ✅ কতটা দেখাবে

  // Filter logic
  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) => p.category === active || p.tech.some((t) => t.name === active),
        );

  const handleFilterChange = (f) => {
    setActive(f);
    setVisibleCount(INITIAL_COUNT); // নতুন filter এ গেলে আবার শুরু থেকে
  };

  const visibleProjects = filtered.slice(0, visibleCount); // ✅ শুধু এতটুকুই দেখাবে
  const hasMore = visibleCount < filtered.length; // ✅ আরো আছে কিনা

  return (
    <section id="projects" className="py-24">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <Header text="Projects" />
          <p className="text-secondary/70 mt-3">
            Filter by category or tech stack
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)} // ✅ handleFilterChange ব্যবহার
              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300
                hover:scale-[1.05] active:scale-95
                ${
                  active === f
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "border-black/10 dark:border-white/20 hover:border-accent hover:text-accent"
                }`}
            >
              {f}
              {active === f && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:grid-cols-4">
          {visibleProjects.map(
            (
              project,
              i, // ✅ filtered না, visibleProjects
            ) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white/5 dark:bg-black/20 border border-black/10 dark:border-white/10 flex flex-col"
              >
                {/* IMAGE */}
                <div className="w-full aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4">
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
                  <p className="text-sm text-secondary/70 mt-2 flex-1">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 text-xs"
                      >
                        <span className="text-accent text-sm">{t.icon}</span>
                        {t.name}
                      </div>
                    ))}
                  </div>

                  {/* MOBILE BUTTONS */}
                  <div className="flex md:hidden gap-3 pt-4">
                    <a
                      href={project.github}
                      className="text-center py-2 rounded-lg border border-white/10 text-sm"
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
            ),
          )}
        </div>

        {/* ✅ SHOW MORE / SHOW LESS BUTTON */}
        {filtered.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <button
              onClick={
                () =>
                  hasMore
                    ? setVisibleCount((prev) => prev + LOAD_MORE_COUNT) // আরো দেখাও
                    : setVisibleCount(INITIAL_COUNT) // আবার গুটিয়ে নাও
              }
              className="px-8 py-3 rounded-full border border-accent text-accent font-semibold text-sm
                hover:bg-accent hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              {hasMore
                ? `Show More (${filtered.length - visibleCount} remaining)`
                : "Show Less"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
