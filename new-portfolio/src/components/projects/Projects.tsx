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
      "Rankaque is an e-learning fullstack application built with React, Typescript and Python where attendees (students) can ask questions directly to the Facilitators (Lecturers) anonymously. This also helps Facilitators answer questions according to their importance as all questions and ranked.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1702639129/ranks_wd3iac.png",
    url: "https://rankaque.com",
  },
  {
    name: "Carscanner",
    description:
      "Carscanner is a web application that allows you to scan cars with your mobile phone camera and get details about them instantly. You can get details like the name, model and year of production of the scanned car.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1702639129/cscanner_zkoz2k.png",
    url: "https://carscanner.netlify.app",
  },
  {
    name: "Food Recipe",
    description:
      "Food recipe is a web application built with React, Typescript and Sass. It allows you view different varieties of recipes across the world, their respective ingredients and a step by step procedure to prepare each recipe.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1702639129/frecipe_hk4dcv.png",
    url: "https://foood-recipe.netlify.app/",
  },
  {
    name: "The Shoppies",
    description:
      "This is a movie listing web application built with React. You can search for any movie and nominate them",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1702639129/shopies_nbiyxt.png",
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
