import Image from "next/image";
import { FiUpload } from "react-icons/fi";
import { TiUserAdd } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <section className="w-full">
        <Image
          className={` delay-[700ms] w-full duration-200  `}
          src="/cover.svg"
          alt="glass"
          width={180}
          height={38}
          priority
        />
      </section>
      <section className="w-full">
        <div className="flex justify-between m-4">
          <div className="">
            <p className="font-bold">Sanim Ahmed Niloy</p>
            <p className="text-sm font-bold">@username_1234</p>
            <p className="mt-2 text-xs font-bold">
              Joined on 01 September 2024
            </p>
          </div>
          <div className="flex gap-2">
            <p className="flex flex-col items-center justify-center text-center font-bold">
              <span>56</span>
              <span className="text-xs">Followers</span>
            </p>
            <p className="flex flex-col items-center justify-center text-center font-bold">
              <span>102</span>
              <span className="text-xs">Following</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <p></p>
          <button className="border-2 flex items-center justify-center h-16 rounded-full w-4/5 capitalize text-2xl font-bold">
            <p className="flex gap-2 items-center">
              <span>Invite Friends</span>
              <span>
                <TiUserAdd />
              </span>
            </p>
          </button>
          <button className="border-2 h-16 rounded-full w-1/5 items-center justify-center flex text-4xl">
            <FiUpload />
          </button>
          <p></p>
        </div>
      </section>
      <section className="p-8 h-full w-full">
        <div className="rounded-2xl bg-gray-200 w-full h-full flex items-center justify-center">
          <p className="text-gray-600 font-bold text-xl">Coming Soon ...</p>
        </div>
      </section>
    </>
  );
}
