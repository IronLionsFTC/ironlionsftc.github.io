import type { ReactNode } from "react";

export default function FeaturePill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
      {children}
    </span>
  );
}
