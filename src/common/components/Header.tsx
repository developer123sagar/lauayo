import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { TbMessage } from "react-icons/tb";

import { Logo } from "@/components";
import Avatar from "@/components/Avatar";
import { BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { logOut } from "@/redux/reducers/AuthReducer";
import toast from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { loginUser } = useAppSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const hanldeLogout = () => {
    setShowMenu(false);
    dispatch(logOut());
    window.location.reload();
    toast.success("Logout successfully!");
  };

  return (
    <div className="border-b  border-gray-300 py-1 fixed top-0 left-0 w-screen z-50 bg-white">
      <header className="flex py-2 px-2 md:px-20 justify-between items-center">
        <Logo className="w-[180px] hidden sm:block" />
        <div className="hidden relative md:flex items-center h-12">
          <CiSearch className="absolute right-3 text-gray-400" size={28} />
        </div>

        <nav className="flex gap-6 px-2 md:ml-0 w-full md:w-fit">
          <FaCloudUploadAlt
            onClick={() => navigate("/upload-video")}
            title="Upload"
            size={28}
            className="cursor-pointer"
          />
          <IoIosSend title="Send" size={28} className="cursor-pointer" />
          <TbMessage
            title="Notification"
            size={28}
            className="cursor-pointer"
          />
        </nav>
        <Avatar
          src={
            loginUser?.profile_picture
              ? loginUser?.profile_picture
              : "https://avatars.githubusercontent.com/u/124599?v=4"
          }
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu ? (
          <div className="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[4.5rem] right-1">
            <button
              onClick={() => {
                setShowMenu(false);
                navigate(`/profile/${loginUser?._id}`);
              }}
              className="flex items-center w-full justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer"
            >
              <BiUser size="20" />
              <span className="pl-2 font-semibold text-sm">Profile</span>
            </button>
            <button
              onClick={() => {
                setShowMenu(false);
                navigate("/user/permanent-delete");
              }}
              className="flex items-center justify-start w-full py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"
            >
              <AiOutlineUserDelete size={20} />
              <span className="pl-2 font-semibold text-sm">Delete Account</span>
            </button>
            <button
              onClick={hanldeLogout}
              className="flex items-center justify-start w-full py-3 px-1.5 hover:bg-gray-100 border-t cursor-pointer"
            >
              <FiLogOut size={20} />
              <span className="pl-2 font-semibold text-sm">Log out</span>
            </button>
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
