"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [menu, setMenu] = useState(false);

  return (
    <div className="m-auto min-h-[900px] aspect-[8/16] flex flex-col items-center h-screen shadow-lg overflow-hidden relative">
      <div className="h-12 w-full absolute z-[999] flex items-center justify-between p-8 py-12">
        <button className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.001"
            height="19.057"
            viewBox="0 0 21.001 19.057"
          >
            <path
              id="Union_6"
              data-name="Union 6"
              d="M956,9613.056a1,1,0,0,1-1-1v-1.5a1,1,0,0,1,1-1h19a1,1,0,0,1,1,1v1.5a1,1,0,0,1-1,1Zm0-7.777a1,1,0,0,1-1-1v-1.5a1,1,0,0,1,1-1h19a1,1,0,0,1,1,1v1.5a1,1,0,0,1-1,1Zm0-7.778a1,1,0,0,1-1-1V9595a1,1,0,0,1,1-1h19a1,1,0,0,1,1,1v1.5a1,1,0,0,1-1,1Z"
              transform="translate(-955 -9593.999)"
              fill="#292d32"
            />
          </svg>
        </button>
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
      {/* Come Here */}
      <div className="h-full w-full absolute z-[999] flex items-center justify-between p-8 py-12">
        Menu
      </div>

      <div className="h-20 w-full bottom-0 bg-mblk absolute z-[1999] flex items-center justify-around px-4">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.507"
            height="34.507"
            viewBox="0 0 34.507 34.507"
          >
            <path
              id="home-wifi-angle-svgrepo-com"
              d="M35.929,12.136c.932,1.945.605,4.22-.05,8.77L35.4,24.249c-.841,5.845-1.261,8.767-3.289,10.513s-5,1.746-10.947,1.746H17.345c-5.946,0-8.92,0-10.947-1.746S3.95,30.093,3.109,24.249l-.481-3.343c-.655-4.55-.982-6.825-.05-8.77S5.5,9.009,9.465,6.644l2.389-1.423C15.46,3.074,17.262,2,19.254,2s3.794,1.074,7.4,3.221l2.389,1.423C33.011,9.009,35,10.191,35.929,12.136Z"
              transform="translate(-2 -2)"
              fill="#fefffa"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39.337"
            height="38.95"
            viewBox="0 0 39.337 38.95"
          >
            <path
              id="Subtraction_158"
              data-name="Subtraction 158"
              d="M974.86,9634.95a21.711,21.711,0,0,1-9.143-2.169,3.288,3.288,0,0,0-1.466-.356,2.939,2.939,0,0,0-.751.1l-4.3,1.151a2.5,2.5,0,0,1-2.647-.9,2.487,2.487,0,0,1-.429-2.175l1.149-4.3a3.147,3.147,0,0,0-.256-2.22A19.335,19.335,0,0,1,959,9603.705a19.619,19.619,0,1,1,15.864,31.245Zm-5.2-21.91h10.011c.6,2.185,2.216,3.651,4.019,3.651,2.349,0,4.261-2.457,4.261-5.477s-1.911-5.477-4.261-5.477c-2.176,0-4,2.093-4.234,4.867h-9.578c-.24-2.775-2.06-4.867-4.234-4.867-2.349,0-4.261,2.457-4.261,5.477s1.911,5.477,4.261,5.477c1.8,0,3.415-1.467,4.016-3.65Z"
              transform="translate(-954.998 -9596)"
              fill="#fefffa"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26.712"
            height="34.508"
            viewBox="0 0 26.712 34.508"
          >
            <g id="notification-svgrepo-com" transform="translate(0 0)">
              <path
                id="Path_83"
                data-name="Path 83"
                d="M30.407,23.024l-1.736-2.882a6.451,6.451,0,0,1-.695-2.57V13.179a10.279,10.279,0,0,0-20.559,0v4.393a6.3,6.3,0,0,1-.695,2.552l-1.754,2.9a4.058,4.058,0,0,0,2.275,6.129,32.475,32.475,0,0,0,10.453,1.7A32.938,32.938,0,0,0,28.15,29.171a4.187,4.187,0,0,0,2.257-6.147Z"
                transform="translate(-4.311 -1.558)"
                fill="#fefffa"
              />
              <path
                id="Path_84"
                data-name="Path 84"
                d="M18.846,4.683a12.4,12.4,0,0,0-4.533-.854A11.961,11.961,0,0,0,9.8,4.683a5.153,5.153,0,0,1,9.045,0Z"
                transform="translate(-0.967 -2)"
                fill="#fefffa"
              />
              <path
                id="Path_85"
                data-name="Path 85"
                d="M18.99,20.017a5.234,5.234,0,0,1-4.914,3.455A5.149,5.149,0,0,1,10.4,21.927,4.794,4.794,0,0,1,9.18,20c.226.035.451.052.695.087.4.052.816.1,1.233.139.99.087,2,.139,3,.139.99,0,1.979-.052,2.952-.139.365-.035.729-.052,1.077-.1C18.417,20.087,18.7,20.052,18.99,20.017Z"
                transform="translate(-0.725 11.035)"
                fill="#fefffa"
              />
            </g>
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.761"
            height="34.509"
            viewBox="0 0 23.761 34.509"
          >
            <g id="profile-svgrepo-com" transform="translate(0 0)">
              <path
                id="Path_86"
                data-name="Path 86"
                d="M15.574,17.451a3.167,3.167,0,0,0-.575,0,7.743,7.743,0,1,1,.575,0Z"
                transform="translate(-3.702 -2)"
                fill="#fefffa"
              />
              <path
                id="Path_87"
                data-name="Path 87"
                d="M8.507,15.578C4.292,18.4,4.292,23,8.507,25.8c4.79,3.205,12.647,3.205,17.437,0,4.216-2.822,4.216-7.421,0-10.225C21.172,12.391,13.315,12.391,8.507,15.578Z"
                transform="translate(-5.346 6.301)"
                fill="#fefffa"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className=" h-full w-full flex flex-col items-center mb-20 ">
        {children}
      </div>
      <div className="absolute bottom-20 h-24 w-24 right-0 z-[1999] flex items-center justify-between">
        <Link href={"/chat"}>
          <Image
            className="hover:scale-105 duration-75 transition-transform"
            src="/floating.svg"
            alt="glass"
            width={180}
            height={38}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
