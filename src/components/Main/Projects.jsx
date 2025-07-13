import React, { useContext, useEffect, useState } from "react";
import { ChevronRight, FunnelX } from "lucide-react";
import { AppContext } from "../../context/AppContext";
import { updateUrl } from "../../utils/urlHelper";

const Projects = () => {
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const { project, setShowProject } = useContext(AppContext);

  const changeType = (t) => {
    setType(t);
    setSubType("");
    updateUrl(t, "");
  };

  const changeSubType = (sub) => {
    setSubType(sub);
    updateUrl(type, sub);
  };

  const openProject = (id) => {
    updateUrl(type, subType, id);
    setShowProject(id);
  };

  const highlight = (opt) => {
    return subType === opt
      ? "text-[hsl(var(--accent-color))] font-semibold"
      : "text-[12px]";
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlType = params.get("type");
    const urlSubType = params.get("subType");

    if (urlType) setType(urlType);
    if (urlSubType) setSubType(urlSubType);
  }, []);

  return (
    <div id="projects" className="scroll-mt-20 flex flex-col gap-2">
      <p className="text-xl">Projects</p>

      {/* Filters */}
      <div className="flex relative h-10 w-[100%] justify-around items-center mb-4">
        {type === "development" ? null : (
          <div className="flex z-10 items-center gap-6 sm:gap-20">
            <button onClick={() => changeType("development")}>Dev</button>
            {type === "design" ? (
              <FunnelX
                className="w-[10] sm:w-[13]"
                color={"hsl(var(--accent-color))"}
                onClick={() => changeType("")}
              />
            ) : null}
          </div>
        )}
        {type === "development" ? (
          <div className="text-[12px] flex gap-4 sm:text-lg sm:gap-15">
            <button
              className={highlight("full-stack")}
              onClick={() => changeSubType("full-stack")}
            >
              Full-stack
            </button>
            <button
              className={highlight("front-end")}
              onClick={() => changeSubType("front-end")}
            >
              Frontend
            </button>
            <button
              className={highlight("backend")}
              onClick={() => changeSubType("backend")}
            >
              Backend
            </button>
            <button className={highlight("")} onClick={() => changeSubType("")}>
              all
            </button>
          </div>
        ) : null}
        <div
          className={`${
            type == "design"
              ? "z-0 absolute left-0 w-[25%] sm:w-[40%] h-10 border-b-1 border-r-1"
              : type === "development"
              ? "z-0 absolute right-0 w-[30%] sm:w-[45%] h-10 border-b-1 border-l-1"
              : "hidden"
          }`}
        ></div>
        {type === "design" ? null : (
          <div className="flex z-10 items-center gap-6 sm:gap-20">
            <button onClick={() => changeType("design")}>Design</button>
            {type === "development" ? (
              <FunnelX
                className="w-[10] sm:w-[13]"
                color={"hsl(var(--accent-color))"}
                onClick={() => changeType("")}
              />
            ) : null}
          </div>
        )}
        {type === "design" ? (
          <div className="text-[12px] flex gap-4 sm:text-lg sm:gap-15">
            <button
              className={highlight("graphics design")}
              onClick={() => changeSubType("graphics design")}
            >
              Graphics Design
            </button>
            <button
              className={highlight("product design")}
              onClick={() => changeSubType("product design")}
            >
              Product Design
            </button>
            <button className={highlight("")} onClick={() => changeSubType("")}>
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
              className="mb-2 pb-1 border-b-1 border-b-gray-700 grid grid-cols-[60px_1fr_1fr_1fr_14px] sm:grid-cols-[0.3fr_1fr_1fr_1fr_14px] justify-start items-center text-sm sm:text-xl thin text-gray h-[100%]"
            >
              <p className="text-[10px]">{proj.endDate}</p>
              <p>{proj.title}</p>
              <p className="text-[10px]">{proj.info}</p>
              <p className="text-[10px]">{proj.status}</p>
              <div className="hover:bg-[hsl(var(--accent-color))] hover:text-[hsl(var(--background))] h-[100%] flex items-center rounded-r-lg">
                <ChevronRight className="w-11 h-11 sm:w-13 sm:h-13" onClick={() => openProject(proj.id)} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
