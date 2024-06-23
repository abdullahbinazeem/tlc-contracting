import React from "react";
import Container from "../components/container";

import Image from "next/image";
import { ChevronsRight } from "lucide-react";

const serviceList = [
  {
    icon: "renovation",
    url: "renovation",
    title: "Renovation",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "renovation",
  },
  {
    icon: "plumbing",
    url: "plumbing",
    title: "Plumbing",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "plumbing",
  },
  {
    icon: "carpentry",
    url: "carpentry",
    title: "Carpentry",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "carpentry",
  },
  {
    icon: "drywall",
    url: "drywall",
    title: "Drywall",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "drywall",
  },
  {
    icon: "tiling",
    url: "tiling",
    title: "Tiling",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "tiling",
  },
  {
    icon: "painting",
    url: "painting",
    title: "Painting",
    description:
      "We manage other contractors such as plumbers, carpenter, electricians.",
    img: "painting",
  },
];

const Services = () => {
  return (
    <div className="bg-[#F8F9FB]">
      <div className="m-auto max-w-[1800px] px-5 py-20 sm:px-10">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <a
              className=""
              href={`/services/${service.url}`}
              key={service.title}
            >
              <div className="group relative h-[400px] overflow-hidden rounded-xl md:h-[500px]">
                <Image
                  src={`/assets/services/images/${service.img}.jpg`}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-[300ms] group-hover:scale-125"
                />
                <div className="absolute z-10 h-full w-full bg-[#111] opacity-70 transition-all duration-[300ms] group-hover:rotate-180 group-hover:scale-0" />
                <div className="absolute bottom-10 bottom-[-25px] left-6 z-20 transition-all duration-300 sm:left-10">
                  <div className="mb-4 flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h1>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-20 text-center">
          <a
            href="#form"
            className="relative inline-block overflow-hidden bg-primary px-8 py-3 pr-24 font-semibold uppercase text-white transition-all hover:-translate-y-4 hover:bg-black sm:px-10 sm:py-4 sm:pr-28 sm:text-lg md:text-xl"
          >
            Get Started
            <div className="absolute right-0 top-0 grid h-full place-content-center px-5 after:absolute after:left-[50%] after:h-full after:w-[50%] after:bg-[#F8F9FB] sm:px-6">
              <ChevronsRight className="relative z-20" />
              <div className="absolute top-[-25%] z-10 h-[150%] w-[90%] -rotate-12 bg-black" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
