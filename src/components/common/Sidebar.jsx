import React from "react";
import { NavLink } from "react-router-dom";
import "../../static/css/sidebar.css";

const SideBar = ({ links }) => {
  const renderLinks = () => {
    return links.map((item) => {
      return (
        <React.Fragment key={item.path}>
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => {
              return isActive ? "font_reg active" : "font_reg";
            }}
          >
            <i className={item.icon}></i>
            {item.label}
          </NavLink>
        </React.Fragment>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar_links">
          {renderLinks()}
          <NavLink
            to="/logout"
            className={({ isActive }) => {
              return isActive ? "font_reg active" : "font_reg";
            }}
          >
            <i className="fa-solid fa-right-from-bracket"></i>
            Logout
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
