import { createContext, useState, useEffect } from "react";
import { project } from "../assets/assets";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const [showProject, setShowProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


	const value = {
		showProject,
		setShowProject,
		project,
		scrolled,
		isDarkMode,
		setIsDarkMode
	};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};
