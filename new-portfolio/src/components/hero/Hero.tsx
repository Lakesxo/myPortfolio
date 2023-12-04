import Socials from "../socials/Socials";
import "./hero.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

interface HeroProps {}

const Hero: React.FunctionComponent<HeroProps> = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);
  const isMobile = window.innerWidth <= 820;
  return (
    <div className="hero-container">
      {!isMobile && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 120,
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
                  quantity: 6,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#135FDC",
              },
              links: {
                color: "#135FDC",
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
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
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
      )}
      <div className="heroContainer">
        <div className="heroWrapper">
          <div className="leftHero">
            <p className="hello">
              Hello <span className="wave">👋</span>
            </p>
            <h2 className="name">I'm Ridwan Ajanaku</h2>
            <p className="extraDetails">
              I'm a Frontend developer based in Nigeria, specializing in
              building exceptional websites, applications, and making the web
              accessible to everyone
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
