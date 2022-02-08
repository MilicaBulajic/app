import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Board from "./pages/Board";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup/board" component={Board} />
        <Route
          path="/*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default PrivateRoutes;
