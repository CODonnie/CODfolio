import { assets } from "../../assets/assets";
import {
  Menu,
  House,
  CircleUser,
  Wrench,
  FolderOpenDot,
  Hourglass,
  Phone,
} from "lucide-react";
import { useState, useContext } from "react";
import ThemeToggle from "../Main/ThemeToggle";
import Sidebar from "./Sidebar";
import { SidebarItem } from "./Sidebar";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const [aside, setAside] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const { scrolled, setShowProject, isDarkMode } = useContext(AppContext);

  const nav = [
    { name: "Home", path: "#home", icon: <House /> },
    { name: "About", path: "#about", icon: <CircleUser /> },
    { name: "Skills", path: "#skills", icon: <Wrench /> },
    { name: "Projects", path: "#projects", icon: <FolderOpenDot /> },
    { name: "Experience", path: "#experience", icon: <Hourglass /> },
    { name: "Contact", path: "#contact", icon: <Phone /> },
  ];

  return (
    <>
      {/* side nav */}
      <aside
        className={`fixed bg-[hsl(var(--background))] top-0 left-0 min-h-screen z-50 transition-all duration-300 ease-in-out
  ${aside ? "w-40" : "w-0"} ${
          expanded
            ? "shadow-[-6px_0_12px_rgba(173,255,226,0.5)]"
            : "shadow-[-6px_0_12px_rgba(173,255,226,0)] bg-[rgba(0,0,0,0)]"
        } overflow-y-auto`}
      >
        <Sidebar
          aside={aside}
          setAside={setAside}
          expanded={expanded}
          setExpanded={setExpanded}
        >
          {nav.map((links) => {
            return (
              <a href={links.path} key={links.path}>
                <SidebarItem
                  expanded={expanded}
                  aside={aside}
                  setAside={setAside}
                  links={links}
                  name={links.name}
                  icon={links.icon}
                  setShowProject={setShowProject}
                />
              </a>
            );
          })}
        </Sidebar>
      </aside>

      {/* main nav */}
      <main
        className={`w-full flex flex-col transition-color duration-300 ${
          scrolled
            ? "bg-[hsl(var(--background))] backdrop-blur-lg"
            : "bg-transparent"
        } fixed top-0 left-0 z-10 sm:static sm:z-auto sm:backdrop-blur-0 sm:bg-transparent sm:px-[4%] sm:grid sm:grid-cols-[1fr_3fr_1fr] sm:justify-between sm:items-center`}
      >
        <div className="flex justify-between items-center px-5 my-4 sm:px-0">
          <Menu
            className="block text-[hsl(var(--accent-color))] sm:hidden"
            onClick={() => setAside(!aside)}
          />
          <div
            className={`${
              aside
                ? "flex justify-end items-center invisible"
                : "flex justify-end items-center"
            }`}
          >
            {isDarkMode ? (
              <img
                src={assets.codlogo2}
                alt="COD Logo"
                className="w-10 h-10 sm:w-18 sm:h-18"
              />
            ) : (
              <img
                src={assets.codLogo1}
                alt="COD Logo"
                className="w-10 h-10 sm:w-18 sm:h-18"
              />
            )}
            <p className="hidden sm:block sm:text-sm sm:font-[350]">CODONNIE</p>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <div className="hidden sm:flex sm:justify-center sm:items-center">
          <nav className="flex px-4 gap-6 text-base">
            {nav.map((links) => {
              return (
                <a
                  href={links.path}
                  key={links.path}
                  onClick={(e) => {
                    e.preventDefault();
                    const url = new URL(window.location);
                    url.searchParams.delete("projectId");
                    url.searchParams.delete("subType");
                    url.searchParams.delete("type");
                    window.history.replaceState({}, "", url);
                    setShowProject(null);

                    //manual scrolling
                    const target = document.querySelector(links.path);
                    if (target) target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-[hsl(var(--foreground))] hover:scale-110 transition"
                >
                  {links.name}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="hidden sm:flex sm:justify-center sm:items-center">
          <button className="rounded border-1 border-[hsl(var(--foregroundr))] px-7 py-1 cursor-pointer hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition">
            Resume
          </button>
        </div>
      </main>
    </>
  );
};

export default Navbar;
