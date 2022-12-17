import React from "react";

const LoadingData = ({ msg }) => {
  return (
    <React.Fragment>
      <td>
        {" "}
        <h2
          className="font_reg"
          style={{
            color: "var(--black-)",
            marginLeft: "17px",
            marginTop: "5px",
          }}
        >
          {msg}
        </h2>
      </td>
    </React.Fragment>
  );
};

export default LoadingData;
