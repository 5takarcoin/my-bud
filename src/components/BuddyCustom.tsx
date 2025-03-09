import Image from "next/image";
import React from "react";

const BuddyCustom = () => {
  return (
    <>
      <p className="text-2xl text-center pt-4">
        Now, Lest{`'`}s <br /> customize your buddy
      </p>
      <div className="flex flex-col items-center gap-8">
        <div>
          <Image
            className="w-full"
            src="/buddyhow.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </div>
      </div>
    </>
  );
};

export default BuddyCustom;
