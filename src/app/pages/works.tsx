"use client";

import React, { useState } from "react";
import Container from "../components/container";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

const filters = [
  {
    title: "Renovations",
    searchFor: "renovation",
  },
  {
    title: "Bathrooms",
    searchFor: "bathroom",
  },
  {
    title: "plumbing",
    searchFor: "plumbing",
  },
  {
    title: "carpentry",
    searchFor: "carpentry",
  },
  {
    title: "drywall",
    searchFor: "drywall",
  },
  {
    title: "tiling",
    searchFor: "tiling",
  },
  {
    title: "painting",
    searchFor: "painting",
  },
  {
    title: "Flooring",
    searchFor: "flooring",
  },
  {
    title: "Laminate Countertops",
    searchFor: "laminate-countertops",
  },
];

const photos = [
  {
    alt: "Fence",
    url: "1",
    tags: ["carpentry"],
  },
  {
    alt: "Drywalls",
    url: "2",
    tags: ["drywall", "carpentry"],
  },
  {
    alt: "Decking",
    url: "3",
    tags: ["carpentry", "painting", "flooring"],
  },
  {
    alt: "Disbaled Access Toilet",
    url: "4",
    tags: ["plumbing", "bathroom", "tiling", "renovation"],
  },
  {
    alt: "Floor",
    url: "5",
    tags: ["flooring", "carpentry", "renovation"],
  },
  {
    alt: "Shower Tiling",
    url: "6",
    tags: ["tiling", "bathroom", "renovation", "plumbing"],
  },
  {
    alt: "Fencing",
    url: "7",
    tags: ["carpentry", "renovation"],
  },
  {
    alt: "Fencing",
    url: "9",
    tags: ["painting", "carpentry", "renovation"],
  },
  {
    alt: "Toilet",
    url: "10",
    tags: ["bathroom", "plumbing", "tiling", "renovation"],
  },
  {
    alt: "Stair Case",
    url: "11",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Tiled Showers for Disabled",
    url: "12",
    tags: ["tiling", "plumbing", "bathroom"],
  },
  {
    alt: "Wishing Well",
    url: "13",
    tags: ["carpentry"],
  },
  {
    alt: "Dry Wall",
    url: "14",
    tags: ["drywall", "carpentry"],
  },
  {
    alt: "Fencing",
    url: "15",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Fencing",
    url: "16",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Deck FLooring",
    url: "17",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Accessible Door",
    url: "18",
    tags: ["carpentry", "renovation"],
  },
  {
    alt: "Countertop",
    url: "19",
    tags: ["carpentry", "renovation", "laminate-countertops"],
  },
  {
    alt: "Stair Case",
    url: "20",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Dry Wall",
    url: "21",
    tags: ["drywall", "carpentry"],
  },
  {
    alt: "Bath Tub",
    url: "22",
    tags: ["tiling", "plumbing", "bathroom"],
  },
  {
    alt: "Fencing",
    url: "23",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Swing",
    url: "24",
    tags: ["carpentry"],
  },
  {
    alt: "Dry Wall",
    url: "25",
    tags: ["drywall", "carpentry"],
  },
  {
    alt: "Flooring",
    url: "26",
    tags: ["flooring", "carpentry", "renovation"],
  },
  {
    alt: "Flooring",
    url: "27",
    tags: ["flooring", "carpentry", "renovation"],
  },
  {
    alt: "Structure",
    url: "28",
    tags: ["carpentry"],
  },
  {
    alt: "Bathroom",
    url: "29",
    tags: ["tiling", "plumbing", "bathroom"],
  },
  {
    alt: "Fencing",
    url: "30",
    tags: ["carpentry", "painting", "renovation"],
  },
  {
    alt: "Shower",
    url: "31",
    tags: ["tiling", "plumbing", "bathroom"],
  },
  {
    alt: "Cabinet",
    url: "32",
    tags: ["bathroom", "carpentry", "painting", "renovation"],
  },
  {
    alt: "Shower",
    url: "33",
    tags: ["tiling", "plumbing", "bathroom"],
  },
  {
    alt: "Tiling",
    url: "34",
    tags: ["tiling"],
  },
  {
    alt: "BathTub",
    url: "35",
    tags: ["tiling", "plumbing", "bathroom"],
  },
  {
    alt: "Shower Plus Tub",
    url: "36",
    tags: ["tiling", "plumbing", "bathroom"],
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

type Props = {
  RemoveSeeMore?: boolean;
};

const Works = (props: Props) => {
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
            Our <span className="text-black">Services</span>
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
        {photos.map((photo, index) => (
          <div
            key={photo.alt + " " + index}
            className={cn(
              "initial group relative m-2 aspect-square overflow-hidden transition-all",
              photo.tags.includes(filter) || !filter
                ? ++count > 8 + seemore && props.RemoveSeeMore == null
                  ? "m-0 h-0 w-0 scale-0"
                  : count > 4 + seemore && props.RemoveSeeMore == null
                    ? "max-[640px]:m-0 max-[640px]:h-0 max-[640px]:w-0 max-[640px]:scale-0"
                    : "block"
                : "absolute m-0 h-0 w-0 scale-0",
            )}
          >
            <Image
              src={"/assets/works/" + photo.url + ".jpg"}
              alt={photo.alt}
              fill
              className="object-cover transition-all group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        {props.RemoveSeeMore == null ? (
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
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Works;
