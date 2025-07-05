import React, { useContext, useState } from "react";
import { ChevronRight, FunnelX } from "lucide-react";
import { AppContext } from "../../context/AppContext";

const Projects = () => {
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
	const { project, setShowProject } = useContext(AppContext);

  const changeType = (t) => {
    setType(t);
    setSubType("");
  };
  const highlight = (opt) => {
    return subType === opt
      ? "text-[hsl(var(--accent-color))] font-semibold"
      : "text-[12px]";
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">Projects</p>

      {/* Filters */}
      <div className="flex relative h-10 w-[100%] justify-around items-center mb-4">
        {type === "development" ? null : (
          <div className="flex z-10 items-center gap-6">
            <p onClick={() => changeType("development")}>Dev</p>
            {type === "design" ? (
              <FunnelX
                size={10}
                color={"hsl(var(--accent-color))"}
                onClick={() => changeType("")}
              />
            ) : null}
          </div>
        )}
        {type === "development" ? (
          <div className="text-[12px] flex gap-4">
            <button
              className={highlight("full-stack")}
              onClick={() => setSubType("full-stack")}
            >
              Full-stack
            </button>
            <button
              className={highlight("front-end")}
              onClick={() => setSubType("front-end")}
            >
              Frontend
            </button>
            <button
              className={highlight("backend")}
              onClick={() => setSubType("backend")}
            >
              Backend
            </button>
            <button className={highlight("")} onClick={() => setSubType("")}>
              all
            </button>
          </div>
        ) : null}
        <div
          className={`${
            type == "design"
              ? "z-0 absolute left-0 w-[25%] h-10 border-b-1 border-r-1"
              : type === "development"
              ? "z-0 absolute right-0 w-[30%] h-10 border-b-1 border-l-1"
              : "hidden"
          }`}
        ></div>
        {type === "design" ? null : (
          <div className="flex z-10 items-center gap-6">
            <p onClick={() => changeType("design")}>Design</p>
            {type === "development" ? (
              <FunnelX
                size={10}
                color={"hsl(var(--accent-color))"}
                onClick={() => changeType("")}
              />
            ) : null}
          </div>
        )}
        {type === "design" ? (
          <div className="text-[12px] flex gap-4">
            <button
              className={highlight("graphics design")}
              onClick={() => setSubType("graphics design")}
            >
              Graphics Design
            </button>
            <button
              className={highlight("product design")}
              onClick={() => setSubType("product design")}
            >
              Product Design
            </button>
            <button className={highlight("")} onClick={() => setSubType("")}>
              all
            </button>
          </div>
        ) : null}
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-4">
        {project
          .filter((proj) => {
            if (!type) return true;
            if (subType) return proj.subType === subType;
            return proj.type === type;
          })
          .map((proj, index) => (
            <div
              key={index}
              className="mb-2 pb-1 border-b-1 border-b-gray-700 grid grid-cols-[55px_1fr_1fr_1fr_14px] justify-start items-center text-[8px] thin text-gray h-[100%]"
            >
              <p>{proj.endDate}</p>
              <p className="text-sm font-semibold">{proj.title}</p>
              <p>{proj.info}</p>
              <p>{proj.status}</p>
              <div className="hover:bg-[hsl(var(--accent-color))] hover:text-[hsl(var(--background))] h-[100%] flex items-center rounded-r-lg">
                <ChevronRight size={11} onClick={() => setShowProject(proj.id)} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
