import "./contact.scss";

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
  return (
    <div className="cardCWrapper">
      <div className="icon">{icon}</div>
      <p className="appName">{appName}</p>
      <p className="details">{details}</p>
    </div>
  );
};

export default ContactCard;
