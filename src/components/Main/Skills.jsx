import React from "react";
import { assets } from "../../assets/assets";

const Skills = () => {
  const logos = [
    assets.ai,
    assets.ps,
    assets.canva,
    assets.xd,
    assets.react,
    assets.redis,
    assets.expressjs,
    assets.mongo,
    assets.postgresql,
    assets.html,
    assets.tailwind,
    assets.css,
    assets.docker,
    assets.figma,
    assets.git,
    assets.github,
    assets.graphql,
    assets.js,
    assets.ts,
    assets.jwt,
    assets.npm,
    assets.nodejs,
    assets.sass,
  ];

  return (
    <div className="flex flex-col gap-4 mb-5">
      <p className="text-xl flex justify-end">Stack</p>
      <div
        className="relative h-[30px] overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0))",
        }}
      >
        <div className="w-[50px] h-[30px] absolute left-0 z-10 bg-gradient-to-r from-[hsl(var(--background))] to-transparent"></div>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt=""
            className="w-[30px] h-[30px] object-contain absolute animate-infinite-scroll"
            style={{
              animationDelay: `${
                (30 / logos.length) * (logos.length - index) * -1
              }s`,
              top: 0,
              left: "100%",
            }}
          />
        ))}
        <div className="w-[50px] h-[30px] absolute right-0 z-10 bg-gradient-to-l from-[hsl(var(--background))] to-transparent"></div>
      </div>
    </div>
  );
};

export default Skills;
