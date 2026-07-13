import Section from "@/components/ui/Section";
import { SPONSORS } from "@/data/sponsors";
import { TEAM } from "@/data/site";
import { ExternalLink, HeartHandshake, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function SponsorsPage() {
  return (
    <>
      <Section kicker="Support" title="Sponsors">
        <p className="text-zinc-300 max-w-3xl">
          Thank you to the organisations who power Iron Lions. Your support helps us design,
          manufacture, and compete at FIRST® Tech Challenge events, while delivering outreach to
          schools <span className="whitespace-nowrap">and communities</span> across the Sunshine
          Coast.
        </p>

        {/* Sponsor grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SPONSORS.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="card p-5 group hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-start gap-3">
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-10 w-auto max-w-[160px] rounded-md border border-white/10 bg-white/5 object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg truncate">{s.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-400 rounded-full border border-white/10 px-2 py-0.5">
                      {s.tier}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{s.blurb}</p>
                </div>
              </div>
              <div className="mt-3 text-xs inline-flex items-center gap-1 text-blue-300">
                Visit website <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

        {/* Become a sponsor */}
        <div className="card p-6 md:p-7 mt-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2">
              <HeartHandshake size={18} />
            </div>
            <h3 className="font-display text-xl">Become a Sponsor</h3>
          </div>
          <p className="mt-3 text-zinc-300 text-sm max-w-3xl">
            We offer flexible packages for cash or in-kind support. Contributions go directly into
            robot parts, machining, event travel, and community workshops. We proudly feature
            sponsors across our robot, uniforms, media, and events.
          </p>
          <ul className="mt-3 text-sm text-zinc-300 list-disc list-inside space-y-1">
            <li>Brand visibility at competitions and demo days</li>
            <li>Social media mentions and website logo placement</li>
            <li>Private demo / school visit opportunities</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-600/40 bg-blue-600/10 px-3 py-2 text-blue-300 hover:bg-blue-600/20"
            >
              Contact the team
            </Link>
            <a
              href={`mailto:${TEAM.email}?subject=Iron%20Lions%20Sponsorship`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5"
            >
              <Mail size={16} /> {TEAM.email}
            </a>
          </div>
          <p className="mt-3 text-[11px] text-zinc-500">
            Logos can be supplied in SVG/AI/PNG. We’ll send our brand placement guide upon request.
          </p>
        </div>
      </Section>
    </>
  );
}
