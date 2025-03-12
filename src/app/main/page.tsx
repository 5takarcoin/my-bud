"use client";

import AllSet from "@/components/AllSet";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen  bg-white shadow-lg overflow-hidden relative">
      <div className="z-[100] mt-16 h-full w-full flex flex-col items-center justify-between">
        <div></div>

        <div className="relative h-full w-full items-center justify-between flex flex-col pb-4">
          <div className="absolute flex gap-4 -mt-6"></div>

          <button
            onClick={() => {
              router.push("/main");
            }}
            className={`z-100 hover:cursor-pointer bg-mblk text-white text-center p-4  rounded-lg mb-8 w-4/5 font-bold text-3xl `}
          >
            Noiccee bebe
          </button>
        </div>
      </div>
    </div>
  );
}
