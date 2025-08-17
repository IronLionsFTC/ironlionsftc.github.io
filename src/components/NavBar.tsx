import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/about", label: "About" },
  { to: "/achievements", label: "Achievements" },
  { to: "/outreach", label: "Outreach" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" }
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Iron Lions Home"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({isActive}) => 
                `text-sm hover:text-amber-400 transition ${isActive ? "text-amber-400" : "text-zinc-300"}`
              }>
              {l.label}
            </NavLink>
          ))}
          <a className="ml-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-sm text-amber-300 hover:bg-amber-500/20 transition"
             href="/#support">Support Us</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-white/10" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-zinc-200 hover:text-amber-400">
                {l.label}
              </NavLink>
            ))}
            <a href="/#support" onClick={() => setOpen(false)} className="py-2 text-amber-300">Support Us</a>
          </div>
        </div>
      )}
    </header>
  );
}
