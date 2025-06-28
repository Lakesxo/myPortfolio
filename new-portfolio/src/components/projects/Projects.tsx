import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Accelbyte",
    description:
      "AccelByte provides backend-as-a-service tools for game studios to build, scale, and manage live multiplayer games with features like matchmaking, user accounts, and storefronts.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/accelbyte_vxobha.png",
    url: "https://accelbyte.io/",
    techStack: ["React", "TypeScript", "Electron", "Go"],
  },
  {
    name: "Cuvris",
    description:
      "Cuvris is a health compliance platform that helps organizations stay aligned with regulatory standards by simplifying compliance workflows, risk tracking, and documentation.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/cuvris_koapmq.png",
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
  },
  {
    name: "SunFi",
    description:
      "SunFi is a fintech platform that helps users access and finance clean solar energy solutions through tailored plans and trusted energy provider matching.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/sunfi_oohibx.png",
    url: "https://www.sunfi.co/",
    techStack: ["React", "Sass", "Javascript", "Jenkins"],
  },
  {
    name: "Github Finds",
    description:
      "GitHub Finds is a personal project that allows users to discover GitHub users or organizations — with shareable filtered links.",
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
  },
];

const Projects: React.FunctionComponent<ProjectsProps> = () => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={theme.isDarkmode ? "projectContainerDark" : "projectContainer"}
    >
      <div
        className={theme.isDarkmode ? "projectWrapperDark" : "projectWrapper"}
      >
        {location.pathname === "/" && (
          <SectionHeading sectionName="Selected Projects" />
        )}
        <div className="projects">
          {projects.map((project, index) => (
            <ProjectCard
              projectName={project.name}
              image={project.image}
              description={project.description}
              key={project.name}
              link={project.url}
              index={index + 1}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
