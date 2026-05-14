import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Socials from "../socials/Socials";
import { ThemeContext } from "../../App";
import "./hero.scss";

gsap.registerPlugin(ScrollTrigger);

const ArrowOut = ({ size = 14 }: { size?: number }) => (
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

const PORTRAIT_SRC =
  "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1711227030/heron_qdeyx8.png";

const Hero: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(
          [
            ".hero__top > *",
            ".hero__title-line",
            ".hero__bio",
            ".hero__actions > *",
            ".hero__portrait-frame",
            ".hero__portrait-img",
            ".hero__portrait-meta",
          ],
          { clearProps: "all", autoAlpha: 1 }
        );
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.from(".hero__top > *", {
        y: 16,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 0.7,
      })
        // Portrait reveals first so it claims its dominant role on screen.
        .from(
          ".hero__portrait-frame",
          {
            clipPath: "inset(100% 0 0 0)",
            duration: 1.25,
            ease: "expo.out",
          },
          0.05
        )
        .from(
          ".hero__portrait-img",
          { scale: 1.2, duration: 1.6, ease: "expo.out" },
          "<"
        )
        // Typography enters alongside the tail of the portrait reveal.
        .from(
          ".hero__title-line",
          {
            yPercent: 110,
            duration: 1.1,
            stagger: 0.08,
            ease: "expo.out",
          },
          0.45
        )
        .from(
          ".hero__bio",
          { y: 20, autoAlpha: 0, duration: 0.8 },
          "-=0.55"
        )
        .from(
          ".hero__actions > *",
          { y: 16, autoAlpha: 0, stagger: 0.1, duration: 0.65 },
          "-=0.55"
        )
        .from(
          ".hero__portrait-meta",
          { y: 14, autoAlpha: 0, duration: 0.7 },
          "-=0.4"
        );

      // Slow scroll-linked drift inside the portrait frame.
      gsap.to(".hero__portrait-img", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className={`hero ${theme.isDarkmode ? "hero--dark" : "hero--light"}`}
      aria-label="Introduction"
    >
      <div className="hero__inner">

        <div className="hero__main">
          <div className="hero__text">
            <h1 className="hero__title">
              <span className="hero__title-mask">
                <span className="hero__title-line">Ridwan</span>
              </span>
              <span className="hero__title-mask">
                <span className="hero__title-line">Ajanaku.</span>
              </span>
            </h1>

            <p className="hero__bio">
              Frontend Engineer focused on building exceptional, performant
              web applications that scale. I turn complex problems
              into clean, accessible, and user-friendly experiences.
            </p>

            <div className="hero__actions">
              <a
                className="hero__cta"
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="View my resume (opens in a new tab)"
              >
                <span className="hero__cta-label" aria-hidden="true">
                  <span className="hero__cta-text">View resume</span>
                  <span className="hero__cta-text hero__cta-text--clone">
                    View resume
                  </span>
                </span>
                <span className="hero__cta-arrow" aria-hidden="true">
                  <span className="hero__cta-arrow-icon">
                    <ArrowOut size={14} />
                  </span>
                </span>
              </a>

              <div className="hero__socials" aria-label="Social links">
                <Socials />
              </div>
            </div>
          </div>

          <figure className="hero__portrait">
            <div className="hero__portrait-frame">
              <img
                className="hero__portrait-img"
                src={PORTRAIT_SRC}
                alt="Portrait of Ridwan Ajanaku"
                draggable={false}
                loading="eager"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
