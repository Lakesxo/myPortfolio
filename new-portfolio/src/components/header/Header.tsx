import { useEffect, useState } from "react";
import { MoonIcon, ScrollUpButton } from "../../assets/icons/icons";
import "./header.scss";
import { useNavigate, useLocation } from "react-router";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 820);
  const [showScrollUpButton, setShowScrollUpButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      setVisible(position < moving);
      setShowScrollUpButton(true);
      if (moving < 80) {
        setVisible(false);
        setShowScrollUpButton(false);
      }
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    setIsMobile(window.innerWidth <= 820);
  });

  const handleHomeClick = () => {
    navigate("/");
    scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    navigate("/about");
    scrollTo(0, 0);
  };

  const handleWorksClick = () => {
    navigate("/works");
    scrollTo(0, 0);
  };

  const handleContactClick = () => {
    navigate("/contact");
    scrollTo(0, 0);
  };

  return isMobile ? (
    <div className={visible ? `hidden headerWrapper` : `visible headerWrapper`}>
      <div className="header">
        <a onClick={handleHomeClick}>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700482039/final_jwalyu.png"
              alt="ridwan ajanaku"
              draggable={false}
            />
          </div>
        </a>
        <div className="header-links">
          <button className="theme">
            <MoonIcon />
          </button>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a
                  onClick={handleHomeClick}
                  className={location.pathname === "/" ? "activeLink" : "links"}
                >
                  Home
                </a>
                <a
                  onClick={handleAboutClick}
                  className={
                    location.pathname === "/about" ? "activeLink" : "links"
                  }
                >
                  About me
                </a>
                <a
                  onClick={handleWorksClick}
                  className={
                    location.pathname === "/works" ? "activeLink" : "links"
                  }
                >
                  Works
                </a>
                <a
                  onClick={handleContactClick}
                  className={
                    location.pathname === "/contact" ? "activeLink" : "links"
                  }
                >
                  Contact me
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {showScrollUpButton && (
        <button onClick={() => scrollTo(0, 0)} className="scrollUp">
          <ScrollUpButton />
        </button>
      )}
    </div>
  ) : (
    <div className={visible ? `hidden headerWrapper` : `visible headerWrapper`}>
      <div className="header">
        <a onClick={handleHomeClick}>
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
            onClick={handleHomeClick}
            className={location.pathname === "/" ? "activeLink" : "links"}
          >
            Home
          </a>
          <a
            onClick={handleAboutClick}
            className={location.pathname === "/about" ? "activeLink" : "links"}
          >
            About me
          </a>
          <a
            onClick={handleWorksClick}
            className={location.pathname === "/works" ? "activeLink" : "links"}
          >
            Works
          </a>
          <a
            onClick={handleContactClick}
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
