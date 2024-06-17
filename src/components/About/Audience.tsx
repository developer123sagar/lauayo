import React from "react";
import { Link } from "react-router-dom";

const Audience = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-10 w-full lg:w-11/12 xl:w-10/12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex flex-col ">
            <span className="text-[#800080] ">
              <Link to="#">@Lauayo</Link>
            </span>
            <h2 className="mb-0 text-[30px] font-bold text-[#000000]">
              Lauayo + Audience
            </h2>
          </div>
          <div className="mt-4 lg:mt-6">
            <h5 className="text-[#666666] mb-4 lg:mb-6 text-lg text-[14px] text-center uppercase border-b-[1px] border-[#66666]">
              Lauayo Audience
            </h5>
          </div>
          <div className="flex">
            <div className="w-full lg:w-1/2">
              <div>
                <h4 className="mb-4 lg:mb-6 font-bold text-lg text-[#000000] gap-4 flex items-center">
                  78%<span className="text-base font-normal"> female</span>
                </h4>
                <h4 className="mb-4 lg:mb-6 font-bold text-lg text-[#000000] flex gap-4 items-center">
                  "25-35"
                  <span className="text-base font-normal"> years old</span>
                </h4>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex-col flex gap-4">
              <div className="p-3 bg-gray-100">
                <h1 className="text-lg font-bold">
                  <span className="">95.25%</span> US
                </h1>
              </div>
              <div className="bg-gray-100 p-3">
                <h1 className="text-lg font-bold">
                  <span className="">95.25%</span> US
                </h1>
              </div>
              <div className="bg-gray-100 p-3">
                <h1 className="text-lg font-bold">
                  <span className="">95.25%</span> US
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h5 className="text-[#666666] uppercase mb-4 lg:mb-6 text-center text-lg font-normal border-b-[1px] border-[#666666]">
                LAUAYO COLLABORATORS
              </h5>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2">
                  <img
                    src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/collaborations-img2.jpg"
                    alt=""
                    className="w-full h-[18rem] lg:h-auto object-content lg:objext-content"
                  />
                  <h3 className="mt-4 lg:mt-6 mb-2 lg:mb-4 text-xl font-bold leading-7 text-[#e1306c]">
                    275K
                  </h3>
                  <p className="mb-0 leading-7 text-base">Followers</p>
                </div>
                <div className="w-full lg:w-1/2">
                  <img
                    src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/collaborations-img2.jpg"
                    alt=""
                    className="w-full h-[18rem] lg:h-auto object-content lg:objext-cover"
                  />
                  <h3 className="mt-4 lg:mt-6 mb-2 lg:mb-4 text-xl font-bold leading-7 text-[#e1306c]">
                    275K
                  </h3>
                  <p className="mb-0 leading-7 text-base">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/audience-img1.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/audience-img2.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/audience-img2.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full sm:w-1/2">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/collaborations-img2.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src="https://templates.envytheme.com/kreton/default/instagram-influencer/assets/img/collaborations-img2.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audience;
