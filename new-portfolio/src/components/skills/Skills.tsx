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
    label: "Frameworks & Libraries",
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
    label: "Tooling & Platforms",
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
        stagger: 0.08,
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
            start: "top 82%",
          },
        });

        if (head) {
          tl.from(head, {
            y: 22,
            autoAlpha: 0,
            duration: 0.7,
            ease: "power3.out",
          });
        }

        tl.from(
          items,
          {
            y: 18,
            autoAlpha: 0,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.045,
          },
          "-=0.35"
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
      <div className="skills__inner">
        <header className="skills__intro">
          <h2 className="skills__title" id="skills-title">
            Languages, libraries, and tools I work with daily.
          </h2>
        </header>

        <div className="skills__list">
          {categories.map((cat, i) => (
            <article className="skills__category" key={cat.label}>
              <header className="skills__cat-head">
                <span className="skills__cat-index" aria-hidden="true">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="skills__cat-rule" aria-hidden="true" />
                <h3 className="skills__cat-label">{cat.label}</h3>
              </header>

              <ul className="skills__grid">
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
