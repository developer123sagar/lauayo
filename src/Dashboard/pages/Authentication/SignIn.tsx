/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";

import signin from "@/Dashboard/images/signin.jpg";
import { SiginForm } from "@/Dashboard/common/Constant";
import { Button, Logo } from "@/components";
import { useAuthFormSubmitMutation } from "@/redux/api/AuthApi";
import { POST_SUPERADMIN } from "@/constants/API";
import { useNavigate } from "react-router-dom";
import { setToken } from "@/redux/reducers/AuthReducer";
import { useAppDispatch } from "@/redux/store";

const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [authFormSubmit, { isLoading }] = useAuthFormSubmitMutation();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("please fill in all field");
      return;
    }
    try {
      const res = await authFormSubmit({
        form: form,
        api: POST_SUPERADMIN,
      }).unwrap();
      toast.success("sign in successfull");
      dispatch(setToken(`Bearer ${res.accessToken}`));
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap h-[100vh] items-center ">
          <div className="hidden w-full xl:block xl:w-1/2 h-full ">
            <div className="h-full">
              <img src={signin} alt="" className="h-full  object-cover" />
            </div>
          </div>
          <div className="w-full border-stroke xl:w-1/2 xl:border-l-2">
            <div>
              <Logo large className="mb-10 " />
            </div>
            <div className="w-full p-4 sm:p-12.5  mt-10 xl:p-17.5">
              <h2 className="mb-9 xl:text-3xl text-xl font-bold text-black  text-center sm:text-title-xl2">
                SIGN IN TO DASHBOARD
              </h2>
              <form
                className="flex-col justify-center  flex  items-center"
                onSubmit={handleFormSubmit}
              >
                {SiginForm.map((field, index) => (
                  <div key={index} className="mb-4  w-full xl:w-[60%]">
                    <div className="relative">
                      <input
                        name={field.name}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        onChange={handleInputChange}
                        className="w-full rounded  border-black border-2 bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                      />
                      <span className="absolute right-4 top-4">
                        {field.icon}{" "}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="mb-5  w-[60%] py-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full cursor-pointer    font-bold border border-primary bg-primary p-4 text-white bg-black transition hover:bg-opacity-90"
                  >
                    {isLoading ? "Signing in..." : "SIGN IN"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
