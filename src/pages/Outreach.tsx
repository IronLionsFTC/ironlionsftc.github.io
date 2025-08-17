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
