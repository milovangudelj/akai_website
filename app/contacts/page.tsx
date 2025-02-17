import React from "react";
import Image from "next/image";
import Link from "next/link";
import akai from "../../public/akai-lg.svg";
import {
  InstagramLogo,
  Tree,
  TwitchLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

function Contacts() {
  return (
    <div className="h-full flex flex-row justify-between font-karla text-white text-xl bg-gray-background">
      <div className="grid grid-cols-1 overflow-y-scroll scrollbar-hide h-full md:w-1/2">
        <div className="flex flex-col pb-6 pt-10 px-10 md:col-start-1 md:col-end-2 md:text-2xl bg-gray-dark bg-opacity-80">
          <h1 className="text-5xl font-pfd mb-10 pt-6">Contacts</h1>

          <p className="text-white/70">
            You can get to know me better by visiting my social platforms.
            <br /> Don&apos;t be afraid to{" "}
            <span className="text-white italic">contact me</span> if you have
            any questions.
          </p>

          <div className="flex justify-between gap-3  flex-wrap py-6 mt-6">
            <h2 className="cursor-pointer  hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://www.instagram.com/ak_aik0/"}>
                <InstagramLogo size={32} />
              </Link>
            </h2>
            <h2 className="cursor-pointer  hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://www.twitch.tv/ak_aiko"}>
                <TwitchLogo size={32} />
              </Link>
            </h2>
            <h2 className="cursor-pointer  hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://twitter.com/ak_aik0"}>
                <TwitterLogo size={32} />
              </Link>
            </h2>
            <h2 className="cursor-pointer  hover:underline hover:text-akai-red text-2xl">
              <Link href={"https://linktr.ee/ak_aiko"}>
                <Tree size={32} />
              </Link>
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-center items-centertext-xl mt-6 pb-6 px-10 md:col-start-1 md:col-end-2 md:text-2xl bg-gray-dark bg-opacity-80 ">
          <h1 className="text-5xl pt-6 md:text-7xl font-pfd mb-10 text-akai-red">
            Let&apos;s work together!
          </h1>
          <p className="text-white/70">
            If you like what I do and want to build something together
            don&apos;t hesitate to contact me!
          </p>
          <p className="text-white italic cursor-pointer mt-8 xs:2xl sm:text-3xl hover:animate-bounce hover:underline hover:text-akai-red  ">
            <a href="mailto:kosiakov.arina@gmail.com">
              kosiakov.arina@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="hidden h-full pt-6 pb-3 bg-gray-dark bg-opacity-80 md:bg-opacity-0 md:relative md:col-start-2 md:row-span-full md:py-0 md:flex md:items-center md:justify-center md:w-1/2">
        <Image
          src={akai}
          alt="logo"
          className=" md:w-3/4 md:absolute md:right-0 md:bottom-3 opacity-20  md:opacity-100"
        ></Image>
      </div>
    </div>
  );
}

export default Contacts;
