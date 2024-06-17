import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
import { useEffect, useState } from "react";

import ModalLayout from "@/layouts/ModalLayout";
import { ErrRes, ModalProps } from "@/types";
import { RootState, useAppSelector } from "@/redux/store";
import { useEditProfileMutation } from "@/redux/api/AuthApi";

const EditProfile = ({ showModal, setIsShowModal }: ModalProps) => {
  const { loginUser } = useAppSelector((state: RootState) => state.auth);
  const [fileDisplayURL, setFileDisplayURL] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const [editProfile, { isLoading }] = useEditProfileMutation();

  useEffect(() => {
    if (loginUser?.name) {
      setName(loginUser.name);
    }
  }, []);

  const closeModal = () => {
    setIsShowModal(false);
    setName(loginUser?.name || "");
    setFileDisplayURL("");
    setFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setFileDisplayURL(fileUrl);
      setFile(file);
    }
  };

  const updateProfile = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("images", file);
    }
    if (name !== loginUser?.name) {
      formData.append("name", name);
    }

    try {
      const res = await editProfile(formData).unwrap();

      if (res.status === "success") {
        toast.success("Profile is updated successfully!");
        closeModal();
      }
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  return (
    <>
      <ModalLayout
        title="Edit Profile"
        showModal={showModal}
        setIsShowModal={setIsShowModal}
        closeModal={closeModal}
      >
        <div className="py-3 text-gray-600 overflow-hidden">
          <div className="flex gap-20 sm:gap-32 border-b border-border py-4">
            <h1>Profile Photo</h1>
            <div>
              <label htmlFor="fileInput" className="cursor-pointer">
                <div className="relative">
                  <img
                    src={
                      fileDisplayURL
                        ? fileDisplayURL
                        : loginUser?.profile_picture ||
                          "https://avatars.githubusercontent.com/u/124599?v=4"
                    }
                    alt={loginUser?.name}
                    className="h-24 w-24 object-cover rounded-full border border-gray-200"
                  />
                  <input
                    id="fileInput"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    hidden
                  />
                  <div className="absolute bottom-1 right-1 z-40 w-8 h-8 p-1 flex items-center justify-center rounded-full bg-slate-100">
                    <BsPencil className=" text-gray-500" title="Edit" />
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="flex gap-10 justify-between sm:justify-start w-[200px] sm:w-full sm:gap-32 border-b border-border py-4">
            <h1>Name</h1>
            <div>
              <input
                type="text"
                className="p-2.5 bg-gray-200 focus:outline-none w-[400px]"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-gray-400 text-[10px] sm:text-xs mt-2">
                Your nickname can only be changed once every 7 days.
              </p>
            </div>
          </div>
          <div className="flex justify-between sm:justify-start gap-10 sm:gap-32 border-b border-border py-4">
            <h1>Bio</h1>
            <div className="ml-5">
              <textarea
                name="bio"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={5}
                maxLength={80}
                className="border border-gray-300 p-2.5 w-[250px] sm:w-[400px] overflow-hidden focus:outline-none resize-none"
              />
              <p className="text-gray-400 text-xs">{bio.length}/80</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            disabled={isLoading}
            onClick={closeModal}
            className="bg-gray-50 text-gray-500 text-sm py-3 px-8 border border-gray-200 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            onClick={updateProfile}
            className={`bg-gray-300 text-gray-500 text-sm py-3 px-8 focus:outline-none ${
              loginUser?.name != name || fileDisplayURL
                ? "bg-purple-900 text-white"
                : ""
            }`}
          >
            {isLoading ? (
              <BiLoaderCircle
                className="animate-spin"
                color="#ffffff"
                size={25}
              />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </ModalLayout>
    </>
  );
};

export default EditProfile;
