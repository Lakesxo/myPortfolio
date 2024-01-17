import { useContext } from "react";
import { WarningIcon } from "../../assets/icons/icons";
import "./projectCard.scss";
import { ThemeContext } from "../../App";
import { motion, Variants } from "framer-motion";
import AnimatedText from "../animatedText/AnimatedText";

interface ProjectCardProps {
  projectName: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: -4,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0,
      stiffness: 100,
    },
  },
};

const cardVariantsInvert: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 50,
    rotate: 4,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0,
      stiffness: 100,
    },
  },
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  projectName,
  description,
  image,
  link,
  index,
}) => {
  const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 500;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      exit="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={
        index % 2 === 0
          ? `projectCardwrapperInvert ${theme.isDarkmode && "cardDark"}`
          : `projectCardwrapper ${theme.isDarkmode && "cardDark"}`
      }
    >
      <motion.div
        variants={index % 2 === 0 ? cardVariants : cardVariantsInvert}
        className="leftPj"
      >
        <img src={image} alt="ridwan ajanaku project" />
      </motion.div>
      <div className={index % 2 === 0 ? "rightPjInvert" : "rightPj"}>
        <AnimatedText
          text={projectName}
          className={theme.isDarkmode ? "projectNameDark" : "projectName"}
          duration={isMobile ? 0 : 0.05}
        />
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
    </motion.div>
  );
};

export default ProjectCard;
