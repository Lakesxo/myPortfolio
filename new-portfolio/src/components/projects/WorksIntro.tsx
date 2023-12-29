import { useContext } from "react";
import { ThemeContext } from "../../App";

interface WorksIntroProps {}

const WorksIntro: React.FunctionComponent<WorksIntroProps> = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className={theme.isDarkmode ? "introWrapperDark" : "introWrapper"}>
      <div className="flexWks">
        <div className="textsintro">
          <p className={theme.isDarkmode ? "intTrextDark" : "intTrext"}>
            Currently leading design efforts at (www.yourcomapny), focusing on
            end-to-end Product Design, including product strategy, visual
            design, interaction design and prototyping. Experience working in
            consumer tech, finance, enterprise, blockchain, non-profits and
            healthcare industries.
          </p>
          <p className={theme.isDarkmode ? "belDark" : "bel"}>
            View selected projects below
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700586403/image_31_rdbdw5.png"
          alt="ridwan ajanaku"
        />
      </div>
    </div>
  );
};

export default WorksIntro;
