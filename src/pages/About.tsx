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

  return (
    <div className="shrink-0 md:ml-auto ml-2 self-stretch flex items-center">
      <div
        className="
          min-w-[148px] h-[76px]
          rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow
          px-4
          flex flex-col items-center justify-center text-center
        "
      >
        {done ? (
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 font-medium">
            Completed
          </div>
        ) : (
          <>
            <div
              className="font-display text-2xl md:text-3xl leading-none text-white"
              suppressHydrationWarning
            >
              {days}d&nbsp;{hours}h
            </div>
            <div className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-zinc-400/90 font-medium">
              Until Start
            </div>
          </>
        )}
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
  // chronological: most recent first → latest last
  const items = React.useMemo(
    () =>
      [...events].sort(
        (a, b) => new Date(a.isoStart).getTime() - new Date(b.isoStart).getTime()
      ),
    [events]
  );

  return (
    <section aria-label="Season timeline" className={`mt-10 ${className}`}>
      <div className="mb-4">
        <h3 className="font-display tracking-tight leading-tight text-2xl md:text-3xl text-white">
          DECODE Season Timeline
        </h3>
        <p className="text-sm text-zinc-400">
          Ordered from most recent event first to the latest.
        </p>
      </div>

      <div className="relative">
        {/* vertical spine */}
        <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/10" />
        <ol className="space-y-5">
          {items.map((ev, i) => (
            <li key={i} className="relative pl-10 sm:pl-12">
              {/* node */}
              <span className="absolute left-3.5 sm:left-4 top-4 inline-flex h-3 w-3 rounded-full bg-blue-400 ring-4 ring-blue-400/25" />
              <div className="card p-4 md:p-5">
                <div className="flex items-start gap-4">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <time className="font-display text-base font-medium text-blue-300 leading-none">
                        {ev.displayDate}
                      </time>
                      <span className="text-sm text-zinc-500">•</span>
                      <h4 className="font-display text-xl leading-snug text-white">
                        {ev.title}
                      </h4>
                    </div>
                    {ev.description ? (
                      <p className="mt-2 text-sm text-zinc-400">{ev.description}</p>
                    ) : null}
                  </div>

                  {/* right-side countdown */}
                  <CountdownBadge isoStart={ev.isoStart} />
                </div>
              </div>
            </li>
          ))}
        </ol>
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
