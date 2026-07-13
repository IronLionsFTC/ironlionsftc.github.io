import type { SeasonEvent } from "@/data/seasonTimeline";
import { useCallback, useEffect, useMemo, useState } from "react";

function useCountdown(isoStart: string) {
  const calculate = useCallback(() => {
    const start = new Date(`${isoStart}T00:00:00`);
    let remaining = start.getTime() - Date.now();

    if (remaining <= 0) return { days: 0, hours: 0, done: true };

    const dayMs = 24 * 60 * 60 * 1000;
    const hourMs = 60 * 60 * 1000;
    const days = Math.floor(remaining / dayMs);
    remaining -= days * dayMs;

    return {
      days,
      hours: Math.floor(remaining / hourMs),
      done: false,
    };
  }, [isoStart]);

  const [countdown, setCountdown] = useState(calculate);

  useEffect(() => {
    setCountdown(calculate());
    const id = window.setInterval(() => setCountdown(calculate()), 60_000);
    return () => window.clearInterval(id);
  }, [calculate]);

  return countdown;
}

function CountdownBadge({ isoStart }: { isoStart: string }) {
  const { days, hours, done } = useCountdown(isoStart);

  if (done) {
    return (
      <div className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1">
        <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">
          Completed
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-col items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-center backdrop-blur-sm">
      <div className="font-display text-lg leading-none text-blue-200" suppressHydrationWarning>
        {days}d&nbsp;{hours}h
      </div>
      <div className="mt-0.5 text-[9px] font-medium uppercase tracking-widest text-blue-400/80">
        Until Start
      </div>
    </div>
  );
}

type SeasonTimelineProps = {
  events: SeasonEvent[];
  className?: string;
};

export default function SeasonTimeline({ events, className = "" }: SeasonTimelineProps) {
  const items = useMemo(
    () =>
      [...events].sort((a, b) => new Date(a.isoStart).getTime() - new Date(b.isoStart).getTime()),
    [events],
  );

  return (
    <section aria-label="Season timeline" className={`mt-12 ${className}`}>
      <h3 className="mb-8 text-center font-display text-3xl leading-tight tracking-tight text-white">
        Season Timeline
      </h3>

      <div className="relative mx-auto max-w-3xl px-4">
        <div className="absolute bottom-0 left-8 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-0">
          {items.map((event, index) => {
            const isPast = new Date(event.isoStart).getTime() < Date.now();
            const isEven = index % 2 === 0;

            return (
              <div
                key={event.isoStart}
                className={`relative flex flex-col items-center md:flex-row md:justify-between ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block md:w-5/12" />
                <div className="absolute left-8 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border border-blue-500 bg-zinc-900 shadow-[0_0_10px_rgba(59,130,246,0.4)] md:left-1/2">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      isPast ? "bg-zinc-500" : "animate-pulse bg-blue-400"
                    }`}
                  />
                </div>

                <div className="w-full pl-16 md:w-5/12 md:pl-0">
                  <div className={`group relative ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="absolute -left-8 top-2 h-px w-8 bg-white/10 md:hidden" />
                    <div className="py-2">
                      <time className="mb-1 block font-display text-xs font-bold uppercase tracking-wider text-blue-400">
                        {event.displayDate}
                      </time>
                      <h4 className="font-display text-lg leading-tight text-white transition-colors group-hover:text-blue-200 md:text-xl">
                        {event.title}
                      </h4>
                      {event.description && (
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500 md:text-sm">
                          {event.description}
                        </p>
                      )}
                      {!isPast && (
                        <div className={`mt-3 w-fit ${isEven ? "md:ml-auto" : "md:mr-auto"}`}>
                          <CountdownBadge isoStart={event.isoStart} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
