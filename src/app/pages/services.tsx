import React from "react";
import Container from "../components/container";

import Image from "next/image";

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
    <div className="bg-[#EEEEEE]">
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
                      className="text-white h-8 sm:w-12 h-8 sm:h-12"
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
      </div>
    </div>
  );
};

export default Services;
