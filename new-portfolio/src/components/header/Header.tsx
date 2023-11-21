import { MoonIcon } from "../../assets/icons/icons";
import "./header.scss";
import { useNavigate, useLocation } from "react-router";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="headerWrapper">
      <div className="header">
        <a onClick={() => navigate("/")}>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700482039/final_jwalyu.png"
              alt="ridwan ajanaku"
              draggable={false}
            />
          </div>
        </a>
        <div className="header-links">
          <a
            onClick={() => navigate("/")}
            className={location.pathname === "/" ? "activeLink" : "links"}
          >
            Home
          </a>
          <a
            onClick={() => navigate("/about")}
            className={location.pathname === "/about" ? "activeLink" : "links"}
          >
            About me
          </a>
          <a
            onClick={() => navigate("/works")}
            className={location.pathname === "/works" ? "activeLink" : "links"}
          >
            Works
          </a>
          <a
            onClick={() => navigate("/contact")}
            className={
              location.pathname === "/contact" ? "activeLink" : "links"
            }
          >
            Contact me
          </a>
          <button className="theme">
            <MoonIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
