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
  src: string;
  alt: string;
  styling?: string;
};

/*
 * Responsive image that sets the image dimension along the
 * main axis to take the entire space of the viewport
 */
const Rimage: FC<Props> = ({ src, alt, styling }) => {
  const axis = (() => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    return width > height ? "x" : "y";
  })();

  if (axis === "x") {
    return (
      <img
        className={`aspect-auto h-auto w-screen object-cover ${styling}`}
        src={src}
        alt={alt}
      />
    );
  }

  return (
    <img
      className={`aspect-auto h-screen w-auto object-cover ${styling}`}
      src={src}
      alt={alt}
    />
  );
};

//--------------------------------------------
// Exports
export default Rimage;
