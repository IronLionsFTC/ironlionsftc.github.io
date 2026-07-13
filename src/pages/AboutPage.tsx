import SeasonTimeline from "@/components/content/SeasonTimeline";
import Section from "@/components/ui/Section";
import { SEASON_TIMELINE } from "@/data/seasonTimeline";
import { TEAM } from "@/data/site";
import { publicAsset } from "@/lib/publicAsset";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FTC_HIGHLIGHTS = [
  {
    title: "Design & Build",
    description: "Teams design, build, test, and program robots to perform alliance-based tasks.",
  },
  {
    title: "Autonomous + TeleOp",
    description:
      "Matches include an autonomous period and driver-controlled gameplay with endgame challenges.",
  },
  {
    title: "More than Robots",
    description:
      "Beyond the field: outreach, documentation, gracious professionalism, and real-world skills.",
  },
];

export default function AboutPage() {
  const hero640 = publicAsset("images/robots/apocrobot-640.webp");
  const hero960 = publicAsset("images/robots/apocrobot-960.webp");
  const heroFull = publicAsset("images/robots/apocrobot.webp");

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl">
                {TEAM.name} <span className="text-blue-400">FTC {TEAM.number}</span>
              </h1>
              <p className="mt-4 leading-relaxed text-zinc-300">
                We’re a student-led robotics team competing in the{" "}
                <span className="text-blue-300">FIRST® Tech Challenge</span>. Our mission is to
                engineer competitive robots, grow STEM skills, and support our community through
                outreach and mentoring.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/robots/surge"
                  className="rounded-xl border border-blue-600/40 bg-blue-600/10 px-4 py-2 text-blue-300 hover:bg-blue-600/20"
                >
                  Meet Surge
                </Link>
                <Link
                  to="/sponsors"
                  className="rounded-xl border border-blue-600/40 bg-blue-600/10 px-4 py-2 text-blue-300 hover:bg-blue-600/20"
                >
                  Sponsor the team
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={hero960}
                srcSet={`${hero640} 640w, ${hero960} 960w, ${heroFull} 2242w`}
                sizes="(min-width: 1280px) 568px, (min-width: 768px) 45vw, calc(100vw - 64px)"
                alt="Iron Lions robot APOC"
                width={960}
                height={596}
                fetchPriority="high"
                decoding="async"
                className="h-auto w-full rounded-2xl border border-white/10 object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section kicker="What is FTC?" title="FIRST Tech Challenge">
        <div className="grid gap-6 md:grid-cols-3">
          {FTC_HIGHLIGHTS.map((highlight) => (
            <div key={highlight.title} className="card tilt p-6">
              <div className="font-semibold">{highlight.title}</div>
              <p className="mt-2 text-sm text-zinc-400">{highlight.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          FTC seasons include 2025–26 <em>DECODE™</em>, 2024–25 <em>INTO THE DEEP℠</em>, and
          2023–24 <em>CENTERSTAGE℠</em>.
        </p>

        <SeasonTimeline events={SEASON_TIMELINE} className="mt-8" />
      </Section>
    </>
  );
}
