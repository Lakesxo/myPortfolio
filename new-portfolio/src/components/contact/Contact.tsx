import { useContext } from "react";
import {
  GoldRects,
  GreenRects,
  PinkRects,
  PurpleRects,
} from "../../assets/icons/icons";
import Socials from "../socials/Socials";
import "./contact.scss";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "contactwrapperDark" : "contactwrapper"}>
      <AnimatedText text={`Want us to work`} className="mg-0" />
      <AnimatedText text={`together ?`} />
      <button
        onClick={() => {
          navigate("/contact");
          scrollTo(0, 0);
        }}
        className="contact"
        aria-label="contact me"
      >
        Contact Me
      </button>
      <Socials />
      <div className="purple">
        <PurpleRects />
      </div>
      <div className="green">
        <GreenRects />
      </div>
      <div className="gold">
        <GoldRects />
      </div>
      <div className="pink">
        <PinkRects />
      </div>
    </div>
  );
};

export default Contact;
