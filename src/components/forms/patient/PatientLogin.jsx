import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../../../services/auth";
import { loginPatient } from "../../../services/patientDataService";
import Form from "../../common/Form";
import FormInput from "../../common/FormInput";

import "../../../static/css/patient_login_reg.css";
import formImg from "../../../static/images/formImg.jpg";
// import patientFormImg from "../../../static/images/emergency.jpg";

const customId = "patientlogin";

const PatientLogin = () => {
  const user = getUser();

  const initialValues = {
    email: "",
    password: "",
  };

  const submitEvent = async (data) => {
    try {
      const result = await loginPatient(data);
      localStorage.setItem("token", result.headers["x-auth-token"]);
      window.location = "/patient/me/dashboard";
    } catch (ex) {}
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
                <h3 className="font_bold">Patient Login</h3>
              </div>
              <Form initialValues={initialValues} submitEvent={submitEvent}>
                <div
                  className="d-flex input_container"
                  id="patient_login_email"
                >
                  <FormInput label="E-Mail" name="email" type="email" />
                </div>

                <div className="input_container d-flex">
                  <FormInput label="Password" name="password" type="password" />
                </div>

                <div className="exist_acc">
                  <Link to="/patient/register" className="font_light">
                    Don't have an account?
                  </Link>
                  <br />
                </div>

                <div className="btn">
                  <button className="font_reg" type="submit">
                    LOGIN
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

export default PatientLogin;
