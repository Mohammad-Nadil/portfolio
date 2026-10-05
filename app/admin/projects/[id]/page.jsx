"use client";

import React, { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaSave,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import { projects } from "@/temp/temp";

const filters = [
  "Client Work",
  "Frontend",
  "Backend",
  "Fullstack",
  "Tailwind",
  "React",
  "Next.js",
  "Node",
  "MongoDB",
];

const statuses = [
  "Completed",
  "Live",
  "In Progress",
  "Improving",
  "Contributed",
];

const emptyProject = {
  title: "",
  image: "",
  live: "",
  github: "",
  category: "Frontend",
  types: [],
  status: "In Progress",
  description: "",
  tech: [],
};

const ProjectEditPage = () => {
  const params = useParams();
  const router = useRouter();

  const id = params?.id;

  const isAddMode = id === "new";

  const existingProject = useMemo(() => {
    if (isAddMode) return null;

    return projects.find(
      (project) =>
        project.title.toLowerCase().replace(/\s+/g, "-") ===
          String(id).toLowerCase() ||
        project.title === id
    );
  }, [id, isAddMode]);

  const [form, setForm] = useState(() => {
    if (isAddMode || !existingProject) {
      return emptyProject;
    }

    return {
      ...existingProject,
      types: existingProject.types || [],
      tech: existingProject.tech || [],
    };
  });

  const [newTech, setNewTech] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeToggle = (type) => {
    setForm((prev) => {
      const exists = prev.types.includes(type);

      return {
        ...prev,
        types: exists
          ? prev.types.filter((item) => item !== type)
          : [...prev.types, type],
      };
    });
  };

  const addTechnology = () => {
    const value = newTech.trim();

    if (!value) return;

    const alreadyExists = form.tech.some(
      (tech) => tech.name.toLowerCase() === value.toLowerCase()
    );

    if (alreadyExists) {
      setNewTech("");
      return;
    }

    setForm((prev) => ({
      ...prev,
      tech: [
        ...prev.tech,
        {
          name: value,
          icon: null,
        },
      ],
    }));

    setNewTech("");
  };

  const removeTechnology = (technologyName) => {
    setForm((prev) => ({
      ...prev,
      tech: prev.tech.filter((tech) => tech.name !== technologyName),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Project title is required.");
      return;
    }

    if (!form.description.trim()) {
      alert("Project description is required.");
      return;
    }

    /*
      Backend connect korar por ekhane:

      ADD:
      POST /api/projects

      EDIT:
      PUT /api/projects/${id}

      Ekhon sudhu data console korchi.
    */

    const payload = {
      title: form.title.trim(),
      image: form.image.trim(),
      live: form.live.trim(),
      github: form.github.trim(),
      category: form.category,
      types: form.types,
      status: form.status,
      description: form.description.trim(),

      // Backend-e icon component jabe na.
      // Sudhu technology name save hobe.
      tech: form.tech.map((tech) => tech.name),
    };

    console.log(isAddMode ? "CREATE PROJECT:" : "UPDATE PROJECT:", payload);

    alert(
      isAddMode
        ? "Project ready to be created."
        : "Project ready to be updated."
    );

    router.push("/admin/projects");
  };

  // ID thakleo project na paile
  if (!isAddMode && !existingProject) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-xl font-bold">Project not found</h1>

        <p className="mt-2 text-sm text-foreground/45">
          The project you are trying to edit does not exist.
        </p>

        <Link
          href="/admin/projects"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white"
        >
          <FaArrowLeft className="text-xs" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      {/* Header */}
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/projects"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-foreground/10 text-foreground/50 transition hover:border-accent/30 hover:text-accent"
            aria-label="Back to projects"
          >
            <FaArrowLeft className="text-xs" />
          </Link>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
              {isAddMode ? "Create" : "Edit"}
            </p>

            <h1 className="text-2xl font-bold tracking-tight">
              {isAddMode ? "Add Project" : "Edit Project"}
            </h1>

            <p className="mt-1 text-sm text-foreground/45">
              {isAddMode
                ? "Add a new project to your portfolio."
                : `Update ${existingProject.title} project information.`}
            </p>
          </div>
        </div>

        <button
          type="submit"
          form="project-form"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-accent/20 transition hover:opacity-90 active:scale-[0.98]"
        >
          <FaSave className="text-xs" />
          {isAddMode ? "Create Project" : "Save Changes"}
        </button>
      </div>

      <form id="project-form" onSubmit={handleSubmit} className="space-y-5">
        {/* ================= BASIC INFO ================= */}
        <section className="rounded-2xl border border-foreground/10 bg-background dark:bg-black  p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-base font-bold">Basic Information</h2>

            <p className="mt-1 text-xs text-foreground/40">
              Main information shown for this project.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Title */}
            <Field label="Project Title" required>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Morent"
                className="input"
              />
            </Field>

            {/* Category */}
            <Field label="Category">
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="input"
              >
                <option value="Frontend">Frontend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="Animation">Animation</option>
                <option value="Client Work">Client Work</option>
                <option value="Backend">Backend</option>
              </select>
            </Field>

            {/* Status */}
            <Field label="Status">
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="input"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </Field>

            {/* Image */}
            <Field label="Image URL">
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="/image/project.png"
                className="input"
              />
            </Field>

            {/* Live */}
            <Field label="Live URL">
              <input
                name="live"
                value={form.live}
                onChange={handleChange}
                placeholder="https://example.vercel.app"
                className="input"
              />
            </Field>

            {/* Github */}
            <Field label="GitHub URL">
              <input
                name="github"
                value={form.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="input"
              />
            </Field>
          </div>

          {/* Description */}
          <div className="mt-5">
            <Field label="Description" required>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                placeholder="Describe the project..."
                className="input resize-y"
              />
            </Field>
          </div>
        </section>

        {/* ================= TYPES ================= */}
        <section className="rounded-2xl border border-foreground/10 bg-background dark:bg-black p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-base font-bold">Project Types</h2>

            <p className="mt-1 text-xs text-foreground/40">
              These are used by the public project filters.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((type) => {
              const selected = form.types.includes(type);

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleTypeToggle(type)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                    selected
                      ? "border-accent bg-accent text-white"
                      : "border-foreground/10 bg-foreground/[0.02] text-foreground/55 hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= TECHNOLOGIES ================= */}
        <section className="rounded-2xl border border-foreground/10 bg-background dark:bg-black p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-base font-bold">Technologies</h2>

            <p className="mt-1 text-xs text-foreground/40">
              Add the technologies used in this project.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTechnology();
                }
              }}
              placeholder="e.g. React"
              className="input flex-1"
            />

            <button
              type="button"
              onClick={addTechnology}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/30 px-4 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
            >
              <FaPlus className="text-xs" />
              Add
            </button>
          </div>

          {form.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {form.tech.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-2 text-xs font-medium"
                >
                  <span className="text-accent">{tech.name}</span>

                  <button
                    type="button"
                    onClick={() => removeTechnology(tech.name)}
                    className="text-foreground/35 transition hover:text-red-500"
                    aria-label={`Remove ${tech.name}`}
                  >
                    <FaTimes />
                  </button>
                </span>
              ))}
            </div>
          )}
        </section>

        {/* ================= PREVIEW ================= */}
        <section className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5 sm:p-6">
          <div className="mb-5">
            <h2 className="text-base font-bold">Links Preview</h2>

            <p className="mt-1 text-xs text-foreground/40">
              Quickly verify the project URLs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {form.github && (
              <a
                href={form.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-foreground/10 px-3 py-2 text-xs font-medium text-foreground/60 transition hover:border-accent/30 hover:text-accent"
              >
                <FaGithub />
                GitHub
                <FaExternalLinkAlt className="text-[9px]" />
              </a>
            )}

            {form.live && (
              <a
                href={form.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/20 px-3 py-2 text-xs font-medium text-accent transition hover:bg-accent hover:text-white"
              >
                <FaExternalLinkAlt />
                Live Website
              </a>
            )}
          </div>
        </section>

        {/* Bottom actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-foreground/10 pt-5 sm:flex-row sm:justify-end">
          <Link
            href="/admin/projects"
            className="inline-flex items-center justify-center rounded-xl border border-foreground/10 px-5 py-2.5 text-sm font-semibold text-foreground/55 transition hover:border-foreground/20 hover:text-foreground"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <FaSave className="text-xs" />
            {isAddMode ? "Create Project" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

const Field = ({ label, required, children }) => {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-foreground/65">
        {label}

        {required && <span className="ml-1 text-accent">*</span>}
      </span>

      {children}
    </label>
  );
};

export default ProjectEditPage;