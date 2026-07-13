import RobotHero from "@/components/content/RobotHero";
import Callout from "@/components/ui/Callout";
import Section from "@/components/ui/Section";
import { publicAsset } from "@/lib/publicAsset";
import { Link } from "react-router-dom";

export default function SurgePage() {
  return (
    <>
      <RobotHero
        title="Surge"
        description={
          <p>
            Our latest high-performance FTC robot built for{" "}
            <span className="text-blue-400">speed</span>,{" "}
            <span className="text-blue-400">precision</span>, and{" "}
            <span className="text-blue-400">advanced autonomy</span>.
          </p>
        }
        stats={[
          { label: "Drivetrain", value: "Swerve" },
          { label: "Robot Type", value: "Worlds" },
        ]}
        statsClassName="sm:grid-cols-2"
        features={[
          "Shooter",
          "Turret",
          "Transfer",
          "Intake",
          "Fast Cycle Times",
          "Precision Shooting",
          "Advanced Autonomy",
        ]}
        image={{
          src: publicAsset("images/robots/surge-hero.webp"),
          alt: "Surge robot",
          width: 2411,
          height: 996,
          className:
            "aspect-square h-full w-full rounded-2xl border border-white/10 bg-white/5 object-cover shadow-2xl",
        }}
      />

      {/* OVERVIEW */}
      <Section kicker="Overview" title={<span>High Performance Design</span>}>
        <div className="max-w-3xl">
          <p className="text-zinc-300 text-lg leading-relaxed">
            Surge is our advanced FTC robot built around a swerve drivetrain, turreted shooter, and
            high-performance autonomous systems. It is designed for fast cycle times, accurate
            shooting, smooth path following, and reliable on-field performance. Communicating strong
            mechanical design, control precision, and software sophistication.
          </p>
        </div>
      </Section>

      {/* SYSTEMS GRID */}
      <Section kicker="Systems" title={<span>Engineering Breakdown</span>}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              label: "Drivetrain",
              src: publicAsset("images/robots/surge-drive-base.webp"),
              width: 3840,
              height: 1586,
              desc: "Swerve drive implementation for unmatched omnidirectional movement and agility on the field.",
            },
            {
              label: "Shooter / Turret",
              src: publicAsset("images/robots/surge-turret.webp"),
              width: 3840,
              height: 1586,
              desc: "Precision turreted aiming system paired with a high-velocity shooter for accurate scoring from any angle.",
            },
            {
              label: "Transfer + Intake",
              src: publicAsset("images/robots/surge-transfer.webp"),
              width: 3840,
              height: 1586,
              desc: "Seamless handoff between intake and shooter mechanisms ensuring minimum downtime and maximum reliability.",
            },
            {
              label: "Chassis / Underside",
              src: publicAsset("images/robots/surge-underside.webp"),
              width: 2411,
              height: 996,
              desc: "Robust chassis design with low centre of gravity and protected electronics for peak durability.",
            },
          ].map((sys) => (
            <div
              key={sys.label}
              className="card p-4 flex flex-col group hover:ring-2 hover:ring-blue-400/20 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-white/5 mb-4">
                <img
                  src={sys.src}
                  alt={sys.label}
                  width={sys.width}
                  height={sys.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-display text-xl text-white">{sys.label}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{sys.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section kicker="Performance" title={<span>Engineering Highlights</span>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Callout title="Omnidirectional Movement">
            Custom swerve drive modules allow for fluid, multi-directional motion, enabling Surge to
            outmaneuver opponents and line up shots faster than ever.
          </Callout>
          <Callout title="Turreted Precision">
            A full 360-degree turret system allows the robot to track the goal regardless of chassis
            orientation, maintaining a constant scoring threat.
          </Callout>
          <Callout title="Advanced Localization">
            Utilizing AprilTag vision and advanced sensor fusion for millimetre-perfect positioning
            and autonomous reliability.
          </Callout>
          <Callout title="Autonomous Intelligence">
            Sophisticated pathing algorithms and custom-built autonomous routines designed to
            maximize scoring during the first 30 seconds of the match.
          </Callout>
          <Callout title="Rapid Cycle Times">
            Optimized transfer pathways and high-speed intake ensure that every second on the field
            is spent either scoring or moving to score.
          </Callout>
          <Callout title="Robust Control">
            Precision PID loops and feedforward control ensure that every mechanism moves with
            intentional speed and accuracy.
          </Callout>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section kicker="Next Steps" title={<span>Explore More</span>}>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link
            to="/robots/mufasa"
            className="card p-6 text-center hover:bg-white/5 transition-colors"
          >
            <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
              Previous Robot
            </div>
            <div className="font-display text-xl text-white">View Mufasa</div>
          </Link>
          <Link
            to="/achievements"
            className="card p-6 text-center hover:bg-white/5 transition-colors"
          >
            <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Our Record</div>
            <div className="font-display text-xl text-white">View Achievements</div>
          </Link>
          <Link to="/contact" className="card p-6 text-center hover:bg-white/5 transition-colors">
            <div className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Get in Touch</div>
            <div className="font-display text-xl text-white">Contact Us</div>
          </Link>
        </div>
      </Section>
    </>
  );
}
