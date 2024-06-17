import React, { useState, FormEvent } from "react";

import toast from "react-hot-toast";
import { Button, Spinner } from "@/components";
import { EditInput } from "@/components/ui/EditInput";
import { EDIT_USER } from "@/constants/API";
import { useUpdateApiMutation } from "@/redux/api/AuthApi";
import { useAppSelector } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

export const EditSystemUser = () => {
  const navigate = useNavigate();
  const [updateApi, { isLoading }] = useUpdateApiMutation();
  const selectedItem = useAppSelector((state) => state.auth.selectedItem);
  const [form, setForm] = useState(selectedItem || {});
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await updateApi({
        form: {
          form,
          user_id: form._id,
        },
        api: EDIT_USER,
      }).unwrap();
      toast.success("update success");
      if (res.status === "success") {
        navigate("/systemuser");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <DefaultLayout>
      <div className="mt-6">
        <form
          className="w-full max-w-4xl shadow px-10 py-4 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center mt-6">
            <h1 className="text-black font-bold border-b border-blue-600 mb-10">
              Edit users
            </h1>
          </div>
          <div className="flex flex-wrap gap-6 mt">
            <EditInput
              label="Name"
              value={form.name}
              className="w-full lg:w-1/3"
              placeH=""
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <EditInput
              label="Email"
              value={form.email}
              className="w-full lg:w-1/3"
              basis={20}
              placeH="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <EditInput
              label="Mobile Num"
              value={form.mobile}
              className="w-full lg:w-1/3"
              basis={20}
              placeH=""
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            />
          </div>
          <div className="flex  justify-center items-center mt-10">
            <Button disabled={isLoading} className="h-[2.7rem]" type="submit">
              {isLoading ? <Spinner /> : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};
