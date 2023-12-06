import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Works from "./pages/Works";
import { createContext, useState } from "react";

interface AppProps {}

type ThemeContextType = {
  isDarkmode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkmode: false,
  toggleTheme: () => "",
});

const App: React.FunctionComponent<AppProps> = () => {
  const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkmode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkmode, toggleTheme }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
