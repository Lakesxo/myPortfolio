import { useContext } from "react";
import "./about.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface AboutMeProps {}

const AboutMe: React.FunctionComponent<AboutMeProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "abtMewrapperDark" : "abtMewrapper"}>
      <div className="abtCont">
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1711215109/about_wobdfz.png"
          alt="ridwan ajanaku"
        />
        <div className="details">
          <AnimatedText
            text="Meet Ridwan Ajanaku."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            I'm a Frontend Engineer with five (5) years of professional
            experience, passionate about crafting pixel-perfect,
            high-performance web applications. I specialize in bringing
            interfaces to life through thoughtful UI effects, smooth animations,
            and dynamic user experiences, all while ensuring that every element
            on the web remains accessible, including for users with
            disabilities.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Throughout my career, I’ve built solutions across diverse sectors
            including gaming, healthcare, and finance. These experiences have
            strengthened my ability to design inclusive, user-friendly
            interfaces tailored to different audiences and use cases. I work
            primarily with tools like React, TypeScript, and Tailwind CSS, and
            have also developed cross-platform desktop applications using
            Electron.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            When I’m not coding, you’ll probably find me unwinding with a game
            of FIFA, watching movies, bowling, or spending time with friends and
            family. I value a balanced life, and those moments away from the
            screen often inspire creative ideas I bring back into my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
