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
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700581191/Frame_38118_hdhosn.png"
          alt="ridwan ajanaku"
        />
        <div className="details">
          <AnimatedText
            text="Meet Ridwan Ajanaku."
            className={theme.isDarkmode ? "meetDark" : "meet"}
            once
          />
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Currently leading design efforts at (www.yourcomapny), focusing on
            end-to-end Product Design, including product strategy, visual
            design, interaction design and prototyping. Experience working in
            consumer tech, finance, enterprise, blockchain, non-profits and
            healthcare industries.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Currently leading design efforts at (www.yourcomapny), focusing on
            end-to-end Product Design, including product strategy, visual
            design, interaction design and prototyping. Experience working in
            consumer tech, finance, enterprise, blockchain, non-profits and
            healthcare industries.
          </p>
          <p className={theme.isDarkmode ? "deetsTDark" : "deetsT"}>
            Currently leading design efforts at (www.yourcomapny), focusing on
            end-to-end Product Design, including product strategy, visual
            design, interaction design and prototyping. Experience working in
            consumer tech, finance, enterprise, blockchain, non-profits and
            healthcare industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
