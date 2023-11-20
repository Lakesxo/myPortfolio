import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
