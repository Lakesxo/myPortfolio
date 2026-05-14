import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../../App";
import "./projectCard.scss";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ProjectCardProps {
  projectName: string;
  description: string;
  image: string;
  link: string;
  index: number;
  techStack: string[];
  projectRole: string;
}

const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
};

const ArrowOut = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M7 17L17 7M9 7h8v8"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  projectName,
  description,
  image,
  link,
  index,
  techStack,
  projectRole,
}) => {
  const theme = useContext(ThemeContext);
  const root = useRef<HTMLElement>(null);

  const reduced = useMatchMedia("(prefers-reduced-motion: reduce)");
  const isCoarse = useMatchMedia("(pointer: coarse)");

  const isReverse = index % 2 === 0;
  const indexLabel = String(index).padStart(2, "0");

  // Pretty hostname for the live-link pill
  let hostname = link;
  try {
    hostname = new URL(link).hostname.replace(/^www\./, "");
  } catch {
    /* fall back to raw href */
  }

  useGSAP(
    () => {
      if (!root.current || reduced) return;
      const ctx = root.current;
      const media = ctx.querySelector(".pjc__media");
      const inner = ctx.querySelector(".pjc__image");
      const header = ctx.querySelector(".pjc__header");
      const titleChars = ctx.querySelectorAll(".pjc__title-char");
      const desc = ctx.querySelector(".pjc__description");
      const tags = ctx.querySelectorAll(".pjc__tag");
      const cta = ctx.querySelector(".pjc__cta");

      // Header rule fades up
      gsap.from(header, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ctx, start: "top 82%", once: true },
      });

      // Clip-path reveal on the media
      if (media) {
        gsap.fromTo(
          media,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: ctx, start: "top 72%", once: true },
          },
        );
      }

      // Subtle parallax on the inner image while card is in view
      if (inner) {
        gsap.fromTo(
          inner,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: ctx,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      }

      // Title chars rise from their mask
      if (titleChars.length) {
        gsap.from(titleChars, {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.022,
          ease: "expo.out",
          scrollTrigger: { trigger: ctx, start: "top 78%", once: true },
        });
      }

      // Description + tags + CTA cascade
      gsap.from([desc, ...Array.from(tags), cta].filter(Boolean), {
        y: 26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: { trigger: ctx, start: "top 70%", once: true },
      });
    },
    { scope: root, dependencies: [reduced] },
  );

  useEffect(() => {
    if (reduced || isCoarse) return;
    const frame = root.current?.querySelector<HTMLElement>(".pjc__media");
    if (!frame) return;

    const rY = gsap.quickTo(frame, "rotationY", {
      duration: 0.6,
      ease: "power3",
    });
    const rX = gsap.quickTo(frame, "rotationX", {
      duration: 0.6,
      ease: "power3",
    });

    const onMove = (event: PointerEvent) => {
      const rect = frame.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 4.5;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -4.5;
      rY(x);
      rX(y);
    };
    const onLeave = () => {
      rY(0);
      rX(0);
    };

    frame.addEventListener("pointermove", onMove);
    frame.addEventListener("pointerleave", onLeave);
    return () => {
      frame.removeEventListener("pointermove", onMove);
      frame.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced, isCoarse]);

  const titleNodes = projectName.split("").map((ch, i) => (
    <span key={`${ch}-${i}`} className="pjc__title-mask">
      <span className="pjc__title-char">
        {ch === " " ? "\u00A0" : ch}
      </span>
    </span>
  ));

  const themeClass = theme.isDarkmode ? "pjc--dark" : "pjc--light";
  const orderClass = isReverse ? "pjc--reverse" : "pjc--normal";

  return (
    <article
      ref={root}
      className={`pjc ${themeClass} ${orderClass}`}
    >
      <header className="pjc__header">
        <span className="pjc__index">{indexLabel}</span>
        <span className="pjc__rule" aria-hidden="true" />
        <span className="pjc__role">{projectRole}</span>
      </header>

      <div className="pjc__main">
        <a
          href={link}
          className="pjc__media-wrap"
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${projectName} in a new tab`}
        >
          <span className="pjc__media">
            <img
              src={image}
              alt={`${projectName} preview`}
              className="pjc__image"
              loading="lazy"
              draggable={false}
            />
            <span className="pjc__live" aria-hidden="true">
              <span className="pjc__live-host">{hostname}</span>
              <ArrowOut size={12} />
            </span>
          </span>
        </a>

        <div className="pjc__body">
          <h3 className="pjc__title" aria-label={projectName}>
            {titleNodes}
          </h3>

          <p className="pjc__description">{description}</p>

          <ul className="pjc__stack" aria-label="Tech stack">
            {techStack.map((tech) => (
              <li key={tech} className="pjc__tag">
                {tech}
              </li>
            ))}
          </ul>

          <a
            className="pjc__cta"
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View details about ${projectName}`}
          >
            <span className="pjc__cta-label" aria-hidden="true">
              <span className="pjc__cta-text">View project</span>
              <span className="pjc__cta-text pjc__cta-text--clone">
                View project
              </span>
            </span>
            <span className="pjc__cta-arrow" aria-hidden="true">
              <span className="pjc__cta-arrow-icon">
                <ArrowOut size={14} />
              </span>
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
