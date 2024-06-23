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
  description: "Generated by create next app",
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