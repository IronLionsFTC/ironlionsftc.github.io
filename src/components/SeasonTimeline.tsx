import * as React from "react";

type SeasonEvent = {
  title: string;
  /** Human-readable date for display, e.g. "6 Sep 2025" or "15–16 Nov 2025" */
  displayDate: string;
  /** ISO date for sorting, e.g. "2025-09-06" */
  isoStart: string;
  isoEnd?: string;
  description?: string;
};

interface Props {
  events: SeasonEvent[];
  className?: string;
}

export default function SeasonTimeline({ events, className = "" }: Props) {
  // Sort by start date ascending (nearest first, latest last)
  const items = React.useMemo(
    () =>
      [...events].sort(
        (a, b) => new Date(a.isoStart).getTime() - new Date(b.isoStart).getTime()
      ),
    [events]
  );

  return (
    <section
      aria-label="Season timeline"
      className={`mt-14 md:mt-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
            2025–26 Season Timeline
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Most-recent event first; latest event last.
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/10" />

          <ol className="space-y-5">
            {items.map((ev, i) => (
              <li key={i} className="relative pl-10 sm:pl-12">
                {/* node */}
                <span className="absolute left-3.5 sm:left-4 top-4 inline-flex h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-indigo-400/20" />

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl">
                  <div className="p-4 md:p-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <time className="text-sm font-medium text-indigo-300">
                        {ev.displayDate}
                      </time>
                      <span className="text-sm text-zinc-400">•</span>
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {ev.title}
                      </h3>
                    </div>

                    {ev.description ? (
                      <p className="mt-2 text-sm text-zinc-400">{ev.description}</p>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
