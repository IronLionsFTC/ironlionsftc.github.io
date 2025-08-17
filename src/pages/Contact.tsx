import Section from "@/components/Section";
import { SOCIALS, TEAM } from "@/data/site";

export default function Contact() {
  return (
    <>
      <Section kicker="Reach out" title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="font-medium">Email</div>
            <a className="text-sm text-blue-300 underline underline-offset-4" href={`mailto:${TEAM.email}`}>{TEAM.email}</a>

            <div className="font-medium mt-6">Social</div>
            <ul className="mt-2 text-sm text-zinc-400 space-y-2">
              {SOCIALS.map(s => (
                <li key={s.label}>
                  <a className="hover:text-blue-300 underline underline-offset-4" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
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
