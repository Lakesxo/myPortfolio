import { useContext, useEffect, useState, useRef } from "react";
import {
  LightModeIcon,
  MoonIcon,
  ScrollUpButton,
} from "../../assets/icons/icons";
import "./header.scss";
import { useNavigate, useLocation } from "react-router";
import { ThemeContext } from "../../App";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 820);
  const [showScrollUpButton, setShowScrollUpButton] = useState<boolean>(false);
  const theme = useContext(ThemeContext);
  const headerRef = useRef<HTMLDivElement>(null);

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
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 900);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= 900);
      });
    };
  });

  const handleNavClick = (path: string) => {
    navigate(path);
    scrollTo(0, 0);
  };

  useEffect(() => {
    theme.isDarkmode
      ? headerRef.current?.classList.replace(
          "headerWrapper",
          "headerWrapperDark"
        )
      : headerRef.current?.classList.replace(
          "headerWrapperDark",
          "headerWrapper"
        );
  }, [theme.isDarkmode, visible]);

  return isMobile ? (
    <div
      ref={headerRef}
      className={visible ? `hidden headerWrapper` : `visible headerWrapper`}
    >
      <div className="header">
        <div onClick={() => handleNavClick("/")}>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700482039/final_jwalyu.png"
              alt="ridwan ajanaku"
              draggable={false}
            />
          </div>
        </div>
        <div className="header-links">
          <button
            className={theme.isDarkmode ? "themeDark" : "theme"}
            onClick={theme.toggleTheme}
            aria-label="Toggle theme"
          >
            {theme.isDarkmode ? <LightModeIcon /> : <MoonIcon />}
          </button>
          <nav role="navigation">
            <div id={theme.isDarkmode ? "menuToggleDark" : "menuToggle"}>
              <input type="checkbox" aria-label="checkbox" id="checkobox" />
              <span></span>
              <span></span>
              <span></span>
              <div id={theme.isDarkmode ? "menuDark" : "menu"}>
                <p
                  onClick={() => handleNavClick("/")}
                  className={location.pathname === "/" ? "activeLink" : "links"}
                >
                  Home
                </p>
                <p
                  onClick={() => handleNavClick("/about")}
                  className={
                    location.pathname === "/about" ? "activeLink" : "links"
                  }
                >
                  About me
                </p>
                <p
                  onClick={() => handleNavClick("/works")}
                  className={
                    location.pathname === "/works" ? "activeLink" : "links"
                  }
                >
                  Works
                </p>
                <p
                  onClick={() => handleNavClick("/contact")}
                  className={
                    location.pathname === "/contact" ? "activeLink" : "links"
                  }
                >
                  Contact me
                </p>
                <a href="/Resume.pdf" target="_blank">
                  <p>Resumé</p>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {showScrollUpButton && (
        <button
          onClick={() => scrollTo(0, 0)}
          className="scrollUp"
          aria-label="scroll to top"
        >
          <ScrollUpButton />
        </button>
      )}
    </div>
  ) : (
    <div
      ref={headerRef}
      className={visible ? `hidden headerWrapper` : `visible headerWrapper`}
    >
      <div className="header">
        <div onClick={() => handleNavClick("/")}>
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700482039/final_jwalyu.png"
              alt="ridwan ajanaku"
              draggable={false}
            />
          </div>
        </div>
        <div className="header-links">
          <p
            onClick={() => handleNavClick("/")}
            className={location.pathname === "/" ? "activeLink" : "links"}
          >
            Home
          </p>
          <p
            onClick={() => handleNavClick("/about")}
            className={location.pathname === "/about" ? "activeLink" : "links"}
          >
            About me
          </p>
          <p
            onClick={() => handleNavClick("/works")}
            className={location.pathname === "/works" ? "activeLink" : "links"}
          >
            Works
          </p>
          <p
            onClick={() => handleNavClick("/contact")}
            className={
              location.pathname === "/contact" ? "activeLink" : "links"
            }
          >
            Contact me
          </p>
          <a href="/Resume.pdf" target="_blank">
            <p>Resumé</p>
          </a>
          <button
            className={theme.isDarkmode ? "themeDark" : "theme"}
            onClick={theme.toggleTheme}
            aria-label="toggle theme"
          >
            {theme.isDarkmode ? <LightModeIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
      {showScrollUpButton && (
        <button
          onClick={() => scrollTo(0, 0)}
          className="scrollUp"
          aria-label="scroll to top"
        >
          <ScrollUpButton />
        </button>
      )}
    </div>
  );
};

export default Header;
