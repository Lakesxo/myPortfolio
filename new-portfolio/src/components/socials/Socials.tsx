import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../../assets/icons/icons";
import "./socials.scss";

interface SocialsProps {}

const Socials: React.FunctionComponent<SocialsProps> = () => {
  return (
    <div className="socialswrapper">
      <a
        className="socialIcons"
        href="https://github.com/Lakesxo"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes github account"
      >
        <GithubIcon />
      </a>
      <a
        className="socialIcons"
        href="https://instagram.com/lakes_xo_"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes instagram account"
      >
        <InstagramIcon />
      </a>
      <a
        className="socialIcons"
        href="https://twitter.com/lakes__xo_"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes twitter account"
      >
        <TwitterIcon />
      </a>
      <a
        className="socialIcons"
        href="https://linkedin.com/in/ridwan-ajanaku"
        target="_blank"
        rel="noreferrer"
        aria-label="link to lakes linkedin account"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
};

export default Socials;
