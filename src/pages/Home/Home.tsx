import { FC, useRef, useState } from "react";

//--------------------------------------------
// Global Components
import Navbar from "components/NavBar";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary bg-ilanit bg-cover">
        <header className="box-border grid h-screen w-screen grid-cols-[2fr_3fr] bg-primary/50 px-20">
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
          <aside className="flex flex-col justify-center">
            <img src="Assets per page/syn1.png" alt="Synagogue 1" />
            <img src="Assets per page/syn2.png" alt="Synagogue 2" />
          </aside>
        </header>
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
