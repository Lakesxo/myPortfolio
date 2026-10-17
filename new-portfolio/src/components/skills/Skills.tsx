import { useContext, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  AntDesignIcon,
  AwsIcon,
  BootstrapIcon,
  ElectronIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JqueryIcon,
  MaterialUiIcon,
  NetlifyIcon,
  NextIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  ShadcnIcon,
  SupabaseIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  WebpackIcon,
} from "../../assets/icons/icons";
import "./skills.scss";
import { ThemeContext } from "../../App";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface Category {
  label: string;
  items: Skill[];
}

const categories: Category[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", icon: <TypescriptIcon /> },
      { name: "JavaScript", icon: <JavascriptIcon /> },
      { name: "HTML", icon: <HtmlIcon /> },
      { name: "Sass", icon: <SassIcon /> },
    ],
  },
  {
    label: "Frameworks & libraries",
    items: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
      { name: "Redux", icon: <ReduxIcon /> },
      { name: "Material UI", icon: <MaterialUiIcon /> },
      { name: "Tailwind", icon: <TailwindIcon /> },
      { name: "shadcn/ui", icon: <ShadcnIcon /> },
      { name: "Bootstrap", icon: <BootstrapIcon /> },
      { name: "Electron", icon: <ElectronIcon /> },
      { name: "jQuery", icon: <JqueryIcon /> },
      { name: "Ant Design", icon: <AntDesignIcon /> },
    ],
  },
  {
    label: "Tooling & platforms",
    items: [
      { name: "Git", icon: <GitIcon /> },
      { name: "Webpack", icon: <WebpackIcon /> },
      { name: "Postgres", icon: <PostgresIcon /> },
      { name: "Prisma", icon: <PrismaIcon /> },
      { name: "Firebase", icon: <FirebaseIcon /> },
      { name: "Supabase", icon: <SupabaseIcon /> },
      { name: "AWS", icon: <AwsIcon /> },
      { name: "Vercel", icon: <VercelIcon /> },
      { name: "Netlify", icon: <NetlifyIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
    ],
  },
];

const Skills: React.FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      gsap.from(".skills__intro > *", {
        y: 28,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills__intro",
          start: "top 88%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".skills__category").forEach((cat) => {
        const head = cat.querySelector(".skills__cat-head");
        const items = cat.querySelectorAll(".skills__item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cat,
            start: "top 84%",
          },
        });

        if (head) {
          tl.from(head, {
            y: 20,
            autoAlpha: 0,
            duration: 0.65,
            ease: "power3.out",
          });
        }

        tl.from(
          items,
          {
            y: 14,
            autoAlpha: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.035,
          },
          "-=0.3"
        );
      });
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className={`skills ${theme.isDarkmode ? "skills--dark" : "skills--light"}`}
      aria-labelledby="skills-title"
    >
      <div className="skills__atmosphere" aria-hidden="true" />

      <div className="skills__inner">
        <header className="skills__intro">
          <p className="skills__eyebrow">
            <span className="skills__eyebrow-mark" aria-hidden="true" />
            Toolkit
          </p>
          <h2 className="skills__title" id="skills-title">
            Languages, libraries, and tools I work with daily.
          </h2>
          <p className="skills__lede">
            A working set shaped by shipping products, not a checklist of
            everything I've tried once.
          </p>
        </header>

        <div className="skills__list">
          {categories.map((cat, i) => (
            <article
              className={`skills__category skills__category--${i + 1}`}
              key={cat.label}
            >
              <header className="skills__cat-head">
                <span className="skills__cat-index" aria-hidden="true">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <div className="skills__cat-meta">
                  <h3 className="skills__cat-label">{cat.label}</h3>
                </div>
              </header>

              <ul className="skills__flow">
                {cat.items.map((item) => (
                  <li className="skills__item" key={item.name}>
                    <span className="skills__icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <span className="skills__name">{item.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
