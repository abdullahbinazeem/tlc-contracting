import SubpageHero from "@/app/components/subpage-hero";
import Footer from "@/app/pages/footer";

import Image from "next/image";

import { Mail, PhoneCall, Scan, TextSelect, UserRound } from "lucide-react";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Contact | TLC Contracting",
  description:
    "Get in touch with TLC Contracting, your trusted partner for high-quality home repairs and renovations in Southern Vancouver Island. Whether you need tiling, carpentry, flooring, painting, plumbing, or drywall services, our expert team is here to help. Contact us today to discuss your project, request a quote, or schedule a consultation. We look forward to working with you!",
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

              <form
                className="w-full"
                action="https://formsubmit.co/info@albcanada.ca"
                method="POST"
              >
                <div className="flex flex-col gap-2">
                  <div className="group relative">
                    <input
                      className="text-secondary w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-primary focus:pl-4 focus:outline-none sm:text-sm"
                      name="Name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                    <UserRound
                      className="absolute bottom-0 left-3 top-0 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                      size={24}
                    />
                  </div>

                  <div className="group relative">
                    <input
                      className="text-secondary w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-primary focus:pl-4 focus:outline-none sm:text-sm"
                      name="Phone Number"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                    <PhoneCall
                      className="absolute bottom-0 left-3 top-0 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                      size={22}
                    />
                  </div>
                  <div className="group relative">
                    <input
                      className="w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-primary focus:pl-4 focus:outline-none sm:text-sm"
                      name="Email"
                      type="text"
                      placeholder="Email Address"
                      required
                    />
                    <Mail
                      className="absolute bottom-0 left-3 top-0 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                      size={22}
                    />
                  </div>
                  <div className="group relative">
                    <textarea
                      className="max-h-[360px] min-h-[60px] w-full appearance-none rounded-sm border border-gray-100 bg-gray-100 px-4 py-3 pl-12 text-xs font-medium text-black placeholder:text-gray-400 focus:border-primary focus:pl-4 focus:outline-none sm:text-sm"
                      name="Message"
                      placeholder="Message"
                      required
                      rows={4}
                    />
                    <TextSelect
                      className="absolute left-3 top-3 m-auto text-gray-500 transition-all group-focus-within:translate-x-[-32px] group-focus-within:opacity-0"
                      size={22}
                    />
                  </div>
                </div>
                <button className="font-medoum mt-8 w-full rounded-sm bg-primary px-5 py-4 uppercase tracking-wide text-gray-100 focus:outline-none">
                  Submit Now
                </button>
              </form>
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
