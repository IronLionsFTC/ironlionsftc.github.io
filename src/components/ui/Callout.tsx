import type { ReactNode } from "react";

type CalloutProps = {
  title: ReactNode;
  children: ReactNode;
};

export default function Callout({ title, children }: CalloutProps) {
  return (
    <div className="card p-5 ring-4 ring-blue-400/20 md:p-6">
      <div className="font-display text-xl text-white md:text-2xl">{title}</div>
      <div className="mt-2 text-[15px] leading-relaxed text-zinc-300">{children}</div>
    </div>
  );
}
