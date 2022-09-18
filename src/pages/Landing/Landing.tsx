import { FC, useState, useEffect } from "react";

//--------------------------------------------
// Global Components
import Navbar from "components/NavBar";

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
  const [background, setBackground] = useState("");

  const enable = (idx: number, caption: string) => {
    setHovering(idx);
    setCaption(caption);
  };

  const disable = () => {
    setHovering(-1);
    setCaption("");
  };

  const changeBg = () => {};

  return (
    <>
      <Navbar />
      <main className="flex h-screen min-h-screen flex-col items-center justify-center bg-primary">
        <section className="relative flex h-full w-screen -translate-y-10 flex-col items-center justify-center">
          <h1 className="h-14 font-outfit-regular text-3xl">{caption}</h1>
          <div className="flex h-[50%] max-h-96 w-screen justify-center ">
            {LETTERS.map((e, idx) => {
              return (
                <div
                  className="flex justify-center hover:cursor-pointer"
                  onMouseEnter={() => enable(idx, e.caption)}
                  onMouseLeave={disable}
                >
                  {hovering === idx ? (
                    <img
                      className="h-full"
                      src={e.activeImgPath}
                      alt={e.name}
                    />
                  ) : (
                    <img
                      className="h-full"
                      src={e.inactiveImgPath}
                      alt={e.name}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
        <img src="" alt="" />
      </main>
    </>
  );
};

//--------------------------------------------
// Exports
export default Landing;
