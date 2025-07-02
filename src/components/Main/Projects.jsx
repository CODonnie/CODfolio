import React, { useState } from "react";
import { FunnelX } from "lucide-react";
import { assets } from "../../assets/assets";

const Projects = () => {
  const [type, setType] = useState("");

  const changeType = (t) => {
    setType(t);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <p className="text-xl">Projects</p>
      <div className="flex w-[100%] justify-around items-center">
        {type === "dev" ? null : (
          <div className="flex items-center gap-6">
            <p onClick={() => changeType("dev")}>Dev</p>
            {type === "design" ? (
              <FunnelX size={11} onClick={() => changeType("")} />
            ) : null}
          </div>
        )}
        {type === "dev" ? (
          <div className="text-[12px] flex gap-4">
            <p>Full-stack</p>
            <p>Frontend</p>
            <p>Backend</p>
          </div>
        ) : null}
        {type === "design" ? null : (
          <div className="flex items-center gap-6">
            <p onClick={() => changeType("design")}>Design</p>
            {type === "dev" ? (
              <FunnelX size={10} onClick={() => changeType("")} />
            ) : null}
          </div>
        )}
        {type === "design" ? (
          <div className="text-[12px] flex gap-4">
            <p>Graphics Design</p>
            <p>Product Design</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Projects;
