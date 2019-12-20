import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit

import LandingPage from "views/examples/LandingPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" render={props => <LandingPage {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
