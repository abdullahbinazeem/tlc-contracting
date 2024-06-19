import SubpageHero from "@/app/components/subpage-hero";
import Footer from "@/app/pages/footer";
import Form from "@/app/pages/form";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Free Estimate | TLC Contracting",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Our Offered"
        stitle="SERVICES"
        cta=""
        ctaUrl="#works"
      />
    </div>
  );
};

export default page;
