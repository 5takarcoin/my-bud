import Image from "next/image";
import React from "react";

const BuddyProps = () => {
  return (
    <>
      <p className="text-2xl text-center pt-4">
        Now, time for the <br /> OUTFIT
      </p>
      <div className="flex flex-col items-center gap-8">
        <div>
          <Image
            className="w-full"
            src="/ghost.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </div>
        {/* <div className="h-36"></div> */}
      </div>
      <div className="absolute">
        <Image
          className="w-full"
          src="/custom.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
    </>
  );
};

export default BuddyProps;
