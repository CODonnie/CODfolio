import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ProjectDisplay = () => {
  const { project, showProject } = useContext(AppContext);
  const pd = project.find((proj) => proj.id === showProject);

  if (!pd) return null;

  return (
    <div className="w-[100%] h-[95%] mt-5 bg-[hsl(var(--background))] flex flex-col gap-4 overflow-auto">
      {/* thumbnail */}
      <div className="relative w-[100%]">
        <img
          src={pd.thumbnail}
          alt={pd.thumbnail}
          className="w-[100%] object-cover"
        />
        <div className="hover:animate-div-cover bg-[hsl(var(--foreground)/0.7)] flex flex-col justify-center items-center w-[100%] h-[100%] absolute top-0">
          <p className="text-xl font-semibold text-[hsl(var(--background))]">
            {pd.title}
          </p>
          <p className="italic text-[hsl(var(--background))]">{pd.info}</p>
        </div>
      </div>
      {/* description */}
      <div
        className={`${
          pd.description ? "flex flex-col gap-2 px-4" : "hidden"
        }`}
      >
        <p className="font-semibold">Description</p>
        <p className="text-[12px]">{pd.description}</p>
      </div>
      {/* Project images */}
      <div className={`${pd.image.length ? "flex flex-col" : "hidden"}`}>
        {pd.image.map((image, i) => (
          <div key={i}>
            <img src={image} alt={image} className="w-[100%] object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
