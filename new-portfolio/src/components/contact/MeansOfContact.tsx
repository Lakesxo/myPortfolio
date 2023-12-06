import { useContext } from "react";
import {
  GmailDarkIcon,
  GmailIcon,
  LinkedInContactIcon,
  TwitterContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface MeansOfContactProps {}

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  const theme = useContext(ThemeContext);

  const contacts = [
    {
      icon: theme.isDarkmode ? <GmailDarkIcon /> : <GmailIcon />,
      appText: "Send me an email",
      appDetails: (
        <a href="mailto:lakes.ajanaku@gmail.com">lakes.ajanaku@gmail.com</a>
      ),
    },
    {
      icon: <TwitterContactIcon />,
      appText: "Follow me on Twitter",
      appDetails: (
        <a
          href="https://twitter.com/lakes__xo_"
          target="_blank"
          rel="noreferrer"
        >
          @lakes__xo_
        </a>
      ),
    },
    {
      icon: <LinkedInContactIcon />,
      appText: "Connect with me on LinkedIn",
      appDetails: (
        <a
          href="https://linkedin.com/in/ridwan-ajanaku"
          target="_blank"
          rel="noreferrer"
        >
          Ridwan Ajanaku
        </a>
      ),
    },
  ];
  return (
    <div className={theme.isDarkmode ? "flexMeansDark" : "flexMeans"}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.appText}
          icon={contact.icon}
          appName={contact.appText}
          details={contact.appDetails}
        />
      ))}
    </div>
  );
};

export default MeansOfContact;
