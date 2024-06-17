import React from "react";

import Header from "@/common/components/Header";
import Sidebar from "@/common/components/Sidebar";
import Videos from "@/common/components/Videos";

const Mainpage = () => {
  return (
    <>
      <Header />
      <div className="flex  md:gap-x-[8rem]">
        <div className="basis-[20%]  hidden md:block">
          <Sidebar />
        </div>
        <div className="lg:basis-[35%] md:basis-[80%] overflow-y-auto mt-20">
          <Videos />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
