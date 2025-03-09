"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(true);

  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen bg-white shadow-lg overflow-hidden relative">
      <div
        className={`h-11/12 w-full translate-y-[35%] bg-cyan z-100 absolute bottom-0 rounded-t-4xl transition-all duration-500 ease-in flex justify-between items-center flex-col`}
      >
        <div className="w-8 h-2 bg-mblk rounded-full m-auto -mt-4"></div>
        <div
          className={`z-[200] delay-100 flex flex-col p-8 my-4 absolute top-0 w-full h-3/5 gap-4 duration-200`}
        >
          {!sent ? (
            <>
              <div className="flex flex-col">
                <label htmlFor="emailin">
                  Enter Registered Email Adress or Phone
                </label>
                <input
                  className="p-4 mt-2 bg-white rounded-lg"
                  id="emailin"
                  type="text"
                  placeholder="email"
                />
              </div>

              <div>
                <button
                  onClick={() => setSent(true)}
                  className="hover:cursor-pointer mt-2 bg-mblk text-white text-center p-4  rounded-lg  mb-8 w-full font-bold text-xl"
                >
                  Get Reset Link
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-center text-sm font-bold">
                Hlw, A reset link has been sent to your email please check the
                spam box also
              </p>

              <Link
                href={"/login"}
                className="hover:cursor-pointer mt-2 bg-mblk text-white text-center p-4  rounded-lg  mb-8 w-full font-bold text-xl"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
      <div className={` h-full duration-200 w-full bg-pink`}></div>

      <div
        className={`z-[200] flex flex-col p-8 -my-4 absolute  bottom-0 w-full h-3/5 gap-4`}
      ></div>

      <div
        className={`absolute z-[200] top-12 left-8 h-12 w-12 hover:rotate-3 hover:scale-110 `}
      >
        <Link href={"/login"} className="">
          <Image
            src="./back.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </Link>
      </div>

      <div className="z-11 absolute h-full m-auto flex items-start my-12 justify-center">
        <Image
          className={`delay-400 w-full mx-auto mb-24 duration-200 ease-out`}
          src="./platf.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
    </div>
  );
}
