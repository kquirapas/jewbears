//--------------------------------------------
// Global Components
import { FC, useEffect, useRef, useState } from "react";

//--------------------------------------------
// Domain Specific Components

//--------------------------------------------
// Modules
import { getSigners } from "modules/signbook";
import { getTimePassed } from "modules/utils";

//--------------------------------------------
// Global Variables/Constants

const GuestTicker: FC = () => {
  const guests = getSigners();

  const holderRef = useRef<HTMLDivElement>(null);
  const slidingRef = useRef<HTMLDivElement>(null);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    // on component mount
    // slide the guests ticker
    setInterval(() => {
      setLeft((prev) => prev - 1);
    }, 50);
  }, []);

  useEffect(() => {
    // move to the left
    if (slidingRef.current && holderRef.current) {
      const holderRect = holderRef.current.getBoundingClientRect();
      const slidingRect = slidingRef.current.getBoundingClientRect();

      // check if at the end
      if (slidingRect.right < holderRect.left) {
        setLeft(holderRef.current.offsetWidth);
      }

      // update position
      slidingRef.current.style.left = `${left}px`;
    }
  }, [left]);

  return (
    <div ref={holderRef} className="relative h-full w-full overflow-hidden">
      <div ref={slidingRef} className={`absolute flex`}>
        {guests.map((e, idx) => (
          <div className="flex items-center" key={idx}>
            <div className="flex w-[200px] flex-col items-center justify-center">
              <span className="font-outfit-regular text-base tracking-widest text-bold">
                {e.name}
              </span>
              <span className="text-xs text-form-stroke">
                {getTimePassed(e.timestamp)}
              </span>
            </div>
            {idx < guests.length - 1 && (
              <span className="mx-8 h-2 w-2 rounded-full bg-bold"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

//--------------------------------------------
// Exports
export default GuestTicker;
