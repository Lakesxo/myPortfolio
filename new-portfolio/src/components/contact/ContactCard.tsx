import { useContext } from "react";
import "./contact.scss";
import { ThemeContext } from "../../App";

interface ContactCardProps {
  icon: JSX.Element;
  appName: string;
  details: JSX.Element;
}

const ContactCard: React.FunctionComponent<ContactCardProps> = ({
  icon,
  appName,
  details,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "cardCWrapperDark" : "cardCWrapper"}>
      <div className="icon">{icon}</div>
      <p className="appName">{appName}</p>
      <p className="details">{details}</p>
    </div>
  );
};

export default ContactCard;
