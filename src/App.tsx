import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Home from "@/components/Home/Home";
import DeleteAccount from "@/Pages/DeleteAccount";
import SignIn from "@/Dashboard/pages/Authentication/SignIn";
import UploadVideo from "@/Pages/UploadVideo";
import UserProfile from "@/Pages/UserProfile";
import { AuthForm } from "@/components";
import { About } from "@/components/About/About";
import { setToken } from "@/redux/reducers/AuthReducer";
import { useAppDispatch } from "@/redux/store";
import { POST_USER_LOGIN, POST_USER_REGISTER } from "@/constants/API";
import { Privacypolicy } from "@/components/PrivacyPolicy/privacypolicy";
import { Addprivacypolicy } from "@/Dashboard/components/AddComponent/Addprivacypolicy";
import { AddTermsCondition } from "@/Dashboard/components/AddComponent/AddTermsCondition";
import { TermsCondition } from "@/components/PrivacyPolicy/TermsCondition";
import { ViewPrivacyPolicy } from "./Dashboard/components/ViewComponent/viewPrivacyPolicy";
import { Contact } from "./components/Contact/contact";
import { Comment } from "./common/components/Comment";
import { AddContentpolicy } from "./Dashboard/components/AddComponent/AddContentPolicy";
import { ContentPolicy } from "./components/PrivacyPolicy/ContentPollicy";
import { EditContentpolicy } from "./Dashboard/components/EditComponent/EditContentPolicy";
import { EditTermsCondition } from "./Dashboard/components/EditComponent/EditTermsCondition";
import { EditPrivacyPolicy } from "./Dashboard/components/EditComponent/EditPrivacyPolicy";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token") || "";

    if (typeof window !== "undefined" && token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/contentpolicy" element={<ContentPolicy/>} />
        <Route path="/editcontentpolicy" element={<EditContentpolicy/>} />
        <Route path="/editprivacypolicy" element={<EditPrivacyPolicy/>} />
        <Route path="/edittermscondition" element={<EditTermsCondition/>} />
        <Route path="/addprivacypolicy" element={<Addprivacypolicy />} />
        <Route path="/addContentPolicy" element={<AddContentpolicy />} />
        <Route path="/viewprivacypolicy" element={<ViewPrivacyPolicy />} />
        <Route path="/addterms" element={<AddTermsCondition />} />
        <Route
          path="/login"
          element={
            <AuthForm title="Login" variant="SIGNIN" api={POST_USER_LOGIN} />
          }
        />
        <Route
          path="/register"
          element={
            <AuthForm
              title="Register"
              variant="SIGNUP"
              api={POST_USER_REGISTER}
            />
          }
        />
        <Route
          path="/adminlogin"
          element={
            <>
              <SignIn />
            </>
          }
        />
        <Route path="/user/permanent-delete" element={<DeleteAccount />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/videos/:id" element={<Comment />} />
      </Routes>
    </>
  );
}

export default App;
