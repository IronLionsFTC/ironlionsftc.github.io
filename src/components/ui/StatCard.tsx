import type { ReactNode } from "react";

type StatCardProps = {
  label: string;
  value: ReactNode;
};

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left md:p-5">
      <div className="text-[11px] font-medium uppercase tracking-widest text-zinc-400/90">
        {label}
      </div>
      <div className="mt-1 font-display text-2xl leading-none text-white md:text-3xl">{value}</div>
    </div>
  );
}
