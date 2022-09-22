import { FC } from "react";

//--------------------------------------------
// Global Components

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
type Props = {
  symbol: string;
  styling?: string;
};

const Icon: FC<Props> = ({ symbol, styling }) => {
  return (
    <span className={`material-symbols-rounded ${styling}`}>{symbol}</span>
  );
};

//--------------------------------------------
// Exports
export default Icon;
