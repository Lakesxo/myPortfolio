import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { ThemeContext } from "../../App";
import "./about.scss";

gsap.registerPlugin(ScrollTrigger);

const PORTRAIT_SRC =
  "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1711215109/about_wobdfz.png";

type Entry = {
  index: string;
  label: string;
  body: string;
};

const ENTRIES: Entry[] = [
  {
    index: "01",
    label: "Practice",
    body:
      "I'm a Frontend Engineer with five (5) years of professional experience, passionate about crafting pixel-perfect, high-performance web applications. I specialize in bringing interfaces to life through thoughtful UI effects, smooth animations, and dynamic user experiences, while making sure every element on the web remains accessible, including for users with disabilities.",
  },
  {
    index: "02",
    label: "Sectors",
    body:
      "Throughout my career, I've built solutions across diverse sectors including gaming, healthcare, and finance. These experiences have strengthened my ability to design inclusive, user-friendly interfaces tailored to different audiences and use cases. I work primarily with React, TypeScript, and Tailwind CSS, and have also shipped cross-platform desktop applications with Electron.",
  },
  {
    index: "03",
    label: "Off the clock",
    body:
      "When I'm not coding, you'll probably find me unwinding with a game of FIFA, watching movies, bowling, or spending time with friends and family. I value a balanced life, and those moments away from the screen often inspire the creative ideas I bring back into my work.",
  },
];

const AboutMe: React.FunctionComponent = () => {
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
            ".about__intro > *",
            ".about__portrait-frame",
            ".about__portrait-img",
            ".about__entry-head",
            ".about__entry-body",
          ],
          { clearProps: "all", autoAlpha: 1 }
        );
        return;
      }

      // Intro (eyebrow + title) — fade up on entry.
      gsap.from(".about__intro > *", {
        y: 24,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".about__intro",
          start: "top 85%",
        },
      });

      // Portrait — clip-mask reveal + slow image zoom-out, matching Hero.
      gsap.from(".about__portrait-frame", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".about__body",
          start: "top 80%",
        },
      });
      gsap.from(".about__portrait-img", {
        scale: 1.15,
        duration: 1.3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".about__body",
          start: "top 80%",
        },
      });

      // Entries — each head + body fade up in sequence when scrolled into view.
      gsap.utils.toArray<HTMLElement>(".about__entry").forEach((entry) => {
        const head = entry.querySelector(".about__entry-head");
        const body = entry.querySelector(".about__entry-body");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: entry,
            start: "top 82%",
          },
        });

        if (head) {
          tl.from(head, {
            y: 18,
            autoAlpha: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        }

        if (body) {
          tl.from(
            body,
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          );
        }
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className={`about ${theme.isDarkmode ? "about--dark" : "about--light"}`}
      aria-label="About Ridwan Ajanaku"
    >
      <div className="about__inner">
        <header className="about__intro">
          <p className="about__eyebrow">
            <span className="about__eyebrow-mark" aria-hidden="true" />
            Bio
          </p>
          <h2 className="about__title">A bit more on the work.</h2>
        </header>

        <div className="about__body">
          <figure className="about__portrait">
            <div className="about__portrait-frame">
              <img
                className="about__portrait-img"
                src={PORTRAIT_SRC}
                alt="Portrait of Ridwan Ajanaku"
                draggable={false}
                loading="lazy"
              />
            </div>
          </figure>

          <div className="about__entries">
            {ENTRIES.map((entry) => (
              <article key={entry.index} className="about__entry">
                <header className="about__entry-head">
                  <span className="about__entry-index" aria-hidden="true">
                    {entry.index}
                  </span>
                  <span
                    className="about__entry-rule"
                    aria-hidden="true"
                  />
                  <h3 className="about__entry-label">{entry.label}</h3>
                </header>
                <p className="about__entry-body">{entry.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
