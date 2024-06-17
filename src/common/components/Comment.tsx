import React from "react";

import { SidebarComment } from "@/common/components/SidebarComment";
import { VideoSidebar } from "@/common/components/VideoSidebar";
import { RootState, useAppSelector } from "@/redux/store";
import { Navigate } from "react-router-dom";

export const Comment = () => {
  const { token } = useAppSelector((state: RootState) => state.auth);

  if (!token) {
    return <Navigate to={"/login"} />;
  }
  
  return (
    <>
      <div className="flex gap-2">
        <div className="lg:basis-[60%] sm:basis-[70%] hidden sm:block">
          <VideoSidebar />
        </div>
        <div className="lg:basis-[45%] sm:basis-[20%] w-full h-screen">
          <SidebarComment />
        </div>
      </div>
    </>
  );
};
