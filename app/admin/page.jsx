import Link from "next/link";
import { LuArrowUpRight, LuBriefcaseBusiness, LuExternalLink, LuFileCode2, LuFolderKanban, LuPlus } from "react-icons/lu";

const stats = [
  {
    label: "Projects",
    value: "12",
    description: "Published projects",
    icon: LuFolderKanban,
  },
  {
    label: "Skills",
    value: "24",
    description: "Technologies listed",
    icon: LuFileCode2,
  },
  {
    label: "Experience",
    value: "3",
    description: "Career entries",
    icon: LuBriefcaseBusiness,
  },
];

const recentProjects = [
  {
    id: "morent",
    name: "Morent",
    type: "Web Application",
    status: "published",
    updated: "2 hours ago",
  },
  {
    id: "darul-huda",
    name: "Darul Huda",
    type: "Educational Website",
    status: "published",
    updated: "Yesterday",
  },
  {
    id: "audira",
    name: "Audira",
    type: "GSAP Showcase",
    status: "draft",
    updated: "3 days ago",
  },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
              Overview
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-1.5 text-sm text-foreground/45">
            Manage your portfolio from one place.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-foreground/45">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          All systems normal
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-2 sm:p-4 transition-colors hover:border-accent/30 "
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-foreground/45">{stat.label}</p>

                  <p className="mt-2 text-2xl font-bold tracking-tight">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-foreground/35">
                    {stat.description}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl sm:bg-accent/10 text-accent">
                  <Icon size={17} strokeWidth={1.8} />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
        {/* Recent Projects */}
        <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
          <div className="flex items-center justify-between border-b border-foreground/10 px-4 py-3.5">
            <div>
              <h2 className="text-sm font-semibold">Recent Projects</h2>

              <p className="mt-0.5 text-[11px] text-foreground/35">
                Recently updated projects
              </p>
            </div>

            <Link
              href="/admin/projects"
              className="flex items-center gap-1 text-xs font-medium text-accent transition-opacity hover:opacity-70"
            >
              View all
              <LuArrowUpRight size={13} />
            </Link>
          </div>

          <div className="divide-y divide-foreground/10">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-foreground/[0.025]"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {project.name}
                  </p>

                  <p className="mt-0.5 truncate text-[11px] text-foreground/35">
                    {project.type}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={`rounded-full px-2 py-1 text-[9px] font-medium ${
                      project.status === "published"
                        ? "bg-accent/10 text-accent"
                        : "bg-foreground/5 text-foreground/40"
                    }`}
                  >
                    {project.status === "published"
                      ? "Published"
                      : "Draft"}
                  </span>

                  <span className="hidden text-[10px] text-foreground/30 sm:block">
                    {project.updated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
          <div className="border-b border-foreground/10 px-4 py-3.5">
            <h2 className="text-sm font-semibold">Quick Actions</h2>

            <p className="mt-0.5 text-[11px] text-foreground/35">
              Common management tasks
            </p>
          </div>

          <div className="grid gap-2 p-3">
            <QuickAction
              href="/admin/projects"
              icon={LuPlus}
              title="Manage Projects"
              description="Add, edit or remove projects"
            />

            <QuickAction
              href="/admin/skills"
              icon={LuFileCode2}
              title="Manage Skills"
              description="Update your technology stack"
            />

            <QuickAction
              href="/"
              icon={LuExternalLink}
              title="Open Portfolio"
              description="Preview the public website"
              external
            />
          </div>
        </section>
      </div>

      {/* Development Status */}
      <div className="mt-4 flex items-start gap-3 rounded-2xl border border-accent/15 bg-accent/[0.035] px-4 py-3.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-xs font-bold text-accent">
          i
        </div>

        <div>
          <p className="text-xs font-semibold">Dashboard is in development</p>

          <p className="mt-0.5 text-[11px] leading-5 text-foreground/40">
            The current data is static. These stats and project records will
            become dynamic after the backend is connected.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickAction({
  href,
  icon: Icon,
  title,
  description,
  external = false,
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center justify-between rounded-xl border border-foreground/10 px-3.5 py-3 transition-colors hover:border-accent/25 hover:bg-foreground/[0.025]"
    >
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground/45 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
          <Icon size={15} strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <p className="truncate text-xs font-medium transition-colors group-hover:text-accent">
            {title}
          </p>

          <p className="mt-0.5 truncate text-[10px] text-foreground/35">
            {description}
          </p>
        </div>
      </div>

      <LuArrowUpRight
        size={14}
        className="shrink-0 text-foreground/25 transition-all group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </Link>
  );
}