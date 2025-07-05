import Body from "./components/Main/Body";
import Navbar from "./components/Navigations/Navbar";
import ProjectDisplay from "./components/Main/ProjectDisplay";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { X } from "lucide-react";

const App = () => {
  const { showProject, setShowProject } = useContext(AppContext);

  return (
    <div className="backg relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Body */}
      <div
        className={`${
          showProject
            ? "fixed z-30 top-18 border border-gray-500 backdrop-blur-md bg-[hsl(varr(--background))] rounded-xl shadow-lg mx-3 w-[94%] h-[88%] flex justify-center items-center"
            : "hidden"
        }`}
      >
        <X
          className="absolute right-3 top-2"
          onClick={() => setShowProject(null)}
        />
        <ProjectDisplay />
      </div>
      <Body />
      {/* Footer */}
    </div>
  );
};

export default App;
