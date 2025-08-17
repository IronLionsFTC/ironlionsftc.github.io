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
                    <a key={l.href} className="text-xs underline underline-offset-4 hover:text-blue-300 inline-flex items-center gap-1" href={l.href} target="_blank" rel="noreferrer">
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
