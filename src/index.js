import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Admin from "./layouts/Admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/animate.min.css";
import "./assets/css/demo.css";
// import "./assets/scss/add.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Admin {...props} />}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
