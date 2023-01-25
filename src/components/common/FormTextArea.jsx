import React from "react";
import { useContext } from "react";
import { FormContext } from "./Form";

const FormTextArea = ({ name, label, placeholder = "" }) => {
  const formContext = useContext(FormContext);
  const { data, handleChange } = formContext;
  return (
    <React.Fragment>
      <label htmlFor={name} className="font_reg">
        {label}
      </label>
      <textarea
        className="font_light"
        placeholder={placeholder}
        name={name}
        value={data[name]}
        id={name}
        onChange={handleChange}
      ></textarea>
    </React.Fragment>
  );
};

export default FormTextArea;
