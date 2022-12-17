import React from "react";
import "../../static/css/home.css";
import { Link } from "react-router-dom";

import home_bg from "../../static/images/home_bg.jpg";
import chooseImg from "../../static/images/chooseImg.jpg";
import pharmacyImg from "../../static/images/pharmacy.png";
import surgeryImg from "../../static/images/surgery.png";
import patient_wardImg from "../../static/images/patient_ward.png";
import emergencyImg from "../../static/images/emergency.png";

import FeatureBox from "../common/FeatureBox";

const landingPageStyle = {
  background: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${home_bg})`,

  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing" style={landingPageStyle}>
        <div className="container">
          <div className="main_text">
            <h1 className="font_bold">
              Giving Power <br /> to Your <span>Health.</span>
            </h1>
            <p className="font_reg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quae ducimus harum incidunt.
            </p>
          </div>
          <div className="landingBtn">
            <Link to="/about" className="font_reg" id="landingStarted">
              Get Started
            </Link>
            <Link to="/about" className="font_reg" id="landingLearnMore">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="choose">
        <div className="container">
          <div className="choose_container">
            <div className="chooseImg">
              <img src={chooseImg} alt="" />
            </div>
            <div className="chooseText">
              <h1 className="font_bold">
                Why choose <br /> our Medical Harmony?
              </h1>
              <p className="font_reg" id="chooseText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                odit quos cumque obcaecati. Dolore, possimus a fuga quidem
                voluptatum debitis?
              </p>
              <ul>
                <li className="d-flex">
                  <i className="fa-solid fa-circle-check"></i>
                  <p className="font_bold">Modern Technology</p>
                </li>
                <li className="d-flex">
                  <i className="fa-solid fa-circle-check"></i>
                  <p className="font_bold">Expert Doctors</p>
                </li>
                <li className="d-flex">
                  <i className="fa-solid fa-circle-check"></i>
                  <p className="font_bold">Excellent Feedback</p>
                </li>
                <li className="d-flex">
                  <i className="fa-solid fa-circle-check"></i>
                  <p className="font_bold">Active Help Support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="feature_text">
            <h1 className="font_bold">Available features in harmony</h1>
            <p className="font_reg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi, ullam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </p>
          </div>
          <div className="feature_container">
            <FeatureBox img={pharmacyImg} text="Available Pharmacy Store" />
            <FeatureBox img={surgeryImg} text="Active Operations" />
            <FeatureBox img={patient_wardImg} text="Patient Wards" />
            <FeatureBox img={emergencyImg} text="Emergency Ready" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
