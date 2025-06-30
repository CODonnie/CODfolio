import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center w-full relative">
      {/* main div */}
      <div className="mobabout z-10 flex flex-col gap-2">
        <h2 className="text-xl ">About</h2>
        <p className="">
          Ordu Donald, a multidisciplinary Full-Stack Developer and Creative
          Designer with over 5 years of experience creating polished digital
          experiences that combine clean code with strong visual design. I build
          responsive, user-focused web apps using React, TypeScript, Express,
          and Firebase, while also crafting intuitive UI/UX and visual assets
          with tools like Figma, Adobe Photoshop, Illustrator, and Canva. From
          streaming platforms and job boards to branding materials and user
          interfaces, I bring both logic and creativity to every project. My
          approach blends development and design to deliver solutions that are
          functional, visually appealing, and easy to use.
        </p>
      </div>
    </div>
  );
};

export default About;
