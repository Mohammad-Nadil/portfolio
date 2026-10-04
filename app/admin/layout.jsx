import Logo from "@/public/svg/Logo";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
  },
  {
    label: "Projects",
    href: "/admin/projects",
  },
  {
    label: "Skills",
    href: "/admin/skills",
  },
  {
    label: "About",
    href: "/admin/about",
  },
];

export default function AdminLayout({ children }) {
  return (
    <div className="backdrop-blur-xs  text-foreground ">
      <div className="flex ">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 border-r   md:flex md:flex-col sticky top-0 ">
          {/* Brand */}
          <div className="border-b  px-6 py-6">
            <Link href="/admin" className="group">
              <div className="flex items-center gap-3">
                <Logo className=" h-10 w-10   group-hover:scale-105" />

                <div>
                  <h1 className="text-sm font-bold tracking-wide">
                    NADIL ADMIN
                  </h1>

                  <p className="mt-0.5 text-[11px] text-foreground/45">
                    Portfolio Dashboard
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
              Workspace
            </p>

            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/65 transition-all hover:bg-foreground/5 hover:text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/20 transition-colors group-hover:bg-accent" />

                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <p className="mb-3 mt-8 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/35">
              Site
            </p>

            <div className="space-y-1">
              <div className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/30">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <span>Hero</span>
              </div>

              <div className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/30">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <span>Contact</span>
              </div>

              <div className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/30">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/10" />
                <span>FAQ</span>
              </div>
            </div>
          </nav>

          {/* Bottom */}
          <div className="border-t  p-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between rounded-xl border  px-3 py-3 text-sm text-foreground/60 transition hover:border-accent/30 hover:text-accent"
            >
              <span>View Website</span>

              <span className="text-xs">↗</span>
            </Link>
          </div>
        </aside>

        {/* Main Area */}
        <main className="min-w-0 flex-1 ">
          {/* Top Bar */}
          <header className="sticky top-0 z-20 border-b  /90 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Mobile Brand */}
              <div className="flex items-center gap-3 md:hidden">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-sm font-bold text-background">
                  N
                </div>

                <div>
                  <p className="text-sm font-bold">NADIL ADMIN</p>
                  <p className="text-[10px] text-foreground/40">
                    Portfolio Dashboard
                  </p>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden md:block">
                <p className="text-xs text-foreground/40">
                  Portfolio Management
                </p>
              </div>

              {/* Utilities */}
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  target="_blank"
                  className="hidden rounded-lg border  px-3 py-2 text-xs font-medium text-foreground/60 transition hover:border-accent/30 hover:text-accent sm:block"
                >
                  View Website ↗
                </Link>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border  text-sm text-foreground/60 transition hover:border-accent/30 hover:text-accent"
                  aria-label="Toggle theme"
                >
                  ◐
                </button>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <div className="p-5 sm:p-7 lg:p-10">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
