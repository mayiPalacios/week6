import { IfetchProtectedRoute } from "../models/interfaceFetchProps";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import useLocalstorage from "../hooks/useLocalstorage";

export const ProtectedRoute = () => {
  const { token } = useLocalstorage();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
