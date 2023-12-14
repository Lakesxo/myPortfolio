import { useContext } from "react";
import ProjectCard from "../project-card/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";
import "./projects.scss";
import { ThemeContext } from "../../App";
import { useLocation } from "react-router-dom";

interface ProjectsProps {}

export const projects = [
  {
    name: "Rankaque",
    description:
      "I'm a self-taught Front-End Developer from Nigeria. I have a serious passion for UI effects and animations, building amazing web applications, creating dynamic user experiences and making every element on the web accessible to everyone including those with disabilities.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700239704/mypally_owlejk.png",
    url: "https://rankaque.com",
  },
  {
    name: "Memezbank",
    description:
      "I'm a self-taught Front-End Developer from Nigeria. I have a serious passion for UI effects and animations, building amazing web applications, creating dynamic user experiences and making every element on the web accessible to everyone including those with disabilities.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700239704/ranksque_jlwdwe.png",
    url: "https://placeholder.com",
  },
  {
    name: "Carscanner",
    description:
      "I'm a self-taught Front-End Developer from Nigeria. I have a serious passion for UI effects and animations, building amazing web applications, creating dynamic user experiences and making every element on the web accessible to everyone including those with disabilities.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700239704/becca_aiwalg.png",
    url: "https://carscanner.netlify.app",
  },
  {
    name: "Food Recipe",
    description:
      "I'm a self-taught Front-End Developer from Nigeria. I have a serious passion for UI effects and animations, building amazing web applications, creating dynamic user experiences and making every element on the web accessible to everyone including those with disabilities.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700239706/becca-real_wh4f1h.png",
    url: "https://foood-recipe.netlify.app/",
  },
  {
    name: "Image Reviewer",
    description:
      "I'm a self-taught Front-End Developer from Nigeria. I have a serious passion for UI effects and animations, building amazing web applications, creating dynamic user experiences and making every element on the web accessible to everyone including those with disabilities.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700239704/mypally_owlejk.png",
    url: "https://image-reviewer-challenge.netlify.app/",
  },
  {
    name: "The Shoppies",
    description:
      "I'm a self-taught Front-End Developer from Nigeria. I have a serious passion for UI effects and animations, building amazing web applications, creating dynamic user experiences and making every element on the web accessible to everyone including those with disabilities.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700239704/ranksque_jlwdwe.png",
    url: "https://the-shopies.netlify.app/",
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
