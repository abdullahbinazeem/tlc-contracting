"use client";

import React from "react";
import {
  Mail,
  Notebook,
  PhoneCall,
  Scan,
  TextSelect,
  UserRound,
} from "lucide-react";
import Image from "next/image";

const Form = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e9d3630-8ddc-4acc-8516-49c5af128449");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="overflow-hidden bg-[#f9f9f9] py-40" id="form">
      <div className="m-auto max-w-[1320px] md:px-5">
        <div className="relative lg:flex">
          <div className="basis-3/5 bg-white px-8 py-12 md:px-12 lg:px-20">
            <h1 className="mb-10 text-2xl font-bold text-black md:text-3xl">
              Get An Estimate Now
            </h1>

            <form className="w-full" onSubmit={onSubmit}>
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
                  <select
                    name="Subject"
                    className="focus:border-secondary w-full rounded-sm border border-gray-100 bg-gray-100 px-4 py-4 pl-11 text-xs font-medium text-black transition-all placeholder:text-gray-400 focus:border-primary focus:pl-4 focus:outline-none sm:text-sm"
                    defaultValue="default"
                  >
                    <option value="default" disabled>
                      Select your service
                    </option>
                    <option value="Renovations">Renovations</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Drywall">Drywall</option>
                    <option value="Tiling">Tiling</option>
                    <option value="Painting">Painting</option>
                    <option value="Kitchen">Kitchens</option>
                    <option value="Bathrooms">Bathrooms</option>
                    <option value="Project Management">
                      Project Management
                    </option>
                    <option value="Electrical">Electrical</option>
                    <option value="Flooring">Flooring</option>
                    <option value="Other">Other</option>
                  </select>
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
              <button
                type="submit"
                className="font-medoum mt-8 w-full rounded-sm bg-primary px-5 py-4 uppercase tracking-wide text-gray-100 focus:outline-none"
              >
                Submit Now
              </button>
            </form>
            <p className="mt-2 text-base font-semibold text-green-600">
              {result}
            </p>
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
  );
};

export default Form;
