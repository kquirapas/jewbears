import { FC, useEffect, useRef, useState } from "react";

//--------------------------------------------
// Global Components
import Navbar from "components/NavBar";
import Rimage from "components/Rimage";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const LETTERS = [
  {
    name: "J",
    activeImgPath: "Assets per page/1 loading page/JEWS/j_light.png",
    inactiveImgPath: "Assets per page/1 loading page/JEWS/j_dark.png",
    caption: "J F K 🍷",
    background: "Assets per page/1 loading page/background/scroll.jpg",
  },
  {
    name: "E",
    activeImgPath: "Assets per page/1 loading page/JEWS/e_light.png",
    inactiveImgPath: "Assets per page/1 loading page/JEWS/e_dark.png",
    caption: "E'zeh yofi",
    background: "Assets per page/1 loading page/background/flag.jpg",
  },
  {
    name: "W",
    activeImgPath: "Assets per page/1 loading page/JEWS/w_light.png",
    inactiveImgPath: "Assets per page/1 loading page/JEWS/w_dark.png",
    caption: "We are gonna make it",
    background: "Assets per page/1 loading page/background/person.jpg",
  },
  {
    name: "S",
    activeImgPath: "Assets per page/1 loading page/JEWS/s_light.png",
    inactiveImgPath: "Assets per page/1 loading page/JEWS/s_dark.png",
    caption: "Shalom Shalom",
    background: "Assets per page/1 loading page/background/dinner.jpg",
  },
];

const Landing: FC = () => {
  const [hovering, setHovering] = useState(-1);
  const [caption, setCaption] = useState("");
  // background image path string
  const [background, setBackground] = useState("");

  const bgRef = useRef<HTMLImageElement>(null);

  const enable = (idx: number, caption: string) => {
    setHovering(idx);
    setCaption(caption);
  };

  const disable = () => {
    setHovering(-1);
    setCaption("");
  };

  const changeBg = (idx: number) => {
    if (idx >= 0) {
      setBackground(LETTERS[idx].background);
    }
  };

  useEffect(() => {
    /*
     * @dev hacky way to create the fade on click animation
     * https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
     */
    if (bgRef.current) {
      bgRef.current.style.animation = "opacity-fade";
      // offsetWidth is called to force Reflow
      void bgRef.current.offsetWidth;
      bgRef.current.style.animation = "";
    }
  }, [background]);

  // TODO: Make JEWS height responsive
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-primary">
        <section className=" z-10 flex h-full w-screen -translate-y-10 flex-col items-center justify-center">
          <h1 className="h-20 font-outfit-regular text-3xl">{caption}</h1>
          <div className="flex w-screen justify-center px-10">
            {LETTERS.map((e, idx) => {
              return (
                <div
                  className="flex justify-center hover:cursor-pointer"
                  key={idx}
                  onClick={() => changeBg(idx)}
                  onMouseEnter={() => enable(idx, e.caption)}
                  onMouseLeave={disable}
                >
                  {hovering === idx ? (
                    <img
                      alt={e.name}
                      className="h-full"
                      src={e.activeImgPath}
                    />
                  ) : (
                    <img
                      alt={e.name}
                      className="h-full"
                      src={e.inactiveImgPath}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
        {background !== "" && (
          <Rimage
            alt="Background"
            reference={bgRef}
            styling="fixed animate-opacity-fade"
            src={background}
          />
        )}
      </main>
    </>
  );
};

//--------------------------------------------
// Exports
export default Landing;
