export interface NavLink {
  label: string;
  href: string;
  badge?: string;
  children?: { label: string; href: string; description: string }[];
}

export const MAIN_NAV_LINKS: NavLink[] = [
  {
    label: "Work",
    href: "/work",
    children: [
      {
        label: "All Work",
        href: "/work",
        description: "Overview of all proprietary products and partner systems.",
      },
      {
        label: "RECKAI Originals",
        href: "/work/originals",
        description: "Products independently conceived and built by RECKAI.",
      },
      {
        label: "RECKAI Builds",
        href: "/work/builds",
        description: "Intelligent systems engineered for partners and founders.",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Process",
    href: "/process",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const PRIMARY_CTA = {
  label: "Start a Project",
  href: "/start-project",
};

export const SECONDARY_CTA = {
  label: "Explore Our Products",
  href: "/work/originals",
};
