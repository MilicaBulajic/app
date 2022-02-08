import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import UserContext from "../context/UserContext";

const Routes = () => {
  const { auth } = useContext(UserContext);
  return <>{auth ? <PrivateRoutes /> : <PublicRoutes />}</>;
};

export default Routes;
