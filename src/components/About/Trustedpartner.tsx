import React from "react";
import { Logo } from "@/components";

export const Trustedpartner = () => {
  return (
    <>
      <div className="pb-[70px]  pt-[60px]">
        <div className="text-center mb-[50px] ml-auto mr-auto">
          <h1 className="text-[36px] text-[#000000] font-bold">
            Trusted Partners
          </h1>
          <p className="color-[#666666] leading-7 max-w-full mt-10 text-[15px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-wrap gap-20">
          <div className="bg-white p-[20px] flex  items-center justify-center  mb-[30px] bg-center w-36 h-20 shadow-lg">
            {" "}
            <Logo />
          </div>
          <div className="bg-white p-[20px] flex items-center justify-center bg-center w-36 h-20 shadow-lg">
            {" "}
            <Logo />
          </div>
          <div className="bg-white p-[20px] flex items-center justify-center mb-[30px] bg-center w-36 h-20 shadow-lg">
            {" "}
            <Logo />
          </div>
          <div className="bg-white p-[20px] flex items-center justify-center mb-[30px] bg-center w-36 h-20 shadow-lg">
            {" "}
            <Logo />
          </div>
          <div className="bg-white p-[20px] flex items-center justify-centermb-[30px] bg-center w-36 h-20 shadow-lg">
            {" "}
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
};
