import { FC } from "react";

//--------------------------------------------
// Global Components
import Toggle from "components/Toggle";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules

//--------------------------------------------
// Global Variables/Constants
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

const Faqs: FC = () => {
  return (
    <section className="w-screen bg-primary py-32 px-[10vw]">
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
  );
};

//--------------------------------------------
// Exports
export default Faqs;
