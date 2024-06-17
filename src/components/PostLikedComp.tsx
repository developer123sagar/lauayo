import toast from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentDots, FaShare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { LIKE_VIDEOS, UNLIKE_VIDEOS } from "@/constants/API";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { IReelData } from "@/types";
import { useLikeVideoMutation } from "@/redux/api/VideoApi";
import { setSelectedReel } from "@/redux/reducers/AuthReducer";

const PostLikedComp = ({ data }: { data: IReelData }) => {
  const [setLike, { isLoading }] = useLikeVideoMutation();
  const { loginUser } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const likeOrUnlike = async ({ type }: { type: "LIKE" | "UNLIKE" }) => {
    try {
      await setLike({
        form: { buzz_id: data?._id },
        api: type === "LIKE" ? LIKE_VIDEOS : UNLIKE_VIDEOS,
      }).unwrap();
    } catch (err) {
      toast.error("something went wrong");
    }
  };
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute bottom-0 pl-2">
        <div className="pb-4 text-center">
          <button
            disabled={isLoading}
            className="rounded-full bg-gray-200 p-2 cursor-pointer"
          >
            {!data?.liked_by.includes(loginUser?._id || "") ? (
              <AiFillHeart
                onClick={() => likeOrUnlike({ type: "LIKE" })}
                size="25"
              />
            ) : (
              <AiFillHeart
                onClick={() => likeOrUnlike({ type: "UNLIKE" })}
                className="text-[#ff2626]"
                size="25"
              />
            )}
          </button>
          <span className="text-xs text-gray-800 font-semibold">
            {data?.likes || 0}
          </span>
        </div>

        <button
          onClick={() => {
            dispatch(setSelectedReel(data));
            navigate(`/videos/${data?.user_id?._id}`);
          }}
          className="pb-4 text-center"
        >
          <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
            <FaCommentDots size="25" />
          </div>
          <span className="text-xs text-gray-800 font-semibold">
            {data?.comments || 0}
          </span>
        </button>

        <button className="text-center">
          <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
            <FaShare size="25" />
          </div>
          <span className="text-xs text-gray-800 font-semibold">{}</span>
        </button>
      </div>
    </div>
  );
};

export default PostLikedComp;
