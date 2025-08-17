#!/usr/bin/env bash
set -euo pipefail

echo ">> Creating folders"
mkdir -p .github/workflows public src/components src/data src/pages

echo ">> Writing config & meta files"
cat > .gitignore <<'EOF'
node_modules
dist
.vscode
.DS_Store
EOF

cat > package.json <<'EOF'
{
  "name": "iron-lions-ftc",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 5173"
  },
  "dependencies": {
    "framer-motion": "^11.3.0",
    "lucide-react": "^0.474.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4",
    "vite": "^5.4.2"
  }
}
EOF

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  },
  "include": ["src"]
}
EOF

cat > postcss.config.js <<'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
EOF

cat > tailwind.config.ts <<'EOF'
import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0a0a0a",
          fg: "#e5e7eb",
          accent: "#f59e0b"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Rajdhani", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.35)" },
      backgroundImage: {
        "mesh":
          "radial-gradient(60% 50% at 10% 0%, rgba(245,158,11,0.10) 0%, transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(255,255,255,0.05) 0%, transparent 60%)"
      }
    }
  },
  plugins: []
} satisfies Config;
EOF

cat > vite.config.ts <<'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()]
});
EOF

cat > index.html <<'EOF'
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iron Lions FTC 24089</title>
    <meta name="description" content="Iron Lions FTC Team 24089 — Sunshine Coast robotics team competing in FIRST Tech Challenge." />
    <meta name="theme-color" content="#0a0a0a" />
    <meta property="og:title" content="Iron Lions FTC 24089" />
    <meta property="og:description" content="Official website for Iron Lions — FIRST Tech Challenge Team 24089." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/og-placeholder.png" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Rajdhani:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Ctext y=%27.9em%27 font-size=%2790%27%3E%F0%9F%90%AF%3C/text%3E%3C/svg%3E" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

echo ">> Writing GitHub Pages workflow"
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml <<'EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ "main" ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
EOF

echo ">> Public files"
cat > public/CNAME <<'EOF'
ironlionsftc.com
EOF

cat > public/404.html <<'EOF'
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Iron Lions</title>
    <meta http-equiv="refresh" content="0; url=/" />
    <script>
      (function(l){ var p = l.pathname; l.replace('/' + (p.startsWith('/') ? p.slice(1) : p));})(window.location);
    </script>
  </head>
  <body></body>
</html>
EOF

echo ">> Styles & typings"
cat > src/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
html, body, #root { height: 100%; }
body {
  @apply bg-brand-bg text-brand-fg antialiased;
  background-image: radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.06), transparent 60%), theme("backgroundImage.mesh");
  background-attachment: fixed;
}
.card { @apply bg-black/40 backdrop-blur border border-white/10 rounded-2xl shadow-soft; }
.underline-accent { background: linear-gradient(90deg, rgba(245,158,11,0) 0%, rgba(245,158,11,0.6) 50%, rgba(245,158,11,0) 100%); height: 2px; width: 100%; transform-origin: left; transform: scaleX(0); transition: transform .6s ease; }
a:hover .underline-accent { transform: scaleX(1); }
.tilt { transition: transform .3s ease; }
.tilt:hover { transform: translateY(-2px) rotate3d(1,1,0,1deg); }
EOF

cat > src/vite-env.d.ts <<'EOF'
/// <reference types="vite/client" />
EOF

echo ">> App shell & routing"
cat > src/main.tsx <<'EOF'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
EOF

cat > src/App.tsx <<'EOF'
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Outreach from "./pages/Outreach";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <ScrollToTop />
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 pt-12 pb-8">
          <div className="card p-8 md:p-12">
            <h1 className="font-display text-4xl md:text-6xl">
              Iron Lions <span className="text-amber-400">FTC 24089</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-300 max-w-2xl">
              Subtle, premium, and fast. An animated site for a serious robotics team.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/about" className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-amber-300 hover:bg-amber-500/20">About the team</Link>
              <Link to="/achievements" className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">Achievements</Link>
            </div>
          </div>
        </div>
      </motion.section>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
EOF

echo ">> Components"
cat > src/components/Logo.tsx <<'EOF'
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-9 w-9 rounded-xl bg-amber-500/20 border border-amber-500/40 grid place-items-center">
        <span className="text-amber-400 font-extrabold">IL</span>
      </div>
      <div className="leading-tight">
        <div className="font-display text-xl tracking-wide">Iron Lions</div>
        <div className="text-xs text-zinc-400">FTC Team 24089</div>
      </div>
    </div>
  );
}
EOF

cat > src/components/NavBar.tsx <<'EOF'
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
EOF

cat > src/components/Footer.tsx <<'EOF'
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
EOF

cat > src/components/Section.tsx <<'EOF'
import { motion } from "framer-motion";

