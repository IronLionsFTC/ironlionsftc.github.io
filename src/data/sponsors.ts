import { publicAsset } from "@/lib/publicAsset";

export type Sponsor = {
  name: string;
  url: string;
  tier: "Partner";
  blurb: string;
  logo: string;
};

export const SPONSORS: Sponsor[] = [
  {
    name: "Performax International",
    url: "https://www.performaxint.com.au/",
    tier: "Partner",
    blurb: "Performance engineering and local community support.",
    logo: publicAsset("images/sponsors/performax.webp"),
  },
  {
    name: "CarbonParts",
    url: "https://carbonparts.com.au/",
    tier: "Partner",
    blurb: "Lightweight carbon components for performance builds.",
    logo: publicAsset("images/sponsors/carbonparts.webp"),
  },
  {
    name: "Bosch",
    url: "https://www.bosch.com.au/",
    tier: "Partner",
    blurb: "Tools and technology that power the world of making.",
    logo: publicAsset("images/sponsors/bosch.webp"),
  },
  {
    name: "Modern Teaching Aids",
    url: "https://www.teaching.com.au/",
    tier: "Partner",
    blurb: "STEM classroom resources and education materials.",
    logo: publicAsset("images/sponsors/mta.webp"),
  },
  {
    name: "ProtectorAL",
    url: "https://www.protectoraluminium.com.au/",
    tier: "Partner",
    blurb: "Australian-made aluminium products and materials.",
    logo: publicAsset("images/sponsors/pal.webp"),
  },
  {
    name: "MEF",
    url: "https://mefsc.org.au/",
    tier: "Partner",
    blurb: "Supporting Sunshine Coast youth in education and sport.",
    logo: publicAsset("images/sponsors/mef.webp"),
  },
  {
    name: "Bent Plastics",
    url: "https://www.bentplastics.com.au/",
    tier: "Partner",
    blurb: "Custom plastic fabrication and machining.",
    logo: publicAsset("images/sponsors/bentplastic.webp"),
  },
  {
    name: "Swyft Robotics",
    url: "https://swyftrobotics.com/",
    tier: "Partner",
    blurb: "FTC-focused hardware that helps teams build faster and smarter.",
    logo: publicAsset("images/sponsors/swift.webp"),
  },
];
