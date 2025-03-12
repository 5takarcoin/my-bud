"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/allset");
    }, 1000);
  });
  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen  bg-white shadow-lg overflow-hidden relative">
      <div className="flex justify-center h-full w-full">
        <Image
          className="w-3/5 opacity-40"
          src="/creating.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
        <Image
          className="w-3/5 animate-pulse opacity-100 -ml-[60%]"
          src="/creating.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </div>
    </div>
  );
}
