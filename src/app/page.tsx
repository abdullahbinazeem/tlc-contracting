import Hero from "./pages/hero";

import About from "./pages/about";
import Services from "./pages/services";
import Works from "./pages/works";
import Testimonials from "./pages/testimonials";
import Form from "./pages/form";
import Footer from "./pages/footer";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <a
        href="tel:(250)-592-1782"
        className="fixed bottom-10 right-10 z-[100] box-content cursor-pointer rounded-[40%] bg-slate-200 p-5 shadow-lg transition-all hover:scale-125"
      >
        <Phone
          className="aspect-square h-[36px] w-[36px] text-primary sm:h-[44px] sm:w-[44px]"
          size={48}
        />
      </a>
      <About />
      <Services />
      <Works />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
}
