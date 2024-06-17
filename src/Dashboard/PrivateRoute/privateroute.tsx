import React from "react";
import { Outlet, Navigate } from "react-router-dom";
interface PrivateRouteProps {
  token: string | null;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ token }) => {
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="adminlogin" replace />;
  }
};
export default PrivateRoute;
