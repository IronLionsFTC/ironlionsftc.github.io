import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/robots", label: "Robots" },
  { to: "/achievements", label: "Achievements" },
  { to: "/outreach", label: "Outreach" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Iron Lions Home">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm hover:text-blue-400 transition ${
                  isActive ? "text-blue-400" : "text-zinc-300"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          {/* CTA replaced: Support Us -> Resources */}
          <Link
            to="/resources"
            className="ml-2 rounded-xl border border-blue-600/40 bg-blue-600/10 px-3 py-1.5 text-sm text-blue-300 hover:bg-blue-600/20 transition"
          >
            Resources
          </Link>
        </nav>

        {/* mobile trigger */}
        <button
          className="md:hidden p-2 rounded-lg border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {/* Resources CTA first on mobile */}
            <NavLink
              to="/resources"
              onClick={() => setOpen(false)}
              className="py-2 text-blue-300"
            >
              Resources
            </NavLink>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 transition ${
                    isActive ? "text-blue-400" : "text-zinc-200 hover:text-blue-400"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
