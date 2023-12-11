import { useContext } from "react";
import { WarningIcon } from "../../assets/icons/icons";
import "./projectCard.scss";
import { ThemeContext } from "../../App";

interface ProjectCardProps {
  projectName: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  projectName,
  description,
  image,
  link,
  index,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={
        index % 2 === 0
          ? `projectCardwrapperInvert ${theme.isDarkmode && "cardDark"}`
          : `projectCardwrapper ${theme.isDarkmode && "cardDark"}`
      }
    >
      <div className="leftPj">
        <img src={image} alt="ridwan ajanaku project" />
      </div>
      <div className={index % 2 === 0 ? "rightPjInvert" : "rightPj"}>
        <p className={theme.isDarkmode ? "projectNameDark" : "projectName"}>
          {projectName}
        </p>
        <p className={theme.isDarkmode ? "projectDescDark" : "projectDesc"}>
          {description}
        </p>
        <a
          className={theme.isDarkmode ? "moreDetailsDark" : "moreDetails"}
          href={link}
          target="_blank"
          aria-label="view more details about the project"
        >
          <span>View more details </span>
          <span className="warning">
            <WarningIcon />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
