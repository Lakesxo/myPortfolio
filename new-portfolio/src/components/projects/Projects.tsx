import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { Link, useLocation } from "react-router-dom";

interface ProjectsProps {}

// Number of projects to preview on the home page.
const HOME_PREVIEW_COUNT = 4;

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const projects = [
  {
    name: "Dynasty Africa",
    description:
      "Dynasty Africa is a full-service creative and marketing agency that helps brands grow through digital marketing, influencer campaigns, media production, branding, PR, and tech-driven creative solutions focused on culturally impactful storytelling.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1778664312/Frame_38155_j2fydt.png",
    url: "https://www.dynastyafrica.com/",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
    role: "Frontend Engineer",
  },
  {
    name: "Accelbyte",
    description:
      "AccelByte provides backend-as-a-service tools for game studios to build, scale, and manage live multiplayer games with features like matchmaking, user accounts, and storefronts.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1778664313/Frame_35393_u3rted.png",
    url: "https://accelbyte.io/",
    techStack: ["React", "TypeScript", "Electron", "Go"],
    role: "Software Engineer",
  },
  {
    name: "Cuvris",
    description:
      "Cuvris is a health compliance platform that helps organizations stay aligned with regulatory standards by simplifying compliance workflows, risk tracking, and documentation.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1778664313/Frame_38157_basqtj.png",
    url: "https://www.cuvris.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Azure",
    ],
    role: "Fullstack Engineer",
  },
  {
    name: "SunFi",
    description:
      "SunFi is a fintech platform that helps users access and finance clean solar energy solutions through tailored plans and trusted energy provider matching.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1778664313/Frame_38156_ed33gf.png",
    url: "https://www.sunfi.co/",
    techStack: ["React", "Sass", "Javascript", "Jenkins"],
    role: "Frontend Engineer",
  },
  {
    name: "Rankaque",
    description:
      "Rankaque is A platform that allows Attendees to express questions anonymously, while also helping the Facilitators get through the most relevant questions faster.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1778664312/Frame_38154_xjyxeq.png",
    url: "https://www.rankaque.com/",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    role: "Frontend Engineer",
  },
  {
    name: "Github Finds",
    description:
      "GitHub Finds is a personal project that allows users to discover GitHub users or organizations, with shareable filtered links.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/gtsearch_qgdiaq.png",
    url: "https://githubfinds.netlify.app/",
    techStack: [
      "React",
      "Typescript",
      "Tailwind CSSS",
      "GitHub API",
      "Netlify",
    ],
    role: "Frontend Engineer",
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const displayedProjects = isHome
    ? projects.slice(0, HOME_PREVIEW_COUNT)
    : projects;

  // Only show the "View all" CTA on home when there are more to reveal.
  const hasMore = isHome && projects.length > HOME_PREVIEW_COUNT;
  const totalLabel = projects.length.toString().padStart(2, "0");
  const shownLabel = HOME_PREVIEW_COUNT.toString().padStart(2, "0");

  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {isHome && <SectionHeading sectionName="Selected Projects" />}
        <div className="projects">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              projectRole={project.role}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
              techStack={project.techStack}
            />
          ))}
        </div>

        {hasMore && (
          <div className="projects-more">
            <p className="projects-more__count" aria-hidden="true">
              <span className="projects-more__count-num">{shownLabel}</span>
              <span className="projects-more__count-sep">/</span>
              <span className="projects-more__count-num">{totalLabel}</span>
              <span className="projects-more__count-label">Showcased</span>
            </p>

            <Link
              to="/works"
              className="projects-more__btn"
              aria-label={`View all ${projects.length} projects`}
            >
              <span className="projects-more__btn-label" aria-hidden="true">
                <span className="projects-more__btn-text">
                  View all projects
                </span>
                <span className="projects-more__btn-text projects-more__btn-text--clone">
                  View all projects
                </span>
              </span>
              <span className="projects-more__btn-arrow" aria-hidden="true">
                <span className="projects-more__btn-arrow-icon">
                  <ArrowRight size={14} />
                </span>
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
