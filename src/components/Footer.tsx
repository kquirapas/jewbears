import { FC } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
import { SOCIALS } from "../constants";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants

const Footer: FC = () => {
  return (
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
  );
};

//--------------------------------------------
// Exports
export default Footer;
