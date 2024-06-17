import React from "react";
import { Follower } from "./Follower";

import { Trustedpartner } from "@/components/About/Trustedpartner";
import { Program } from "@/components/About/Program";
import { Blog } from "@/components/About/Blog";
import { Subscribe } from "@/components/About/Subscribe";
import Navbar from "@/components/Navbar";
import Audience from "./Audience";
import Footer from "../Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="sm:ml-[6rem]  sm:mr-[6rem] mx-2 -mb-32 sm:mb-0 sm:pb-[100px]">
        <Follower />
        <div className="flex flex-col md:flex-row gap-10 pb-[70px]">
          <div className="md:w-1/2 order-2 md:order-1 flex flex-col">
            <img
              src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/about-img.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left w-full md:pl-[30px]">
            <h1 className="capitalize text-center text-4xl font-semibold lg:text-[28px] mb-[10px]">
              About Us
            </h1>
            <h2 className="mb-3 text-[28px] font-bold  md:whitespace-normal">
              We are Lauayo, a team of influencer designers, spearheading our
              own design venture.
            </h2>
            <p className="leading-7 text-[#666666] text-[17px] mb-3">
              TikTok is a popular social media platform for sharing short-form
              videos. It allows users to create and share videos up to 60
              seconds long, often featuring lip-syncing, dancing, comedy skits,
              and other creative content. TikTok was launched by the Chinese
              company ByteDance in September 2016 and has since become one of
              the fastest-growing social media platforms globally.
            </p>
            <p className="leading-7 text-[#666666] text-[17px] mb-3">
              One of the key features of TikTok is its powerful algorithm, which
              is designed to personalize content for each user based on their
              interactions with the app. This algorithm has contributed
              significantly to TikTok's success, as it helps users discover
              content that aligns with their interests quickly.
            </p>
            <div>
              <button className="text-white bg-[#800080] text-[15px] font-bold p-6 w-[12rem]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <Navbar />

        <Audience />
        <Trustedpartner />
        <Program />
        <Blog />
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
