import React from "react";
import { useEffect, useState, useContext } from "react";
import { saveRequestAppointment } from "../../../../services/doctorDataServices";
import { decideApptButton } from "../../../../utils/helper";
import Form, { FormContext } from "../../../common/Form";

const btnStyle = {
  padding: "5px",
  width: "45%",
  fontSize: "13px",
  marginRight: "5px",
  borderRadius: "3px",
  border: "none",
};

const DecideAppointment = ({ appt }) => {
  const formContext = useContext(FormContext);
  const { data } = formContext;

  const [status, setStatus] = useState("");

  const [values] = useState({
    status: "",
    patientId: "",
    apptId: "",
  });

  useEffect(() => {
    data.status = status;
    data.apptId = appt._id;
    data.patientId = appt.ownedBy._id;
  }, [status, data, appt._id, appt.ownedBy._id]);

  const choices = decideApptButton();

  const renderButtons = () => {
    return choices.map((item) => {
      return (
        <button
          onClick={() => setStatus(item.name)}
          key={item.id}
          style={btnStyle}
          className={`font_reg ${
            item.name === "Confirmed" ? "confirmed" : "cancelled"
          }`}
        >
          {item.value}
        </button>
      );
    });
  };

  const submitEvent = async (data) => {
    console.log(data);
    const err = await saveRequestAppointment(data);
    if (err) return;
  };
  return (
    <React.Fragment>
      <Form initialValues={values} submitEvent={submitEvent} propData={data}>
        {renderButtons()}
        {/* <button>Submit</button> */}
      </Form>
    </React.Fragment>
  );
};

export default DecideAppointment;
