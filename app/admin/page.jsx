const stats = [
  {
    label: "Projects",
    value: "12",
    description: "Published projects",
  },
  {
    label: "Skills",
    value: "24",
    description: "Technologies listed",
  },
  {
    label: "Experience",
    value: "3",
    description: "Career entries",
  },
];

const recentProjects = [
  {
    name: "Morent",
    type: "Web Application",
    status: "Published",
    updated: "2 hours ago",
  },
  {
    name: "Darul Huda",
    type: "Educational Website",
    status: "Published",
    updated: "Yesterday",
  },
  {
    name: "Audira",
    type: "GSAP Showcase",
    status: "Draft",
    updated: "3 days ago",
  },
];

export default function AdminDashboard() {
  return (
    <div className="">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Overview
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-foreground/50">
            Manage your portfolio content, projects and personal information
            from one place.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-xs text-foreground/40">System status</p>

          <div className="mt-1 flex items-center gap-2 sm:justify-end">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-sm font-medium">All systems normal</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-5 transition-colors hover:border-accent/30"
          >
            {/* Accent line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-accent opacity-0 transition-opacity group-hover:opacity-100" />

            <p className="text-sm text-foreground/50">{stat.label}</p>

            <div className="mt-3 flex items-end justify-between gap-4">
              <p className="text-3xl font-bold tracking-tight">
                {stat.value}
              </p>

              <span className="mb-1 text-xs text-foreground/35">
                {stat.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        {/* Recent Projects */}
        <section className="rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
          <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold">Recent Projects</h2>

              <p className="mt-1 text-xs text-foreground/40">
                Recently updated portfolio projects
              </p>
            </div>

            <a
              href="/admin/projects"
              className="text-xs font-medium text-accent transition-opacity hover:opacity-70"
            >
              View all →
            </a>
          </div>

          <div className="divide-y divide-foreground/10">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-3 px-5 py-4 transition-colors hover:bg-foreground/[0.025] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">
                    {project.name}
                  </p>

                  <p className="mt-1 text-xs text-foreground/40">
                    {project.type}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 sm:justify-end">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                      project.status === "Published"
                        ? "bg-accent/10 text-accent"
                        : "bg-foreground/5 text-foreground/45"
                    }`}
                  >
                    {project.status}
                  </span>

                  <span className="text-xs text-foreground/35">
                    {project.updated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="rounded-2xl border border-foreground/10 bg-foreground/[0.02]">
          <div className="border-b border-foreground/10 px-5 py-4">
            <h2 className="text-sm font-semibold">Quick Actions</h2>

            <p className="mt-1 text-xs text-foreground/40">
              Common portfolio management tasks
            </p>
          </div>

          <div className="grid gap-3 p-4">
            <a
              href="/admin/projects"
              className="group rounded-xl border border-foreground/10 p-4 transition-all hover:border-accent/30 hover:bg-foreground/[0.025]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium transition-colors group-hover:text-accent">
                    Manage Projects
                  </p>

                  <p className="mt-1 text-xs text-foreground/40">
                    Add, edit or remove projects
                  </p>
                </div>

                <span className="text-foreground/30 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>

            <a
              href="/admin/skills"
              className="group rounded-xl border border-foreground/10 p-4 transition-all hover:border-accent/30 hover:bg-foreground/[0.025]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium transition-colors group-hover:text-accent">
                    Manage Skills
                  </p>

                  <p className="mt-1 text-xs text-foreground/40">
                    Update your technology stack
                  </p>
                </div>

                <span className="text-foreground/30 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>

            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-foreground/10 p-4 transition-all hover:border-accent/30 hover:bg-foreground/[0.025]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium transition-colors group-hover:text-accent">
                    Open Portfolio
                  </p>

                  <p className="mt-1 text-xs text-foreground/40">
                    Preview the public website
                  </p>
                </div>

                <span className="text-foreground/30 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* Development Notice */}
      <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/[0.04] p-5">
        <div className="flex gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            !
          </div>

          <div>
            <h3 className="text-sm font-semibold">Dashboard is in development</h3>

            <p className="mt-1 text-xs leading-5 text-foreground/50">
              Content shown here is currently static. Once the backend is
              connected, these numbers and project lists will come directly
              from your database.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}