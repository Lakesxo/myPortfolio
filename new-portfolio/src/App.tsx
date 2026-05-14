import { useRoutes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Works from "./pages/Works";
import { createContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import React from "react";

interface AppProps {}

type ThemeContextType = {
  isDarkmode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkmode: false,
  toggleTheme: () => "",
});

const THEME_STORAGE_KEY = "theme";

const HTML_BG_DARK = "#061122";
const HTML_BG_LIGHT = "#ffffff";

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;
  } catch {
    // Storage access failed — fall through to system preference.
  }
  return (
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
  );
};

const App: React.FunctionComponent<AppProps> = () => {
  const [isDarkmode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        THEME_STORAGE_KEY,
        isDarkmode ? "dark" : "light"
      );
    } catch {
      // Storage write failed — non-fatal.
    }
    document.documentElement.style.backgroundColor = isDarkmode
      ? HTML_BG_DARK
      : HTML_BG_LIGHT;
  }, [isDarkmode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactMe />,
    },
    {
      path: "/works",
      element: <Works />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
};

export default App;
