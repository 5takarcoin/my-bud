"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen bg-white shadow-lg overflow-hidden relative">
      <div
        className={`h-11/12 w-full z-[200] ${
          !load ? "translate-y-[80%] bg-mblk" : "translate-y-[35%] bg-cyan"
        }  z-100 absolute bottom-0 rounded-t-4xl transition-all duration-500 ease-in flex justify-between items-center flex-col`}
      >
        <div className="w-8 h-2 bg-mblk rounded-full m-auto -mt-4"></div>

        <div
          className={` delay-100 flex flex-col justify-between p-8 my-4 absolute top-0 w-full h-3/5 gap-4 duration-200 ${
            load ? "opacity-100" : " opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
      <div className={` h-full duration-200 w-full bg-pink`}></div>

      <div
        className={`z-100 flex flex-col items-start justify-between h-4/5  w-full text-2xl absolute text-center duration-200`}
      >
        <Image
          className={`w-screen scale-150 -translate-y-[45%] mx-auto my-12 transition-scale duration-200 ease-out  ${
            !load ? "opacity-100" : " opacity-0"
          }`}
          src="/cloud.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>

      <div
        className={`absolute z-[200] top-12 left-8 h-12 w-12 hover:rotate-3 hover:scale-110 `}
      >
        <Link href={"/features"} className="">
          <Image src="/back.svg" alt="glass" width={180} height={38} priority />
        </Link>
      </div>

      <div className="z-11 absolute h-full m-auto flex items-start my-12 justify-center">
        <Image
          className={`delay-400 w-full mx-auto mb-24 duration-200 ease-out ${
            load ? "opacity-100" : " opacity-0"
          }`}
          src="/platf.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
    </div>
  );
}
