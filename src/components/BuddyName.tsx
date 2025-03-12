import Image from "next/image";
import React from "react";

const BuddyName = () => {
  const suggestions = ["madlabrat", "5takarcoin", "dirtseeker"];
  return (
    <>
      <p className="text-2xl">Hello, User Name</p>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <input
            type="text"
            className="text-center outline-none text-xl"
            placeholder="@username_1234"
          />
          <p className="font-bold text-sm">Suggest username</p>
          <div className="flex gap-2">
            {suggestions.map((name, i) => {
              return (
                <div
                  className="text-xs border border-purp hover:bg-purp duration-75 cursor-pointer hover:text-white rounded-full px-2 text-purp py-1"
                  key={i}
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Image
            src="/ghost.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </div>
        <p className="font-bold text-xs -mb-4">
          This will be your buddy{`'`}s username
        </p>
      </div>
    </>
  );
};

export default BuddyName;
