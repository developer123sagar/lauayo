import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Avatar from "@/components/Avatar";
import PostLikedComp from "@/components/PostLikedComp";
import { ErrRes, Following, IReelData } from "@/types";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import {
  setFollowingUser,
  setSelectedReel,
  setUserProfileData,
} from "@/redux/reducers/AuthReducer";
import {
  useFollowUserMutation,
  useGetFollowingUsersQuery,
  useUnfollowUserMutation,
} from "@/redux/api/AuthApi";

export default function MainPost({ reelVideo }: { reelVideo: IReelData }) {
  const { loginUser } = useAppSelector((state: RootState) => state.auth);
  const [FollowUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const { data: followingUsers } = useGetFollowingUsersQuery({});

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const video = document.getElementById(
      `Video-${reelVideo?._id}`
    ) as HTMLVideoElement;
    const postMainElement = document.getElementById(
      `Mainpost-${reelVideo._id}`
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
  }, [reelVideo._id]);

  const followUser = async () => {
    try {
      await FollowUser(reelVideo?.user_id._id).unwrap();
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  const hanldeUnfollowUser = async () => {
    try {
      await unfollowUser(reelVideo?.user_id._id).unwrap();
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (followingUsers) {
      dispatch(setFollowingUser(followingUsers));
    }
  }, [followingUsers]);

  return (
    <>
      <div
        id={`Mainpost-${reelVideo?._id}`}
        className="flex pr-10 pl-3 overflow-x-hidden  border-b py-6"
      >
        <div className="cursor-pointer ">
          <Avatar
            src={
              reelVideo?.user_id?.profile_picture ||
              "https://avatars.githubusercontent.com/u/124599?v=4"
            }
            name={reelVideo?.user_id?.name}
          />
        </div>
        <div className="w-full">
          <div className="pl-3 w-full  px-4">
            <div className="flex items-center justify-between pb-0.5">
              <Link
                className="flex gap-1.5 items-center"
                onClick={() => dispatch(setUserProfileData(reelVideo))}
                to={`/profile/${reelVideo?.user_id?._id}`}
              >
                <div>
                  <div className="flex items-center gap-x-1.5">
                    <span className="font-bold hover:underline text-[12px] lg:text-[16px] cursor-pointer">
                      {reelVideo?.user_id?.name}
                    </span>
                    {reelVideo?.user_id?.officialMark && (
                      <svg
                        fontSize="14px"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                      >
                        <g clipPath="url(#Icon_Color-Verified_Badge_svg__a)">
                          <path
                            d="M0 24a24 24 0 1 1 48 0 24 24 0 0 1-48 0Z"
                            fill="#20D5EC"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M37.12 15.88a3 3 0 0 1 0 4.24l-13.5 13.5a3 3 0 0 1-4.24 0l-8.5-8.5a3 3 0 1 1 4.24-4.24l6.38 6.38 11.38-11.38a3 3 0 0 1 4.24 0Z"
                            fill="#fff"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="Icon_Color-Verified_Badge_svg__a">
                            <path fill="#fff" d="M0 0h48v48H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    )}
                  </div>
                  <span className="text-[14px] text-gray-500">
                    @{reelVideo?.user_id?.username}
                  </span>
                </div>
              </Link>

              {reelVideo?.user_id?._id !== loginUser?._id && (
                <div>
                  {(followingUsers as Following[])?.some(
                    (user) => user?.user_id?._id === reelVideo?.user_id?._id
                  ) ? (
                    <button
                      onClick={hanldeUnfollowUser}
                      className="text-[15px] px-5 py-[8px] bg-[#a95ea9]  hover:bg-[#800080]/80 transition duration-300 text-white"
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      onClick={followUser}
                      className="text-[15px] text-[#800080] border border-[#b518dc] px-7 py-[8px] hover:bg-[#800080]/10 transition duration-300 font-medium"
                    >
                      Follow
                    </button>
                  )}
                </div>
              )}
            </div>
            <p className="text-[15px] text-gray-900 pb-0.5 break-words lg:max-w-[400px] max-w-[300px]">
              {reelVideo?.caption}
            </p>

            <div className="mt-2.5 flex lg:gap-4">
              <div
                onClick={() => {
                  dispatch(setSelectedReel(reelVideo));
                  navigate(`/videos/${reelVideo?.user_id?._id}`);
                }}
                className="relative min-h-[480px] max-h-[550px] max-w-full sm:w-[30rem] w-full  md:max-w-[320px] lg:max-w-[270px] flex items-center bg-black cursor-pointer"
              >
                <video
                  id={`Video-${reelVideo?._id}`}
                  src={reelVideo?.videoUrl}
                  loop
                  muted
                  controls
                  controlsList="nodownload"
                  className="object-cover mx-auto h-full aspect-[3/4]"
                />
                <img
                  className="absolute right-1 bottom-4"
                  width="90"
                  src={"/logo.png"}
                />
              </div>

              <PostLikedComp data={reelVideo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
