import FeaturePill from "@/components/ui/FeaturePill";
import StatCard from "@/components/ui/StatCard";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RobotStat = {
  label: string;
  value: ReactNode;
};

type RobotHeroProps = {
  title: string;
  description: ReactNode;
  stats: RobotStat[];
  features: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  statsClassName?: string;
};

export default function RobotHero({
  title,
  description,
  stats,
  features,
  image,
  statsClassName = "sm:grid-cols-3",
}: RobotHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16">
      <div className="card p-8 md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-5">
          <div className="md:col-span-3">
            <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
            <div className="mt-4 leading-relaxed text-zinc-300">{description}</div>

            <div className={`mt-8 grid gap-3 ${statsClassName}`}>
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {features.map((feature) => (
                <FeaturePill key={feature}>{feature}</FeaturePill>
              ))}
            </div>
          </div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              fetchPriority="high"
              decoding="async"
              className={image.className ?? "rounded-2xl border border-white/10 shadow-xl"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
