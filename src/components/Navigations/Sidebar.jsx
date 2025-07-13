import { useContext } from "react";
import { assets } from "../../assets/assets";
import { UnfoldHorizontal, FoldHorizontal, FileDown } from "lucide-react";
import { AppContext } from "../../context/AppContext";

const Sidebar = ({ children, expanded, setExpanded }) => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div>
      <aside
        className={`overflow-y-auto transition-all duration-200 ${
          expanded
            ? "h-screen bg-[hsl(var(--background))] flex flex-col w-full "
            : "h-screen bg-[hsl(var(--background))] flex flex-col w-[40%] shadow-[-6px_0_12px_rgba(173,255,226,0.5)]"
        }`}
      >
        <div
          className={`h-[10%] overflow-hidden transition-all duration-300 ${
            expanded
              ? "flex items-center gap-9 px-3 py-4 w-full"
              : "flex items-center justify-center px-3 py-4 w-auto"
          }`}
        >
          <div className="flex items-center">
            {isDarkMode ? (
              <img
                src={assets.codlogo2}
                alt="COD Logo"
                className={`transition-all duration-500 ${
                  expanded ? "w-7" : "w-0"
                } duration-500`}
              />
            ) : (
              <img
                src={assets.codLogo1}
                alt="COD Logo"
                className={`transition-all duration-500 ${
                  expanded ? "w-7" : "w-0"
                } duration-500`}
              />
            )}
            <p
              className={`transition-all duration-500 ${
                expanded ? "text-sm font-[350]" : "hidden"
              } duration-500`}
            >
              CODONNIE
            </p>
          </div>
          <div className="">
            {expanded ? (
              <FoldHorizontal onClick={() => setExpanded(!expanded)} />
            ) : (
              <UnfoldHorizontal onClick={() => setExpanded(!expanded)} />
            )}
          </div>
        </div>

        {/* navigations */}
        <nav>
          <ul
            className={`${
              expanded
                ? "flex flex-col gap-7 px-4 py-3 duration-500"
                : "flex flex-col items-center gap-7 px-4 py-3 duration-500"
            }`}
          >
            {children}
          </ul>
        </nav>

        {/* connect btn */}
        <div
          className={`px-4 py-3 w-full mt-auto ${
            expanded
              ? "flex justify-start gap-4 items-center"
              : "grid grid-rows-2 gap-4"
          }`}
        >
          <img
            src={assets.codround}
            alt="COD Logo"
            className={`${expanded ? "w-8 h-8" : "w-8 h-8 row-start-2"}`}
          />
          <button
            className={`flex gap-2 items-center px-1 py-1 cursor-pointer`}
          >
            <FileDown size={24} />
            <span className={`${expanded ? "block" : "hidden"}`}>Résumé</span>
          </button>
        </div>
      </aside>
    </div>
  );
};
export function SidebarItem({
  name,
  icon,
  links,
  expanded,
  setAside,
  aside,
  setShowProject,
}) {
  if (expanded) {
    return (
      <li
        className="flex gap-4 items-center"
        onClick={(e) => {
          e.preventDefault();
          const url = new URL(window.location);
          url.searchParams.delete("projectId");
          url.searchParams.delete("subType");
          url.searchParams.delete("type");
          window.history.replaceState({}, "", url);
          setShowProject(null);
          setAside(!aside);

          //manual scrolling
          const target = document.querySelector(links.path);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {icon} <span>{name}</span>
      </li>
    );
  } else {
    return (
      <li
        className="flex items-center"
        onClick={(e) => {
          e.preventDefault();
          const url = new URL(window.location);
          url.searchParams.delete("projectId");
          url.searchParams.delete("subType");
          url.searchParams.delete("type");
          window.history.replaceState({}, "", url);
          setShowProject(null);
          setAside(!aside);

          //manual scrolling
          const target = document.querySelector(links.path);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {icon}
      </li>
    );
  }
}

export default Sidebar;
