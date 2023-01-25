import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../../../services/auth";
import { saveDoctor } from "../../../services/doctorDataServices";
import { doctorSpecialties } from "../../../utils/helper";
import DropDown from "../../common/DropDown";
import Form from "../../common/Form";
import FormInput from "../../common/FormInput";
import formImg from "../../../static/images/formImg.jpg";

const toastId = "doctorregister";

const DoctorRegister = () => {
  const navigate = useNavigate();

  const user = getUser();
  const gender = [
    { id: 0, name: "" },
    { id: 1, name: "Male" },
    { id: 2, name: "Female" },
  ];

  const [state] = useState({
    initialValues: {
      first_name: "",
      last_name: "",
      specialty: "",
      contact: "",
      email: "",
      pass1: "",
      pass2: "",
    },
    dropdownValues: doctorSpecialties(),
  });

  const submitEvent = async (data) => {
    const err = await saveDoctor(data);
    if (err) return;
    navigate("/doctor/login");
  };

  if (user) {
    toast.warning("You are not allowed to do that", {
      autoClose: 2500,
      toastId,
    });
    return <Navigate to="/" />;
  }
  return (
    <section className="form" style={{ paddingBottom: "80px" }}>
      <div className="container">
        <div className="form_container">
          {" "}
          <div className="form_left">
            <img src={formImg} alt="" />
          </div>
          <div className="form_right">
            <div className="form_box">
              <div className="form_label">
                <h3 className="font_bold">Doctor Register</h3>
              </div>
              <Form
                initialValues={state.initialValues}
                submitEvent={submitEvent}
              >
                <div className="input_container d-flex">
                  <FormInput label="First Name" name="first_name" type="text" />
                </div>

                <div className="input_container d-flex dropdown">
                  <FormInput label="Last Name" name="last_name" type="text" />
                </div>

                <div className="input_container d-flex">
                  <DropDown name="gender" label="Gender" values={gender} />
                </div>
                <div className="input_container d-flex">
                  <DropDown
                    name="specialty"
                    label="Specialty"
                    values={state.dropdownValues}
                  />
                </div>
                <div className="input_container d-flex">
                  <FormInput label="Contact" name="contact" type="text" />
                </div>

                <div className="input_container d-flex">
                  <FormInput label="E-Mail" name="email" type="email" />
                </div>

                <div className="input_container d-flex">
                  <FormInput label="Password" name="pass1" type="password" />
                </div>

                <div className="input_container d-flex">
                  <FormInput
                    label="Confirm Password"
                    name="pass2"
                    type="password"
                  />
                </div>

                <div className="exist_acc" style={{ marginTop: "0px" }}>
                  <Link to="/doctor/login" className="font_light">
                    Already have an account?
                  </Link>
                </div>
                <div className="btn">
                  <button className="submit_button font_reg" type="submit">
                    Register
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorRegister;
