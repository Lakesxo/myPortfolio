import Socials from "../socials/Socials";
import "./hero.scss";
import { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { ThemeContext } from "../../App";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  const isMobile = window.innerWidth <= 820;
  const theme = useContext(ThemeContext);
  return (
    <div className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: isMobile ? 60 : 120,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme.isDarkmode ? "#606874" : "#a6c0ea",
            },
            links: {
              color: theme.isDarkmode ? "#606874" : "#a6c0ea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 30,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className={theme.isDarkmode ? "heroContainerDark" : "heroContainer"}>
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>
            <h2 className="name">I'm Ridwan Ajanaku</h2>
            <p className="extraDetails">
              I'm a Frontend Engineer based in Nigeria, specializing in building
              exceptional websites, applications, and making the web accessible
              to everyone.
            </p>
            <div className="socials">
              <Socials />
            </div>
          </div>
          <div className="rightHero">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700206112/hero-ridwan_ikktxc.png"
              alt="Ridwan-ajanaku"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
