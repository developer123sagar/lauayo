import { useEffect } from "react";
import { AiFillSound } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

import { RootState, useAppSelector } from "@/redux/store";

export const VideoSidebar = () => {
  const { selectedReel } = useAppSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById(
      `video-${selectedReel?._id}`
    ) as HTMLVideoElement;
    const postMainElement = document.getElementById(
      `mainPost-${selectedReel?._id}`
    );

    if (postMainElement) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting ? video.play() : video.pause();
        },
        { threshold: [0.6] }
      );

      observer.observe(postMainElement);
    }
  }, [selectedReel?._id]);

  return (
    <section
      id={`mainPost-${selectedReel?._id}`}
      className="bg-black h-screen  flex"
    >
      <div className="w-1/5  p-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 flex justify-center items-center w-10 h-10 rounded-full cursor-pointer"
        >
          <RxCross2 size="24" color="white" />
        </button>
      </div>
      <div className="w-3/5 relative">
        <video
          id={`video-${selectedReel?._id}`}
          src={selectedReel?.videoUrl}
          loop
          controlsList="nodownload"
          controls
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="w-1/5 p-4 flex flex-col justify-between">
        <div className="flex justify-end">
          <HiOutlineDotsHorizontal color="white" size="24" />
        </div>
        <div className="flex justify-end">
          <IoIosArrowDropdownCircle color="white" size="24" />
          <IoIosArrowDropupCircle color="white" size="24" />
        </div>
        <div className="flex justify-end">
          <AiFillSound color="white" size="24" />
        </div>
      </div>
    </section>
  );
};
