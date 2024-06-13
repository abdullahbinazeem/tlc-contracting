"use client";

import React, { useState } from "react";
import Container from "../components/container";

import Image from "next/image";
import { cn } from "@/lib/utils";

const filters = [
  {
    title: "renovations",
    icon: "",
    searchFor: "r",
  },
  {
    title: "plumbing",
    icon: "",
    searchFor: "pl",
  },
  {
    title: "carpentry",
    icon: "",
    searchFor: "c",
  },
  {
    title: "drywall",
    icon: "",
    searchFor: "d",
  },
  {
    title: "tiling",
    icon: "",
    searchFor: "t",
  },
  {
    title: "painting",
    icon: "",
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

  let count = 0;
  return (
    <div id="about" className="py-40 min-h-[50vh]">
      <Container className="">
        <div className="lg:flex gap-20  items-center">
          <div className="flex-1 basis-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-lightblack font-semibold">
              See our transformations!
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-4 leading-[110%]">
              Our <span className="text-black">Works</span>
            </h1>
          </div>
        </div>
      </Container>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-0 px-5 md:px-3 mt-20">
        {[...Array(largest)].map((x, i) =>
          gallery.map((picture, index) =>
            picture.index >= i + 1 ? (
              <div
                key={picture.alt + " " + (i + 1)}
                className={cn(
                  "relative aspect-square m-2 transition-all group overflow-hidden",
                  ++count > 8 + seemore
                    ? "scale-0 w-0 h-0 m-0"
                    : count > 4 + seemore
                    ? "max-[640px]:scale-0 max-[640px]:w-0 max-[640px]:h-0 max-[640px]:m-0"
                    : ""
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
            ) : (
              ""
            )
          )
        )}
      </div>
      <div className="text-center">
        <p
          className={cn(
            "inline-block cursor-pointer rounded-md border-primary border text-primary text-lg font-semibold hover:scale-110 py-4 px-7 transition-all mt-10",
            seemore + 8 >= count ? "hidden" : ""
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
