import { useLocation } from "react-router-dom";
import {
  GoldRects,
  GreenRects,
  NaijaIcon,
  PurpleRects,
} from "../../assets/icons/icons";
import "./pageHero.scss";

interface PageHeroProps {
  topIcon: JSX.Element;
  topText: string;
  pageHeading: string;
  extraText: string;
}

const PageHero: React.FunctionComponent<PageHeroProps> = ({
  topIcon,
  topText,
  pageHeading,
  extraText,
}) => {
  const location = useLocation();
  return (
    <div className="pageHeroWrapper">
      <img
        src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700577159/Vectorbg_q6nt9c.png"
        alt="vector"
      />
      <div className="pageHeroContainer">
        <div className="topText">
          <span>{topIcon}</span>
          <p>{topText}</p>
        </div>
        <p className="heading">{pageHeading}</p>
        <div className="extraTextCont">
          <p className="extraText">{extraText}</p>{" "}
          {location.pathname === "/about" && (
            <span>
              <NaijaIcon />
            </span>
          )}
        </div>
        <div className="purpleRects">
          <PurpleRects />
        </div>
        <div className="greenRects">
          <GreenRects />
        </div>
        <div className="goldRects">
          <GoldRects />
        </div>
      </div>
    </div>
  );
};

export default PageHero;
