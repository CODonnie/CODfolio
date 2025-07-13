import About from "./About";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="flex px-[8%] py-1 flex-col gap-5 relative z-0">
      <div className="sm:grid sm:grid-cols-[2fr_1fr] sm:justify-center sm:items-center sm:gap-4">
        <div className="sm:border sm:border-red-400">
          <Hero />
        </div>
        <div className="sm:flex sm:flex-col sm:gap-4">
          <div>
            <About />
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Body;
