import React from "react";

import "../../static/css/dropdown.css";
import { useContext } from "react";
import { FormContext } from "./Form";

const DropDown = (props) => {
  const { name, label, values } = props;

  const formContext = useContext(FormContext);
  const { data, handleChange } = formContext;
  return (
    <React.Fragment>
      <label htmlFor={name} className="font_reg">
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={data[name]}
        onChange={handleChange}
        className="dropdown_box"
      >
        {values.map((item) => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
    </React.Fragment>
  );
};

export default DropDown;
