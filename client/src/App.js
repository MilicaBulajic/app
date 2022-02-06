import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Routes from "./components/Routes";
import { AuthProvider, AuthContext } from "./AuthContext";

const App = () => {

  return (
    <AuthProvider>
        <Routes />
    </AuthProvider>
  );
};

export default App;
