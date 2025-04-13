import Image from "next/image";
import texture from "@/../public/chatext.svg";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      style={{
        backgroundImage: `url(${texture})`,
      }}
      className="m-auto bg-pink min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen shadow-lg overflow-hidden relative"
    >
      <div className="h-12 w-full absolute z-[999] flex items-center justify-between p-8 py-10 border-b">
        <Link href={"/main"} className="flex items-center justify-center">
          <div className="flex items-center">
            <Image
              className="w-16"
              src="/floating.svg"
              alt="glass"
              width={180}
              height={38}
              priority
            />

            <h3 className="text-2xl font-bold">My Bud</h3>
          </div>
        </Link>
        <div className="flex gap-4">
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.054"
              height="19.055"
              viewBox="0 0 19.054 19.055"
            >
              <g id="Group_89" data-name="Group 89" transform="translate(0 0)">
                <path
                  id="Path_111"
                  data-name="Path 111"
                  d="M20.616.769a.916.916,0,0,0-1.3,0l-7,7a.925.925,0,0,0-.234.387l-1.143,3.817a.919.919,0,0,0,.234.916.906.906,0,0,0,.652.27.98.98,0,0,0,.264-.037L15.9,11.981a.925.925,0,0,0,.387-.234l7-7a.92.92,0,0,0,0-1.3Z"
                  transform="translate(-4.506 -0.497)"
                  fill="#292d32"
                />
                <path
                  id="Path_112"
                  data-name="Path 112"
                  d="M18.632,9.1a.922.922,0,0,0-.922.922v6.146a1.538,1.538,0,0,1-1.537,1.537H3.881a1.538,1.538,0,0,1-1.537-1.537V3.881A1.538,1.538,0,0,1,3.881,2.344h6.146a.922.922,0,0,0,0-1.844H3.881A3.385,3.385,0,0,0,.5,3.881V16.173a3.385,3.385,0,0,0,3.381,3.381H16.173a3.385,3.385,0,0,0,3.381-3.381V10.027A.922.922,0,0,0,18.632,9.1Z"
                  transform="translate(-0.5 -0.498)"
                  fill="#292d32"
                />
              </g>
            </svg>
          </button>
          <button className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="19"
              viewBox="0 0 4 19"
            >
              <g
                id="Group_90"
                data-name="Group 90"
                transform="translate(-405 -18)"
              >
                <circle
                  id="Ellipse_58"
                  data-name="Ellipse 58"
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(409 18) rotate(90)"
                  fill="#292d32"
                />
                <circle
                  id="Ellipse_59"
                  data-name="Ellipse 59"
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(409 26) rotate(90)"
                  fill="#292d32"
                />
                <circle
                  id="Ellipse_60"
                  data-name="Ellipse 60"
                  cx="2"
                  cy="2"
                  r="2"
                  transform="translate(409 33) rotate(90)"
                  fill="#292d32"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
