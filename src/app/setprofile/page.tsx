"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(false);

  const [page, setPage] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen  bg-white shadow-lg overflow-hidden relative">
      <div
        className={` flex flex-col rotate-180 items-start justify-between h-4/5  w-full text-2xl absolute text-center duration-200`}
      >
        <Image
          className={`-z-50 delay-400 w-screen scale-150 -translate-y-full mx-auto my-12 transition-scale duration-200 ease-out  ${
            load ? "opacity-100" : " opacity-0"
          }`}
          src="/cloud.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
      {started && (
        <div
          className={`absolute z-[200] top-12 left-8 h-12 w-12 hover:rotate-3 hover:scale-110 `}
        >
          <button onClick={() => setStarted(false)} className="">
            <Image
              className={`delay-300 duration-300 `}
              src="/back.svg"
              alt="glass"
              width={180}
              height={38}
              priority
            />
          </button>
        </div>
      )}

      <div className="z-[100] mt-16 h-full w-full flex flex-col items-center justify-between">
        {!started ? (
          <>
            <div className="flex flex-col items-center text-purp">
              <h2 className="text-6xl">Great Work!</h2>
              <p className="text-3xl">You{`'`}re on mybud now</p>
            </div>
            <div className="flex flex-col justify-between w-full items-center gap-8">
              <p></p>
              <p></p>
              <p className="text-2xl">Tell us more about youself!</p>
              <button
                onClick={() => {
                  if (!started) setStarted(true);
                  else setPage(page + 1);
                }}
                className={`z-100 hover:cursor-pointer bg-mblk text-white text-center p-4  rounded-lg mb-8 w-4/5 font-bold text-3xl `}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div></div>
        )}

        {started && page === 0 ? (
          <div className="bg-red-200 relative h-full w-full items-center justify-between flex flex-col pb-4">
            <div className="absolute w-full">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  className="h-1 w-8 gap-2 bg-blue-300 rounded-full"
                  key={i}
                ></div>
              ))}
            </div>
            <p className="text-2xl">Let{`'`}s setup your profile</p>

            <button
              onClick={() => {
                if (!started) setStarted(true);
                else setPage(page + 1);
              }}
              className={`z-100 hover:cursor-pointer bg-mblk text-white text-center p-4  rounded-lg mb-8 w-4/5 font-bold text-3xl `}
            >
              Next
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <div className="flex justify-end w-full">
          <Image
            className="-translate-8"
            src="/ghost.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </div>
      </div>
    </div>
  );
}
