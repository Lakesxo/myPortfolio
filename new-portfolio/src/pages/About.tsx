import { useContext, useEffect } from "react";
import { AboutIcon } from "../assets/icons/icons";
import AboutMe from "../components/about-me/AboutMe";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import Skills from "../components/skills/Skills";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../App";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
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
        topIcon={<AboutIcon />}
        topText="ABOUT RIDWAN AJANAKU"
        pageHeading="Frontend Engineer"
        extraText="I’m passionate about crafting intuitive and accessible web experiences."
      />
      <AboutMe />
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

export default About;
