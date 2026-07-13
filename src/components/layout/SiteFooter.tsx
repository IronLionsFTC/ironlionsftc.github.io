import { FOOTER_NAVIGATION } from "@/data/navigation";
import { SOCIALS } from "@/data/site";
import { Github, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { DiscordIcon } from "./DiscordIcon";
import Logo from "./Logo";

const ICONS: Record<string, JSX.Element> = {
  github: <Github />,
  instagram: <Instagram />,
  youtube: <Youtube />,
  discord: <DiscordIcon className="h-5 w-5" />, // local SVG
};

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Logo className="mb-3" />
          <p className="text-sm text-zinc-400">
            Sunshine Coast robotics team competing in FIRST Tech Challenge.
          </p>
        </div>

        <div>
          <div className="text-sm uppercase tracking-widest text-zinc-400">Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            {FOOTER_NAVIGATION.map((link) => (
              <li key={link.to}>
                <Link className="hover:text-blue-400" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm uppercase tracking-widest text-zinc-400">Social</div>
          <div className="mt-3 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg border border-white/10 hover:border-blue-600/40 hover:text-blue-300 transition tilt"
              >
                {ICONS[s.icon] ?? <span className="text-sm">{s.label}</span>}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-xs text-zinc-500 py-4 text-center">
        © {year} Iron Lions. FIRST® and FTC® are trademarks of FIRST. Used for team
        identification only.
        <span className="mx-1">•</span> Made by Taha Salman
      </div>
    </footer>
  );
}
