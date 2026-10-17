import { useEffect } from "react";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import RouteTransition from "../components/route-transition/RouteTransition";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <RouteTransition />
    </div>
  );
};

export default Home;
