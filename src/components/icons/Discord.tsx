// src/components/icons/Discord.tsx
import * as React from "react";

export function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* outer body (outline style to match Lucide) */}
      <path d="M7.5 7.8c1.7-.5 3.3-.5 5 0 .2-.5.5-1 .8-1.4 1.6.3 3 .8 4.2 1.5 1.2 3.2 1.1 6.4.7 8.1-1.6 1.1-3.2 1.8-4.9 2.3-.4-.6-.7-1.2-1-1.8-1.3.2-2.6.2-3.9 0-.3.6-.7 1.2-1 1.8-1.7-.5-3.3-1.2-4.9-2.3-.4-1.7-.6-4.9.7-8.1 1.2-.7 2.6-1.2 4.2-1.5.3.5.6.9.8 1.4z" />
      {/* eyes (small filled dots for legibility at 20px) */}
      <circle cx="9.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
