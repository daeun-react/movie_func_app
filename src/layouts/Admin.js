import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Detail from "views/Detail";
import Footer from "../components/Footer/Footer";
import Navbars from "../components/Navbars/Navbars";
import Sidebar from "../components/Sidebar/Sidebar";
import routes from "../routes";

function Admin() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          exact
          render={(props) => <prop.component {...props} />}
          key={key}
        />
      );
    });
  };
  return (
    <>
      <div className="wrapper">
        <Sidebar routes={routes} />
        <div className="main-panel">
          <Navbars />
          <div className="content">
            <Switch>
              {getRoutes(routes)}
              <Route path={`/detail/:id`} component={Detail} />
              <Redirect from="/" to="/movie" />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
