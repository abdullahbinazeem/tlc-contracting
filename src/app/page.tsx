import Image from "next/image";

import Container from "./components/container";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Container className="py-10 bg-[url('/assets/hero/hero-bg.jpg')] min-h-screen m-0 bg-center">
        <Navbar />
        <div className="md:flex md:flex-row-reverse mt-12 md:mt-28 items-center">
          <div className="relative flex-1  aspect-square max-h-[25vh] m-auto md:max-h-[40vh]">
            <Image
              src="/assets/hero/hero-graphic.png"
              alt="BBB Business A Plus"
              fill
              className="object-contain w-full md:mt-20"
            />
          </div>
          <div className="mt-12">
            <h1 className="text-black text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-wide leading-[110%]">
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
            <div className="mt-6 md:text-lg text-black uppercase font-semibold py-4 px-8 rounded-sm bg-[#EEEEEE] inline-block">
              See More
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
