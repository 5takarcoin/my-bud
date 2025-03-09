"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
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
              href="/auth/recovery"
            >
              forgot password?
            </Link>
          </div>
        </div>
        <div>
          <button
            onClick={() => router.push("/setprofile")}
            className="hover:cursor-pointer mt-2 bg-mblk text-white text-center p-4  rounded-lg  mb-8 w-full font-bold text-xl"
          >
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
              src="/google.svg"
              alt="glass"
              width={48}
              height={48}
              priority
            />
          </button>
          <button>
            <Image
              src="/facebook.svg"
              alt="glass"
              width={48}
              height={48}
              priority
            />
          </button>
          <button>
            <Image
              src="/email.svg"
              alt="glass"
              width={48}
              height={48}
              priority
            />
          </button>
        </div>
        <p>
          Don{`'`}t have an account?{" "}
          <span className="text-blue-500 underline">
            <Link href={"/auth/signup"}>Sign up</Link>
          </span>
        </p>
      </div>
    </>
  );
}
