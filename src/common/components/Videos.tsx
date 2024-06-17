/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { Spinner } from "@/components";
import MainPost from "@/components/MainPost";
import { IReelData } from "@/types";
import { useGetVideoQuery } from "@/redux/api/VideoApi";

const Videos = () => {
  const { isLoading, isSuccess, data } = useGetVideoQuery(null);
  
  if (isLoading) {
    return (
      <div className="flex justify-center w-screen h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {isSuccess &&
        (data as IReelData[]).map((reel) => (
          <div key={reel._id}>
            <MainPost reelVideo={reel} />
          </div>
        ))}
    </>
  );
};

export default Videos;
