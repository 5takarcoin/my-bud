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
          !load ? "translate-y-0 " : "translate-y-[80%] "
        } bg-mblk h-11/12 w-full z-100 absolute bottom-0 rounded-t-4xl transition-all duration-500 ease-in flex justify-between items-center flex-col`}
      >
        <div className="w-8 h-2 bg-mblk rounded-full m-auto -mt-4"></div>
      </div>
      <div className={` h-full duration-200 w-full bg-purp`}></div>

      <Link
        href="/features"
        className={`z-100 hover:cursor-pointer bg-white text-center p-8  rounded-full  absolute  bottom-0 mb-8 w-4/5 font-bold text-3xl `}
      >
        Next
      </Link>

      <div
        className={`z-100 flex flex-col items-start justify-between h-4/5  w-full text-2xl absolute text-center duration-200`}
      >
        <Image
          className={`delay-400 w-2/5 mx-auto my-12 transition-scale duration-200 ease-out ${
            load ? "translate-y-0 opacity-100" : "translate-y-[400%] opacity-0"
          }`}
          src="/logo.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />

        <p
          className={`delay-400 text-center w-full p-8 ${
            load ? "opacity-100" : "opacity-0"
          }`}
        >
          I am MyBud
        </p>
      </div>

      <div
        className={`absolute z-[200] top-12 left-8 h-12 w-12 hover:rotate-3 hover:scale-110 `}
      >
        <Link href={"/"} className="">
          <Image
            className={`delay-300 duration-300   ${
              load ? "scale-100 rotate-0" : "scale-0 rotate-[720deg]"
            }`}
            src="/back.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </Link>
      </div>
      <div className="z-10 h-full  w-full absolute flex items-center justify-center">
        <div
          className={`bg-white mb-24 h-10 w-10 rounded-full duration-300 delay-400 ${
            load ? "scale-[2500%]" : "scale-0"
          }`}
        ></div>
      </div>
      <div className="z-11 absolute h-full m-auto flex items-center justify-center">
        <Image
          className={`delay-400 w-full mx-auto mb-24 duration-200 ease-out ${
            load ? "opacity-100" : " opacity-0"
          }`}
          src="/circled.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
    </div>
  );
}
