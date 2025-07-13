import { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { normalizeKey } from "../../utils/normalize";
import { Github, Globe } from "lucide-react";

const ProjectDisplay = () => {
  const { project, showProject } = useContext(AppContext);
  const pd = project.find((proj) => proj.id === showProject);

  if (!pd) return null;
  
  const scrollRef = useRef(null);
  const [scrollP, setScrollP] = useState(false);
  
  useEffect(() => {
    const div = scrollRef.current;
    if (!div) return;
    
    const handleScroll = () => {
      setScrollP(div.scrollTop > 10);
    };

    div.addEventListener("scroll", handleScroll);
    return () => div.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-[100%] h-[95%] sm:px-[7%] sm:text-2xl bg-[hsl(var(--background))] flex flex-col gap-1 overflow-auto"
    >
      {/* thumbnail */}
      <div className="relative w-[100%]">
        <img
          src={pd.thumbnail}
          alt={pd.thumbnail}
          className="w-[100%] object-cover"
        />
        <div
          className={`bg-[hsl(var(--foreground)/0.7)] flex flex-col justify-center items-center w-[100%] h-[100%] absolute top-0 ${
            scrollP ? "animate-div-cover" : "animate-div-remove coverlid"
          }`}
        >
          <p className="text-xl sm:3xl font-semibold text-[hsl(var(--background))]">
            {pd.title}
          </p>
          <p className="italic text-[hsl(var(--background))]">{pd.info}</p>
        </div>
      </div>
      {/* description */}
      <div
        className={`${
          pd.description
            ? "flex flex-col gap-2 p-4 m-2 shadow-sm rounded-lg bg-[hsl(var(--card-color))]"
            : "hidden"
        }`}
      >
        <p className="font-semibold">Description</p>
        <p className="text-[12px] sm:xl">{pd.description}</p>
      </div>
      {/* Project images */}
      <div className={`${pd.image.length ? "flex flex-col" : "hidden"}`}>
        {pd.image.map((image, i) => (
          <div key={i}>
            <img src={image} alt={image} className="w-[100%] object-cover" />
          </div>
        ))}
      </div>
      {/* stack */}
      <div
        className={`${
          pd.stack.length > 0
            ? "flex flex-col gap-2 p-4 m-2 shadow-sm rounded-lg bg-[hsl(var(--card-color))]"
            : "hidden"
        }`}
      >
        <p className="font-semibold">Stack</p>
        <div className="flex items-center gap-4">
          {pd.stack.map((tech, i) => {
            const key = normalizeKey(tech);
            const icon = assets[key];

            return icon ? (
              <img
                key={i}
                src={icon}
                alt={tech}
                className="w-8 object-contain"
              />
            ) : (
              <span key={i} className="">
                {tech}
              </span>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-2">
        {/* status */}
        <div className="flex flex-col gap-2 p-4 m-2 shadow-sm rounded-lg bg-[hsl(var(--card-color))]">
          <p className="font-semibold">Status</p>
          <p className="text-[12px] sm:text-xl">{pd.status}</p>
        </div>
        {/* date */}
        <div
          className={`${
            pd.status === "completed"
              ? "flex flex-col gap-2 p-4 m-2 shadow-sm rounded-lg bg-[hsl(var(--card-color))]"
              : "hidden"
          }`}
        >
          <p className="font-semibold">Concluded on</p>
          <p className="text-[12px] sm:text-xl">{pd.endDate}</p>
        </div>
      </div>
      {/* links */}
      <div className="flex flex-col gap-2 p-4 m-2 shadow-sm rounded-lg bg-[hsl(var(--card-color))]">
        <p className="font-semibold">Links</p>
        <div className={`${pd.liveUrl ? "flex gap-2 items-center" : "hidden"}`}>
          <Globe size={12} />
          <a href={pd.liveUrl} className="text-[12px] sm:text-xl">
            {pd.liveUrl}
          </a>
        </div>

        <div className={`${pd.liveUrl ? "flex gap-2 items-center" : "hidden"}`}>
          <Github size={12} />
          <a href={pd.repoUrl} className="text-[12px] sm:text-xl">
            {pd.repoUrl}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
