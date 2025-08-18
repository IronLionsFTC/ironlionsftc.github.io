// src/pages/Contact.tsx
import Section from "@/components/Section";
import { SOCIALS } from "@/data/site";

export default function Contact() {
  const email = "jpembroke@scgs.qld.edu.au";
  const socials = SOCIALS.filter((s) =>
    ["youtube", "instagram", "github", "discord"].includes(s.icon)
  );

  return (
    <Section kicker="Reach Out" title={<span>Contact</span>}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: email + socials */}
        <div className="card p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <div className="text-sm uppercase tracking-widest text-zinc-400">Email</div>
              <a
                href={`mailto:${email}`}
                className="mt-2 inline-block text-blue-300 hover:underline"
              >
                {email}
              </a>
            </div>

            <div>
              <div className="text-sm uppercase tracking-widest text-zinc-400">Social</div>
              <ul className="mt-3 space-y-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a className="text-zinc-200 hover:text-blue-400" href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: message helper */}
        <div className="card p-6 md:p-8">
          <div className="text-sm uppercase tracking-widest text-zinc-400">Message</div>
          <p className="mt-2 text-zinc-300">
            GitHub Pages is static, so for forms we use a third-party service (e.g. Formspree) or
            email us directly.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-block rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
          >
            Open email
          </a>
        </div>
      </div>
    </Section>
  );
}
