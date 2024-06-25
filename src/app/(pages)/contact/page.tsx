import SubpageHero from "@/app/components/subpage-hero";
import Footer from "@/app/pages/footer";

import Image from "next/image";

import { Mail, PhoneCall, TextSelect, UserRound } from "lucide-react";
import { Metadata } from "next";

import React from "react";
import ContactForm from "./form";

export const metadata: Metadata = {
  title: "Contact | TLC Contracting Inc.",
  description:
    "Get in touch with TLC Contracting Inc., your trusted partner for high-quality home repairs and renovations in Southern Vancouver Island. Whether you need tiling, carpentry, flooring, painting, plumbing, or drywall services, our expert team is here to help. Contact us today to discuss your project, request a quote, or schedule a consultation. We look forward to working with you!",
};

const page = () => {
  return (
    <div>
      <SubpageHero title="Contact Us" stitle="" cta="" ctaUrl="#works" />
      <div className="overflow-hidden bg-[#f9f9f9] py-40" id="form">
        <div className="m-auto max-w-[1320px] md:px-5">
          <div className="relative lg:flex">
            <div className="basis-3/5 bg-white px-8 py-12 md:px-12 lg:px-20">
              <h1 className="mb-10 text-2xl font-bold text-black md:text-3xl">
                Contact Us Today!
              </h1>

              <ContactForm />
            </div>
            <div className="relative bottom-0 top-0 m-auto hidden aspect-video w-[50%] lg:absolute lg:right-[-10%] lg:block">
              <Image
                src="/assets/form-graphic.png"
                alt="Van"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
