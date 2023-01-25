import React from "react";
import { useState } from "react";
import formImg from "../../../static/images/formImg.jpg";

import "../../../static/css/patient_login_reg.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import http from "../../../services/httpService";

const customId = "patientregister";

const PatientRegister = ({ user }) => {
  const navigate = useNavigate();
  const gender = [
    { id: 0, name: "" },
    { id: 0, name: "Male" },
    { id: 1, name: "Female" },
  ];
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    gender: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const submitEvent = async (e) => {
    e.preventDefault();
    const BASE_URL = process.env.REACT_APP_API_PATIENT_URL;
    const { first_name, last_name, contact, email, pass1, pass2, gender, img } =
      state;

    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("gender", gender);

    formData.append("pass1", pass1);
    formData.append("pass2", pass2);

    if (img !== undefined) {
      formData.append("img", img);
    }

    return http
      .post(`${BASE_URL}/register`, formData)
      .then((user) => {
        console.log(user.data);
        toast.success(
          `Account successfully created for ${user.data.first_name} ${user.data.last_name}`,
          { autoClose: 2000 }
        );
        navigate("/patient/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, { autoClose: 2500 });
        return;
      });
  };

  if (user) {
    toast.warning("You cannot do that action.", { toastId: customId });
    return <Navigate to="/patient/me/dashboard" />;
  }

  return (
    <section className="form">
      <div className="container">
        <div className="form_container">
          <div className="form_left">
            <img src={formImg} alt="" />
          </div>
          <div className="form_right">
            <div className="form_box">
              <div className="form_label">
                <h3 className="font_bold">Patient Register</h3>
              </div>
              <form onSubmit={submitEvent} method="post">
                <div className="input_container d-flex">
                  <label htmlFor={"first_name"} className="font_reg">
                    First Name
                  </label>
                  <input
                    type="text"
                    name={"first_name"}
                    id={"first_name"}
                    className="font_light"
                    onChange={(e) =>
                      setState({ ...state, first_name: e.currentTarget.value })
                    }
                  />
                </div>
                <div className="input_container d-flex">
                  <label htmlFor={"last_name"} className="font_reg">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name={"last_name"}
                    id={"last_name"}
                    className="font_light"
                    onChange={(e) =>
                      setState({ ...state, last_name: e.currentTarget.value })
                    }
                  />
                </div>

                <div className="input_container d-flex">
                  <label htmlFor="gender" className="font_reg">
                    Gender
                  </label>
                  <select
                    name={gender}
                    id={gender}
                    onChange={(e) =>
                      setState({ ...state, gender: e.currentTarget.value })
                    }
                    className="dropdown_box"
                  >
                    {gender.map((item) => {
                      return <option key={item.id}>{item.name}</option>;
                    })}
                  </select>
                </div>
                <div className="input_container d-flex">
                  <label htmlFor={"contact"} className="font_reg">
                    Contact
                  </label>
                  <input
                    type="text"
                    name={"contact"}
                    id={"contact"}
                    className="font_light"
                    onChange={(e) =>
                      setState({ ...state, contact: e.currentTarget.value })
                    }
                  />
                </div>
                <div className="input_container d-flex">
                  <label htmlFor={"email"} className="font_reg">
                    Email
                  </label>
                  <input
                    type="email"
                    name={"email"}
                    id={"email"}
                    className="font_light"
                    onChange={(e) =>
                      setState({ ...state, email: e.currentTarget.value })
                    }
                  />
                </div>
                <div className="input_container d-flex">
                  <label htmlFor={"img"} className="font_reg">
                    Your Image (Optional)
                  </label>
                  <input
                    type="file"
                    name="img"
                    multiple
                    onChange={(e) =>
                      setState({ ...state, img: e.target.files[0] })
                    }
                  />
                </div>
                <div className="input_container d-flex">
                  <label htmlFor={"pass1"} className="font_reg">
                    Password
                  </label>
                  <input
                    type="password"
                    name={"pass1"}
                    id={"pass1"}
                    className="font_light"
                    onChange={(e) =>
                      setState({ ...state, pass1: e.currentTarget.value })
                    }
                  />
                </div>

                <div className="input_container d-flex">
                  <label htmlFor={"pass2"} className="font_reg">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name={"pass2"}
                    id={"pass2"}
                    className="font_light"
                    onChange={(e) =>
                      setState({ ...state, pass2: e.currentTarget.value })
                    }
                  />
                </div>
                <div className="exist_acc">
                  <Link to="/patient/login" className="font_light">
                    Already have an account?
                  </Link>
                </div>
                <div className="btn">
                  <button className="submit_button font_reg" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientRegister;
