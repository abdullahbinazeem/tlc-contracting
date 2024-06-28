import SubpageHero from "@/app/components/subpage-hero";
import Image from "next/image";

import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Services | TLC Contracting Inc.",
  description:
    "Choose your desired home repair or renovation service with TLC Contracting Inc. Serving Southern Vancouver Island, our comprehensive offerings include expert tiling, carpentry, flooring, painting, plumbing, and drywall solutions. Explore our specialized services and select the perfect option to enhance your home. Contact TLC Contracting today to get started on transforming your space with quality craftsmanship and professional expertise.",
};
const serviceList = [
  {
    url: "renovation",
    title: "Renovation",

    img: "renovation",
  },
  {
    url: "plumbing",
    title: "Plumbing",

    img: "plumbing",
  },
  {
    url: "carpentry",
    title: "Carpentry",

    img: "carpentry",
  },
  {
    url: "drywall",
    title: "Drywall",

    img: "drywall",
  },
  {
    icon: "tiling",
    url: "tiling",
    title: "Tiling",

    img: "tiling",
  },
  {
    icon: "painting",
    url: "painting",
    title: "Painting",

    img: "painting",
  },
  {
    url: "flooring",
    title: "Flooring",
    img: "flooring",
  },
];

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Our Offered"
        stitle="SERVICES"
        cta=""
        ctaUrl="#works"
      />
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
                  alt={service.title + " Services Page"}
                  fill
                  className="object-cover transition-all duration-[300ms] group-hover:scale-125"
                />
                <div className="absolute z-10 h-full w-full bg-[#111] opacity-70 transition-all duration-[300ms] group-hover:rotate-180 group-hover:scale-0" />
                <div className="absolute bottom-10 left-6 z-20 transition-all duration-300 sm:left-10">
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
      </div>
    </div>
  );
};

export default page;
