import React from "react";

export const Blog = () => {
  return (
    <>
      <section className="pb-4 pt-14 md:pb-28 md:pt-20">
        <div className="text-center mb-8 md:mb-14 mx-auto">
          <p className="text-[#666666] leading-7 text-base md:text-lg">
            Lorem ipsum dolor sit amet
          </p>
          <h1 className="text-3xl md:text-4xl text-[#000000] font-bold">
            Blogs
          </h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* First Blog */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="mb-8 bg-gray-100">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/blog/img1.jpg"
                alt=""
                className="h-64 md:h-96 w-full object-cover"
              />
              <div className="p-4 md:p-6">
                <h1 className="text-[#666666] mb-2 md:mb-4">Fashion</h1>
                <h3 className="text-xl md:text-2xl font-bold">
                  How to Find the Perfect Influencers for Your Niche
                </h3>
              </div>
            </div>
          </div>
          {/* Second Blog */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="mb-8 bg-gray-100">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/blog/img1.jpg"
                alt=""
                className="h-64 md:h-96 w-full object-cover"
              />
              <div className="p-4 md:p-6">
                <h1 className="text-[#666666] mb-2 md:mb-4">Fashion</h1>
                <h3 className="text-xl md:text-2xl font-bold">
                  How to Find the Perfect Influencers for Your Niche
                </h3>
              </div>
            </div>
          </div>
          {/* Third Blog */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 md:mb-0">
            <div className="mb-8 bg-gray-100">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/blog/img1.jpg"
                alt=""
                className="h-64 md:h-96 w-full object-cover"
              />
              <div className="p-4 md:p-6">
                <h1 className="text-[#666666] mb-2 md:mb-4">Fashion</h1>
                <h3 className="text-xl md:text-2xl font-bold">
                  How to Find the Perfect Influencers for Your Niche
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
