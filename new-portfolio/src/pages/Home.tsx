import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
