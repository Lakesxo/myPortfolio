import { PhoneIcon } from "../assets/icons/icons";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";

interface ContactMeProps {}

const ContactMe: React.FunctionComponent<ContactMeProps> = () => {
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<PhoneIcon />}
        topText="CONTACT ME"
        pageHeading="Say hello to me"
        extraText="You have an idea. Let's talk!"
      />
      <Contact />
    </div>
  );
};

export default ContactMe;
