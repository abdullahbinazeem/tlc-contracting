"use client";

import React, { useState } from "react";
import Container from "../components/container";

import Image from "next/image";
import { cn } from "@/lib/utils";

const gallery = {
  title: "c",
  index: 6,
  alt: "Carpentry Photo",
};

type Props = {
  gallery: {
    title: string;
    index: number;
    alt: string;
  };
};

const Gallery = (props: Props) => {
  return (
    <div className="mt-10 grid gap-0 px-5 sm:grid-cols-2 md:grid-cols-3 md:px-3 lg:mt-20 xl:grid-cols-4">
      {[...Array(props.gallery.index)].map((x, i) => (
        <div
          key={props.gallery.alt + " " + (i + 1)}
          className={cn(
            "initial group relative m-2 aspect-square overflow-hidden transition-all",
          )}
        >
          <Image
            src={
              "/assets/gallery/" + props.gallery.title + "-" + (i + 1) + ".jpg"
            }
            alt={props.gallery.alt + " " + (i + 1)}
            fill
            className="object-cover transition-all group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
