"use client";

import { useState } from "react";

const initialProjects = [
  {
    id: 1,
    title: "Morent",
    slug: "morent",
    description: "A modern car rental web application.",
    technologies: ["React", "Tailwind", "Redux Toolkit"],
    liveUrl: "https://morent-hazel.vercel.app",
    githubUrl: "",
    image: "/projects/morent.png",
    featured: true,
    status: "published",
  },
  {
    id: 2,
    title: "Darul Huda",
    slug: "darul-huda",
    description: "An educational website for Darul Huda Madrasa.",
    technologies: ["Next.js", "Tailwind", "GSAP"],
    liveUrl: "https://darul-main.vercel.app",
    githubUrl: "",
    image: "/projects/darul-huda.png",
    featured: true,
    status: "published",
  },
  {
    id: 3,
    title: "Audira",
    slug: "audira",
    description: "A GSAP-based creative web experience.",
    technologies: ["React", "GSAP", "Lenis"],
    liveUrl: "https://audira-gsap.vercel.app",
    githubUrl: "",
    image: "/projects/audira.png",
    featured: false,
    status: "draft",
  },
];

export default function ProjectsPage() {
  const [projects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || project.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Content
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Projects
          </h1>

          <p className="mt-2 text-sm text-foreground/50">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-85"
        >
          + Add Project
        </button>
      </div>

      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-foreground/10 bg-foreground p-4 sm:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-foreground/30">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-foreground/10  py-2.5 pl-9 pr-4 text-sm outline-none transition placeholder:text-foreground/30 focus:border-accent/40"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border border-foreground/10  px-4 py-2.5 text-sm text-foreground/70 outline-none transition focus:border-accent/40"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* Project Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs text-foreground/40">
          {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {/* Projects */}
      <div className="grid gap-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-foreground/15 px-5 py-16 text-center">
            <p className="text-sm font-medium">No projects found</p>

            <p className="mt-1 text-xs text-foreground/40">
              Try a different search or filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-4 transition-colors hover:border-accent/25 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        {/* Image Placeholder */}
        <div className="flex h-28 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03] sm:h-32 sm:w-48">
          <span className="text-xs text-foreground/25">Project Image</span>
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold">{project.title}</h2>

            {project.featured && (
              <span className="rounded-full bg-accent/10 px-2 py-1 text-[10px] font-medium text-accent">
                Featured
              </span>
            )}

            <span
              className={`rounded-full px-2 py-1 text-[10px] font-medium ${
                project.status === "published"
                  ? "bg-accent/10 text-accent"
                  : "bg-foreground/5 text-foreground/45"
              }`}
            >
              {project.status === "published" ? "Published" : "Draft"}
            </span>
          </div>

          <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-foreground/50">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md bg-foreground/5 px-2 py-1 text-[10px] text-foreground/50"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 gap-2 lg:flex-col">
          <button
            type="button"
            className="flex-1 rounded-lg border border-foreground/10 px-4 py-2 text-xs font-medium text-foreground/60 transition hover:border-accent/30 hover:text-accent lg:flex-none"
          >
            Edit
          </button>

          <button
            type="button"
            className="flex-1 rounded-lg border border-foreground/10 px-4 py-2 text-xs font-medium text-foreground/50 transition hover:border-red-500/30 hover:text-red-500 lg:flex-none"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}