import React, { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { AuthProvider, AuthContext } from "./../AuthContext";

const Routes = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
      <>{isAuth ? <PrivateRoutes /> : <PublicRoutes />}</>
  );
};

export default Routes;
