import type { Metadata } from "next";

import SubpageHero from "@/app/components/subpage-hero";

import Image from "next/image";
import Container from "@/app/components/container";
import Gallery from "@/app/pages/gallery";
const services = [
  "Fixture Installation (sinks, faucets, toilets)",
  "Pipe Installation and Repair",
  "Water Heater Installation and Repair",
  "Drain Cleaning and Unclogging",
  "Leak Detection and Repair",
];

export const metadata: Metadata = {
  title: "Plumbing Services in Vancouver Island | TLC Contracting",
  description:
    "Reliable plumbing services in Southern Vancouver Island by TLC Contracting. Our experienced plumbers handle everything from minor repairs to major installations with precision and care. Trust TLC Contracting for prompt, efficient, and high-quality plumbing solutions that keep your home running smoothly. Contact us today for professional plumbing services you can count on.",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Plumbing"
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
              src="/assets/gallery/pl-1.jpg"
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
            Plumbing <span className="text-black">Services</span>
          </h1>
        </Container>
        <Gallery
          gallery={{
            title: "pl",
            index: 4,
            alt: "Plumbing Photo",
          }}
        />
      </div>
    </div>
  );
};

export default page;
