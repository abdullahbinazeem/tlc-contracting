import Container from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import SubpageHero from "@/app/components/subpage-hero";
import Footer from "@/app/pages/footer";
import Form from "@/app/pages/form";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Free Estimate | TLC Contracting",
  description:
    "Request a free estimate from TLC Contracting for your home repair and renovation projects in Southern Vancouver Island. Our expert team provides accurate and detailed quotes for services including tiling, carpentry, flooring, painting, plumbing, and drywall. Get started on your project with confidence by contacting us today for a no-obligation estimate.",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="GET YOUR FREE"
        stitle="ESTIMATE NOW!"
        cta=""
        ctaUrl="#works"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default page;
