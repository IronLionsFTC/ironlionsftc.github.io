export type NavigationLink = {
  label: string;
  to: string;
};

export type NavigationItem =
  | NavigationLink
  | {
      label: string;
      children: NavigationLink[];
    };

export const PRIMARY_NAVIGATION: NavigationItem[] = [
  { to: "/about", label: "About" },
  {
    label: "Robots",
    children: [
      { to: "/robots/valor", label: "Valor" },
      { to: "/robots/mufasa", label: "Mufasa" },
      { to: "/robots/surge", label: "Surge" },
    ],
  },
  { to: "/achievements", label: "Achievements" },
  { to: "/outreach", label: "Outreach" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

export const FOOTER_NAVIGATION: NavigationLink[] = [
  { to: "/about", label: "About" },
  { to: "/robots", label: "Robots" },
  { to: "/achievements", label: "Achievements" },
  { to: "/outreach", label: "Outreach" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];
