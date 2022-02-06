import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
          <Switch>
          <Route exact path="/" component={Home} />
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