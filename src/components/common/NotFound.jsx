import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1 className="font_bold">404 Page</h1>

      <Link to="/" className="font_reg">
        Click this to go home
      </Link>
    </React.Fragment>
  );
};

export default NotFound;
