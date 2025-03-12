import Image from "next/image";
import React from "react";

const AllSet = () => {
  return (
    <>
      <div className="text-center pt-24 -mb-24">
        <h1 className="text-6xl">CONGRATS!</h1>
        <p className="text-2xl">You are all set</p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div>
          <Image
            src="/allset.svg"
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

export default AllSet;
