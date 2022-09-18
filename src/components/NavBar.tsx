import { FC } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
// import Dropdown from "components/Dropdown";
import NavButton from "components/NavButton";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules
// import { Droplink } from "types";

//--------------------------------------------
// Global Variables/Constants
const LINKS = [
  {
    name: "HOME",
    url: "/home",
  },
  // {
  //   name: "PROMISED LAND",
  //   url: "/",
  // },
  // {
  //   name: "MINT",
  //   url: "/",
  // },
];

// const DROPDOWN: Droplink[] = [
//   {
//     name: "Name Here",
//     path: "/test1", // <Link> path
//   },
//   {
//     name: "Name Here",
//     path: "/test2", // <Link> path
//   },
// ];

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

const Navbar: FC = () => {
  return (
    <nav className="fixed z-50 box-border flex h-20 w-screen flex-row items-center justify-between bg-primary px-8">
      <Link to="/">
        <img
          className="h-10"
          src="Assets/Jews Bear Logo.png"
          alt="Jews Okay Bears Logo"
        />
      </Link>
      <div className="flex">
        {LINKS.map((e, idx) => (
          <NavButton key={idx}>
            <Link to="/">
              <span>{e.name}</span>
            </Link>
          </NavButton>
        ))}

        {SOCIALS.map((e, idx) => (
          <NavButton key={idx}>
            <a
              className="block"
              href={e.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="h-5" src={e.icon} alt={e.name} />
            </a>
          </NavButton>
        ))}
      </div>
    </nav>
  );
};

//--------------------------------------------
// Exports
export default Navbar;
