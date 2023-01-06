import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../../services/patientDataService";
import Form from "../../common/Form";
import FormInput from "../../common/FormInput";
import "../../../static/css/change_pass.css";

const PatientChangePass = () => {
  const navigate = useNavigate();
  const [values] = useState({
    currPass: "",
    newPass: "",
    confirmPass: "",
  });

  const submitEvent = async (data) => {
    const { data: result } = await changePassword(data);
    if (result) return navigate("/patient/me/dashboard");
    return;
  };

  return (
    <div className="change-password">
      <Form submitEvent={submitEvent} initialValues={values}>
        <div className=" d-flex input_container">
          <FormInput
            label="Current Password"
            name="currPass"
            type="password"
            placeholder="Type Here...."
          />
        </div>
        <div className=" d-flex input_container">
          <FormInput
            label="New Password"
            name="newPass"
            type="password"
            placeholder="Type Here...."
          />
        </div>
        <div className=" d-flex input_container">
          <FormInput
            label="Confirm Password"
            placeholder="Type Here...."
            name="confirmPass"
            type="password"
          />
        </div>
        <div className="btn">
          <button className="font_reg">Change Password</button>
        </div>
      </Form>
    </div>
  );
};

export default PatientChangePass;
