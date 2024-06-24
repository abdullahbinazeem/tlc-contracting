import type { Metadata } from "next";

import SubpageHero from "@/app/components/subpage-hero";

import Image from "next/image";
import Container from "@/app/components/container";
import Gallery from "@/app/pages/gallery";
const services = [
  "Floor Tiling",
  "Wall Tiling",
  "Backsplash Installation",
  "Shower and Wet Room Tiling",
  "Tile Repair and Replacement",
];

export const metadata: Metadata = {
  title: "Tiling Services in Vancouver Island | TLC Contracting",
  description:
    "Explore premium tiling services in Southern Vancouver Island with TLC Contracting. Our skilled professionals deliver exceptional craftsmanship for all your tiling needs, from kitchen backsplashes to bathroom floors and beyond. Trust TLC Contracting to provide beautiful, durable tiling solutions that enhance the aesthetic and value of your home. Contact us today for a consultation and experience the difference in quality and service.",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Tiling"
        stitle="On Southern Vancouver Island"
        cta="View Work"
        ctaUrl="#works"
      />
      <Container className="py-40">
        <div className="gap-20 lg:flex">
          <div className="basis-1/2">
            <h2 className="text-3xl font-bold">Services Included:</h2>
            <ul className="ml-4 mt-8 flex flex-col gap-1 font-medium md:text-lg">
              {services.map((service, i) => (
                <li key={i}>
                  <span className="mr-2">➢</span> {service}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-[150%] md:text-base">
              With 40 years of experience, our team is dedicated to delivering
              high-quality remodeling that meet the needs and expectations of
              our clients. We understand that rennovating a new home is a big
              investment and we strive to ensure that our clients are completely
              satisfied with the final result.
              <br /> <br />
              We take a detailed approach to your build. We’ll work with you to
              identify your needs both now and in the future and put together a
              plan for a beautiful, functional, energy-efficient home that’s
              cost effective to maintain and matches your lifestyle.
              <br /> <br /> Contact us today to schedule a consultation!
            </p>
          </div>
          <div className="relative mt-10 aspect-video w-full flex-1 basis-1/2 self-stretch lg:m-0 lg:aspect-auto">
            <Image
              src="/assets/gallery/t-1.jpg"
              alt="Renovation Main Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
      <div id="works" className="min-h-[50vh] py-40">
        <Container>
          <h1 className="mt-4 text-4xl font-bold leading-[110%] text-primary md:text-5xl lg:text-6xl">
            Tiling <span className="text-black">Services</span>
          </h1>
        </Container>
        <Gallery
          gallery={{
            title: "t",
            index: 8,
            alt: "Tiling Photo",
          }}
        />
      </div>
    </div>
  );
};

export default page;
