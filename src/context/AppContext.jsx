import { createContext, useState, useEffect } from "react";
import { project } from "../assets/assets";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
	const [showProject, setShowProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);

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
	};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
};
