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
  style?: string;
};

const Icon: FC<Props> = ({ symbol, style }) => {
  const styling = style && "";

  return (
    <span className={`material-symbols-rounded ${styling}`}>{symbol}</span>
  );
};

//--------------------------------------------
// Exports
export default Icon;
