import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
