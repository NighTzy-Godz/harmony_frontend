import React, { useState } from "react";

export const FormContext = React.createContext({
  data: {},
});

const Form = (props) => {
  const { initialValues } = props;
  const [data, setData] = useState(initialValues);
  const { children, propData = data, submitEvent } = props;

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    const updatedData = {
      ...data,
      [name]: value,
    };
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEvent(propData);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} noValidate encType="multipart/form-data">
        <FormContext.Provider value={{ data, handleChange }}>
          {children}
        </FormContext.Provider>
      </form>
    </React.Fragment>
  );
};

export default Form;
