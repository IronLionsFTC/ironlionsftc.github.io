// src/pages/About.tsx
import Section from "@/components/Section";
import { TEAM } from "@/data/site";
import { motion } from "framer-motion";
import * as React from "react";

/* ---------------- Timeline + Countdown (kept the same) ---------------- */

type SeasonEvent = {
  title: string;
  displayDate: string; // e.g. "6 Sep 2025" or "15–16 Nov 2025"
  isoStart: string;    // e.g. "2025-09-06" (used for countdown/sort)
  isoEnd?: string;
  description?: string;
};

function useCountdown(isoStart: string) {
  const get = React.useCallback(() => {
    const start = new Date(`${isoStart}T00:00:00`);
    const now = new Date();
    let diff = start.getTime() - now.getTime();
    const done = diff <= 0;
    if (done) return { days: 0, hours: 0, done: true };

    const dayMs = 24 * 60 * 60 * 1000;
    const hourMs = 60 * 60 * 1000;

    const days = Math.floor(diff / dayMs);
    diff -= days * dayMs;
    const hours = Math.floor(diff / hourMs);

    return { days, hours, done: false };
  }, [isoStart]);

  const [state, setState] = React.useState(get);

  React.useEffect(() => {
    setState(get()); // initial on mount (avoid SSR mismatch)
    const id = setInterval(() => setState(get()), 60 * 1000); // update every minute
    return () => clearInterval(id);
  }, [get]);

  return state;
}

function CountdownBadge({ isoStart }: { isoStart: string }) {
  const { days, hours, done } = useCountdown(isoStart);

  if (done) {
    return (
      <div className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/10">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">
          Completed
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center">
      <div
        className="
          rounded-xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm
          px-3 py-1.5
          flex flex-col items-center justify-center text-center
        "
      >
        <div
          className="font-display text-lg leading-none text-blue-200"
          suppressHydrationWarning
        >
          {days}d&nbsp;{hours}h
        </div>
        <div className="text-[9px] uppercase tracking-widest text-blue-400/80 font-medium mt-0.5">
          Until Start
        </div>
      </div>
    </div>
  );
}

function SeasonTimeline({
  events,
  className = "",
}: {
  events: SeasonEvent[];
  className?: string;
}) {
  // Sort by date ascending (earliest first)
  const items = React.useMemo(
    () =>
      [...events].sort(
        (a, b) => new Date(a.isoStart).getTime() - new Date(b.isoStart).getTime()
      ),
    [events]
  );

  return (
    <section aria-label="Season timeline" className={`mt-12 ${className}`}>
      <div className="mb-8 text-center">
        <h3 className="font-display tracking-tight leading-tight text-3xl text-white">
          Season Timeline
        </h3>
      </div>

      <div className="relative mx-auto max-w-3xl px-4">
        {/* Vertical spine - Left on mobile, Center on desktop */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-0">
          {items.map((ev, i) => {
            const isPast = new Date(ev.isoStart).getTime() < Date.now();
            const isEven = i % 2 === 0;

            return (
              <div key={i} className={`relative flex flex-col md:flex-row items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>

                {/* Desktop Spacer (Empty half) */}
                <div className="hidden md:block md:w-5/12" />

                {/* Node - Left on mobile, Center on desktop */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-zinc-900 border border-blue-500 z-10 shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                  <div className={`w-1.5 h-1.5 rounded-full ${isPast ? 'bg-zinc-500' : 'bg-blue-400 animate-pulse'}`} />
                </div>

                {/* Content Card */}
                <div className="w-full pl-16 md:pl-0 md:w-5/12">
                  <div className={`relative group ${isEven ? 'md:text-right' : 'md:text-left'}`}>

                    {/* Connector line (Mobile only) */}
                    <div className="absolute top-2 -left-8 w-8 h-px bg-white/10 md:hidden" />

                    <div className="py-2">
                      <time className="font-display text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                        {ev.displayDate}
                      </time>

                      <h4 className="font-display text-lg md:text-xl text-white leading-tight group-hover:text-blue-200 transition-colors">
                        {ev.title}
                      </h4>

                      {ev.description && (
                        <p className="text-zinc-500 text-xs md:text-sm mt-1 leading-relaxed">
                          {ev.description}
                        </p>
                      )}

                      {/* Countdown for future events - inline or block depending on space */}
                      {!isPast && (
                        <div className={`mt-3 ${isEven ? 'md:ml-auto' : 'md:mr-auto'} w-fit`}>
                          <CountdownBadge isoStart={ev.isoStart} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

const SEASON_EVENTS_2025: SeasonEvent[] = [
  {
    title: "DECODE Season Release",
    displayDate: "6 Sep 2025",
    isoStart: "2025-09-06",
    description: "Kickoff & Game Reveal",
  },
  {
    title: "Brisbane South Regionals",
    displayDate: "15–16 Nov 2025",
    isoStart: "2025-11-15",
    isoEnd: "2025-11-16",
    description: "Regional Qualifier",
  },
  {
    title: "Australian Nationals",
    displayDate: "6–7 Dec 2025",
    isoStart: "2025-12-06",
    isoEnd: "2025-12-07",
    description: "National Championship",
  },
  {
    title: "FIRST® Championship 2026",
    displayDate: "29 Apr 2026",
    isoStart: "2026-04-29",
    description: "World Championship in Houston, TX",
  },
];

export default function About() {
  return (
    <>
      {/* HERO — slideshow removed; static image kept */}
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl">
                {TEAM.name} <span className="text-blue-400">FTC {TEAM.number}</span>
              </h1>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                We’re a student-led robotics team competing in the{" "}
                <span className="text-blue-300">FIRST® Tech Challenge</span>. Our mission is
                to engineer competitive robots, grow STEM skills, and support our community
                through outreach and mentoring.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/robots"
                  className="rounded-xl border border-blue-600/40 bg-blue-600/10 px-4 py-2 hover:bg-blue-600/20 text-blue-300"
                >
                  Meet Valor
                </a>
                <a
                  href="/sponsors"
                  className="rounded-xl border border-blue-600/40 bg-blue-600/10 px-4 py-2 hover:bg-blue-600/20 text-blue-300"
                >
                  Sponsor the team
                </a>
                <a
                  href="/contact"
                  className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
                >
                  Contact us
                </a>
              </div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/images/robots/apocrobot.webp"
                alt="Iron Lions robot APOC"
                className="rounded-2xl border border-white/10 shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section kicker="What is FTC?" title={<span>FIRST Tech Challenge</span>}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              h: "Design & Build",
              p: "Teams design, build, test, and program robots to perform alliance-based tasks.",
            },
            {
              h: "Autonomous + TeleOp",
              p: "Matches include an autonomous period and driver-controlled gameplay with endgame challenges.",
            },
            {
              h: "More than Robots",
              p: "Beyond the field: outreach, documentation, gracious professionalism, and real-world skills.",
            },
          ].map((c) => (
            <div key={c.h} className="card p-6 tilt">
              <div className="font-semibold">{c.h}</div>
              <p className="text-sm text-zinc-400 mt-2">{c.p}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500 mt-4">
          FTC seasons include 2025–26 <em>DECODE™</em>, 2024–25 <em>INTO THE DEEP℠</em>, and
          2023–24 <em>CENTERSTAGE℠</em>.
        </p>

        {/* Timeline directly after the FTC section */}
        <SeasonTimeline events={SEASON_EVENTS_2025} className="mt-8" />
      </Section>
    </>
  );
}
