import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
} from "react-icons/fa";

import { FooterUrl } from "@/common";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-900  relative mt-64 sm:-mt-10 ">
      <div className="px-4 sm:px-[2rem] mx-auto">
        <div className="footer-cta border-b border-gray-700 py-8 md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="single-cta flex items-center">
              <FiMapPin className="text-orange-500 text-2xl mr-2" />
              <div className="cta-text ">
                <h4 className="text-white text-lg font-semibold mb-1">
                  Find us
                </h4>
                <span className="text-gray-500">
                  1010 Avenue, sw 54321, Kathmandu
                </span>
              </div>
            </div>
          </div>
          <div className="mb-8 md:mb-0 "> 
            <div className="single-cta flex items-center">
              <FiPhone className="text-orange-500 text-2xl mr-2" />
              <div className="cta-text">
                <h4 className="text-white text-lg font-semibold mb-1">
                  Call us
                </h4>
                <span className="text-gray-500">9876543210 0</span>
              </div>
            </div>
          </div>
          <div className="single-cta flex items-center">
            <FiMail className="text-orange-500 text-2xl mr-2" />
            <div className="cta-text">
              <h4 className="text-white text-lg font-semibold mb-1">Mail us</h4>
              <span className="text-gray-500">mail@info.com</span>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5  pb-5  md:flex lg:mb-1 gap-6 mb-0 md:justify-between md:items-start">
          <div className="mb-8 w-full sm:w-2/3  md:mb-0">
            <div className="flex flex-col gap-5">
              <div className=" float-left">
                <img
                  src="/logo.png"
                  alt="lauaayo"
                  className={`object-cover cursor-pointer w-40`}
                />
              </div>

              <div className="footer-text text-gray-500 mb-4">
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididuntut.
                </p>
                <div className="footer-social-icon flex items-center">
                  <span className="text-white text-lg font-semibold mb-4 mr-4">
                    Follow us
                  </span>
                  <div className="rounded-full bg-blue-500 p-2 mr-4">
                    <a href="#" className="text-white text-2xl">
                      <FaFacebookF />
                    </a>
                  </div>
                  <div className="rounded-full bg-blue-500 p-2 mr-4">
                    <a href="#" className="text-white text-2xl">
                      <FaTwitter />
                    </a>
                  </div>
                  <div className="rounded-full bg-blue-500 p-2">
                    <a href="#" className="text-white text-2xl">
                      <FaGooglePlusG />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8 w-1/3 md:mb-0">
            <div className="footer-widget flex flex-wrap">
              <div className="footer-widget-heading">
                <h3 className="text-white text-lg font-semibold mb-2">
                  Useful Links
                </h3>
              </div>
              <div className="flex gap-2  w-full lg:flex-col">
                {FooterUrl.map((item, index) => (
                  <div className="w-full sm:w-auto" key={index}>
                    <ul className="flex flex-col">
                      <li>
                        <Link
                          to={item.link}
                          className="text-gray-500 hover:text-orange-500"
                        >
                          {item.name}
                        </Link>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className=" flex gap-24 items-center">
              <h3 className="text-white text-lg font-semibold mb-6">
                Subscribe
              </h3>
            </div>
            <div className="footer-text mb-4 text-gray-500">
              <p className="mb-4">
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full py-2 px-4 bg-gray-800 border border-gray-800 text-white focus:outline-none"
                style={{ borderRadius: "0.25rem 0 0 0.25rem" }}
              />
              <button
                className="bg-orange-500 text-white py-2 px-4 border border-orange-500 hover:bg-transparent hover:text-orange-500"
                style={{ borderRadius: "0 0.25rem 0.25rem 0" }}
              >
                <FaTelegramPlane
                  style={{
                    color: "#fff",
                    fontSize: "22px",
                    transform: "rotate(-6deg)",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center mt-0">
        <span className="text-white text-center text-lg font-semibold mb-0">
          Powered by:
        </span>
        <Link
          to="https://silicontechnepal.com.np/"
          className="flex items-center"
        >
          <img
            src="/silicontech.png"
            alt="logo"
            className="w-40 object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
