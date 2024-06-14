import Image from "next/image";

import Container from "../components/container";

import { CircleCheckBig, ShieldCheck, TreePine, Trophy } from "lucide-react";

const About = () => {
  return (
    <div id="about">
      <Container className="min-h-[50vh] py-40">
        <div className="lg:flex gap-20  items-center">
          <div className="flex-1 basis-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-lightblack font-semibold">
              Why Choose Us?
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-4 leading-[110%]">
              20 Years <span className="text-black block">of Experience!</span>
            </h1>
            <div className="flex flex-col gap-10 mt-6">
              <p className="md:text-lg text-lightblack max-w-[700px]">
                We have a team of experienced professionals who have been in the
                industry for over 20 years. Our contractors have a wealth of
                knowledge and skills that they have acquired over the years,
                making them experts in their field.
              </p>
              <div className="flex gap-10 md:gap-20 font-semibold text-sm sm:text-base">
                <div className="flex gap-4 items-center">
                  <CircleCheckBig
                    className="text-primary w-6 h-6 sm:w-8 sm:h-8"
                    size={30}
                  />
                  <p>100% Satisfaction</p>
                </div>
                <div className="flex gap-4 items-center">
                  <CircleCheckBig
                    className="text-primary w-6 h-6 sm:w-8 sm:h-8"
                    size={30}
                  />
                  <p>Flexible and Cost Effective</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-primary" />
              <div className="flex flex-col gap-4 text-lightblack  text-sn sm:text-base font-semibold">
                <div className="flex gap-4 items-center">
                  <ShieldCheck
                    className="text-primary w-6 h-6 sm:w-8 sm:h-8"
                    size={30}
                  />
                  Redseal certified installer
                </div>
                <div className="flex gap-4 items-center">
                  <TreePine
                    className="text-primary w-6 h-6 sm:w-8 sm:h-8"
                    size={30}
                  />
                  Cover liability insurance
                </div>
                <div className="flex gap-4 items-center">
                  <Trophy
                    className="text-primary w-6 h-6 sm:w-8 sm:h-8"
                    size={30}
                  />
                  Fully Insured with WCB
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 basis-1 aspect-square max-h-[50vh] m-auto md:max-h-[60vh]">
            <Image
              src="/assets/about/aboutus.jpg"
              alt="Our Team"
              fill
              className="object-contain w-full "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
