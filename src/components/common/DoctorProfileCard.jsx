import "../../static/css/doctor_profile_card.css";
const DoctorProfileCard = ({
  data,

  user = null,
  buttonText,
  buttonEvent,
  currDocId = "",
}) => {
  const {
    _id,
    first_name,
    last_name,
    profile_picture,
    rate,
    specialty,
    contact,
  } = data;

  return (
    <div
      className={`doctor_profile_card ${currDocId === _id ? "selected" : ""} `}
    >
      <div className="doctor_profile_img">
        <img src={profile_picture} alt="" />
      </div>

      <div className="doctor_profile_details">
        <div className="doctor_profile_row">
          <div className="name">
            <h3 className="font_reg">
              {first_name} {last_name}{" "}
            </h3>
            <i className="fa-solid fa-circle-check"></i>
          </div>

          <p className="font_reg specialty">{specialty}</p>
        </div>
        <div className="doctor_profile_detail">
          <i className="fa-solid fa-address-card"></i>
          <p className="font_reg contact">{contact}</p>
        </div>
        <div className="doctor_profile_detail">
          <i className="fa-solid fa-money-check-dollar"></i>
          <p className="font_reg rate">{rate}</p>
        </div>
        <div className="doctor_profile_button">
          <p onClick={() => buttonEvent(_id)} className="font_reg">
            {buttonText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileCard;
