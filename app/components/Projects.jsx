"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Header from "./Header";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2"; // ✅ cleaner external link icon
import { projects } from "@/temp/temp";

const filters = [
  "All",
  "Client Work",
  "Frontend",
 // "Backend",
  "Fullstack",
  "Tailwind",
  "React",
  "Next.js",
  "Node",
  "MongoDB",
 // "Firebase",
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const LOAD_MORE_COUNT = 3;

  const getInitialCount = () => {
    if (window.innerWidth >= 1536) return 8;
    if (window.innerWidth >= 1024) return 6;
    if (window.innerWidth >= 640) return 4;
    return 3;
  };

  useEffect(() => {
    const update = () => setVisibleCount(getInitialCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/90 text-white";
      case "Live":
        return "bg-blue-500/90 text-white";
      case "In Progress":
        return "bg-yellow-400/90 text-black";
      case "Improving":
        return "bg-purple-500/90 text-white";
      case "Contributed":
        return "bg-orange-500/90 text-white";
      default:
        return "bg-gray-400/80 text-white";
    }
  };

  const filtered =
    active === "All"
      ? projects
      : projects.filter(
          (p) => p.category === active || p.tech.some((t) => t.name === active),
        );

  const handleFilterChange = (f) => {
    setActive(f);
    setVisibleCount(getInitialCount());
  };

  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black">
      <Container>
        <div className="text-center mb-12">
          <Header text="Projects" />
          <p className="text-secondary/60 sm:text-base text-sm ">
            Filter by category or tech stack
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 
                hover:scale-[1.05] active:scale-95
                ${
                  active === f
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "border-black/10 dark:border-white/20 hover:border-accent hover:text-accent bg-white dark:bg-white/20"
                }`}
            >
              {f}
              {active === f && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 col-span-full flex flex-col items-center gap-3">
            <div className="text-4xl opacity-40">😕</div>
            <h3 className="text-xl font-semibold">No projects yet</h3>
            <p className="text-sm text-secondary/60 max-w-sm">
              Looks like there are no projects in this category. Try another
              filter or check back later.
            </p>

            <button
              onClick={() => handleFilterChange("All")}
              className="mt-3 px-5 py-2 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition"
            >
              Show All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-6">
            {visibleProjects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col rounded-2xl overflow-hidden
                border border-black/10 dark:border-white/10
                bg-white dark:bg-white/10 backdrop-blur-3xl dark:backdrop-blur-xs
                hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5
                transition-all duration-300"
              >
                <div className="relative w-full aspect-video overflow-hidden">
                  <img
                    src={
                      project.image ||
                      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/10">
                    {project.category}
                  </span>

                  <div className="absolute inset-0  bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex flex-col items-center justify-center gap-3 p-1">
                    <p className="text-white text-sm text-center  px-2">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-2">
                      <a
                        target="_blank"
                        href={project.github}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:scale-105 transition-transform ${project.github ? "hover:bg-gray-100" : "opacity-50 cursor-not-allowed"}`}
                      >
                        <FaGithub className="text-sm" /> Code
                      </a>
                      <a
                        target="_blank"
                        href={project.live}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white text-xs font-semibold       hover:scale-105 transition-transform"
                      >
                        <HiArrowUpRight className="text-sm" /> Live
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-2 sm:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg md:text-lg font-bold leading-snug">
                      {project.title}
                    </h3>

                    <span
                      className={`px-2 py-0.5 text-[10px] font-semibold rounded-full whitespace-nowrap  ${getStatusStyle(project.status)}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="md:hidden text-xs xs:text-sm text-secondary/60 mt-1.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex-1" />

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md       bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                      >
                        <span className="text-accent xs:text-lg leading-none">
                          {t.icon}
                        </span>
                        {t.name}
                      </span>
                    ))}
                  </div>

                  <div className="md:hidden flex gap-2 mt-4">
                    {" "}
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl     border border-black/10 dark:border-white/10 text-xs font-semibold     hover:border-accent/40 hover:text-accent transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl     bg-accent text-white text-xs font-semibold     hover:opacity-90 transition-opacity"
                    >
                      <HiArrowUpRight /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="flex flex-col items-center gap-2 mt-10 md:mt-12">
            {hasMore && (
              <button
                onClick={() =>
                  setVisibleCount((prev) => prev + LOAD_MORE_COUNT)
                }
                className="px-7 py-2.5 rounded-full border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-95"
              >
                Show More ( {filtered.length - visibleCount} remaining )
              </button>
            )}

            {!hasMore && filtered.length > getInitialCount() && (
              <button
                onClick={() => setVisibleCount(getInitialCount())}
                className="px-7 py-2.5 rounded-full border border-black/10 dark:border-white/10 text-sm font-semibold hover:border-accent hover:text-accent transition-all duration-300 active:scale-95"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
