"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: `Services`,
    url: "/services",
  },
  {
    name: "Works",
    url: "/works",
  },
  {
    name: "Quote",
    url: "/quote",
  },
  {
    name: "Faq",
    url: "/faq",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white border px-8 xl:px-16 py-8 rounded-md drop-shadow-xl ">
        <div className="flex gap-4 items-center">
          <Image
            src="assets/logo/logo.svg"
            alt="TLC Logo"
            width={52}
            height={52}
          />
          <h1 className="text-lg lg:text-xl font-extrabold text-black">
            TLC <span className="text-logo ">Contracting</span>
          </h1>
        </div>
        <div className="hidden  md:flex gap-5 items-center font-bold text-black uppercase">
          {navItems.map((navItem, i) => (
            <div className="flex gap-5 items-center">
              <Link
                key={i}
                className=" lg:text-base text-sm cursor-pointer after:block after:h-[2px] after:w-[100%] after:scale-0 after:bg-primary after:transition-all hover:after:scale-110 transition-all"
                href={navItem.url}
              >
                {navItem.name}
              </Link>
              {i < navItems.length - 1 && (
                <div className="h-[20px] w-[2px] bg-[#E6E6E6] rounded-full" />
              )}
            </div>
          ))}
        </div>
        <div className="block md:hidden select-none">
          <Menu
            size={34}
            stroke="#012164"
            className={cn(
              `cursor-pointer hover:scale-110 transition-all`,
              toggle ? "hidden" : "block"
            )}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <X
            size={34}
            stroke="#012164"
            className={cn(
              `cursor-pointer hover:scale-110 transition-all`,
              !toggle ? "hidden" : "block"
            )}
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <a className="bg-primary hover:border box-border	 border-primary hover:bg-transparent hover:text-primary transition-all hidden lg:block py-4 px-5 text-white cursor-pointer rounded-sm">
          <p className="uppercase font-semibold">Get in touch</p>
        </a>
      </div>
      <div
        className={cn(
          "z-10 flex flex-col gap-8 px-10 py-20 absolute md:hidden  top-0 left-0 w-[60vw] min-w-[250px] h-screen bg-primary transition-all duration-500",
          toggle ? "translate-x-0" : "translate-x-[-100%]"
        )}
      >
        {navItems.map((navItem, i) => (
          <Link
            key={i}
            className="xs:text-lg font-semibold cursor-pointer text-white  transition-all after:block after:mt-2 after:h-[2px] after:w-[50%] after:scale-0 after:bg-white after:transition-all hover:after:scale-110 "
            href={navItem.url}
          >
            {navItem.name}
          </Link>
        ))}
        <a className="bg-white self-start  py-4 px-5 text-primary  cursor-pointer rounded-sm">
          <p className="uppercase xs:text-lg font-semibold">Get in touch</p>
        </a>
      </div>
    </>
  );
};

export default Navbar;
