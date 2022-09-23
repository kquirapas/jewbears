import { FC } from "react";

//--------------------------------------------
// Global Components

//--------------------------------------------
// Domain Specific Components

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

const Faqs: FC = () => {
  return (
    <section className="w-screen bg-primary py-32 px-[10vw]">
      <span className="mb-12 block font-cheddar-regular text-2xl tracking-[6px]">
        MEET THE TEAM
      </span>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((e, idx) => (
          <div key={idx}>
            <img alt={`${e.name} Bear`} className="w-full" src={e.imgPath} />
            <p className="mt-4 font-outfit-bold text-lg text-bold">{e.name}</p>
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
  );
};

//--------------------------------------------
// Exports
export default Faqs;
