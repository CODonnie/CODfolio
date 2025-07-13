import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  const themeHandler = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDarkMode(true);
    }
  };

  return (
    <div>
      <button onClick={themeHandler}>
        {isDarkMode ? (
          <Moon className="w-6 h-6 text-slate-500" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-400" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
