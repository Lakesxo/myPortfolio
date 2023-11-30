import {
  GmailIcon,
  LinkedInContactIcon,
  TwitterContactIcon,
} from "../../assets/icons/icons";
import ContactCard from "./ContactCard";
import "./contact.scss";

interface MeansOfContactProps {}

const contacts = [
  {
    icon: <GmailIcon />,
    appText: "Send me an email",
    appDetails: (
      <a href="mailto:lakes.ajanaku@gmail.com">lakes.ajanaku@gmail.com</a>
    ),
  },
  {
    icon: <TwitterContactIcon />,
    appText: "Follow me on Twitter",
    appDetails: (
      <a href="https://twitter.com/lakes__xo_" target="_blank" rel="noreferrer">
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

const MeansOfContact: React.FunctionComponent<MeansOfContactProps> = () => {
  return (
    <div className="flexMeans">
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
