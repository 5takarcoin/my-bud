import Image from "next/image";
import React from "react";

const FnLnDp = () => {
  return (
    <>
      <p className="text-2xl">Let{`'`}s setup your profile</p>
      <div className="flex flex-col items-center gap-8">
        <div>
          <Image src="/dpin.svg" alt="glass" width={180} height={38} priority />
        </div>
        <div className="flex flex-col gap-6">
          <input
            type="text"
            className="outline-none border-b-3 text-center text-xl"
            placeholder="First Name"
          />
          <input
            type="text"
            className="outline-none border-b-3 text-center text-xl"
            placeholder="Last Name"
          />
        </div>
      </div>
    </>
  );
};

export default FnLnDp;
