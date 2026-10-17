export const SITE_URL = "https://olakunle.dev";
export const SITE_NAME = "Ridwan Ajanaku";
export const DEFAULT_TITLE = "Ridwan Ajanaku | Frontend Software Engineer";
export const DEFAULT_DESCRIPTION =
  "Frontend Engineer focused on building performant, accessible web experiences that scale, turning complex problems into clean, usable interfaces.";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const TWITTER_HANDLE = "@lakes__xo_";

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "profile";
};

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    type: "profile",
  },
  "/about": {
    title: "About | Ridwan Ajanaku",
    description:
      "Learn about Ridwan Ajanaku, a Frontend Engineer with 5+ years of experience building accessible, high-performance interfaces across gaming, healthcare, and finance.",
    path: "/about",
  },
  "/works": {
    title: "Selected Works | Ridwan Ajanaku",
    description:
      "Selected frontend projects by Ridwan Ajanaku: product-focused web apps built with React, TypeScript, and thoughtful interaction design.",
    path: "/works",
  },
  "/contact": {
    title: "Contact | Ridwan Ajanaku",
    description:
      "Get in touch with Ridwan Ajanaku for frontend engineering collaborations, product work, or consulting.",
    path: "/contact",
  },
};

export const getPageMeta = (pathname: string): PageMeta =>
  PAGE_META[pathname] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: pathname,
  };
