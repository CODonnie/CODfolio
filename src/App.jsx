import Body from "./components/Main/Body";
import Navbar from "./components/Navigations/Navbar";
import ProjectDisplay from "./components/Main/ProjectDisplay";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import { X } from "lucide-react";

const App = () => {
  const { showProject, setShowProject } = useContext(AppContext);

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const urlProjectId = params.get("projectId");
      setShowProject(urlProjectId);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showProject ? "hidden" : "auto";
  }, [showProject]);

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div
        className={`${
          showProject
            ? "fixed z-30 top-18 backdrop-blur-md bg-[hsl(var(--background))] shadow-lg w-[100%] h-[90%] flex justify-center items-center sm:h-full sm:top-0"
            : "hidden"
        }`}
      >
        <X size={28}
          className="absolute right-3 top-7 bg-[hsl(var(--background))] rounded-[100%] p-2 shadow-sm z-10"
          onClick={() => window.history.back()}
        />
        <ProjectDisplay />
      </div>
      <Body />
    </div>
  );
};

export default App;
