import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "./Dashboard/Loader";
import ECommerce from "./Dashboard/pages/Dashboard/ECommerce";
import PageTitle from "./Dashboard/components/PageTitle";
import Calendar from "./Dashboard/pages/Calendar";
import Profile from "./Dashboard/pages/Profile";
import FormElements from "./Dashboard/pages/Form/FormElements";
import FormLayout from "./Dashboard/pages/Form/FormLayout";
import Tables from "./Dashboard/pages/Tables";
import Settings from "./Dashboard/pages/Settings";
import Alerts from "./Dashboard/pages/UiElements/Alerts";
import Buttons from "./Dashboard/pages/UiElements/Buttons";
import SignUp from "./Dashboard/pages/Authentication/SignUp";
import PrivateRoute from "./Dashboard/PrivateRoute/privateroute";
import { SystemUsers } from "./Dashboard/components/ViewComponent/SystemUsers";
import { EditSystemUser } from "./Dashboard/EdiTcomponent/EditSystemUser";
import { ViewUser } from "./Dashboard/components/ViewComponent/ViewUser";
import { RootState, useAppSelector } from "./redux/store";

function DashboardRoute() {
  const [loading, setLoading] = useState<boolean>(true);
  const { token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<PrivateRoute token={token} />}>
          <Route
            path="/dashboard"
            index
            element={
              <>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ECommerce />
              </>
            }
          />
          <Route path="/systemuser" element={<SystemUsers />} />
          <Route path="/viewuser/edit/:id" element={<ViewUser />} />
          <Route path="/systemuser/edit/:id" element={<EditSystemUser />} />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </>
            }
          />

          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </>
            }
          />

          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default DashboardRoute;
