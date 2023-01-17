import React from "react";

import "../../static/css/login_card.css";

const LoginCard = ({ img, text, value, onValueChange }) => {
  return (
    <React.Fragment>
      <div className="login_card" onClick={() => onValueChange(value)}>
        <div className="login_image">
          <img src={img} alt="" />
        </div>
        <div className="login_text">
          <h3 className="font_reg">{text}</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginCard;
