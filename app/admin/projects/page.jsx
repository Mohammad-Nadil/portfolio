"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGsap,
  SiMongodb,
} from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "@/temp/temp";

const filters = [
  "All",
  "Client Work",
  "Frontend",
  "Fullstack",
  "Tailwind",
  "React",
  "Next.js",
  "Node",
  "MongoDB",
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "Live":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "In Progress":
      return "bg-yellow-500/10 text-yellow-600 border-yellow-500/20";
    case "Improving":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    case "Contributed":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    default:
      return "bg-foreground/5 text-foreground/60 border-foreground/10";
  }
};

const ProjectsPage = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "All" ||
        project.types?.some(
          (type) => type.toLowerCase() === activeFilter.toLowerCase()
        );

      const matchesSearch =
        !query ||
        project.title?.toLowerCase().includes(query) ||
        project.category?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query) ||
        project.tech?.some((tech) =>
          tech.name.toLowerCase().includes(query)
        );

      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  const handleDelete = (project) => {
    const confirmed = window.confirm(
      `"${project.title}" project ta delete korte chao?`
    );

    if (!confirmed) return;

    // Backend connect korar shomoy ekhane DELETE API call hobe.
    console.log("Delete project:", project.title);
  };

  return (
    <div className="space-y-6 ">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Content Management
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Projects
          </h1>

          <p className="mt-1.5 max-w-xl text-sm text-foreground/50">
            Manage the projects displayed on your portfolio website.
          </p>
        </div>

        <Link
          href="/admin/projects/new"
          className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition hover:opacity-90 active:scale-[0.98]"
        >
          <FaPlus className="text-xs" />
          Add Project
        </Link>
      </div>

      {/* Toolbar */}
      <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-foreground/35" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="h-10 w-full rounded-xl border border-foreground/10 bg-background dark:bg-black pl-10 pr-4 text-sm outline-none transition placeholder:text-foreground/35 focus:border-accent/40"
            />
          </div>

          {/* Result count */}
          <p className="text-xs text-foreground/40">
            Showing{" "}
            <span className="font-semibold text-foreground/70">
              {filteredProjects.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-foreground/70">
              {projects.length}
            </span>{" "}
            projects
          </p>
        </div>

        {/* Filters */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filters.map((filter) => {
            const active = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                  active
                    ? "border-accent bg-accent text-white shadow-sm shadow-accent/20"
                    : "border-foreground/10 bg-background dark:bg-black text-foreground/55 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-foreground/10 bg-foreground/[0.02] px-6 text-center">
          <div className="mb-3 text-3xl opacity-30">⌕</div>

          <h2 className="text-base font-semibold">No projects found</h2>

          <p className="mt-1 max-w-sm text-sm text-foreground/45">
            Try a different search term or select another category.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveFilter("All");
            }}
            className="mt-4 rounded-lg border border-accent/30 px-4 py-2 text-xs font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, onDelete }) => {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background dark:bg-black transition duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-foreground/5">
        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1587831990711-23ca6441447b?fm=jpg&q=60&w=3000&auto=format&fit=crop"
          }
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {project.category}
        </span>

        {/* Status */}
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm ${getStatusStyle(
            project.status
          )}`}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="truncate text-base font-bold">{project.title}</h2>

            <p className="mt-0.5 text-xs text-foreground/40">
              {project.category}
            </p>
          </div>
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/55">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech?.map((tech, index) => (
            <span
              key={`${tech.name}-${index}`}
              className="flex items-center gap-1.5 rounded-md border border-foreground/10 bg-foreground/[0.03] px-2 py-1 text-[11px] font-medium text-foreground/60"
            >
              <span className="text-accent">{tech.icon}</span>
              {tech.name}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-2 border-t border-foreground/10 pt-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-foreground/10 px-3 py-2 text-xs font-semibold text-foreground/60 transition hover:border-accent/30 hover:text-accent"
            >
              <FaGithub />
              Code
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-foreground/10 px-3 py-2 text-xs font-semibold text-foreground/25">
              <FaGithub />
              Code
            </span>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-accent/20 px-3 py-2 text-xs font-semibold text-accent transition hover:bg-accent hover:text-white"
            >
              <HiArrowUpRight />
              Live
            </a>
          )}

          <div className="ml-auto flex items-center gap-1">
            <Link
              href={`/admin/projects/edit?title=${encodeURIComponent(
                project.title
              )}`}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground/40 transition hover:bg-accent/10 hover:text-accent"
              aria-label={`Edit ${project.title}`}
            >
              <FaEdit className="text-xs" />
            </Link>

            <button
              type="button"
              onClick={() => onDelete(project)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-foreground/40 transition hover:bg-red-500/10 hover:text-red-500"
              aria-label={`Delete ${project.title}`}
            >
              <FaTrash className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectsPage;