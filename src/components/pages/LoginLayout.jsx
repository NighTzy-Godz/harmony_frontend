import React from "react";

import admin_icon from "../../static/images/admin_icon.png";
import doctor_icon from "../../static/images/doctor_icon.png";
import patient_icon from "../../static/images/patient_icon.png";
import LoginCard from "../common/LoginCard";
import "../../static/css/login_layout.css";
import { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginLayout = () => {
  const navigate = useNavigate();
  const LINK_MAP = {
    patient: {
      link: "/patient/login",
    },
    doctor: {
      link: "/doctor/login",
    },
    admin: {
      link: "/",
    },
  };

  const [value, setValue] = useState("");

  useEffect(() => {
    const redirectLink = () => {
      if (!value) return;
      console.log(LINK_MAP[value].link);

      return navigate(`${LINK_MAP[value].link}`);
    };

    redirectLink();
  }, [value]);

  const handleValue = (value) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <div className="login">
        <div className="container">
          <div className="main_header">
            <h1 className="font_bold">Tell Us Who You Are</h1>
            <p className="font_reg">
              Please select your current status so we know where to log you in.
              Thank You.
            </p>
          </div>
          <div className="login_container">
            <LoginCard
              text="I am an Admin"
              img={admin_icon}
              value="admin"
              onValueChange={handleValue}
            />
            <LoginCard
              text="I am a Patient."
              img={patient_icon}
              value="patient"
              onValueChange={handleValue}
            />
            <LoginCard
              text="I am a Doctor"
              img={doctor_icon}
              value="doctor"
              onValueChange={handleValue}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginLayout;
