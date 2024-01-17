import { useContext, useEffect } from "react";
import { FolderIcon } from "../assets/icons/icons";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../App";

interface WorksProps {}

const Works: React.FunctionComponent<WorksProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 820;
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<FolderIcon />}
        topText="PROJECTS"
        pageHeading="Selected Works"
        extraText="Not all my projects are included here; some are restricted by NDA"
      />
      <Projects />
      <Skills />
      <Contact />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={
          theme.isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
        }
      />
    </div>
  );
};

export default Works;
