import { MoonIcon } from "../../assets/icons/icons";
import "./header.scss";
import { useNavigate } from "react-router";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <a onClick={() => navigate("/")}>
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1693737575/Ellipse_13_mregnx.png"
            alt="ridwan ajanaku"
            draggable={false}
          />
        </div>
      </a>
      <div className="header-links">
        <a onClick={() => navigate("/")} className="links">
          Home
        </a>
        <a onClick={() => navigate("/about")} className="links">
          About me
        </a>
        <a onClick={() => navigate("/works")} className="links">
          Works
        </a>
        <a onClick={() => navigate("/contact")} className="links">
          Contact me
        </a>
        <button className="theme">
          <MoonIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
