import React from "react";
import { AuthContextConfigMethod } from "../Contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute({ children }) {
  const { CurrentUser } = AuthContextConfigMethod();
  console.log(CurrentUser, Outlet.length);
  return CurrentUser ? <Navigate to={"/Home"} /> : <Outlet />;
}

export default PrivateRoute;
