import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_TITLE,
  getPageMeta,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "../seo/siteMeta";

const upsertMeta = (
  attr: "name" | "property",
  key: string,
  content: string
) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Keeps document title + social meta in sync with the active SPA route.
 * Crawlers that execute JS (Google) pick up per-route titles; static
 * defaults in index.html cover non-JS link previews for the homepage.
 */
const usePageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
    const title = meta.title || DEFAULT_TITLE;

    document.title = title;

    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertMeta("name", "twitter:url", url);
    upsertMeta("name", "twitter:site", TWITTER_HANDLE);
    upsertMeta("name", "twitter:creator", TWITTER_HANDLE);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", meta.type ?? "website");

    upsertLink("canonical", url);
  }, [pathname]);
};

export default usePageMeta;
