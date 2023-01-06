import React, { useContext } from "react";
import { FormContext } from "./Form";

const FormInput = (props) => {
  const { label, name, type = "text", placeholder = "" } = props;

  const formContext = useContext(FormContext);
  const { data, handleChange } = formContext;

  return (
    <React.Fragment>
      <label htmlFor={name} className="font_reg">
        {label}
      </label>
      <input
        // autoComplete="true"
        placeholder={placeholder}
        type={type}
        name={name}
        value={data[name]}
        onChange={handleChange}
        id={name}
        className="font_light"
      />
    </React.Fragment>
  );
};

export default FormInput;
