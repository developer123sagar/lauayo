import { AiFillTwitterCircle } from "react-icons/ai";
import { FaComment, FaHeart, FaShare, FaUser } from "react-icons/fa";
import { IoShareSharp } from "react-icons/io5";
import { MdOutlineFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { useState } from "react";

import Avatar from "@/components/Avatar";
import CommnetBar from "@/common/components/CommnetBar";
import { CommentSection } from "@/common/components/CommentSection";
import { formatTimestamp } from "@/helpers";
import { RootState, useAppSelector } from "@/redux/store";
import toast from "react-hot-toast";

export const SidebarComment = () => {
  const { id } = useParams();
  const [copySuccess, setCopySuccess] = useState(false);

  const { selectedReel } = useAppSelector((state: RootState) => state.auth);

  const handleCopyLink = () => {
    const url = `${import.meta.env.VITE_APP_URL}/videos/${id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 2000);
      })
      .catch(() => {
        toast.error("Failed to copy");
      });
  };

  return (
    <>
      <section className="md:px-10 pt-8 h-full flex flex-col justify-between relative">
        <div className="hidden sm:block">
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-4">
              <Avatar
                src={
                  selectedReel?.user_id?.profile_picture ||
                  "https://avatars.githubusercontent.com/u/124599?v=4"
                }
                name={selectedReel?.user_id?.name}
              />
              <div className="flex flex-col  ">
                <h1>{selectedReel?.user_id?.name}</h1>
                <div className="flex flex-row gap-4 justify-center items-center">
                  <h1 className="font-bold">
                    {selectedReel?.user_id?.username || ""}
                  </h1>
                  <FaUser />
                  <p>{formatTimestamp(selectedReel?.createdAt as Date)}</p>
                </div>
              </div>
            </div>
            <div>
              <button className="text-[15px] px-5 py-[8px] bg-[#a95ea9]  hover:bg-[#800080]/80 transition duration-300 text-white">
                Follow
              </button>
            </div>
          </div>
          <div className="flex flex-col  mt-4">
            <p>{selectedReel?.caption}</p>
            {/* <p className="flex gap-4 items-center">
            <FaMusic />
            music
          </p> */}
          </div>
          <div className="flex gap-4  items-center">
            <div className="flex items-center gap-4">
              <FaHeart color="red" /> {selectedReel?.likes}
            </div>
            <div className="flex items-center gap-4">
              <FaComment /> {selectedReel?.comments}
            </div>
            <div className="flex items-center gap-4">
              <IoShareSharp />
              88.7 B
            </div>
            <div className="flex items-center gap-4 flex-row">
              <RiWhatsappFill color="green" />
              <MdOutlineFacebook color="blue" />
              <AiFillTwitterCircle color="purple" />
              <FaShare />
            </div>
          </div>
          <div className="bg-gray-200 relative py-3 pl-2 gap-4 mt-4 flex items-center">
            <span className="text-sm truncate">{`${
              import.meta.env.VITE_APP_URL
            }/videos/${id}`}</span>
            <button
              type="button"
              className="font-bold absolute right-3"
              onClick={handleCopyLink}
            >
              {copySuccess ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
        <CommentSection />
        <CommnetBar />
      </section>
    </>
  );
};
