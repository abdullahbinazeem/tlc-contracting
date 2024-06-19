import type { Metadata } from "next";

import SubpageHero from "@/app/components/subpage-hero";

export const metadata: Metadata = {
  title: "Plumbing Services in Victoria | TLC Contracting",
  description: "Generated by create next app",
};

const page = () => {
  return (
    <div>
      <SubpageHero
        title="Plumbing"
        stitle="In Victoria"
        cta="View Work"
        ctaUrl="#works"
      />
    </div>
  );
};

export default page;