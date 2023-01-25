import React from "react";
import "../../static/css/profile_box.css";

const ProfileBox = (props) => {
  const { name, email, contact, profile_picture, customId } = props;

  return (
    <React.Fragment>
      <div className="profile_box">
        <div className="profile_img">
          <img src={profile_picture} alt="" />
        </div>
        {customId && (
          <div className="profile_detail" style={{ marginBottom: "15px" }}>
            <i className="fa-solid fa-id-card-clip"></i>
            <p className="font_reg">{customId}</p>
          </div>
        )}
        <div className="profile_detail">
          <i className="fa-solid fa-signature"></i>
          <p className="font_reg">{name}</p>
        </div>
        <div className="profile_detail">
          <i className="fa-solid fa-address-book"></i>
          <p className="font_reg">{contact}</p>
        </div>

        <div className="profile_detail">
          <i className="fa-solid fa-envelope"></i>
          <p className="font_reg">{email}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileBox;
