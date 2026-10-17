import { useContext } from "react";
import { motion, useIsPresent } from "framer-motion";
import { ThemeContext } from "../../App";

const DURATION = 0.5;

const getDuration = () => {
  if (typeof window === "undefined") return DURATION;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 0
    : DURATION;
};

const RouteTransition: React.FunctionComponent = () => {
  const isPresent = useIsPresent();
  const theme = useContext(ThemeContext);
  const duration = getDuration();

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: { duration, ease: "circOut" },
      }}
      exit={{
        scaleX: 1,
        transition: { duration, ease: "circIn" },
      }}
      style={{ originX: isPresent ? 0 : 1 }}
      className={
        theme.isDarkmode ? "route-switch-screen-dark" : "route-switch-screen"
      }
      aria-hidden="true"
    />
  );
};

export default RouteTransition;
