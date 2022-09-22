import { FC, ReactNode, useState } from "react";

//--------------------------------------------
// Global Components
import Icon from "./Icon";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
type Props = {
  text: string;
  body: string | ReactNode;
};

const Toggle: FC<Props> = ({ text, body }) => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="w-full bg-primary">
      <div
        className="flex w-full items-center justify-between bg-nav-button px-8 py-4 hover:cursor-pointer hover:bg-white"
        onClick={expand}
      >
        <p className="font-outfit-regular text-xl text-bold">{text}</p>
        <span>
          {expanded ? (
            <Icon symbol="remove" styling="text-2xl" />
          ) : (
            <Icon symbol="add" styling="text-2xl" />
          )}
        </span>
      </div>
      <div
        className={`box-border w-full overflow-hidden bg-white ${
          expanded ? "min-h-0 p-8" : "h-0 p-0"
        }`}
      >
        <div>{body}</div>
      </div>
    </div>
  );
};

//--------------------------------------------
// Exports
export default Toggle;
