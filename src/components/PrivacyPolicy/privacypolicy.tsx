import parser from "html-react-parser";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GET_PRIVACYPOLICY } from "@/constants/API";
import { useGetApiQuery } from "@/redux/api/AuthApi";

export const Privacypolicy = () => {
  const { data, isError, isLoading } = useGetApiQuery({
    api: GET_PRIVACYPOLICY,
  });

  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  return (
    <>
      <Navbar />
      <div className="mb-[2rem]  md:mb-[7rem]">
        <div className="relative  flex items-center justify-center mt-16">
          <img
            src="/privacy.jpg"
            alt="privacy"
            className="w-full md:h-[25rem] h-[12rem] object-cover"
          />
          <div className="absolute  pt-20">
            <span className="flex w-[120px] h-[2px]  bg-[#e1e1e1]  mx-auto mb-4">
              <em className="w-[60px] h-[2px] bg-[#e54350] mx-auto" />
            </span>
            <h1 className="w-fit mx-auto font-bold md:text-3xl text-2xl text-white mb-2">
              Privacy Policy
            </h1>
          </div>
        </div>
        <div className="   md:mx-[6rem] ">
          <div className="mt-10 mx-4 lg:mx-10">
            <h1 className="font-bold text-[20px]">{data && data.title}</h1>
            <div className="browser-css">{parser(data.body)}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
