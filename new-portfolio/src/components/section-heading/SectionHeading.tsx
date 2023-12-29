import { useContext } from "react";
import "./sectionHeading.scss";
import { ThemeContext } from "../../App";

interface SectionHeadingProps {
  sectionName: string;
}

const SectionHeading: React.FunctionComponent<SectionHeadingProps> = ({
  sectionName,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "headingWrapperDark" : "headingWrapper"}>
      <p className="headName">{sectionName}</p>
      <div className="headLine"></div>
    </div>
  );
};

export default SectionHeading;
