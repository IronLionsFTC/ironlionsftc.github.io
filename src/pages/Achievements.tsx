import Section from "@/components/Section";
import FtcQuickStats from "@/components/FtcQuickStats";
import { SEASONS } from "@/data/site";
import { ExternalLink } from "lucide-react";

type AwardItem = {
  year: string;
  season: string;
  event: string;
  results: string[];
  partner?: string;
  video?: string;
};

const AWARDS: AwardItem[] = [
  {
    year: "2025",
    season: "INTO THE DEEP℠",
    event: "APOC 2025",
    results: ["Inspire Award — 1st", "Winning Alliance — Captain"],
    partner: "28078 Kryptonite",
    video: "https://www.youtube.com/watch?v=eLr15aCYTW8"
  },
  {
    year: "2024",
    season: "INTO THE DEEP℠",
    event: "Australian Nationals Championships 2024",
    results: ["Innovate Award", "2nd Alliance"],
    partner: "12993 RoboKings Aurum",
    video: "https://www.youtube.com/live/g8Zrl3yxVHM?si=eLzPfxTiWdIvVJ8K&t=23853"
  },
  {
    year: "2024",
    season: "INTO THE DEEP℠",
    event: "Brisbane North Qualifier (Regionals)",
    results: ["Inspire Award — 2nd", "2nd Winning Alliance"],
    partner: "11322 Grace Pineapples"
  },
  {
    year: "2023",
    season: "CENTERSTAGE℠",
    event: "Season Results",
    results: [
      "No awards — Rookie Season — foundational season focused on learning and building."
    ]
  }
];

export default function Achievements() {
  return (
    <>
      {/* Live stats from FTC Scout */}
      <Section kicker="Live" title="Team Performance">
        <FtcQuickStats teamNumber={24089} season={2024} />
      </Section>

      {/* Awards / Events */}
      <Section kicker="Highlights" title="Achievements & Seasons">
        <div className="grid gap-6">
          <div className="space-y-4">
            {AWARDS.map((a, idx) => (
              <div key={idx} className="card p-6 md:p-7">
                <div className="md:grid md:grid-cols-12 md:gap-6 items-start">
                  {/* Left: event + results */}
                  <div className="md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <span className="text-zinc-400 text-xs uppercase tracking-widest">{a.year}</span>
                      <span className="text-sm text-zinc-500">·</span>
                      <span className="text-sm text-zinc-400">{a.season}</span>
                    </div>
                    <h3 className="mt-1 font-display text-2xl">{a.event}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                      {a.results.map((r) => (
                        <li key={r}>• {r}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: alliance partner + optional video button */}
                  <div className="md:col-span-3 mt-4 md:mt-0 md:pl-6 md:border-l border-white/10">
                    {(a.partner || a.video) ? (
                      <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        {a.partner && (
                          <>
                            <div className="text-xs uppercase tracking-widest text-zinc-400">
                              Alliance Partner
                            </div>
                            <div className="mt-1 font-medium text-zinc-200">{a.partner}</div>
                          </>
                        )}
                        {a.video && (
                          <a
                            href={a.video}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-3 inline-flex items-center gap-1 rounded-lg border border-blue-600/40 bg-blue-600/10 px-3 py-1.5 text-blue-300 hover:bg-blue-600/20"
                          >
                            View Match <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="text-xs text-zinc-500">—</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Season reference cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-2">
            {SEASONS.map((s) => (
              <div key={s.year} className="card p-6 tilt">
                <div className="text-zinc-400 text-xs uppercase tracking-widest">{s.year}</div>
                <div className="font-display text-xl mt-1">{s.title}</div>
                <p className="text-sm text-zinc-400 mt-2">{s.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.links.map((l) => (
                    <a
                      key={l.href}
                      className="text-xs underline underline-offset-4 hover:text-blue-300 inline-flex items-center gap-1"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
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
