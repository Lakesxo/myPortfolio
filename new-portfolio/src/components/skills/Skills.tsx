import { useContext } from "react";
import {
  AntDesignIcon,
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
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  VercelIcon,
  WebpackIcon,
} from "../../assets/icons/icons";
import SectionHeading from "../section-heading/SectionHeading";
import SkillsCard from "./SkillsCard";
import "./skills.scss";
import { ThemeContext } from "../../App";

interface SkillsProps {}

const Skills: React.FunctionComponent<SkillsProps> = () => {
  const programmingSkills = [
    {
      name: "Typescript",
      icon: <TypescriptIcon />,
    },
    {
      name: "Javascript",
      icon: <JavascriptIcon />,
    },
    {
      name: "Html",
      icon: <HtmlIcon />,
    },
    {
      name: "Sass",
      icon: <SassIcon />,
    },
  ];

  const libraryFrameworks = [
    {
      name: "React",
      icon: <ReactIcon />,
    },
    {
      name: "Redux",
      icon: <ReduxIcon />,
    },
    {
      name: "MaterialUI",
      icon: <MaterialUiIcon />,
    },
    {
      name: "Tailwind",
      icon: <TailwindIcon />,
    },
    {
      name: "Bootstrap",
      icon: <BootstrapIcon />,
    },
    {
      name: "Electron",
      icon: <ElectronIcon />,
    },
    {
      name: "Jquery",
      icon: <JqueryIcon />,
    },
    {
      name: "Ant Design",
      icon: <AntDesignIcon />,
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: <GitIcon />,
    },
    {
      name: "Firebase",
      icon: <FirebaseIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
    {
      name: "Netlify",
      icon: <NetlifyIcon />,
    },
    {
      name: "Vercel",
      icon: <VercelIcon />,
    },
    {
      name: "Webpack",
      icon: <WebpackIcon />,
    },
  ];

  const theme = useContext(ThemeContext);

  return (
    <div
      className={theme.isDarkmode ? "skillscontainerDark" : "skillscontainer"}
    >
      <div className="skillsWrapper">
        <SectionHeading sectionName="Skills" />
        <div className="flexSkills">
          <div className="progLangs">
            <h3 className="skill-head">Programming Languages</h3>
            <div className="skillsWrap">
              {programmingSkills.map((skill) => (
                <SkillsCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                />
              ))}
            </div>
          </div>
          <div className="libraries">
            <h3 className="skill-head">Libraries & Frameworks</h3>
            <div className="skillsWrap">
              {libraryFrameworks.map((skill) => (
                <SkillsCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
          <div className="tools">
            <h3 className="skill-head">Tools & Platforms</h3>
            <div className="skillsWrap">
              {toolsSkills.map((skill) => (
                <SkillsCard
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
