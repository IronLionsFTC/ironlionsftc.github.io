import Section from "@/components/Section";
import { SEASONS } from "@/data/site";
import { ExternalLink } from "lucide-react";

type AwardItem = {
  year: string;
  season: string;     // e.g., INTO THE DEEP℠
  event: string;      // e.g., Brisbane North Qualifier (Regionals)
  results: string[];  // bullet points
};

const AWARDS: AwardItem[] = [
  // Newest first
  {
    year: "2025",
    season: "INTO THE DEEP℠",     // APOC 2025 belongs to Into the Deep
    event: "APOC 2025",
    results: [
      "Inspire Award — 1st",
      "Winning Alliance — Captain"
    ]
  },
  {
    year: "2024",
    season: "INTO THE DEEP℠",
    event: "Australian Nationals Championships 2024",
    results: [
      "Innovate Award",
      "2nd Alliance"
    ]
  },
  {
    year: "2024",
    season: "INTO THE DEEP℠",
    event: "Brisbane North Qualifier (Regionals)",
    results: [
      "Inspire Award — 2nd",
      "2nd Winning Alliance"
    ]
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
      {/* Awards / Results timeline */}
      <Section kicker="Highlights" title="Achievements & Seasons">
        <div className="grid gap-6">
          {/* Timeline-style stack of event cards */}
          <div className="space-y-4">
            {AWARDS.map((a, idx) => (
              <div key={idx} className="card p-6 md:p-7 relative">
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
            ))}
          </div>

          {/* Season info cards */}
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
