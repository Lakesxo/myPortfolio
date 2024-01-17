import { useContext, useEffect } from "react";
import { PhoneIcon } from "../assets/icons/icons";
import Contact from "../components/contact/Contact";
import MeansOfContact from "../components/contact/MeansOfContact";
import Header from "../components/header/Header";
import PageHero from "../components/page-hero/PageHero";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../App";

interface ContactMeProps {}

const ContactMe: React.FunctionComponent<ContactMeProps> = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isPresent = useIsPresent();
  const theme = useContext(ThemeContext);
  const isMobile = window.innerWidth <= 820;
  return (
    <div>
      <Header />
      <PageHero
        topIcon={<PhoneIcon />}
        topText="CONTACT ME"
        pageHeading="Say hello to me"
        extraText="You have an idea. Let's talk!"
      />
      <MeansOfContact />
      <Contact />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circOut" },
        }}
        exit={{
          scaleX: 1,
          transition: { duration: isMobile ? 0 : 0.5, ease: "circIn" },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={
          theme.isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
        }
      />
    </div>
  );
};

export default ContactMe;
