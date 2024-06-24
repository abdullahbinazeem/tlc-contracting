import Container from "@/app/components/container";
import Navbar from "@/app/components/navbar";
import SubpageHero from "@/app/components/subpage-hero";
import Footer from "@/app/pages/footer";
import Form from "@/app/pages/form";
import Works from "@/app/pages/works";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Works Gallery | TLC Contracting",
  description:
    "Explore the craftsmanship of TLC Contracting through our gallery page showcasing stunning home repairs and renovations in Southern Vancouver Island. View examples of our expert tiling, carpentry, flooring, painting, plumbing, and drywall projects. Get inspired and see how we can transform your space. Visit our gallery today and envision the possibilities for your home.",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Project"
        stitle="GALLERY"
        cta="View Photos"
        ctaUrl="#works"
      />
      <Works RemoveSeeMore={true} />
      <Form />
      <Footer />
    </div>
  );
};

export default page;
