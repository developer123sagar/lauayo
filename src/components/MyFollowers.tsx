import toast from "react-hot-toast";
import { Dispatch, SetStateAction } from "react";

import Avatar from "@/components/Avatar";
import ModalLayout from "@/layouts/ModalLayout";
import { ErrRes, Following } from "@/types";
import {
  useGetFollowersUsersQuery,
  useGetFollowingUsersQuery,
  useUnfollowUserMutation,
} from "@/redux/api/AuthApi";

const MyFollowers = ({
  showModal,
  setIsShowModal,
  title,
  activeBtn,
  setActiveBtn,
}: {
  showModal: boolean;
  setIsShowModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  activeBtn: string;
  setActiveBtn: Dispatch<SetStateAction<string>>;
}) => {
  const { data: followingUsers } = useGetFollowingUsersQuery({});
  const { data: followers } = useGetFollowersUsersQuery({});
  const [unfollowUser] = useUnfollowUserMutation();

  const hanldeUnfollowUser = async (userId: string) => {
    try {
      await unfollowUser(userId).unwrap();
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  return (
    <ModalLayout
      showModal={showModal}
      setIsShowModal={setIsShowModal}
      title={title}
    >
      <>
        <ul className="w-full flex items-center pt-4 border-b">
          <li
            onClick={() => setActiveBtn("Following")}
            className={`w-40 py-2 mr-5 text-[17px] font-medium cursor-pointer ${
              activeBtn === "Following"
                ? "border-[#800080] border-b-2 transition duration-1000"
                : ""
            }`}
          >
            Following{" "}
            <span className="font-bold text-lg">{followingUsers?.length}</span>
          </li>
          <li
            onClick={() => setActiveBtn("Followers")}
            className={`w-40 py-2 text-[17px] font-medium cursor-pointer ${
              activeBtn === "Followers"
                ? "border-[#800080] border-b-2 transition duration-1000"
                : ""
            }`}
          >
            Followers{" "}
            <span className="font-bold text-lg">{followers?.length}</span>
          </li>
        </ul>
        {activeBtn == "Following" ? (
          <ul className="flex flex-col gap-5 mt-5 h-[50vh] overflow-y-scroll">
            {(followingUsers as Following[])?.map((following) => (
              <li
                className="flex gap-4 justify-between items-center"
                key={following?._id}
              >
                <div className="flex items-center gap-4">
                  <Avatar
                    src={
                      following?.user_id?.profile_picture ||
                      "https://avatars.githubusercontent.com/u/124599?v=4"
                    }
                  />
                  <div className="flex flex-col">
                    <strong className="text-gray-700 text-base hover:underline cursor-pointer">
                      {following?.user_id?.name}
                    </strong>
                    <span className="text-gray-400 font-medium">
                      {following?.user_id_username}
                    </span>
                  </div>
                </div>
                {(followers as Following[])?.some(
                  (user) => following?.user_id?._id == user?.follower_id?._id
                ) ? (
                  <button
                    onClick={() => hanldeUnfollowUser(following?.user_id?._id)}
                    className="text-[15px] w-[120px] px-5 py-[8px] bg-purple-800 transition duration-300 text-white font-bold"
                  >
                    Friends
                  </button>
                ) : (
                  <button
                    onClick={() => hanldeUnfollowUser(following?.user_id?._id)}
                    className="text-[15px] w-[120px] px-5 py-[8px] bg-gray-200 transition duration-300 text-gray-800 font-bold"
                  >
                    Following
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-5 mt-5">
            {(followers as Following[])?.map((follower) => (
              <li
                className="flex gap-4 justify-between items-center"
                key={follower?._id}
              >
                <div className="flex items-center gap-4">
                  <Avatar
                    src={
                      follower?.follower_id?.profile_picture ||
                      "https://avatars.githubusercontent.com/u/124599?v=4"
                    }
                  />
                  <div className="flex flex-col">
                    <strong className="text-gray-700 text-base cursor-pointer hover:underline">
                      {follower?.follower_id?.name}
                    </strong>
                    <span className="text-gray-400 font-medium">
                      {follower?.follower_id_username}
                    </span>
                  </div>
                </div>
                {(followingUsers as Following[])?.some(
                  (user) => user?.user_id?._id == follower?.follower_id?._id
                ) ? (
                  <button
                    // onClick={() => hanldeUnfollowUser(follower?.user_id?._id)}
                    className="text-[15px] w-[120px] px-5 py-[8px] bg-purple-800 transition duration-300 text-white font-bold"
                  >
                    Friends
                  </button>
                ) : (
                  <button
                    // onClick={() => hanldeUnfollowUser(follower?.user_id?._id)}
                    className="text-[15px] w-[120px] font-bold px-5 py-[8px] bg-gray-200 transition duration-300 text-gray-800"
                  >
                    Follow
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </>
    </ModalLayout>
  );
};

export default MyFollowers;
