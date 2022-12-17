import React, { useContext } from "react";

import FormInput from "../../../common/FormInput";
import { FormContext } from "../../../common/Form";
import moment from "moment";
import { setTime } from "../../../../utils/helper";

const Appointment = (props) => {
  const formContext = useContext(FormContext);
  const { data } = formContext;
  const { step, submitEvent, onStepChange } = props;
  console.log(data);
  const generateTime = (time) => {
    if (time[0] === "") return "";
    for (let i = 12; i <= 23; i++) {
      if (i === parseInt(time[0])) {
        if (i.toString() === "12") return `12:${time[1]} PM`;

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

  const doSubmit = (data) => {
    const currData = setData(data);

    submitEvent(currData);
  };

  return (
    <React.Fragment>
      <div className="" style={{ paddingTop: "100px" }}></div>
      <FormInput label="Date of Appointment" name="date" type="date" />
      <br />

      <FormInput label="Time of Appointment" name="time" type="time" />
      <br />
      <button type="submit" onClick={() => doSubmit(data)}>
        Submit
      </button>
      <br />
      <button onClick={() => onStepChange(step - 1)}>GO Back</button>
    </React.Fragment>
  );
};

export default Appointment;
