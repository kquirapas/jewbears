import { FC, ReactNode } from "react";

//--------------------------------------------
// Global Components

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
type Props = {
  children?: ReactNode | ReactNode[];
};

const NavButton: FC<Props> = ({ children }) => {
  return (
    <span className="m-2 flex items-center bg-nav-button py-1 px-2 font-outfit-medium text-base text-navigation hover:cursor-pointer hover:bg-white">
      {children}
    </span>
  );
};

//--------------------------------------------
// Exports
export default NavButton;
