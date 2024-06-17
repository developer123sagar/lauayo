import React, { useState, FormEvent, useEffect } from "react";
import toast from "react-hot-toast";

import { Button, Input, Spinner } from "@/components";
import { useAuthFormSubmitMutation, useGetApiQuery } from "@/redux/api/AuthApi";
import { GET_PRIVACYPOLICY, POST_PRIVACYPOLICY } from "@/constants/API";
import TextEditor from "@/components/ui/TextEditor";
import DefaultLayout from "@/Dashboard/layout/DefaultLayout";
import { useNavigate } from "react-router-dom";
interface FormState {
  title: string;
  body: string;
}
export const EditPrivacyPolicy = () => {
  const navigate = useNavigate();
  const [FormSubmit, { isLoading }] = useAuthFormSubmitMutation();
  const [form, setForm] = useState<FormState>({
    title: "",
    body: "",
  });
  const {
    data,
    isError,
    isLoading: isGetDataLoading,
  } = useGetApiQuery({ api: GET_PRIVACYPOLICY });

  useEffect(() => {
    if (!isGetDataLoading && !isError && data) {
      setForm({
        title: data.title,
        body: data.body,
      });
    }
  }, [data, isError, isGetDataLoading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await FormSubmit({
        form: form,
        api: POST_PRIVACYPOLICY,
      }).unwrap();
      toast.success("Data has been submitted successfully");
      navigate("/privacypolicy");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  console.log(form.body)
  
  return (
    <>
      <DefaultLayout>
        <div className="mt-6">
          <div>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-4xl shadow px-6 py-4 mx-auto"
            >
              <div className="flex justify-center items-center mt-2">
                <h1 className="text-black font-bold border-b border-blue-600 mb-10">
                  Edit PrivacyPolicy
                </h1>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="mb-4 w-full md:w-1/2 px-4">
                  <Input
                    label="Title"
                    id="title"
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full md:w-full px-4 mb-4">
                  <label htmlFor="description" className="block mb-2">
                    Description
                  </label>
                  <TextEditor
                    setForm={setForm}
                    fieldName={"body"}
                    existingDescription={form.body}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner btn /> : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};
