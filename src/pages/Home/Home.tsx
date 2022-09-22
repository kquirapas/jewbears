import { FC, useRef, useState } from "react";

//--------------------------------------------
// Global Components
import Navbar from "components/NavBar";

//--------------------------------------------
// Domain Specific Components
import GuestTicker from "./components/GuestTicker";

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary bg-ilanit bg-cover">
        <header className="box-border grid h-screen w-screen grid-cols-2 bg-primary/50 px-20">
          <aside className="flex flex-col justify-center">
            <p className="font-outfit-bold text-2xl tracking-widest text-letter">
              100% KOSHER
            </p>

            <h1 className="my-8 font-cheddar-bold text-8xl text-bold">
              THE JEWS GOT EACH OTHER'S BACK
            </h1>

            <div className="grid w-fit grid-cols-2">
              <span className="block w-fit border-2 border-bold bg-primary py-2 px-3 font-outfit-bold text-base tracking-widest text-bold hover:cursor-pointer hover:bg-transparent hover:text-bold">
                WHITEPAPER
              </span>
            </div>
          </aside>
          <aside className="relative flex flex-col items-center justify-center">
            <img
              className="absolute w-4/5"
              src="Assets per page/2 home page/syn2.png"
              alt="Synagogue 2"
            />
            <img
              className="absolute w-4/5 transition-opacity duration-[1s] hover:opacity-0"
              src="Assets per page/2 home page/syn1.png"
              alt="Synagogue 1"
            />
          </aside>
        </header>
        <div className="grid w-screen grid-cols-[1fr_2fr] bg-primary p-6">
          <aside className="flex items-center justify-center p-2">
            <span className="flex items-center">
              <span className="text-right font-cheddar-regular text-base tracking-[6px]">
                RECENT REGISTRATIONS
              </span>
              <span className="ml-2 block flex h-4 w-4 items-center justify-center rounded-full bg-bold p-1 text-sm text-white">
                ?
              </span>
            </span>
          </aside>
          <aside className="flex items-center">
            <GuestTicker />
          </aside>
        </div>
      </main>
    </>
  );
};

/*
 * @dev Mint now code snippet
 */
// <span className="block w-fit border-2 border-accent bg-accent py-2 px-3 font-outfit-bold text-base tracking-widest text-white hover:cursor-pointer hover:bg-transparent hover:text-accent">
//   MINT NOW
// </span>;

//--------------------------------------------
// Exports
export default Home;
