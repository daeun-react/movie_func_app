import React from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar" data-image={image} data-color={color}>
      <div className="sidebar-background" />
      <div className="sidebar-wrapper">
        <div className="logo d-flex align-items-center justify-content-start">
          <a className="simple-text" href="/">
            DAEUN.LEE
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (prop.show) {
              return (
                <li className={activeRoute(prop.path)} key={key}>
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            } else {
              return null;
            }
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
