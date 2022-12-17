import { getUser } from "../../../services/auth";
import { toast } from "react-toastify";
import { Link, Navigate } from "react-router-dom";

import Form from "../../common/Form";
import FormInput from "../../common/FormInput";
import { loginDoctor } from "../../../services/doctorDataServices";
import formImg from "../../../static/images/formImg.jpg";

const customId = "doctorlogin";

const DoctorLogin = () => {
  const user = getUser();

  const initialValues = {
    email: "",
    password: "",
  };

  const submitEvent = async (data) => {
    try {
      console.log("Im the submit even of doctor login");
      const result = await loginDoctor(data);
      localStorage.setItem("token", result.headers["x-auth-token"]);
      window.location = "/doctor/me/dashboard";
    } catch (ex) {
      // console.log(ex);
    }
  };

  if (user) {
    toast.warning("You cannot do that action.", { toastId: customId });
    return <Navigate to="/doctor/me/dashboard" />;
  }

  return (
    <section className="form">
      <div className="container">
        <div className="form_container">
          {" "}
          <div className="form_left">
            <img src={formImg} alt="" />
          </div>
          <div className="form_right">
            <div className="form_box">
              <div className="form_label">
                <h3 className="font_bold">Doctor Login</h3>
              </div>
              <Form initialValues={initialValues} submitEvent={submitEvent}>
                <div className="input_container d-flex">
                  <FormInput label="E-Mail" name="email" type="email" />
                </div>

                <div className="input_container d-flex">
                  <FormInput label="Password" name="password" type="password" />
                </div>

                <div className="exist_acc">
                  <Link to="/doctor/register" className="font_light">
                    Don't have an account?
                  </Link>
                  <br />
                </div>

                <div className="btn">
                  <button className="submit_button font_reg" type="submit">
                    Login
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

export default DoctorLogin;
