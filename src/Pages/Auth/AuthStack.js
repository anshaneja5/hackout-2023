import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AuthStack() {
  const user = localStorage.getItem("accessToken");
  return user ? <Navigate to="/" /> : <Outlet />;
}

export default AuthStack;
