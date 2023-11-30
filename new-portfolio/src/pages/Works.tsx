import { useEffect } from "react";
import { FolderIcon } from "../assets/icons/icons";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import Projects from "../components/projects/Projects";
import WorksIntro from "../components/projects/WorksIntro";
import Skills from "../components/skills/Skills";

interface WorksProps {}

const Works: React.FunctionComponent<WorksProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<FolderIcon />}
        topText="PROJECTS"
        pageHeading="Selected Works"
        extraText="Not all my projects are included here; some are restricted by NDA"
      />
      <WorksIntro />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Works;
