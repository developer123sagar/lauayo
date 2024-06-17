import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle, BiSolidCloudUpload } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

import Header from "@/common/components/Header";
import { useUploadVideoMutation } from "@/redux/api/VideoApi";
import { ErrRes } from "@/types";

export default function UploadVideo() {
  const [caption, setCaption] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [fileDisplayURL, setFileDisplayURL] = useState<string>("");

  const [uploadVideo, { isLoading }] = useUploadVideoMutation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setFileDisplayURL(fileUrl);
      setFile(file);
    }
  };

  const discard = () => {
    setFileDisplayURL("");
    setFile(null);
    setCaption("");
  };

  const clearVideo = () => {
    setFileDisplayURL("");
    setFile(null);
  };

  const UploadPost = async () => {
    if (!caption) {
      return toast.error("Caption is required");
    }
    if (!file) {
      return toast.error("Video is required");
    }

    const formData = new FormData();
    formData.append("images", file);
    formData.append("type", "video");
    formData.append("caption", caption);

    try {
      const res = await uploadVideo(formData).unwrap();
      toast.success(res.message);
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  return (
    <>
      <>
        <div className="bg-[#F8F8F8] h-[100vh]">
          <Header />
          <div className="flex justify-between mx-auto w-full px-2 max-w-[1140px]">
            <div className="w-full mt-[80px] mb-[40px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4">
              <div>
                <h1 className="text-[23px] font-semibold">Upload your video</h1>
                <h2 className="text-gray-400 mt-1">
                  Post a video to your account
                </h2>
              </div>

              <div className="mt-8 md:flex gap-6">
                {!fileDisplayURL ? (
                  <label
                    htmlFor="fileInput"
                    className="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[300px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    <BiSolidCloudUpload size="40" color="#b3b3b1" />
                    <p className="mt-4 text-[17px]">Select video to upload</p>
                    <p className="mt-1.5 text-gray-500 text-[13px]">
                      Or drag and drop a file
                    </p>
                    <p className="mt-12 text-gray-400 text-sm">MP4</p>
                    <p className="mt-2 text-gray-400 text-[13px]">
                      Up to 1 minute
                    </p>
                    <p className="mt-2 text-gray-400 text-[13px]">
                      Less than 40 MB
                    </p>
                    <label
                      htmlFor="fileInput"
                      className="p-2 mt-8 text-white text-[15px] w-[80%] bg-[#800080] rounded-sm cursor-pointer"
                    >
                      Select file
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      hidden
                      accept=".mp4"
                    />
                  </label>
                ) : (
                  <div className="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[300px] h-[470px] cursor-pointer relative">
                    <img
                      className="absolute right-4 bottom-6 z-20"
                      width="90"
                      src="/logo.png"
                    />
                    <video
                      autoPlay
                      loop
                      muted
                      className="absolute rounded object-cover z-10 w-full h-full"
                      src={fileDisplayURL}
                    />

                    <div className="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300">
                      <div className="flex items-center truncate">
                        <AiOutlineCheckCircle
                          size="16"
                          className="min-w-[16px]"
                        />
                        <p className="text-[11px] pl-1 truncate text-ellipsis">
                          {file?.name}
                        </p>
                        <span className="text-[11px] pl-2">
                          {file && Math.round(file?.size / (1024 * 1024))} MB
                        </span>
                      </div>
                      <button
                        onClick={() => clearVideo()}
                        className="text-[11px] ml-2 font-semibold"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-4 mb-6 w-full">
                  <div className="mt-5">
                    <div className="flex items-center justify-between">
                      <div className="mb-1 text-[15px]">Caption</div>
                      <div className="text-gray-400 text-[12px]">
                        {caption.length}/60
                      </div>
                    </div>
                    <input
                      maxLength={60}
                      type="text"
                      className="w-full border p-2.5 rounded-md focus:outline-none"
                      value={caption}
                      onChange={(event) => setCaption(event.target.value)}
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      disabled={isLoading}
                      onClick={() => discard()}
                      className="px-10 py-2.5 mt-8 border text-[16px] hover:bg-gray-100 rounded-sm"
                    >
                      Discard
                    </button>
                    <button
                      disabled={isLoading}
                      onClick={() => UploadPost()}
                      className="px-10 py-2.5 mt-8 border text-[16px] text-white bg-[#800080] rounded-sm"
                    >
                      {isLoading ? (
                        <BiLoaderCircle
                          className="animate-spin"
                          color="#ffffff"
                          size={25}
                        />
                      ) : (
                        "Post"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
