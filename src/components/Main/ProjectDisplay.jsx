import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ProjectDisplay = () => {
  const { project, showProject } = useContext(AppContext);
  const pd = project.find((proj) => proj.id === showProject);

  if (!pd) return null;

  return (
    <div className="w-[90%] h-[90%] mt-5 bg-[hsl(var(--background))] z-50">
      <div className="relative w-[100%]">
        <img src={pd.image} alt={pd.image} className="w-[100%] object-cover" />
        <div className="hover:animate-div-cover bg-[hsl(var(--foreground)/0.7)] flex flex-col justify-center items-center w-[100%] h-[100%] absolute top-0">
		<p className="text-xl font-semibold text-[hsl(var(--background))]">{pd.title}</p>
		<p className="italic text-[hsl(var(--background))]">{pd.info}</p>
		</div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
