import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import signin from "@/Dashboard/images/signin.jpg";
import { Button, Input, Logo, Spinner } from "@/components";
import { useDeleteApiMutation } from "@/redux/api/AuthApi";
import { ErrRes } from "@/types";
import { DELETE_USER_ACCOUNT } from "@/constants/API";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { logOut } from "@/redux/reducers/AuthReducer";

const DeleteAccount = () => {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  const { token } = useAppSelector((state: RootState) => state.auth);

  const [deleteAccnt, { isLoading }] = useDeleteApiMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDeleteAccount = async () => {
    try {
      const res = await deleteAccnt({
        api: DELETE_USER_ACCOUNT,
        body: { password: password },
      }).unwrap();

      toast.success(res.message);
      dispatch(logOut());
      navigate("/");
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default">
      <div className="flex flex-wrap h-[100vh] items-center ">
        <div className="hidden w-full xl:block xl:w-1/2 h-full ">
          <div className="h-full">
            <img src={signin} alt="" className="h-full  object-cover" />
          </div>
        </div>
        <div className="w-full  border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div>
            <Logo large className="mb-10 " />
          </div>
          <div className="w-full p-4 sm:p-12.5  mt-10 xl:p-17.5">
            <h2 className="mb-9 xl:text-3xl text-xl font-bold text-rose-400 text-center sm:text-title-xl2">
              Delete your account
            </h2>
            <form className="flex-col flex justify-center items-center">
              <div className="relative">
                <Input
                  id="pass"
                  label="Password"
                  type={showPass ? "text" : "password"}
                  required
                  value={password}
                  className="w-[350px]"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-2 bottom-5 cursor-pointer"
                >
                  {showPass ? (
                    <FaRegEyeSlash size={20} className="text-gray-400" />
                  ) : (
                    <FaRegEye size={20} className="text-gray-400" />
                  )}
                </div>
              </div>
              <div className="mb-5 py-4">
                <Button
                  onClick={handleDeleteAccount}
                  type="submit"
                  disabled={isLoading}
                  className="w-[350px] cursor-pointer bg-[#800080] font-bold border-none  p-4 text-white transition hover:bg-opacity-80"
                >
                  {isLoading ? <Spinner btn /> : "Delete Account"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
