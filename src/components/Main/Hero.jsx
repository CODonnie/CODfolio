import { assets } from "../../assets/assets";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full-Stack Dev",
      "Graphics Designer",
      "Product Designer",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div id="home" className="scroll-mt-20 w-full pt-13">
      <div className="relative grid grid-cols-3">
        <img
          src={assets.dee1}
          alt=""
          className="w-80 col-span-2 col-start-1 row-start-1 z-10 row-span-1"
        />
        <div className="col-start-2 col-span-2 flex flex-col justify-center absolute top-0 left-0 z-0 h-full w-full px-5 ml-1">
          <p className="px-1">Hi, I'm</p>
          <p className="text-6xl font-semibold tracking-tighter textEffect">
            DONNIE
          </p>
          <p className="px-1 mb-17 flex justify-center">
            <span style={{ fontWeight: "normal", color: "white" }}>
              {text}
              <Cursor cursorColor="hsl(163, 88%, 76%)" cursorStyle="_" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
