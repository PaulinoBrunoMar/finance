import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MyContext } from "../components/context";

function PrivateRoutes() {
  const { signed } = useContext(MyContext);
  return signed ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
