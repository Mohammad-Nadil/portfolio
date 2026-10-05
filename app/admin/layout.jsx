import Logo from "@/public/svg/Logo";
import Link from "next/link";
import { LuExternalLink, LuFileCode2, LuFolderKanban, LuLayoutDashboard, LuMail, LuSunMoon } from "react-icons/lu";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LuLayoutDashboard,
  },
  {
    label: "Projects",
    href: "/admin/projects",
    icon: LuFolderKanban,
  },
  {
    label: "Skills",
    href: "/admin/skills",
    icon: LuFileCode2,
  },
  {
    label: "Contact",
    href: "/admin/contact",
    icon: LuMail
  },
];
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-dvh text-foreground">
      <div className="flex min-h-dvh flex-col md:flex-row">
        {/* ================= DESKTOP SIDEBAR ================= */}
        <aside className="hidden h-dvh w-64 shrink-0 flex-col border-r border-foreground/10 md:sticky md:top-0 md:flex">
          {/* Brand */}
          <div className="shrink-0 border-b border-foreground/10 px-6 py-6">
            <Link href="/admin" className="group">
              <div className="flex items-center gap-3">
                <Logo className="h-10 w-10 transition-transform group-hover:scale-105" />

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
          <nav className="flex-1 overflow-y-auto px-3 py-6">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/30">
              Workspace
            </p>

            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-foreground/60 transition-all hover:bg-foreground/5 hover:text-foreground"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="shrink-0 text-foreground/40 transition-colors group-hover:text-accent"
                    />

                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Sidebar Bottom */}
          <div className="shrink-0 border-t border-foreground/10 p-4">
            <Link
              href="/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl border border-foreground/10 px-3 py-3 text-sm text-foreground/55 transition hover:border-accent/30 hover:text-accent"
            >
              <div className="flex items-center gap-3">
                <LuExternalLink size={16} strokeWidth={1.8} />
                <span>View Website</span>
              </div>

              <span className="text-xs opacity-40 transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="min-w-0 flex-1">
          {/* Top Bar */}
          <header className="border-b border-foreground/10 bg-background/85 dark:bg-black backdrop-blur-md sticky top-0 z-40">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Mobile Brand */}
              <div className="flex items-center gap-3 md:hidden">
                <Logo className="h-9 w-9" />

                <div>
                  <p className="text-sm font-bold">NADIL ADMIN</p>

                  <p className="text-[10px] text-foreground/40">
                    Portfolio Dashboard
                  </p>
                </div>
              </div>

              {/* Desktop Page Context */}
              <div className="hidden md:block ">
                <p className="text-xs text-foreground/40">
                  Portfolio Management
                </p>
              </div>

              {/* Utilities */}
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden items-center gap-2 rounded-lg border border-foreground/10 px-3 py-2 text-xs font-medium text-foreground/55 transition hover:border-accent/30 hover:text-accent sm:flex"
                >
                  <LuExternalLink size={14} />
                  <span>View Website</span>
                </Link>

                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-foreground/10 text-foreground/55 transition hover:border-accent/30 hover:text-accent"
                  aria-label="Toggle theme"
                >
                  <LuSunMoon size={17} strokeWidth={1.8} />
                </button>
              </div>
            </div>
          </header>

          {/* NORMAL PAGE SCROLL */}
          <div className="p-5 pb-24 sm:p-7 sm:pb-24 lg:p-10 lg:pb-10">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </div>

          {/* ================= MOBILE TAB NAV ================= */}
          <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-foreground/10 bg-background/95 dark:bg-black px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden">
            <div className="mx-auto grid max-w-md grid-cols-4 gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col items-center justify-center gap-1 rounded-xl py-2 text-foreground/45 transition hover:bg-foreground/5 hover:text-accent"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="transition-colors group-hover:text-accent"
                    />

                    <span className="text-[10px] font-medium">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </main>
      </div>
    </div>
  );
}