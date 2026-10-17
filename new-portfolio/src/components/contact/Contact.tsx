import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  GoldRects,
  GreenRects,
  PinkRects,
  PurpleRects,
} from "../../assets/icons/icons";
import Socials from "../socials/Socials";
import "./contact.scss";
import { ThemeContext } from "../../App";
import AnimatedText from "../animatedText/AnimatedText";

interface ContactProps {}

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Contact: React.FunctionComponent<ContactProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "contactwrapperDark" : "contactwrapper"}>
      <AnimatedText text={`Want us to work`} className="mg-0" />
      <AnimatedText text={`together ?`} />
      <Link
        to="/contact"
        className="contact-cta"
        aria-label="Contact me"
        onClick={() => scrollTo(0, 0)}
      >
        <span className="contact-cta__label" aria-hidden="true">
          <span className="contact-cta__text">Contact me</span>
          <span className="contact-cta__text contact-cta__text--clone">
            Contact me
          </span>
        </span>
        <span className="contact-cta__arrow" aria-hidden="true">
          <span className="contact-cta__arrow-icon">
            <ArrowRight size={14} />
          </span>
        </span>
      </Link>
      <div className="contact-socials">
        <div className="gold" aria-hidden="true">
          <GoldRects />
        </div>
        <div className="pink" aria-hidden="true">
          <PinkRects />
        </div>
        <Socials />
      </div>
      <div className="purple" aria-hidden="true">
        <PurpleRects />
      </div>
      <div className="green" aria-hidden="true">
        <GreenRects />
      </div>
    </div>
  );
};

export default Contact;
