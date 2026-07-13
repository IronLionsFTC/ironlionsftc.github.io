import Section from "@/components/ui/Section";
import { School, Users, Megaphone, Handshake, Wrench, CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

type Card = {
  title: string;
  body: string;
  icon: React.ElementType;
};

const PROGRAMS: Card[] = [
  {
    title: "Workshops",
    body:
      "Hands-on sessions introducing robot design, wiring, and coding. " +
      "Suitable for Years 5–12. 60–90 minutes. We bring robots, sample game elements, and all materials.",
    icon: School,
  },
  {
    title: "Community Demos",
    body:
      "Live robot demonstrations at school fairs, STEM expos, and festivals — " +
      "field area with interactive Q&A and photo opportunities.",
    icon: Megaphone,
  },
  {
    title: "Mentoring",
    body:
      "Support for FLL and FTC teams in the region — strategy, CAD reviews, build advice, " +
      "control systems, and coding help. In-person or online, one-off or recurring.",
    icon: Wrench,
  },
  {
    title: "Team Partnerships",
    body:
      "Working directly with teams to find creative ways to score higher, win more matches, " +
      "and elevate documentation, scouting, and on-field consistency across the season.",
    icon: Handshake,
  },
  {
    title: "STEM Talks",
    body:
      "Engaging presentations on engineering, teamwork, project management, and " +
      "how competitions like FIRST® build real-world skills.",
    icon: Users,
  },
  {
    title: "Pop-Up Fields",
    body:
      "Portable mini-fields for taster sessions or lunch-time clubs. " +
      "Great way to spark interest before a full workshop or partnership.",
    icon: MapPin,
  },
];

const METRICS = [
  { label: "Students Reached (’24–’25)", value: "200+" },
  { label: "Community Demo Days", value: "5+" },
  { label: "Teams Mentored", value: "20+" },
];

export default function OutreachPage() {
  return (
    <>
      <Section kicker="Community" title="Outreach">
        {/* Programs */}
        <div className="grid gap-6 md:grid-cols-3">
          {PROGRAMS.map(({ title, body, icon: Icon }) => (
            <div key={title} className="card p-6 tilt">
              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl">{title}</h3>
              </div>
              <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Quick metrics */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <div className="font-display text-2xl">{m.value}</div>
              <div className="text-xs uppercase tracking-widest text-zinc-400">{m.label}</div>
            </div>
          ))}
        </div>

        {/* How to book */}
        <div className="card p-6 md:p-7 mt-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-2">
              <CalendarDays size={18} />
            </div>
            <h3 className="font-display text-xl">Host an Iron Lions session</h3>
          </div>
          <ol className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>1) Tell us about your audience (age group, size, venue) and preferred dates.</li>
            <li>2) We propose a format (workshop, demo, mentoring) and a simple run-sheet.</li>
            <li>3) We confirm logistics and bring everything needed on the day.</li>
          </ol>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-600/40 bg-blue-600/10 px-3 py-2 text-blue-300 hover:bg-blue-600/20"
            >
              Book a session
            </Link>
            <Link
              to="/sponsors"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5"
            >
              Sponsor a demo day
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
