"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import akai from "../public/akai-lg.svg";
import Link from "next/link";

function Home() {
  return (
    <main className="h-full flex flex-row justify-between text-white text-xl bg-gray-background">
      <div className="grid grid-cols-1 font-karla overflow-y-scroll scrollbar-hide h-full md:w-1/2">
        <div className="bg-gray-dark bg-opacity-80 pb-3 pt-8 px-10 mb-6 md:col-start-1 md:col-end-2  md:text-2xl ">
          <h1 className="text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/about"}>About me</Link>
          </h1>
          <div className="flex flex-col gap-4 text-white/70">
            <p>
              Hey there, I&apos;m Akai, a game industry and technology
              enthusiast with a diverse set of passions!
            </p>

            <p>
              {" "}
              Currently pursuing my dreams as an
              <span className="text-white italic"> engineering student</span>,
              I&apos;m also a versatile
              <span className="text-white italic"> content creator</span>,
              <span className="text-white italic"> artist</span> and sometimes
              web developer.
            </p>

            <p>
              {" "}
              Join me in this adventure as I bring together my passions, skills,
              and determination, striving to create engaging games and memorable
              experiences.
            </p>

            <p> Let&apos;s embark on this thrilling ride together!</p>
          </div>
        </div>

        <div className="pb-3 pt-8 px-10  mb-6 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/portfolio"}>Portfolio</Link>
          </h1>
          <div className="flex flex-col gap-4 text-white/70">
            <p>
              Welcome to my portfolio! Here, you&apos;ll find a collection of my
              creative endeavors and technical accomplishments.
            </p>
            <p>
              Thank you for visiting, and I hope you enjoy exploring the pieces
              of my journey showcased here. If you&apos;d like to collaborate or
              discuss any opportunities, don&apos;t hesitate to get in touch!{" "}
            </p>{" "}
            <Link className=" text-akai-red" href={"/contacts"}>
              Let&apos;s create something incredible together!
            </Link>
          </div>
        </div>

        <div className="pb-3 pt-8 px-10 mb-6 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2  md:text-2xl">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"https://www.twitch.tv/ak_aiko"}>Twitch</Link>
          </h1>
          <div className="flex flex-col gap-4 text-white/70">
            <p>
              Over the past 2 years, I&apos;ve been on an incredible streaming
              journey, dedicated to spreading joy and providing quality time for
              all of you.
            </p>
            <p>
              My first and foremost priority is to make each and every one of
              you happy through exciting gameplay and engaging content.
            </p>
            <p>
              If you&apos;re looking for more interactions and behind-the-scenes
              fun, don&apos;t forget to join{" "}
              <Link
                className=" text-akai-red"
                href={"https://discord.gg/PfhJVSuyJD"}
              >
                {" "}
                my Discord server
              </Link>
              .
            </p>

            <p>
              {" "}
              It&apos;s the perfect place to stay connected and be a part of our
              growing community.
            </p>
            <p>
              {" "}
              So, grab your favorite snack, sit back, and let&apos;s continue
              this adventure together. Thank you all for being a part of this
              amazing journey! See you on the stream!
            </p>
          </div>
        </div>

        <div className="pb-3 pt-8 px-10 mb-6 bg-gray-dark bg-opacity-80 md:col-start-1 md:col-end-2 md:text-2xl ">
          <h1 className=" text-5xl font-pfd mb-10 hover:text-akai-red">
            <Link href={"/contacts"}>Contacts</Link>
          </h1>
          <div className="text-white/70">
            <p>
              Feel free to reach out to me through any of these platforms.
              I&apos;m looking forward to collaborate with you!
            </p>
          </div>
        </div>
      </div>

      <div className="hidden h-full pt-6 pb-3 bg-gray-dark bg-opacity-80 md:bg-opacity-0 md:relative md:col-start-2 md:row-span-full md:py-0 md:flex md:items-center md:justify-center md:w-1/2">
        <Image
          src={akai}
          alt="logo"
          className="md:w-3/4 md:absolute md:right-0 md:bottom-3 opacity-20  md:opacity-100"
        ></Image>
      </div>
    </main>
  );
}

export default Home;
