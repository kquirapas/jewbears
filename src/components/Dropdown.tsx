import { FC, useState } from "react";
import { Link } from "react-router-dom";

//--------------------------------------------
// Global Components
import Icon from "components/Icon";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules
import { Droplink } from "types";

//--------------------------------------------
// Global Variables/Constants
type Props = {
  name: string;
  droplinks: Droplink[];
};

const Dropdown: FC<Props> = ({ name, droplinks }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <span className="relative m-2 h-full bg-nav-button font-outfit-medium text-base text-navigation hover:bg-white">
        <span
          onClick={toggle}
          className="box-border block flex items-center px-2 py-1 hover:cursor-pointer"
        >
          {name}
          <Icon symbol="expand_more" />
        </span>
        {open && (
          <>
            <ul className="absolute box-border min-w-full whitespace-nowrap bg-nav-button hover:cursor-pointer">
              {droplinks.map((e) => (
                <Link to={e.path}>
                  <li className="p-2 hover:bg-white">{e.name}</li>
                </Link>
              ))}
            </ul>
          </>
        )}
      </span>
    </>
  );
};

//--------------------------------------------
// Exports
export default Dropdown;
