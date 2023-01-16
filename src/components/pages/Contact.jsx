import React from "react";
import { useState } from "react";

import "../../static/css/contact.css";
import ContactBox from "../common/ContactBox";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const fakeSubmitEvent = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <React.Fragment>
      <div className="contact_page">
        <div className="container">
          <div className="mainText">
            <h1 className="font_reg title">Contact Us</h1>
            <p className="font_reg para">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
          </div>
          <div className="contact_box_container">
            <ContactBox
              icon="fa-solid fa-phone"
              text="Phone Number"
              data="0000 000 0000"
            />
            <ContactBox
              icon="fa-solid fa-envelope"
              text="Business Email"
              data="harmonybusiness@gmail.com"
            />

            <ContactBox
              icon="fa-solid fa-location-dot"
              text="Location"
              data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam
          nih."
            />
          </div>
        </div>
      </div>

      <form onSubmit={fakeSubmitEvent} className="get_in_touch">
        <div className="touch_container">
          <div className="main_text">
            <h1 className="font_reg">Message Us!</h1>
          </div>
          <div className="touch_form">
            <div className="touch_form_container">
              <div className="col-md-6 touch_form_input">
                <label className="font_reg">Your Name</label>
                <input className="font_reg" type="text" />
              </div>
              <div className=" col-md-6 touch_form_input">
                <label className="font_reg">Your Email</label>
                <input className="font_reg" type="email" />
              </div>
            </div>
            <div className="touch_form_input">
              <label className="font_reg">Your Subject</label>
              <input className="font_reg" type="text" />
            </div>
            <div className="touch_form_input">
              <label className="font_reg">Comment</label>
              <textarea className="font_reg"></textarea>
            </div>

            <button>Submit</button>
          </div>
        </div>
      </form>

      <div className={`contact_modal ${open ? "show" : ""}`}>
        <h2 className="font_reg">
          THIS IS JUST A DUMMY FORM. THANK YOU FOR TRYING OUT!
        </h2>
        <h3 className="font_reg close_modal" onClick={() => setOpen(false)}>
          X
        </h3>
      </div>
    </React.Fragment>
  );
};

export default Contact;
