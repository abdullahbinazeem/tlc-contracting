import type { Metadata } from "next";

import SubpageHero from "@/app/components/subpage-hero";
import Container from "@/app/components/container";

import Image from "next/image";
import Gallery from "@/app/pages/gallery";

const services = [
  "Deck and Patio Construction",
  "Framing and Structural Carpentry",
  "Custom Cabinetry and Built-ins",
  "Door and Window Installation",
  "Wood Flooring Installation and Repair",
  "Finished Carpentry & Moldings",
];

export const metadata: Metadata = {
  title: "Carpentry Services in Vancouver Island | TLC Contracting Inc.",
  description:
    "Discover expert carpentry services with TLC Contracting Inc. Serving Southern Vancouver Island, our skilled carpenters provide custom woodworking solutions, including cabinetry, trim work, and structural framing. With a focus on quality and craftsmanship, we bring your design visions to life. Trust TLC Contracting for reliable and detailed carpentry work. Contact us today to discuss your project.",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Carpenters"
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
              src="/assets/gallery/c-1.jpg"
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
            Carpentry <span className="text-black">Services</span>
          </h1>
        </Container>
        <Gallery
          gallery={{
            title: "c",
            index: 6,
            alt: "Carpentry Photo",
          }}
        />
      </div>
    </div>
  );
};

export default page;
