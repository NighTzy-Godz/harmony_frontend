import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "../../static/css/navbar.css";

const Navbar = ({ user }) => {
  const [toggle, setToggle] = useState(false);

  const userLink = () => {
    if (user.isPatient) return "patient";
    if (user.isDoctor) return "doctor";
  };
  return (
    <div className="mainNav">
      <div className="container">
        <div className="navContainer">
          <div className="logo">
            <Link to="/" className="font_bold">
              HARMONY
            </Link>
          </div>
          <div className={`hidden_content ${toggle ? "show" : ""}`}>
            <ul className="navLinks">
              <li>
                <NavLink
                  to="/"
                  className="font_reg"
                  onClick={() => setToggle(!toggle)}
                  id="navLink"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="font_reg"
                  onClick={() => setToggle(!toggle)}
                  id="navLink"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pharmacy"
                  className="font_reg"
                  onClick={() => setToggle(!toggle)}
                  id="navLink"
                >
                  Pharmacy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="font_reg"
                  onClick={() => setToggle(!toggle)}
                  id="navLink"
                >
                  Contact
                </NavLink>
              </li>
              {!user && (
                <li>
                  <NavLink
                    to="/doctors"
                    className="font_reg"
                    onClick={() => setToggle(!toggle)}
                    id="navLink"
                  >
                    Doctor
                  </NavLink>
                </li>
              )}

              {user && user.isPatient && (
                <React.Fragment>
                  <li>
                    <NavLink
                      to={`/patient/appointment`}
                      onClick={() => setToggle(!toggle)}
                      id="navLink"
                      className="font_reg"
                    >
                      Create Appointment
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
            <div className="auth">
              <ul>
                {!user && (
                  <React.Fragment>
                    <li>
                      <NavLink
                        to="/patient/login"
                        className="font_reg"
                        onClick={() => setToggle(!toggle)}
                      >
                        Sign In
                      </NavLink>
                    </li>
                  </React.Fragment>
                )}
                {user && (
                  <React.Fragment>
                    <li>
                      <NavLink
                        to={`/${userLink()}/me/dashboard`}
                        className="font_reg profile"
                        onClick={() => setToggle(!toggle)}
                        id="navLink"
                      >
                        Profile
                      </NavLink>
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </div>
          </div>
          <div id="toggler" onClick={() => setToggle(!toggle)}>
            <hr />
            <hr />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