export default function Section({
  id,
  kicker,
  title,
  children,
  className = ""
}: {
  id?: string;
  kicker?: string;
  title?: string | JSX.Element;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {kicker && <div className="text-xs uppercase tracking-[0.2em] text-amber-400/80">{kicker}</div>}
        {title && <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>}
        <div className="mt-6">{children}</div>
      </motion.div>
    </section>
  );
}
EOF

cat > src/components/ScrollToTop.tsx <<'EOF'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return null;
}
EOF

echo ">> Data"
cat > src/data/site.ts <<'EOF'
export const TEAM = {
  name: "Iron Lions",
  number: "24089",
  tagline: "Design. Build. Iterate. Compete.",
  email: "contact@ironlionsftc.com"
};

export const SOCIALS = [
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "GitHub", href: "#", icon: "github" }
];

export const SEASONS = [
  {
    year: "2025–26",
    title: "DECODE™",
    summary:
      "New archaeology-inspired challenge presented by RTX. Kickoff September 6, 2025 — details pending.",
    links: [
      { label: "FIRST Season Page", href: "https://www.firstinspires.org/robotics/ftc/game-and-season" }
    ]
  },
  {
    year: "2024–25",
    title: "INTO THE DEEP℠",
    summary:
      "Ocean exploration themed season. Robots navigated depths, delivered samples, and completed climbs.",
    links: [
      { label: "Game Manual (PDF)", href: "https://firstinspires.blob.core.windows.net/ftc/2024-25/Competition-Manual.pdf" }
    ]
  },
  {
    year: "2023–24",
    title: "CENTERSTAGE℠",
    summary:
      "Perform on the big stage — game pieces, backstage tasks, and endgame challenges.",
    links: [
      { label: "Season Archive", href: "https://ftc-resources.firstinspires.org/ftc/archive/2024" }
    ]
  }
];

export const SPONSOR_TIERS = [
  { name: "Platinum", amt: "$5,000+", perks: ["Logo prime placement", "Robot naming badge", "Event shoutouts"] },
  { name: "Gold", amt: "$2,500+", perks: ["Large logo placement", "Pit banner logo", "Social media feature"] },
  { name: "Silver", amt: "$1,000+", perks: ["Medium logo placement", "Website listing"] },
  { name: "Bronze", amt: "$250+", perks: ["Logo on website", "Thank-you certificate"] }
];
EOF

echo ">> Pages"
cat > src/pages/About.tsx <<'EOF'
import Section from "@/components/Section";
import { TEAM } from "@/data/site";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl">
                {TEAM.name} <span className="text-amber-400">FTC {TEAM.number}</span>
              </h1>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                We’re a student-led robotics team competing in the <span className="text-amber-300">FIRST® Tech Challenge</span>. 
                Our mission is to engineer competitive robots, grow STEM skills, and support our community through outreach and mentoring.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="/sponsors" className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 hover:bg-amber-500/20 text-amber-300">Sponsor the team</a>
                <a href="/contact" className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">Contact us</a>
              </div>
            </div>
            <motion.div
              className="flex-1 w-full h-56 md:h-72 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/60"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-full h-full grid place-items-center text-zinc-500">Team photo / robot image coming soon</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section kicker="What is FTC?" title={<span>FIRST Tech Challenge</span>}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { h: "Design & Build", p: "Teams design, build, test, and program robots to perform alliance-based tasks." },
            { h: "Autonomous + TeleOp", p: "Matches include an autonomous period and driver-controlled gameplay with endgame challenges." },
            { h: "More than Robots", p: "Beyond the field: outreach, documentation, gracious professionalism, and real-world skills." }
          ].map((c) => (
            <div key={c.h} className="card p-6 tilt">
              <div className="font-semibold">{c.h}</div>
              <p className="text-sm text-zinc-400 mt-2">{c.p}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500 mt-4">
          FTC seasons include 2025–26 <em>DECODE™</em> (kickoff Sept 6, 2025), 2024–25 <em>INTO THE DEEP℠</em>, and 2023–24 <em>CENTERSTAGE℠</em>.
        </p>
      </Section>
    </>
  );
}
EOF

