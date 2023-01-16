import "../../static/css/contact_box.css";

const ContactBox = ({ icon, text, data }) => {
  return (
    <div className="contact_box">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="contact_details">
        <div className="contact_text">
          <h3 className="font_reg">{text}</h3>
        </div>
        <div className="contact_data">
          <p className="font_reg">{data}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
