import {
  GoldRects,
  GreenRects,
  PinkRects,
  PurpleRects,
} from "../../assets/icons/icons";
import Socials from "../socials/Socials";
import "./contact.scss";
import { useNavigate } from "react-router-dom";

interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="contactwrapper">
      <p>
        Want us to work <br /> together ?
      </p>
      <button onClick={() => navigate("/contact")} className="contact">
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
