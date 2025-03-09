"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex flex-col gap-4">
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
            Hlw, A reset link has been sent to your email please check the spam
            box also
          </p>

          <Link
            href={"/auth/login"}
            className="hover:cursor-pointer mt-2 bg-mblk text-white text-center p-4  rounded-lg  mb-8 w-full font-bold text-xl"
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