cat > src/pages/Achievements.tsx <<'EOF'
import Section from "@/components/Section";
import { SEASONS } from "@/data/site";
import { ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <>
      <Section kicker="Highlights" title="Achievements & Seasons">
        <div className="grid gap-6">
          <div className="card p-6">
            <ul className="space-y-3 text-sm text-zinc-300">
              <li>• Placeholder — Inspire Award (Regional)</li>
              <li>• Placeholder — Think Award (League)</li>
              <li>• Placeholder — Control Award (Qualifier)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SEASONS.map((s) => (
              <div key={s.year} className="card p-6 tilt">
                <div className="text-zinc-400 text-xs uppercase tracking-widest">{s.year}</div>
                <div className="font-display text-xl mt-1">{s.title}</div>
                <p className="text-sm text-zinc-400 mt-2">{s.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.links.map((l) => (
                    <a key={l.href} className="text-xs underline underline-offset-4 hover:text-amber-300 inline-flex items-center gap-1" href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
EOF

cat > src/pages/Outreach.tsx <<'EOF'
import Section from "@/components/Section";

export default function Outreach() {
  const items = [
    { h: "Workshops", p: "Intro to robotics and coding sessions for local schools." },
    { h: "Community Demos", p: "Live robot demonstrations at community events and festivals." },
    { h: "Mentoring", p: "Support for FLL teams and rookie FTC teams in the region." }
  ];
  return (
    <>
      <Section kicker="Community" title="Outreach">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.h} className="card p-6 tilt">
              <div className="font-semibold">{i.h}</div>
              <p className="text-sm text-zinc-400 mt-2">{i.p}</p>
            </div>
          ))}
        </div>

        <div className="card p-6 mt-6">
          <div className="font-medium">Want us at your event?</div>
          <p className="text-sm text-zinc-400 mt-2">
            We love sharing robotics with our community. Reach out with date, location, and audience size.
          </p>
          <a href="/contact" className="inline-block mt-4 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">Get in touch</a>
        </div>
      </Section>
    </>
  );
}
EOF

cat > src/pages/Sponsors.tsx <<'EOF'
import Section from "@/components/Section";
import { SPONSOR_TIERS } from "@/data/site";

export default function Sponsors() {
  return (
    <>
      <Section kicker="Support" title="Sponsors">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="font-medium">Why sponsor Iron Lions?</div>
            <p className="text-sm text-zinc-400 mt-2">
              Your support funds robot parts, registration fees, travel, and outreach.
              Sponsors receive recognition online, at events, and on the robot.
            </p>
            <a href="/#support" className="inline-block mt-4 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-amber-300 hover:bg-amber-500/20">Download sponsor pack (PDF)</a>
          </div>
          <div className="card p-6">
            <div className="font-medium">Current Sponsors</div>
            <p className="text-sm text-zinc-500 mt-2">Logos coming soon.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {SPONSOR_TIERS.map(t => (
            <div key={t.name} className="card p-6 tilt">
              <div className="text-xs uppercase tracking-widest text-zinc-400">{t.amt}</div>
              <div className="font-display text-xl">{t.name}</div>
              <ul className="mt-3 text-sm text-zinc-400 space-y-2">
                {t.perks.map(p => <li key={p}>• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
EOF

cat > src/pages/Contact.tsx <<'EOF'
import Section from "@/components/Section";
import { SOCIALS, TEAM } from "@/data/site";

export default function Contact() {
  return (
    <>
      <Section kicker="Reach out" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="font-medium">Email</div>
            <a className="text-sm text-amber-300 underline underline-offset-4" href={`mailto:${TEAM.email}`}>{TEAM.email}</a>

            <div className="font-medium mt-6">Social</div>
            <ul className="mt-2 text-sm text-zinc-400 space-y-2">
              {SOCIALS.map(s => (
                <li key={s.label}>
                  <a className="hover:text-amber-300 underline underline-offset-4" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="font-medium">Message</div>
            <p className="text-sm text-zinc-400 mt-2">
              GitHub Pages is static, so for forms use a third-party service (e.g. Formspree) or email us directly.
            </p>
            <a className="inline-block mt-4 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5" href={`mailto:${TEAM.email}?subject=Inquiry from website`}>Open email</a>
          </div>
        </div>
      </Section>
    </>
  );
}
EOF

cat > src/pages/NotFound.tsx <<'EOF'
export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="text-5xl font-display">404</div>
      <p className="mt-2 text-zinc-400">That page doesn’t exist.</p>
      <a href="/" className="inline-block mt-6 rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">Back home</a>
    </div>
  );
}
EOF

echo ">> Tailwind entry glue"
cat > src/index.css >/dev/null <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
html, body, #root { height: 100%; }
body {
  @apply bg-brand-bg text-brand-fg antialiased;
  background-image: radial-gradient(1200px 600px at 50% -10%, rgba(255,255,255,0.06), transparent 60%), theme("backgroundImage.mesh");
  background-attachment: fixed;
}
.card { @apply bg-black/40 backdrop-blur border border-white/10 rounded-2xl shadow-soft; }
.underline-accent { background: linear-gradient(90deg, rgba(245,158,11,0) 0%, rgba(245,158,11,0.6) 50%, rgba(245,158,11,0) 100%); height: 2px; width: 100%; transform-origin: left; transform: scaleX(0); transition: transform .6s ease; }
a:hover .underline-accent { transform: scaleX(1); }
.tilt { transition: transform .3s ease; }
.tilt:hover { transform: translateY(-2px) rotate3d(1,1,0,1deg); }
EOF

echo ">> Done writing files"

echo ">> Installing dependencies (this can take a minute)"
npm ci

echo ">> All set. To run locally:"
echo "   npm run dev"
echo ">> Commit & push to deploy:"
echo "   git add . && git commit -m 'Bootstrap site' && git push"
