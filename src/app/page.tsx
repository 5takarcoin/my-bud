"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen  bg-white shadow-lg overflow-hidden relative">
      <div
        className={`${
          load ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } bg-pink h-11/12 w-full z-100 absolute bottom-0 rounded-t-4xl transition-all duration-500 ease-in flex justify-between items-center flex-col`}
      >
        <div className="w-8 h-2 bg-white rounded-full m-auto -mt-4"></div>
        <p
          className={`absolute top-[10%] font-bold text-xl delay-[1100ms] duration-200 ${
            load ? "opacity-100" : "opacity-0"
          }`}
        >
          Hello this is
        </p>
        {/* <Link
          href="/getstarted"
          className={`z-11 hover:cursor-pointer bg-white text-center p-8  rounded-full  absolute bottom-0 mb-8 w-4/5 font-bold text-3xl delay-[1100ms] duration-200 ${
            load ? "opacity-100" : "opacity-0"
          }`}
        >
          Get Started
        </Link> */}
        <div
          className={`space-y-8 delay-[1100ms] duration-200 flex flex-col items-center w-2/5 ${
            load ? "-translate-y-[40%]" : "translate-y-0"
          }`}
        >
          <div
            className={`delay-[700ms] duration-200 ${
              load
                ? "translate-y-0 opacity-100 "
                : "-translate-y-[400%] opacity-0 "
            }`}
          >
            <Image
              className={` delay-[700ms] w-full duration-200  ${
                load ? "opacity-100 " : " opacity-0 "
              }`}
              src="/logo.svg"
              alt="glass"
              width={180}
              height={38}
              priority
            />
          </div>
          <Image
            className={`delay-500 w-full transition-scale duration-200 ease-out ${
              load ? "scale-y-100" : "scale-y-0 "
            }`}
            src="/glass.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="w-[140%] flex justify-center items-center">
          <Image
            className="w-full  translate-y-1/4"
            src="/wave.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
      </div>
      <div className="bg-purp h-full w-full"></div>
      <Link
        href="/getstarted"
        className={`z-100 hover:cursor-pointer bg-white text-center p-8  rounded-full  absolute  bottom-0 mb-8 w-4/5 font-bold text-3xl delay-[1100ms] duration-200 ${
          load ? "opacity-100" : "opacity-0"
        }`}
      >
        Get Started
      </Link>
      <p
        className={`z-100 text-2xl absolute bottom-40 text-center delay-[1100ms] duration-200 ${
          load ? "opacity-100" : "opacity-0"
        }`}
      >
        How are you feeling today?
      </p>
    </div>
  );
}
