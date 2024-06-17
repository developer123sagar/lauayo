import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

import Logo from "@/components/Logo";
import { NAVLINKS } from "@/constants";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { TbMessage } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full fixed z-50 top-0 left-0 bg-white flex items-center justify-between py-2">
      <div className="lg:flex items-center justify-between text-white py-2 lg:px-10 px-3 w-full">
        <div className="flex items-center">
          <Logo className="w-[160px]" />
        </div>
        <div
          onClick={toggleMenu}
          className="absolute top-5 right-5 md:right-5 md:top-5 cursor-pointer lg:hidden w-7 h-7 "
        >
          {menuOpen ? <HiXMark size={30} /> : <FiMenu size={30} />}
        </div>
        <nav className="flex gap-3 md:gap-6">
          <FaCloudUploadAlt
            onClick={() => navigate("/login")}
            title="Upload"
            size={28}
            className="cursor-pointer text-gray-800"
          />
          <IoIosSend
            title="Send"
            size={28}
            className="cursor-pointer text-gray-800"
          />
          <TbMessage
            title="Notification"
            size={28}
            className="cursor-pointer text-gray-800"
          />
        </nav>
        <div
          className={`lg:flex lg:items-center lg:pb-0 pb-2 absolute lg:static text-gray-800 lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            menuOpen ? "top-14" : "top-[-250px]"
          }`}
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          {NAVLINKS.map((link, id) => (
            <Link to={link.to} key={id}>
              <p className="cursor-pointer nav w-fit lg:ml-8 lg:my-0 my-7 font-semibold">
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => navigate("/login")}
      className="m-1 bg-primary-main bg-prim px-8 py-2.5 text-white float-right mr-20 lg:mr-4 rounded-[1px]"
      >
        Login
      </button>
    </div>
  );
};

export default Navbar;
