import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";

import { Button, Input, Spinner } from "@/components";
import { useAuthFormSubmitMutation } from "@/redux/api/AuthApi";
import { POST_TERMS } from "@/constants/API";
import TextEditor from "@/components/ui/TextEditor";
import DefaultLayout from "@/Dashboard/layout/DefaultLayout";

interface FormState {
  title: string;
  body: string;
}

export const AddTermsCondition = () => {
  const [FormSubmit, { isLoading }] = useAuthFormSubmitMutation();
  const [form, setForm] = useState<FormState>({
    title: "",
    body: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await FormSubmit({
        form: form,
        api: POST_TERMS,
      }).unwrap();
      toast.success("Data has been submitted successfully");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <div className="w-full">
          <div className="bg-white border-border border px-4 py-8 shadow-sm sm:rounded-lg sm:px-10">
            <form
              className="w-full max-w-4xl shadow px-10 py-4 mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-center items-center mt-6">
                <h1 className="text-black font-bold border-b border-blue-600 mb-10">
                  Add TermsCondition
                </h1>
              </div>
              <div className="flex flex-wrap -mx-4">
                <div className="mb-4 w-full md:w-1/2 px-4">
                  <Input
                    label="Title"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                    required
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                </div>
                <div className="w-full md:w-full px-4 mb-4">
                  <TextEditor setForm={setForm} fieldName={"body"} />
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
      </div>
    </DefaultLayout>
  );
};
