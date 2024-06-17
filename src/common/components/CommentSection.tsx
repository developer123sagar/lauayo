import { AiOutlineHeart } from "react-icons/ai";
import { useGetCommentQuery } from "@/redux/api/VideoApi";

import Avatar from "@/components/Avatar";
import { CommentType } from "@/types";
import { RootState, useAppSelector } from "@/redux/store";
import { formatTimestamp } from "@/helpers";

export const CommentSection = () => {
  const { selectedReel } = useAppSelector((state: RootState) => state.auth);
  const { data } = useGetCommentQuery(selectedReel?._id);

  return (
    <>
      <div className="flex justify-between my-2">
        <h1 className="font-bold border-b-2 border-black">Comments</h1>
      </div>
      <div className="overflow-y-scroll md:h-[55vh] h-[70vh]">
        {(data as CommentType[])?.map((comment) => (
          <section key={comment?._id} className="mt-4">
            <div className="flex justify-between gap-10 mt-8 ">
              <div className="flex gap-4">
                <Avatar
                  src={
                    comment?.commenter_id?.profile_picture ||
                    "https://avatars.githubusercontent.com/u/124599?v=4"
                  }
                  name={comment?.commenter_id?.name}
                />
                <div>
                  <h1>{comment?.commenter_id?.name}</h1>
                  <p>{comment?.comment}</p>
                  <div className="flex flex-col gap-1 text-sm">
                    <div className="flex gap-2 ">
                      <p>{formatTimestamp(comment?.createdAt as Date)}</p>
                      <span className="hover:underline cursor-pointer">
                        reply
                      </span>
                    </div>
                    {/* <span className="cursor-pointer hover:underline">
                      View 28 reply
                    </span> */}
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <AiOutlineHeart />
                <span>{}</span>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};
