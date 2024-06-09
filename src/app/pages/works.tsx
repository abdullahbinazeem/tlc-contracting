import React from "react";
import Container from "../components/container";

const Works = () => {
  return (
    <div id="about">
      <Container className="min-h-[50vh] py-40">
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
    </div>
  );
};

export default Works;
