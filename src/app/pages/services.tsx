import React from "react";
import Container from "../components/container";

import Image from "next/image";
import { ChevronsRight } from "lucide-react";

const serviceList = [
  {
    icon: "renovation",
    title: "Renovation",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "renovation",
  },
  {
    icon: "plumbing",
    title: "Plumbing",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "plumbing",
  },
  {
    icon: "carpentry",
    title: "Carpentry",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "carpentry",
  },
  {
    icon: "drywall",
    title: "Drywall",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "drywall",
  },
  {
    icon: "tiling",
    title: "Tiling",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "tiling",
  },
  {
    icon: "painting",
    title: "Painting",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "painting",
  },
];

const Services = () => {
  return (
    <div className="bg-[#F8F9FB]">
      <div className="max-w-[1800px] m-auto px-5 sm:px-10 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {serviceList.map((service) => (
            <a className="" href="#" key={service.title}>
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl group">
                <Image
                  src={`/assets/services/images/${service.img}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-125 transition-all duration-[300ms]"
                />
                <div className="absolute w-full h-full z-10 bg-[#111] opacity-70 group-hover:scale-0 group-hover:rotate-180 transition-all duration-[300ms]" />
                <div className="absolute group-hover:bottom-10 bottom-[-25px] transition-all  left-6 sm:left-10 z-20 duration-300">
                  <div className="flex gap-4 mb-4 items-center">
                    <Image
                      src={`/assets/services/icon/${service.icon}.svg`}
                      alt={service.title + " Icon"}
                      width={42}
                      height={42}
                      className="text-white w-8 sm:w-12 h-8 sm:h-12"
                    />
                    <h1 className=" text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                      {service.title}
                    </h1>
                  </div>
                  <p className="bg-black sm:text-base text-sm inline text-white font-semibold opacity-0 group-hover:opacity-100 transition-all">
                    {service.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-20">
          <a
            href=""
            className=" relative hover:bg-black hover:-translate-y-4 transition-all py-3 sm:py-4 px-8 sm:px-10 pr-24 sm:pr-28 sm:text-lg md:text-xl overflow-hidden uppercase text-white font-semibold  bg-primary inline-block "
          >
            Get Started
            <div className="absolute  top-0 right-0 h-full px-5 sm:px-6 after:absolute after:left-[50%] after:w-[50%] after:bg-[#EEEEEE] after:h-full grid place-content-center">
              <ChevronsRight className="relative z-20" />
              <div className="absolute top-[-25%]  w-[90%] h-[150%] bg-black z-10 -rotate-12" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
