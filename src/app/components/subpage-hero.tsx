import Container from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import React from "react";

type Props = {
  title: string;
  stitle: string;
  cta: string;
  ctaUrl: string;
};

const SubpageHero = (props: Props) => {
  return (
    <div className="border-b-2 bg-[url('/assets/hero/hero-bg.jpg')] bg-bottom">
      <div className="m-auto max-w-[1320px] md:px-5 md:pt-10">
        <Navbar />
      </div>
      <Container className="m-auto bg-center px-5 pb-20">
        <div className="mt-14 items-center gap-20 md:mt-28">
          <h1 className="text-4xl font-extrabold leading-[110%] tracking-wide text-black sm:text-5xl xl:text-6xl">
            <span className="block uppercase text-primary">{props.title}</span>{" "}
            {props.stitle}
          </h1>
          {props.cta && (
            <a href={props.ctaUrl}>
              <div className="mt-8 inline-block rounded-sm border-2 border-[#EEEEEE] bg-[#EEEEEE] px-7 py-3 text-sm font-semibold uppercase text-black transition-all hover:border-primary md:text-base">
                {props.cta}
              </div>
            </a>
          )}{" "}
        </div>
      </Container>
    </div>
  );
};

export default SubpageHero;
