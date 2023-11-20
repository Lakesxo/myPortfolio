import { WarningIcon } from "../../assets/icons/icons";
import "./projectCard.scss";

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
  return (
    <div
      className={
        index % 2 === 0 ? "projectCardwrapperInvert" : "projectCardwrapper"
      }
    >
      <div className="leftPj">
        <img src={image} alt="ridwan ajanaku project" />
      </div>
      <div className={index % 2 === 0 ? "rightPjInvert" : "rightPj"}>
        <p className="projectName">{projectName}</p>
        <p className="projectDesc">{description}</p>
        <a className="moreDetails" href={link} target="_blank">
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
