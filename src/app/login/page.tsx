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
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="emailin">Email Adress</label>
              <input
                className="p-4 mt-2 bg-white rounded-lg"
                id="emailin"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="passin">Password</label>
              <input
                className="p-4 mt-2 bg-white rounded-lg relative"
                id="passin"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center text-sm">
                {/* React Icon */}
                <div className="h-4 w-4 rounded-md bg-white"></div>
                <div>Remember me next time</div>
              </div>
              <div>
                <Link
                  className="underline text-blue-500 text-sm"
                  href="/forgotpassword"
                >
                  forgot password?
                </Link>
              </div>
            </div>
            <div>
              <button className="hover:cursor-pointer mt-2 bg-mblk text-white text-center p-4  rounded-lg  mb-8 w-full font-bold text-xl">
                Login
              </button>
            </div>
          </div>

          <div className="flex font-bold justify-between items-center flex-col gap-4">
            <div className="w-full flex gap-4 items-center">
              <span className="flex-1 h-[2px] rounded-full bg-mblk"></span>
              <p>or connect with</p>
              <span className="flex-1 h-[2px] rounded-full bg-mblk"></span>
            </div>
            <div className="flex gap-8 items-center">
              <button>
                <Image
                  src="./google.svg"
                  alt="glass"
                  width={48}
                  height={48}
                  priority
                />
              </button>
              <button>
                <Image
                  src="./facebook.svg"
                  alt="glass"
                  width={48}
                  height={48}
                  priority
                />
              </button>
              <button>
                <Image
                  src="./email.svg"
                  alt="glass"
                  width={48}
                  height={48}
                  priority
                />
              </button>
            </div>
            <p>Don{`'`}t have an account?</p>
          </div>
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
        <Link href={"/features"} className="">
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
          className={`delay-400 w-full mx-auto mb-24 duration-200 ease-out ${
            load ? "opacity-100" : " opacity-0"
          }`}
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
