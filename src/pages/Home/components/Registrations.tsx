import { FC } from "react";

//--------------------------------------------
// Global Components

//--------------------------------------------
// Domain Specific Components
import GuestTicker from "./GuestTicker";

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
const Registrations: FC = () => {
  return (
    <section className="grid w-screen grid-cols-1 bg-primary py-12 md:grid-cols-[1fr_2fr]">
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
      <aside className="flex h-10 items-center md:h-auto">
        <GuestTicker />
      </aside>
    </section>
  );
};

//--------------------------------------------
// Exports
export default Registrations;
