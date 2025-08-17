import { SOCIALS, TEAM } from "@/data/site";
import { Github, Instagram, Youtube } from "lucide-react";

const ICONS: Record<string, JSX.Element> = {
  github: <Github />,
  instagram: <Instagram />,
  youtube: <Youtube />
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-lg">Iron Lions — FTC {TEAM.number}</div>
          <p className="text-sm text-zinc-400 mt-2">
            Sunshine Coast robotics team competing in FIRST Tech Challenge.
          </p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-zinc-400">Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-amber-400" href="/about">About</a></li>
            <li><a className="hover:text-amber-400" href="/achievements">Achievements</a></li>
            <li><a className="hover:text-amber-400" href="/outreach">Outreach</a></li>
            <li><a className="hover:text-amber-400" href="/sponsors">Sponsors</a></li>
            <li><a className="hover:text-amber-400" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-widest text-zinc-400">Social</div>
          <div className="mt-3 flex gap-3">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label} className="p-2 rounded-lg border border-white/10 hover:border-amber-500/40 hover:text-amber-300 transition tilt">
                {ICONS[s.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 text-xs text-zinc-500 py-4 text-center">
        © {year} {TEAM.name}. FIRST® and FTC® are trademarks of FIRST. Used for team identification only.
      </div>
    </footer>
  );
}
