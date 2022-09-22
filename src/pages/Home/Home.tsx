import { FC } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
import Navbar from "components/NavBar";
import Toggle from "components/Toggle";

//--------------------------------------------
// Domain Specific Components
import GuestTicker from "./components/GuestTicker";

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
const TEAM = [
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
  {
    name: "Avraham",
    position: "FOUNDER",
    description:
      "With tertiary degrees in graphic design, art history and branding, Kais brings his strategic experience in building and leading design projects for many global brands including Unicef, United Nations, Unilever, Greenpeace, Ford, Dell and Olympus.",
    imgPath: "Assets per page/2 home page/Bears/1.png",
  },
];

const FAQS = [
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
  {
    heading: "WHAT IS THE TOTAL SUPPLY?",
    body: "COLLECTION OF 7,777 JEWISH OKAY BEARS NFTS",
  },
];

const SOCIALS = [
  {
    name: "Twitter",
    icon: "Assets/Buttons/twitter.svg",
    url: "https://twitter.com/TheJewsOKB",
  },
  // {
  //   name: "Discord",
  //   icon: "Assets/Buttons/discord.svg",
  //   url: "#",
  // },
  // {
  //   name: "OpenSea",
  //   icon: "Assets/Buttons/opensea.png",
  //   url: "#",
  // },
];

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

        <section className="grid w-screen grid-cols-[1fr_2fr] bg-primary p-12">
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
        </section>

        <section className="relative grid grid-cols-2 bg-primary py-32 px-52">
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

      <section className="w-screen bg-primary py-32 px-52">
        <span className="mb-12 block font-cheddar-regular text-2xl tracking-[6px]">
          MEET THE TEAM
        </span>
        <div className="grid grid-cols-4 gap-12">
          {TEAM.map((e, idx) => (
            <div key={idx}>
              <img alt={`${e.name} Bear`} className="w-full" src={e.imgPath} />
              <p className="mt-4 font-outfit-bold text-lg text-bold">
                {e.name}
              </p>
              <p className="font-outfit-regular text-lg text-letter">
                {e.position}
              </p>
              <p className="mt-4 font-outfit-regular text-base text-letter">
                {e.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-screen bg-primary py-32 px-52">
        <span className="mb-12 block font-cheddar-regular text-2xl tracking-[6px]">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <div className="">
          {FAQS.map((e, idx) => (
            <span className="mb-6 block" key={idx}>
              <Toggle text={e.heading} body={e.body} />
            </span>
          ))}
        </div>
      </section>

      <section className="grid w-screen grid-cols-2 bg-primary px-52">
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

      <section className="grid w-screen grid-cols-[1fr_2fr] bg-primary p-12">
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
      </section>

      <footer className="flex w-screen items-center justify-between bg-nav-button p-6 p-12">
        <Link to="/">
          <img
            className="h-10"
            src="Assets/Jews Bear Logo.png"
            alt="Jews Okay Bears Logo"
          />
        </Link>
        <span className="flex items-center">
          {SOCIALS.map((e, idx) => (
            <a
              key={idx}
              className="mx-3 block"
              href={e.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="h-4" src={e.icon} alt={e.name} />
            </a>
          ))}
          <img className="h-16" src="Assets/kosher.png" alt="Kosher" />
        </span>
      </footer>
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
