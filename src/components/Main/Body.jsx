import About from "./About";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="flex px-[8%] py-1 flex-col gap-5 relative z-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
