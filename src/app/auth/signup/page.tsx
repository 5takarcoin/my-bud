import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-4 -mt-4">
        <div className="flex flex-col">
          <label htmlFor="userin">Username</label>
          <input
            className="p-4 mt-2 bg-white rounded-lg"
            id="userin"
            type="text"
            placeholder="email"
          />
        </div>
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

        <div>
          <button className="hover:cursor-pointer mt-2 bg-mblk text-white text-center p-4  rounded-lg  mb-8 w-full font-bold text-xl">
            Sign up
          </button>
        </div>
      </div>

      <div className="flex font-bold justify-between items-center flex-col gap-2 -mt-8">
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
          Already have an account?{" "}
          <span className="text-blue-500 underline">
            <Link href={"/auth/login"}>Login</Link>
          </span>
        </p>
      </div>
    </>
  );
}
