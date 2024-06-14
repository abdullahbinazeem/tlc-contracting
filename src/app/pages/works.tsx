"use client";

import React, { useState } from "react";
import Container from "../components/container";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

const filters = [
  {
    title: "renovations",
    icon: "renovation",
    searchFor: "r",
  },
  {
    title: "plumbing",
    icon: "plumbing",
    searchFor: "pl",
  },
  {
    title: "carpentry",
    icon: "carpentry",
    searchFor: "c",
  },
  {
    title: "drywall",
    icon: "drywall",
    searchFor: "d",
  },
  {
    title: "tiling",
    icon: "tiling",
    searchFor: "t",
  },
  {
    title: "painting",
    icon: "painting",
    searchFor: "pa",
  },
];

const gallery = [
  {
    title: "c",
    index: 6,
    alt: "Carpentry Photo",
  },
  {
    title: "d",
    index: 5,
    alt: "Drywall Photo",
  },
  {
    title: "pa",
    index: 4,
    alt: "Painting Photo",
  },
  {
    title: "pl",
    index: 4,
    alt: "Plumbing Photo",
  },
  {
    title: "r",
    index: 6,
    alt: "Renovation Photo",
  },
  {
    title: "t",
    index: 8,
    alt: "Tiling Photo",
  },
];

let largest = 0;

for (let i = 0; i < gallery.length; i++) {
  if (gallery[i].index > largest) {
    largest = gallery[i].index;
  }
}

const Works = () => {
  const [seemore, setSeemore] = useState(0);
  const [filter, setFilter] = useState("");

  let count = 0;
  return (
    <div id="about" className="py-40 min-h-[50vh]">
      <Container className="">
        <div className="">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-lightblack font-semibold">
            See our transformations!
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-4 leading-[110%]">
            Our <span className="text-black">Works</span>
          </h1>
          <div className="flex gap-3 md:gap-6 mt-10 flex-wrap">
            {filters.map((filterItem, i) => (
              <div
                onClick={() => {
                  if (filterItem.searchFor != filter) {
                    setFilter(filterItem.searchFor);
                  } else {
                    setFilter("");
                  }
                }}
                key={filterItem.searchFor}
                className={cn(
                  "select-none cursor-pointer hover:bg-gray-100 hover:scale-110 transition-all  capitalize bg-gray-200 py-2 lg:py-3 px-4 lg:px-6 rounded-sm flex gap-2 items-center group",
                  filterItem.searchFor == filter
                    ? "bg-primary hover:bg-primary hover:bg-opacity-85"
                    : ""
                )}
              >
                {filterItem.searchFor == filter ? (
                  <MinusIcon
                    className="text-white group-hover:rotate-180 transition-all w-4 h-4 lg:w-6 lg:h-6"
                    strokeWidth={1.5}
                  />
                ) : (
                  <PlusIcon
                    className="text-primary group-hover:rotate-180 transition-all w-4 h-4 lg:w-6 lg:h-6"
                    strokeWidth={1.5}
                  />
                )}

                <p
                  className={cn(
                    "text-primary group-hover:font-semibold transition-all text-xs md:text-sm lg:text-base",
                    filterItem.searchFor == filter ? "text-white" : ""
                  )}
                >
                  {filterItem.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-0 px-5 md:px-3 mt-10 lg:mt-20">
        {[...Array(largest)].map((x, i) =>
          gallery.map((picture, index) => (
            <div
              key={picture.alt + " " + (i + 1)}
              className={cn(
                "relative aspect-square m-2 transition-all initial  group overflow-hidden",
                picture.index >= i + 1 && (picture.title == filter || !filter)
                  ? ++count > 8 + seemore
                    ? "scale-0 w-0 h-0 m-0"
                    : count > 4 + seemore
                    ? "max-[640px]:scale-0 max-[640px]:w-0 max-[640px]:h-0 max-[640px]:m-0"
                    : "block"
                  : "absolute scale-0 w-0 h-0 m-0"
              )}
            >
              <Image
                src={
                  "/assets/gallery/" + picture.title + "-" + (i + 1) + ".jpg"
                }
                alt={picture.alt + " " + (i + 1)}
                objectFit="cover"
                fill
                className="group-hover:scale-105 transition-all"
              />
            </div>
          ))
        )}
      </div>
      <div className="text-center">
        <p
          className={cn(
            "inline-block cursor-pointer rounded-sm border-primary border text-primary md:text-lg font-medium hover:scale-110 py-4 px-7 transition-all mt-10",
            seemore + 8 >= count
              ? seemore + 4 >= count
                ? "hidden"
                : "sm:hidden"
              : ""
          )}
          onClick={() => {
            setSeemore(seemore + 4);
          }}
        >
          Load More
        </p>
      </div>
    </div>
  );
};

export default Works;
