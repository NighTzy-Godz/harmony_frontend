import React from "react";
import "../../static/css/profile_box.css";

const ProfileBox = (props) => {
  const { name, email, contact, profile_picture } = props;

  return (
    <React.Fragment>
      <div className="profile_box">
        <div className="profile_img">
          <img src={profile_picture} alt="" />
        </div>

        <div className="profile_detail">
          <p className="font_light">{name}</p>
        </div>
        <div className="profile_detail">
          <p className="font_light">{contact}</p>
        </div>
        <div className="profile_detail">
          <p className="font_light">{email}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileBox;
