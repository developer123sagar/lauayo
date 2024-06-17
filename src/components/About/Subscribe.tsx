import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components";

export const Subscribe = () => {
  return (
    <div className="pb-2 w-full lg:pb-2 lg:pt-2 sm:h-full  min-h-screen sm:min-h-fit flex items-center justify-center">
      <div className="relative">
        <img
          src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/subscribe-bg.jpg"
          alt=""
          className="w-full lg:w-[90vw] h-[600px] object-cover"
        />
        <div className="absolute inset-0">
          <div className="bg-black opacity-50 absolute inset-0"></div>
          <div className="flex flex-col md:flex-row gap-4 lg:gap-20 lg:mt-[8rem] mx-4 sm:mx-10 mt-4 text-white relative z-10">
            <div className="md:w-1/2 w-full">
              <div className="pr-[30px]">
                <h1 className="text-2xl font-bold mb-4">Join With Me</h1>
                <p className="text-lg leading-7 mb-7 ">
                  Your subscription text here. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore.
                </p>
              </div>
              <div className="flex flex-col gap-10 items-start mt-10">
                <Link to="#" className="text-sm text-black sm:text-white ">
                  lauayo@gmail.com
                </Link>
                <button className="text-lg font-medium p-3 px-2 sm:px-7 bg-[#800080]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-full shadow-md p-2 mt-5 sm:mt-2 md:w-1/2 lg:w-1/3 lg:px-6 md:px-12 py-12 bg-white">
              <form>
                <div className="mb-10">
                  <Input label="First Name" type="text" />
                  <Input label="Last Name" type="text" />
                  <Input label="Email Address" type="email" />
                </div>
                <button className="p-3 text-[15px] bg-[#800080] text-white font-medium">
                  Join With Us Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
