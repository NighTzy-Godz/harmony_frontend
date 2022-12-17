import React from "react";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = (props) => {
  const { user } = props;
  return (
    <React.Fragment>
      <Navbar user={user} />
      <Outlet />
    </React.Fragment>
  );
};

export default HomeLayout;
