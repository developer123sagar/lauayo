import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";

import signin from "@/Dashboard/images/signin.jpg";
import { AuthFormProps, ErrRes } from "@/types";
import { Button, Input, Logo, Spinner } from "@/components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { setToken } from "@/redux/reducers/AuthReducer";
import { useAuthFormSubmitMutation } from "@/redux/api/AuthApi";
import { useAppDispatch } from "@/redux/store";
import { app } from "@/config/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthForm = ({ variant, title, api }: AuthFormProps) => {
  const initialAuthFormState = {
    email: "",
    password: "",
    ...(variant === "SIGNUP" && { username: "" }),
    ...(variant === "SIGNUP" && { name: "" }),
    ...(variant === "SIGNUP" && { mobile: `` }),
    ...(variant === "SIGNUP" && { confirm_password: "" }),
  };
  const [firebaseToken, setFirebaseToken] = useState("");
  const [isGoogleSignup, setIsGoogleSignup] = useState(false);

  const [form, setForm] = useState(initialAuthFormState);
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [authFormSubmit, { isLoading }] = useAuthFormSubmitMutation();

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const updatedForm = { ...form };
      if (variant === "SIGNUP") {
        updatedForm.mobile = `+977${updatedForm.mobile}`;
      }
      if (isGoogleSignup) {
        await authFormSubmit({
          form: {
            ...updatedForm,
            provider: "google",
            tokenId: firebaseToken,
          },
          api: api,
        });
      } else {
        const res = await authFormSubmit({
          form: updatedForm,
          api: api,
        }).unwrap();

        if (res.status === "success") {
          toast.success(res.message || "Success");
          variant === "SIGNIN" &&
            dispatch(setToken(`Bearer ${res.accessToken}`));
          variant === "SIGNUP" ? navigate("/login") : navigate("/");
        }
      }
    } catch (err) {
      const errRes = err as ErrRes;
      toast.error(errRes.error || errRes.message || "Something went wrong");
    }
  };

  const handleGoogleSignUp = async () => {
    setIsGoogleSignup(true);
    signInWithPopup(auth, provider).then(async (data) => {
      const token = await data.user.getIdToken();

      if (token) {
        setFirebaseToken(token);
      }
      setForm({
        ...form,
        name: data.user.displayName || "",
        email: data.user.email as string,
      });
      navigate("/register");
    });
  };

  return (
    <div className="h-[100vh] xl:overflow-y-hidden">
      <section className="w-full min-h-screen flex ">
        <div className="basis-[50%] md:block  hidden ">
          <img src={signin} alt="lauayo" className="h-full object-cover" />
        </div>
        <div className="md:basis-[50%]  flex flex-col items-center justify-center   basis-full  xl:py-2">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Logo large />
            <h2 className="mt-4 text-center text-3xl font-light">{title}</h2>
          </div>
          <div className="mt-6 sm:mx-auto w-full sm:max-w-md">
            <div className=" px-4 py-2 sm:rounded-lg sm:px-10">
              <form
                className={`${
                  variant === "SIGNUP" ? "space-y-2" : "space-y-6 "
                }`}
                onSubmit={handleFormSubmit}
              >
                {variant === "SIGNUP" && (
                  <>
                    <Input
                      id="username"
                      placeholder="Username"
                      type="text"
                      required
                      value={form.username}
                      onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
                    />
                    <Input
                      id="name"
                      placeholder="Name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                    <div className="relative flex flex-col justify-center">
                      <p className="absolute left-2 text-gray-500 mt-2">+977</p>
                      <Input
                        id="mobile"
                        placeholder="Mobile Number"
                        className="placeholder:pl-0 pl-12"
                        type="text"
                        required
                        value={form.mobile}
                        onChange={(e) =>
                          setForm({ ...form, mobile: e.target.value })
                        }
                      />
                    </div>
                  </>
                )}
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <div className="relative">
                  <Input
                    id="pass"
                    placeholder="Password"
                    type={showPass ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <div
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-2 bottom-4 cursor-pointer"
                  >
                    {showPass ? (
                      <FaRegEyeSlash size={20} className="text-gray-400" />
                    ) : (
                      <FaRegEye size={20} className="text-gray-400" />
                    )}
                  </div>
                </div>
                {variant === "SIGNUP" && (
                  <div className="relative">
                    <Input
                      id="confirm_pass"
                      placeholder="Confirm Password"
                      type={showPassConfirm ? "text" : "password"}
                      required
                      value={form.confirm_password}
                      onChange={(e) =>
                        setForm({ ...form, confirm_password: e.target.value })
                      }
                    />
                    <div
                      onClick={() => setShowPassConfirm(!showPassConfirm)}
                      className="absolute right-2 bottom-4 cursor-pointer"
                    >
                      {showPassConfirm ? (
                        <FaRegEyeSlash size={20} className="text-gray-400" />
                      ) : (
                        <FaRegEye size={20} className="text-gray-400" />
                      )}
                    </div>
                  </div>
                )}
                {variant === "SIGNIN" && (
                  <div className="my-1">
                    <p className="underline cursor-pointer text-sm">
                      Forgot Password ?
                    </p>
                  </div>
                )}
                {variant === "SIGNIN" && (
                  <button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="h-[3rem] bg-gray-200 text-black flex items-center justify-center gap-1 w-full"
                  >
                    <FcGoogle size={24} />
                    Sign in with Google
                  </button>
                )}

                <Button
                  disabled={isLoading}
                  className="h-[2.7rem] bg-black"
                  fullWidth
                >
                  {variant === "SIGNIN" ? (
                    isLoading ? (
                      <Spinner btn />
                    ) : (
                      "Login"
                    )
                  ) : isLoading ? (
                    <Spinner btn />
                  ) : (
                    "Signup"
                  )}
                </Button>

                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                  <h2>
                    {variant === "SIGNIN"
                      ? "New to Lauayo ?"
                      : "Already have an account"}
                  </h2>
                  <Link
                    onClick={() => setForm(initialAuthFormState)}
                    to={variant === "SIGNIN" ? "/register" : "/login"}
                    className="underline cursor-pointer"
                  >
                    {variant === "SIGNIN" ? "Create an account" : "Login"}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
