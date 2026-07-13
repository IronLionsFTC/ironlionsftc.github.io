export type SeasonEvent = {
  title: string;
  displayDate: string;
  isoStart: string;
  isoEnd?: string;
  description?: string;
};

export const SEASON_TIMELINE: SeasonEvent[] = [
  {
    title: "DECODE Season Release",
    displayDate: "6 Sep 2025",
    isoStart: "2025-09-06",
    description: "Kickoff & Game Reveal",
  },
  {
    title: "Brisbane South Regionals",
    displayDate: "15–16 Nov 2025",
    isoStart: "2025-11-15",
    isoEnd: "2025-11-16",
    description: "Regional Qualifier",
  },
  {
    title: "Australian Nationals",
    displayDate: "6–7 Dec 2025",
    isoStart: "2025-12-06",
    isoEnd: "2025-12-07",
    description: "National Championship",
  },
  {
    title: "FIRST® Championship 2026",
    displayDate: "29 Apr 2026",
    isoStart: "2026-04-29",
    description: "World Championship in Houston, TX",
  },
];
