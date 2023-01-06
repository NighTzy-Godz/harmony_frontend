import React, { useContext } from "react";
import "../../../../static/css/choose_schedule.css";
import FormInput from "../../../common/FormInput";
import { FormContext } from "../../../common/Form";
import moment from "moment";
import { setTime } from "../../../../utils/helper";

import AppointmentDocDisplay from "../../../common/AppointmentDocDisplay";

const Appointment = (props) => {
  const { currDocId, onRemoveDocId } = props;

  const formContext = useContext(FormContext);
  const { data } = formContext;
  const { step, submitEvent, onStepChange } = props;
  console.log(data);
  const generateTime = (time) => {
    if (time[0] === "") return "";
    for (let i = 12; i <= 23; i++) {
      if (i === parseInt(time[0])) {
        if (i.toString() === "12") return `12:${time[1]} PM`;
        console.log(data);
        return `${i - 12}:${time[1]} PM`;
      }
    }
    const setTime = time[0];
    return `${setTime[1]}:${time[1]} AM`;
  };

  const setData = (data) => {
    const setData = { ...data };

    const newTime = setTime(data, generateTime);
    setData.time = newTime;

    const newDate = moment(data.date).format("MMM Do YYYY");
    if (newDate === "Invalid date") {
      setData.date = "";
      return setData;
    }
    setData.date = newDate;

    return setData;
  };

  const handleRemoveDoc = () => {
    data.doctorId = "";
    onRemoveDocId();
  };

  const doSubmit = (data) => {
    const currData = setData(data);

    submitEvent(currData);
  };

  const renderDocInfo = () => {
    if (!currDocId) return;

    return (
      <AppointmentDocDisplay
        displayBtn={false}
        docId={currDocId}
        onRemoveDoc={handleRemoveDoc}
      />
    );
  };

  return (
    <React.Fragment>
      <div className="choose_sched">
        <div className="container">
          {/* <div className="text">
            <h3 className="font_reg">Details</h3>
          </div> */}
          {renderDocInfo()}

          <div className="choose_sched_input" style={{ marginTop: "40px" }}>
            <FormInput label="Date of Appointment" name="date" type="date" />
          </div>

          <div className="choose_sched_input" style={{ marginBottom: "40px" }}>
            <FormInput label="Time of Appointment" name="time" type="time" />
          </div>

          <div className="buttons">
            <button className="font_reg" onClick={() => onStepChange(step - 1)}>
              Go Back
            </button>
            <button
              className="font_reg"
              type="submit"
              onClick={() => doSubmit(data)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Appointment;
