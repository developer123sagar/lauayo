import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
import { BsPencil } from "react-icons/bs";
import { TbPlant2 } from "react-icons/tb";
import { useParams } from "react-router-dom";

import EditProfile from "@/components/EditProfile";
import LauayoPlanModal from "@/components/LauayoPlanModal";
import MainLayout from "@/layouts/MainLayout";
// import MyFollowers from "@/components/MyFollowers";
import ProfileUserPost from "@/components/ProfileUserPost";
import { Following, ISpecificUserVideo, ProfileUserVideo } from "@/types";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { setUser, setUserProfileData } from "@/redux/reducers/AuthReducer";
import {
  useGetOtherUserVideoQuery,
  useGetSpecificUserVideoQuery,
} from "@/redux/api/VideoApi";
import { useGetLoginUserInfoQuery } from "@/redux/api/AuthApi";

import Myfollower = dynamic

const UserProfile = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [activeBtn, setActiveBtn] = useState("");
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showLauayoPlanModal, setShowLauayoPlanModal] = useState(false);
  const [followerModal, setShowFollwerModal] = useState(false);
  const [skipGetLoginUserInfo, setSkipGetLoginUserInfo] = useState(true);
  const [skipGetOtheUserVideo, setSkipGetOtherUserVideo] = useState(true);

  const { loginUser, userProfileData, followingUsers } = useAppSelector(
    (state: RootState) => state.auth
  );
  const { data: UserVideo } = useGetSpecificUserVideoQuery(null, {
    skip: loginUser?._id != id,
  });
  const { data: otherUserVideo } = useGetOtherUserVideoQuery(id, {
    skip: skipGetOtheUserVideo,
  });
  const { data, isSuccess } = useGetLoginUserInfoQuery(
    {},
    { skip: skipGetLoginUserInfo }
  );

  useEffect(() => {
    setTimeout(() => {
      setSkipGetLoginUserInfo(false);
      setSkipGetOtherUserVideo(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (UserVideo) {
      dispatch(setUserProfileData(UserVideo[0]));
    }
  }, [UserVideo, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
    }
  }, [data, dispatch, isSuccess]);

  return (
    <MainLayout>
      <EditProfile
        showModal={showEditProfile}
        setIsShowModal={setShowEditProfile}
      />
      <MyFollowers
        title={userProfileData?.user_id?.name as string}
        showModal={followerModal}
        setIsShowModal={setShowFollwerModal}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      />
      <LauayoPlanModal
        showModal={showLauayoPlanModal}
        setIsShowModal={setShowLauayoPlanModal}
      />
      <div className="pt-[10px] pr-3 p-4 sm:p-10 md:p-0 2xl:mx-auto">
        <div className="flex w-full">
          {userProfileData?.user_id?.profile_picture ||
          loginUser?.profile_picture ? (
            <img
              className="w-[120px] h-[120px] min-w-[120px] rounded-full border object-cover border-gray-200"
              src={
                loginUser?._id !== id
                  ? userProfileData?.user_id?.profile_picture ||
                    "https://avatars.githubusercontent.com/u/124599?v=4"
                  : loginUser?.profile_picture
              }
            />
          ) : (
            <div className="min-w-[150px] h-[150px] bg-gray-200 rounded-full" />
          )}

          <div className="ml-5 w-full">
            <div>
              <p className="text-[20px] sm:text-[30px] font-bold truncate flex gap-2 items-center">
                <span>
                  {loginUser?._id !== id
                    ? userProfileData?.user_id?.name
                    : loginUser?.name}
                </span>
                {(userProfileData?.user_id?.officialMark ||
                  loginUser?.officialMark) && (
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
              </p>
              <p className="text-[14px] text-gray-500">
                @
                {userProfileData?.user_id?.username ||
                  userProfileData?.user_id_username ||
                  loginUser?.username}
              </p>
            </div>

            {loginUser?._id == id && (
              <li className="flex flex-col md:flex-row w-fit gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditProfile(true)}
                  className="flex item-center py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"
                >
                  <BsPencil className="mt-0.5 mr-1" size="18" />
                  <span>Edit profile</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowLauayoPlanModal(true)}
                  className="flex_center text-green-900 py-1.5 px-3.5 mt-3 text-[15px] font-semibold border hover:bg-gray-100"
                >
                  <TbPlant2 className="mt-0.5 mr-1 text-green-600" size={18} />
                  Lauayo plan
                </button>
              </li>
            )}
            <div className="mt-4">
              {loginUser?._id !== id ? (
                (followingUsers as unknown as Following[])?.some(
                  (user) => user?.user_id?._id === id
                ) ? (
                  <button className="text-[15px] px-5 py-[8px] bg-[#a95ea9]  hover:bg-[#800080]/80 transition duration-300 text-white">
                    Following
                  </button>
                ) : (
                  <button className="text-[15px] text-[#800080] border border-[#b518dc] px-7 py-[8px] hover:bg-[#800080]/10 transition duration-300 font-medium">
                    Follow
                  </button>
                )
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex items-center pt-4">
          <div
            onClick={() => {
              setShowFollwerModal(loginUser?._id === id);
              setActiveBtn("Following");
            }}
            className="mr-4 cursor-pointer"
          >
            <span className="font-bold">
              {otherUserVideo &&
                Array.isArray(otherUserVideo) &&
                (otherUserVideo as ProfileUserVideo[])[0]?.user_id?.following}
            </span>
            <span className="text-gray-500 font-light text-[15px] pl-1.5 hover:underline">
              Following
            </span>
          </div>
          <div
            onClick={() => {
              setShowFollwerModal(loginUser?._id === id);
              setActiveBtn("Followers");
            }}
            className="mr-4 cursor-pointer"
          >
            <span className="font-bold">
              {" "}
              {otherUserVideo &&
                Array.isArray(otherUserVideo) &&
                (otherUserVideo as ProfileUserVideo[])[0]?.user_id?.followers}
            </span>
            <span className="text-gray-500 font-light text-[15px] pl-1.5 hover:underline">
              Followers
            </span>
          </div>
        </div>

        <ul className="w-full flex items-center pt-4 border-b">
          <li className="w-60 text-center py-2 text-[17px] font-semibold border-b-2 border-b-black">
            Videos
          </li>
          <li className="w-60 text-gray-500 text-center py-2 text-[17px] font-semibold">
            Liked
          </li>
        </ul>

        <div className="mt-4 px-0 sm:pr-4 grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
          {(
            (UserVideo as ISpecificUserVideo[]) ||
            (otherUserVideo as ISpecificUserVideo[])
          )?.map((video) => (
            <ProfileUserPost key={video._id} userReelVideo={video} />
          ))}
        </div>

        <div className="pb-20" />
      </div>
    </MainLayout>
  );
};

export default UserProfile;
