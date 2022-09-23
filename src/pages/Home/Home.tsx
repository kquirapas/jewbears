import { FC } from "react";

//--------------------------------------------
// Global Components
import Footer from "components/Footer";
import Navbar from "components/NavBar";

//--------------------------------------------
// Domain Specific Components
import Faqs from "./components/Faqs";
import Registrations from "./components/Registrations";
import Team from "./components/Team";

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
const Home: FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary bg-ilanit bg-cover bg-bottom">
        <header className="mt-32 box-border grid h-auto w-screen grid-cols-1 bg-primary/50 px-10 md:mt-0 md:h-screen md:grid-cols-2 md:px-20">
          <aside className="flex flex-col items-center justify-center md:items-start">
            <p className="font-outfit-bold text-xl tracking-widest text-letter md:text-2xl">
              100% KOSHER
            </p>

            <h1 className="my-8 text-center font-cheddar-bold text-6xl text-bold md:text-left md:text-8xl">
              THE JEWS GOT EACH OTHER'S BACK
            </h1>

            <div className="grid-cols1 grid w-fit">
              <span className="block w-fit border-2 border-bold bg-primary py-2 px-3 font-outfit-bold text-base tracking-widest text-bold hover:cursor-pointer hover:bg-transparent hover:text-bold">
                WHITEPAPER
              </span>
            </div>
          </aside>
          <aside className="relative flex justify-center py-20 md:items-center md:p-0">
            <img
              className=" w-4/5"
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

        <Registrations />

        <section className="relative grid grid-cols-1 overflow-hidden bg-primary py-32 px-[10vw] md:grid-cols-2">
          <aside className="flex flex-col justify-center">
            <h1 className="pb-10 font-cheddar-regular text-2xl tracking-[6px]">
              CELEBRATION OF JUDAISM
            </h1>
            <p className="font-outfit-regular text-base text-lg text-letter">
              An extraordinary brand built by jewish people.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              <br />
              At cursus id ut quisque vestibulum commodo egestas sed. Nunc enim
              porttitor vestibulum augue turpis risus sed sed. Mauris sit
              libero, cras integer neque.
              <br />
              <br />
              Sit pellentesque pulvinar urna, ut auctor eu pretium non vel. Ut
              varius eu quisque turpis tincidunt viverra ornare adipiscing orci.
              Pharetra ipsum mi nunc aliquam feugiat tortor sed.{" "}
            </p>
          </aside>
          <aside className="absolute -right-[20vw]">
            <img
              className="w-[50vw]"
              src="Assets per page/2 home page/shofar square.png"
              alt="Shofar Square"
            />
          </aside>
        </section>
      </main>

      <Faqs />

      <Team />

      <section className="grid w-screen grid-cols-1 bg-primary px-[10vw] md:grid-cols-2">
        <aside className="flex flex-col justify-center">
          <span className="block font-cheddar-regular text-2xl tracking-[6px]">
            ARE YOU JEWISH?
          </span>
          <p className="font-outfit-origin my-8 text-xl text-letter">
            Take the quiz and get whitelisted
          </p>
          <span className="block w-fit border-2 border-accent bg-accent py-2 px-3 font-outfit-bold text-base tracking-widest text-white hover:cursor-pointer hover:bg-transparent hover:text-accent">
            JEW IN
          </span>
        </aside>

        <aside className="flex items-center justify-center">
          <img className="w-full" src="Assets/teffilin.png" alt="Teffilin" />
        </aside>
      </section>

      <Registrations />

      <Footer />
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
