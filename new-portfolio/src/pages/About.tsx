import { useEffect } from "react";
import { AboutIcon } from "../assets/icons/icons";
import AboutMe from "../components/about-me/AboutMe";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import Skills from "../components/skills/Skills";

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<AboutIcon />}
        topText="ABOUT RIDWAN AJANAKU"
        pageHeading="Frontend Engineer"
        extraText="I am a Frontend Engineer based in Lagos, Nigeria"
      />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
};

export default About;
