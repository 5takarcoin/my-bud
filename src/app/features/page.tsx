"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(false);

  const router = useRouter();

  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen  bg-white shadow-lg overflow-hidden relative">
      <div
        className={` bg-black h-11/12 w-full translate-y-[80%]  z-100 absolute bottom-0 rounded-t-4xl transition-all duration-500 ease-in flex justify-between items-center flex-col`}
      >
        <div className="w-8 h-2 bg-black rounded-full m-auto -mt-4"></div>
      </div>
      <div className={` h-full duration-200 w-full bg-white`}></div>

      <button
        onClick={() => {
          if (page < 2) setPage(page + 1);
          else router.push("/login");
        }}
        className={`z-100 hover:cursor-pointer bg-white text-center p-8  rounded-full  absolute  bottom-0 mb-8 w-4/5 font-bold text-3xl `}
      >
        Continue
      </button>

      <div
        className={`z-100 flex flex-col items-start justify-between h-4/5  w-full text-2xl absolute text-center duration-200`}
      >
        <Image
          className={`delay-400 w-screen scale-150 -translate-y-[45%] mx-auto my-12 transition-scale duration-200 ease-out `}
          src="./cloud.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>

      <div
        className={`absolute z-[200] top-12 left-8 h-12 w-12 hover:rotate-3 hover:scale-110 `}
      >
        <Link href={"/getstarted"} className="">
          <Image
            className={`delay-300 duration-300   ${
              load ? "scale-100 rotate-0" : "scale-0 rotate-[720deg]"
            }`}
            src="./back.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </Link>
      </div>

      <div
        className={`translate-x-[${
          100 * (page * -1 + 1)
        }%] z-11 absolute transition-transform duration-300 w-full h-full m-auto flex items-center justify-center`}
      >
        <Image
          className={`delay-400 p-8 w-full mx-auto mb-24 duration-200 ease-out ${
            load ? "opacity-100" : " opacity-0"
          }`}
          src="./feat1.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
        <Image
          className={`delay-400 p-8 w-full mx-auto mb-24 duration-200 ease-out ${
            load ? "opacity-100" : " opacity-0"
          }`}
          src="./feat2.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
        <Image
          className={`delay-400 p-8 w-full mx-auto mb-24 duration-200 ease-out ${
            load ? "opacity-100" : " opacity-0"
          }`}
          src="./feat3.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
    </div>
  );
}
