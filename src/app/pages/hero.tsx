import React from "react";

import Image from "next/image";
import Container from "../components/container";
import Navbar from "../components/navbar";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[url('/assets/hero/hero-bg.jpg')] min-h-screen">
      <div className="md:pt-10 md:px-5 m-auto max-w-[1320px]">
        <Navbar />
      </div>
      <div className="pb-10 m-auto max-w-[1420px] px-5  bg-center">
        <div className="lg:flex lg:flex-row-reverse gap-20 mt-14 md:mt-28 items-center">
          <div className="basis-2/3  relative  lg:max-h-none max-h-[35vh] md:max-h-[45vh]  aspect-[13/9] m-auto">
            <Image
              src="/assets/hero/hero-van.png"
              alt="BBB Business A Plus"
              fill
              className="object-contain w-full"
            />
          </div>
          <div className="basis-1/3">
            <h1 className="text-black text-4xl  sm:text-5xl xl:text-6xl font-extrabold tracking-wide leading-[110%]">
              YOUR GO-TO
              <span className="text-primary block">CONTRACTORS</span> In
              VICTORIA
            </h1>
            <p className="mt-6 text-lg lg:text-xl max-w-[500px]">
              We are Victoria’s very best contractor. In business since 2002 and{" "}
              <span className="text-primary font-semibold">
                BBB A plus rating
              </span>{" "}
              since 2003.
            </p>
            <a href="#about">
              <div className="border-2 border-[#EEEEEE] hover:border-primary transition-all mt-6 md:text-lg text-black uppercase font-semibold py-4 px-8 rounded-sm bg-[#EEEEEE] inline-block">
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
