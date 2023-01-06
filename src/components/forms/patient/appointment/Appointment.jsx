import React, { useState } from "react";
import ChooseDoctor from "./ChooseDoctor";
import ChooseSchedule from "./ChooseSchedule";
import { saveAppointment } from "../../../../services/patientDataService";
import Form from "../../../common/Form";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();

  const [currData, setCurrData] = useState({});
  const [values] = useState({
    time: "",
    date: "",
    doctorId: "",
  });
  const [step, setStep] = useState(1);
  const [docId, setDocId] = useState("");

  const handleStep = (step) => {
    setStep(step);
  };

  const handleDocId = (id) => {
    setDocId(id);
  };

  const handleRemoveDocId = () => {
    setDocId("");
  };

  const renderForm = () => {
    if (step === 1) {
      return (
        <ChooseDoctor
          step={step}
          onStepChange={handleStep}
          onDocIdChange={handleDocId}
          currDocId={docId}
        />
      );
    }

    if (step === 2)
      return (
        <ChooseSchedule
          step={step}
          onStepChange={handleStep}
          submitEvent={setData}
          onRemoveDocId={handleRemoveDocId}
          currDocId={docId}
        />
      );
  };

  const setData = (data) => {
    setCurrData(data);
  };

  const submitEvent = async (data) => {
    const err = await saveAppointment(data);
    if (err) return;
    navigate("/patient/me/dashboard");
  };
  return (
    <React.Fragment>
      <Form
        initialValues={values}
        submitEvent={submitEvent}
        propData={currData}
      >
        {renderForm()}
      </Form>
    </React.Fragment>
  );
};

export default Appointment;
