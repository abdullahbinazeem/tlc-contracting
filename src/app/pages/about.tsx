import Image from "next/image";

import Container from "../components/container";
import {
  CircleCheckBig,
  TreePine,
  Trophy,
  HardHat,
  ShieldCheck,
} from "lucide-react";

const About = () => {
  return (
    <div id="about">
      <Container className="min-h-[50vh] py-40">
        <div className="items-center gap-20 lg:flex">
          <div className="flex-1 basis-0">
            <p className="text-2xl font-semibold text-lightblack md:text-3xl lg:text-4xl">
              Why Choose Us?
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[110%] text-primary md:text-5xl lg:text-6xl">
              40 Years <span className="block text-black">of Experience!</span>
            </h1>
            <div className="mt-6 flex flex-col gap-10">
              <p className="max-w-[700px] text-lightblack md:text-lg">
                With 40 years of experience, and over 20 years in business. We
                have a wealth of knowledge and skills in renovations & repairs.
                We leave every client satisfied and provide afforable and cost
                effective prices for every single customer.
              </p>
              <div className="flex gap-10 text-sm font-semibold sm:text-base md:gap-20">
                <div className="flex items-center gap-4">
                  <CircleCheckBig
                    className="h-6 w-6 text-primary sm:h-8 sm:w-8"
                    size={30}
                  />
                  <p>100% Satisfaction</p>
                </div>
                <div className="flex items-center gap-4">
                  <CircleCheckBig
                    className="h-6 w-6 text-primary sm:h-8 sm:w-8"
                    size={30}
                  />
                  <p>Flexible and Cost Effective</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-primary" />
              <div className="text-sn flex flex-col gap-4 font-semibold text-lightblack sm:text-base">
                <div className="flex items-center gap-4">
                  <TreePine
                    className="h-6 w-6 text-primary sm:h-8 sm:w-8"
                    size={30}
                  />
                  A+ Better Business Bureau Rating
                </div>
                <div className="flex items-center gap-4">
                  <Trophy
                    className="h-6 w-6 text-primary sm:h-8 sm:w-8"
                    size={30}
                  />
                  Liabilty Insured ($3,000,000) & WCB
                </div>
                <div className="flex items-center gap-4">
                  <HardHat
                    className="h-6 w-6 text-primary sm:h-8 sm:w-8"
                    size={30}
                  />
                  Home Depot Local Pro Licensed Certified Installer
                </div>
                <div className="flex items-center gap-4">
                  <ShieldCheck
                    className="h-6 w-6 text-primary sm:h-8 sm:w-8"
                    size={30}
                  />
                  Home Depot Certified Criminal Record Check
                </div>
              </div>
            </div>
          </div>
          <div className="relative m-auto aspect-square max-h-[50vh] flex-1 basis-1 md:max-h-[60vh]">
            <Image
              src="/assets/about/aboutus.jpg"
              alt="Our Team"
              fill
              className="w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
