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
