import React from "react";

import Image from "next/image";
import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Image
        src="/assets/hero/hero-bg.jpg"
        className="object-cover"
        alt="bg-img"
        fill
      />
      <div className="z-[10] m-auto max-w-[1320px] md:px-5 md:pt-10">
        <Navbar />
      </div>
      <div className="relative m-auto max-w-[1420px] bg-center px-5 pb-10">
        <div className="mt-14 items-center gap-20 md:mt-28 lg:flex lg:flex-row-reverse">
          <div className="relative z-[0] m-auto aspect-[13/9] max-h-[35vh] basis-2/3 md:max-h-[45vh] lg:max-h-none">
            <Image
              src="/assets/hero/hero-van.png"
              alt="BBB Business A Plus"
              fill
              className="w-full object-contain"
            />
          </div>
          <div className="basis-1/2">
            <h1 className="text-4xl font-extrabold leading-[110%] tracking-wide text-black sm:text-5xl xl:text-6xl">
              <span className="xl:text-5xl">QUALITY</span>
              <span className="block text-primary">
                RENOVATIONS & REPAIRS
              </span>{" "}
            </h1>
            <h1 className="mt-2 text-xl font-medium text-black sm:text-2xl xl:text-3xl">
              Serving Southern Vancouver Island
            </h1>
            <p className="mt-6 max-w-[500px] text-lg lg:text-xl">
              Your trusted contractor on Southern Vancouver Island. In business
              since 2002 and{" "}
              <span className="font-semibold text-primary">
                BBB A plus rating
              </span>{" "}
              since 2003.
            </p>
            <a href="#about">
              <div className="mt-6 inline-block rounded-sm border-2 border-[#EEEEEE] bg-[#EEEEEE] px-8 py-4 font-semibold uppercase text-black transition-all hover:border-primary md:text-lg">
                See More
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
