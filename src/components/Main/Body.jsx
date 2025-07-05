import About from "./About";
import Experience from "./Experience";
import Hero from "./Hero";
import Message from "./Message";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
  return (
    <div className="flex px-[8%] py-1 flex-col gap-5 relative z-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Message />
    </div>
  );
};

export default Body;
