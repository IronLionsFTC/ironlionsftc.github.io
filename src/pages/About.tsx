import Section from "@/components/Section";
import { TEAM } from "@/data/site";
import { motion } from "framer-motion";
import Slideshow from "@/components/Slideshow";

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-16">
        <div className="card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="font-display text-4xl md:text-5xl">
                {TEAM.name} <span className="text-blue-400">FTC {TEAM.number}</span>
              </h1>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                We’re a student-led robotics team competing in the <span className="text-blue-300">FIRST® Tech Challenge</span>.
                Our mission is to engineer competitive robots, grow STEM skills, and support our community through outreach and mentoring.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="/sponsors" className="rounded-xl border border-blue-600/40 bg-blue-600/10 px-4 py-2 hover:bg-blue-600/20 text-blue-300">
                  Sponsor the team
                </a>
                <a href="/contact" className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
                  Contact us
                </a>
              </div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Slideshow
                images={[
                  "/images/robots/apocrobot.webp", // first
                  "/images/robots/apoc1.webp",
                  "/images/robots/apoc2.webp",
                  "/images/robots/apoc3.webp",
                  "/images/team/apoc4.webp",     // these two are in team/
                  "/images/team/apoc5.webp",
                ]}
                intervalMs={3000}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Section kicker="What is FTC?" title={<span>FIRST Tech Challenge</span>}>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { h: "Design & Build", p: "Teams design, build, test, and program robots to perform alliance-based tasks." },
            { h: "Autonomous + TeleOp", p: "Matches include an autonomous period and driver-controlled gameplay with endgame challenges." },
            { h: "More than Robots", p: "Beyond the field: outreach, documentation, gracious professionalism, and real-world skills." }
          ].map((c) => (
            <div key={c.h} className="card p-6 tilt">
              <div className="font-semibold">{c.h}</div>
              <p className="text-sm text-zinc-400 mt-2">{c.p}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-zinc-500 mt-4">
          FTC seasons include 2025–26 <em>DECODE™</em>, 2024–25 <em>INTO THE DEEP℠</em>, and 2023–24 <em>CENTERSTAGE℠</em>.
        </p>
      </Section>
    </>
  );
}
