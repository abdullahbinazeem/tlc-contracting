import Image from "next/image";

import Hero from "./pages/hero";

import About from "./pages/about";
import Services from "./pages/services";
import Works from "./pages/works";
import Testimonials from "./pages/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <Testimonials />
    </>
  );
}
