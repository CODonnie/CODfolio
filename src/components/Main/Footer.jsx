import { useContext } from "react";
import { lightAssets, darkAssets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Footer = () => {
  const { isDarkMode } = useContext(AppContext);
  const iconAssets = !isDarkMode ? lightAssets : darkAssets;

  return (
    <footer className="w-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))] mt-10 pt-8 pb-4 border-t border-[hsl(var(--foreground)/0.2)]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
        {/* Social Icons */}
        <div className="flex gap-5 items-center justify-center sm:justify-start">
          {iconAssets.map((asset, i) => (
            <a
              href={asset.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={asset.icon}
                alt={asset.name}
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Footer Links (Optional) */}
        <div className="hidden sm:flex gap-6 text-sm uppercase tracking-wide">
          <a href="#about" className="hover:text-[hsl(var(--accent-color))]">
            About
          </a>
          <a href="#projects" className="hover:text-[hsl(var(--accent-color))]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[hsl(var(--accent-color))]">
            Contact
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-xs text-[hsl(var(--foreground)/0.6)] border-t border-[hsl(var(--foreground)/0.2)] pt-4">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[hsl(var(--accent-color))] font-semibold">
          CODONNIE
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
