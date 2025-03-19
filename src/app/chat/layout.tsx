import Image from "next/image";
import texture from "@/../public/chatext.svg";
import { MdSend } from "react-icons/md";
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
      <div className="h-20 w-full gap-4 bottom-0 absolute z-[1999] flex items-center justify-between px-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37.137"
            height="37.137"
            viewBox="0 0 37.137 37.137"
          >
            <path
              id="emoji-funny-square-svgrepo-com_1_"
              data-name="emoji-funny-square-svgrepo-com (1)"
              d="M2.844,9.918c-1.658,2.872-.681,6.517,1.272,13.807s2.93,10.935,5.8,12.593,6.517.681,13.807-1.272,10.935-2.93,12.593-5.8S37,22.727,35.045,15.437,32.115,4.5,29.244,2.844s-6.517-.681-13.807,1.272S4.5,7.046,2.844,9.918Zm10.03,16.257a1.318,1.318,0,0,1,1.6-.958,13.185,13.185,0,0,0,6.586-.117,13.185,13.185,0,0,0,5.762-3.192A1.319,1.319,0,0,1,28.655,23.8a14.769,14.769,0,0,1-2.02,1.633l.278.566a2.637,2.637,0,0,1-4.734,2.324l-.345-.7-.092.025a15.82,15.82,0,0,1-7.909.127A1.319,1.319,0,0,1,12.874,26.175ZM25.691,15.213c.377,1.407-.078,2.751-1.016,3s-2-.685-2.381-2.092.078-2.751,1.016-3S25.314,13.806,25.691,15.213Zm-11.2,5.732c.938-.251,1.393-1.6,1.016-3s-1.443-2.343-2.381-2.092-1.393,1.6-1.016,3S13.548,21.2,14.486,20.946Z"
              transform="translate(-1.012 -1.012)"
              fill="#fff"
              stroke="#292d32"
              strokeWidth="2"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex-1 bg-white py-2 pr-4 pl-6 rounded-full border-2 flex justify-between items-center gap-2">
          <input
            type="text"
            placeholder="Type your message here"
            className="flex-1 outline-none"
          />
          <MdSend className="text-2xl" />
        </div>
      </div>
      <div className="px-4 h-full w-full gap-4 flex flex-col-reverse mb-20 mt-24">
        {children}
      </div>
    </div>
  );
}
