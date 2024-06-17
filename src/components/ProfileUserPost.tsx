import { ISpecificUserVideo } from "@/types";
import { useEffect } from "react";

const ProfileUserPost = ({
  userReelVideo,
}: {
  userReelVideo: ISpecificUserVideo;
}) => {
  useEffect(() => {
    const video = document.getElementById(
      `video${userReelVideo._id}`
    ) as HTMLVideoElement;

    setTimeout(() => {
      video.addEventListener("mouseenter", () => {
        video.play();
      });
      video.addEventListener("mouseleave", () => {
        video.pause();
      });
    }, 50);
  }, [userReelVideo._id]);

  return (
    <div className="relative brightness-90 hover:brightness-[1.1] cursor-pointer">
      <div>
        <video
          id={`video${userReelVideo._id}`}
          src={userReelVideo?.videoUrl}
          muted
          loop
          className="aspect-[3/4] object-cover"
        />
      </div>
      <div className="px-1">
        <p className="text-gray-4500 text-[15px] pt-1 break-words text-sm">
          {userReelVideo.caption}
        </p>
        <strong className="text-gray-400 text-xs">
          {userReelVideo.likes} Likes
        </strong>
      </div>
    </div>
  );
};

export default ProfileUserPost;
