"use client";

import React from "react";
import Container from "../components/container";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const carouselItems = [
  {
    url: "",
    name: "Karen and Tunc Erdem",
    description:
      "Thanks for everything you have done for us and our house, you have made a huge difference to our quality of life and our special needs situation. You are an amazing craftsman. Great Job!",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="relative">
      <div className="absolute left-0 top-0 z-[0] h-full w-full">
        <Image
          src="/assets/review-bg.avif"
          alt="review background photo"
          fill
          className="z-[10] object-cover"
        />
        <div className="absolute z-[20] h-full w-full bg-white opacity-90" />
      </div>
      <Container className="relative z-[1] min-h-[50vh] py-40">
        <h2 className="text-2xl font-semibold text-lightblack md:text-3xl lg:text-4xl">
          What people say!
        </h2>
        <h1 className="mt-4 text-4xl font-bold leading-[110%] text-primary md:text-5xl lg:text-6xl">
          Customer <span className="text-black">Reviews</span>
        </h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper mt-16 md:mt-24"
        >
          {carouselItems.map((item, i) => (
            <SwiperSlide className="py-10" key={i}>
              <div className="relative cursor-pointer select-none rounded-md border px-7 pb-12 pt-16 text-center">
                <div className="absolute -top-10 left-0 right-0 m-auto h-20 w-20 rounded-full border-2 bg-gray-300"></div>
                <h3 className="mb-1 text-lg font-semibold text-[#292929] sm:mb-4 sm:text-xl">
                  {item.name}
                </h3>
                <p className="text-pretty text-sm">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonials;
