import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import {
  getPatientProfile,
  updateAccount,
} from "../../../services/patientDataService";

import "../../../static/css/account_update.css";

const PatientAccountUpdate = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    contact: "",
    email: "",
  });

  useEffect(() => {
    const getData = async () => {
      const { data } = await getPatientProfile();
      setState({
        ...state,
        first_name: data.first_name,
        last_name: data.last_name,
        contact: data.contact,
        email: data.email,
      });
    };
    getData();
  }, []);

  const submitEvent = async (e) => {
    e.preventDefault();

    const { data } = await updateAccount(state);
    if (data) return navigate("/patient/me/dashboard");
    return;
  };

  return (
    <React.Fragment>
      <div className="account_update">
        <form onSubmit={submitEvent} encType="multipart/form-data">
          <div className=" d-flex input_container">
            <label htmlFor={"first_name"} className="font_reg">
              First Name
            </label>
            <input
              type="text"
              name={"first_name"}
              id={"first_name"}
              className="font_light"
              value={state.first_name}
              onChange={(e) =>
                setState({ ...state, first_name: e.currentTarget.value })
              }
            />
          </div>
          <div className=" d-flex input_container">
            <label htmlFor={"last_name"} className="font_reg">
              Last Name
            </label>
            <input
              type="text"
              name={"last_name"}
              id={"last_name"}
              className="font_light"
              value={state.last_name}
              onChange={(e) =>
                setState({ ...state, last_name: e.currentTarget.value })
              }
            />
          </div>
          <div className="d-flex input_container ">
            <label htmlFor={"contact"} className="font_reg">
              Contact
            </label>
            <input
              type="text"
              name={"contact"}
              id={"contact"}
              className="font_light"
              value={state.contact}
              onChange={(e) =>
                setState({ ...state, contact: e.currentTarget.value })
              }
            />
          </div>
          <div className="d-flex input_container ">
            <label htmlFor={"email"} className="font_reg">
              Last Name
            </label>
            <input
              type="email"
              name={"email"}
              id={"email"}
              className="font_light"
              value={state.email}
              onChange={(e) =>
                setState({ ...state, email: e.currentTarget.value })
              }
            />
          </div>
          <div className="file-upload">
            <div className="file-content">
              <label htmlFor={"img"} className="font_reg">
                <i className="fa-solid fa-upload"></i>
                Select a picture.
              </label>
              <input
                type="file"
                name="img"
                id="img"
                multiple
                onChange={(e) => setState({ ...state, img: e.target.files[0] })}
              />
              <p className="font_light">
                Allowed Formats - JPG,JPEG and PNG (Optional to upload.)
                <br />
                {state.img ? state.img.name : "No picture was uploaded yet."}
              </p>
            </div>
          </div>

          <div className="btn">
            <button className="submit_button font_reg " type="submit">
              Update Account
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default PatientAccountUpdate;
