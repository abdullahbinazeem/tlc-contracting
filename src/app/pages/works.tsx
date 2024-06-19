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
    <div id="about" className="min-h-[50vh] py-40">
      <Container className="">
        <div className="">
          <h2 className="text-2xl font-semibold text-lightblack md:text-3xl lg:text-4xl">
            See our transformations!
          </h2>
          <h1 className="mt-4 text-4xl font-bold leading-[110%] text-primary md:text-5xl lg:text-6xl">
            Our <span className="text-black">Works</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-3 md:gap-6">
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
                  "group flex cursor-pointer select-none items-center gap-2 rounded-sm bg-gray-200 px-4 py-2 capitalize transition-all hover:scale-110 hover:bg-gray-100 lg:px-6 lg:py-3",
                  filterItem.searchFor == filter
                    ? "bg-primary hover:bg-primary hover:bg-opacity-85"
                    : "",
                )}
              >
                {filterItem.searchFor == filter ? (
                  <MinusIcon
                    className="h-4 w-4 text-white transition-all group-hover:rotate-180 lg:h-6 lg:w-6"
                    strokeWidth={1.5}
                  />
                ) : (
                  <PlusIcon
                    className="h-4 w-4 text-primary transition-all group-hover:rotate-180 lg:h-6 lg:w-6"
                    strokeWidth={1.5}
                  />
                )}

                <p
                  className={cn(
                    "text-xs text-primary transition-all group-hover:font-semibold md:text-sm lg:text-base",
                    filterItem.searchFor == filter ? "text-white" : "",
                  )}
                >
                  {filterItem.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="mt-10 grid gap-0 px-5 sm:grid-cols-2 md:grid-cols-3 md:px-3 lg:mt-20 xl:grid-cols-4">
        {[...Array(largest)].map((x, i) =>
          gallery.map((picture, index) => (
            <div
              key={picture.alt + " " + (i + 1)}
              className={cn(
                "initial group relative m-2 aspect-square overflow-hidden transition-all",
                picture.index >= i + 1 && (picture.title == filter || !filter)
                  ? ++count > 8 + seemore
                    ? "m-0 h-0 w-0 scale-0"
                    : count > 4 + seemore
                      ? "max-[640px]:m-0 max-[640px]:h-0 max-[640px]:w-0 max-[640px]:scale-0"
                      : "block"
                  : "absolute m-0 h-0 w-0 scale-0",
              )}
            >
              {picture.index >= i + 1 ? (
                <Image
                  src={
                    "/assets/gallery/" + picture.title + "-" + (i + 1) + ".jpg"
                  }
                  alt={picture.alt + " " + (i + 1)}
                  fill
                  className="object-cover transition-all group-hover:scale-105"
                />
              ) : (
                ""
              )}
            </div>
          )),
        )}
      </div>
      <div className="text-center">
        <p
          className={cn(
            "mt-10 inline-block cursor-pointer rounded-sm border border-primary px-7 py-4 font-medium text-primary transition-all hover:scale-110 md:text-lg",
            seemore + 8 >= count
              ? seemore + 4 >= count
                ? "hidden"
                : "sm:hidden"
              : "",
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
