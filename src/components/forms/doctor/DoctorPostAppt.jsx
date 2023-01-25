import React from "react";

import { useState } from "react";
import "../../../static/css/doc_post_appt.css";
import Form from "../../common/Form";

import FormTextArea from "../../common/FormTextArea";
import FormInput from "../../common/FormInput";
import { savePrescription } from "../../../services/doctorDataServices";
import { useNavigate } from "react-router-dom";

const DoctorPostAppt = ({ user: doctor, appt: patient }) => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const [values] = useState({
    findings: "",
    prescription: "",
    apptId: "",
    patientId: "",
    apptDate: "",
  });

  const submitEvent = async (data) => {
    data.apptId = patient._id;
    data.patientId = patient.patient._id;
    data.apptDate = patient.date;
    const { data: resData } = await savePrescription(data);
    if (resData) return navigate("/doctor/me/dashboard");
    return;
  };
  return (
    <React.Fragment>
      <button
        style={{ cursor: "pointer" }}
        className="font_bold tableBtn"
        onClick={() => setClick(true)}
      >
        Done
      </button>

      <div className={`doc_post_appt ${click ? "show" : ""}`}>
        <div className="container">
          <div className="modal">
            <div className="modal_logo">
              <h1 className="font_bold"> Prescription Form</h1>
            </div>
            <div className="modal_prescribedBy">
              <h1 className="font_bold">{doctor.full_name}</h1>
              <p className="font_reg">{doctor.specialty}</p>
              <p className="font_reg">{doctor.email}</p>
              <p className="font_reg">{doctor.contact}</p>
            </div>
            <hr id="divider" />
            <div className="modal_patient">
              <div className="modal_patient_mainText">
                <h1 className="font_bold">Patient Information</h1>
              </div>
              <div className="modal_patient_container">
                <div className="modal_patient_info">
                  <p className="font_bold modalTitle">Full Name: </p>
                  <p className="font_reg modalData">{patient.patient.name}</p>
                </div>
                <div className="modal_patient_info">
                  <p className="font_bold modalTitle">Date: </p>
                  <p className="font_reg modalData">{patient.date}</p>
                </div>
                <div className="modal_patient_info">
                  <p className="font_bold modalTitle">Contact: </p>
                  <p className="font_reg modalData">{patient.contact}</p>
                </div>
              </div>
            </div>
            <Form initialValues={values} submitEvent={submitEvent}>
              <div className="modal_input">
                <FormInput
                  label="Findings"
                  name="findings"
                  placeholder="Type the patient's findings"
                />
              </div>
              <div className="modal_input">
                <FormTextArea
                  label="Prescription"
                  name="prescription"
                  placeholder="Type the patient's prescription"
                />
              </div>
              <div className="modal_btn">
                <button className="font_bold">Submit</button>
              </div>
            </Form>

            <div className="close_modal">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setClick(false)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DoctorPostAppt;
