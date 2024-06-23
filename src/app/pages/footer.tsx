import Container from "@/app/components/container";
import { DoorOpen, Home, icons, Mails, Phone } from "lucide-react";
import React from "react";
import Image from "next/image";

const ContactOptions = [
  {
    title: "Our Location",
    info: "210 Suzanne Pl, Victoria, BC V9B 1P1",
    link: "https://maps.app.goo.gl/cVYhYViAGWeHsqpVA",
    icon: Home,
  },
  {
    title: "Make a Call",
    info: "(250)-592-1782",
    name: "Tony Lalev",
    link: "tel:(250)-592-1782",
    icon: Phone,
  },
  {
    title: "Send are Email",
    info: "tlccontractinginc1@gmail.com",
    link: "mailto:tlccontractinginc1@gmail.com",
    icon: Mails,
  },
  {
    title: "Working Hours",
    info: `Everyday 8am - 8pm. 24 hour Emergency Available`,
    link: "https://maps.app.goo.gl/cVYhYViAGWeHsqpVA",
    icon: DoorOpen,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#0B365B]">
        <Container className="py-24">
          <h1 className="mt-4 text-4xl font-semibold text-white">
            TLC Contracting
          </h1>
          <p className="mt-4 text-lg text-white">
            We are one the best contractors in Victoria. In business since 2002,
            and A plus rating since 2003.
          </p>
          <div className="mt-12 flex flex-wrap justify-between gap-8">
            {ContactOptions.map((contact, i) => (
              <a
                key={i}
                className="flex min-w-[300px] flex-1 gap-4"
                href={contact.link}
                target="_blank"
              >
                <contact.icon className="box-content min-h-8 min-w-8 rounded-sm bg-white p-5 text-primary" />
                <div className="text-white">
                  <h1 className="teko text-lg">{contact.title}</h1>
                  <p className="text-sm underline">
                    {contact.name && contact.name}
                  </p>
                  <p className="text-sm">{contact.info}</p>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </div>
      <div className="bg-[#111111]">
        <Container className="p-7">
          <p className="serrat text-center text-white">
            © Copyright 2024 TLC Contracting Inc.
          </p>
          <p className="serrat mt-2 cursor-pointer text-center text-white transition-all hover:underline">
            <a href="https://xaama.tech" target="_blank">
              {" "}
              Website Design by Xamaa Developments
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
