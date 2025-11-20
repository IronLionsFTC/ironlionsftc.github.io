import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/about", label: "About" },
  {
    label: "Robots",
    children: [
      { to: "/robots/valor", label: "Valor" },
      { to: "/robots/mufasa", label: "Mufasa" },
    ],
  },
  { to: "/achievements", label: "Achievements" },
  { to: "/outreach", label: "Outreach" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRobotsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setRobotsOpen(false);
  }, [location]);

  const isRobotsActive = location.pathname.startsWith("/robots");

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Iron Lions Home">
          <Logo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            if (l.children) {
              return (
                <div className="relative" key={l.label} ref={dropdownRef}>
                  <button
                    onClick={() => setRobotsOpen(!robotsOpen)}
                    className={`flex items-center gap-1 text-sm transition ${isRobotsActive || robotsOpen ? "text-blue-400" : "text-zinc-300 hover:text-blue-400"
                      }`}
                  >
                    {l.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${robotsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {robotsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/90 backdrop-blur shadow-xl overflow-hidden"
                      >
                        <div className="flex flex-col p-1">
                          {l.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              onClick={() => setRobotsOpen(false)}
                              className={({ isActive }) =>
                                `px-3 py-2 text-sm rounded-lg transition ${isActive
                                  ? "bg-blue-600/10 text-blue-300"
                                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
                                }`
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm hover:text-blue-400 transition ${isActive ? "text-blue-400" : "text-zinc-300"
                  }`
                }
              >
                {l.label}
              </NavLink>
            );
          })}
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

            {links.map((l) => {
              if (l.children) {
                return (
                  <div key={l.label} className="flex flex-col gap-2">
                    <div className="py-2 text-zinc-400 font-medium text-sm uppercase tracking-wider">
                      {l.label}
                    </div>
                    <div className="pl-4 flex flex-col gap-2 border-l border-white/10 ml-1">
                      {l.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `py-1 transition ${isActive
                              ? "text-blue-400"
                              : "text-zinc-200 hover:text-blue-400"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-2 transition ${isActive ? "text-blue-400" : "text-zinc-200 hover:text-blue-400"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
