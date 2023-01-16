import React from "react";
import { Link } from "react-router-dom";
import "../../static/css/about.css";
import about_bg from "../../static/images/about.jpg";

const aboutStyle = {
  background: `linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)), url(${about_bg})`,
  minHeight: "550px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const About = () => {
  return (
    <React.Fragment>
      <div className="about" style={aboutStyle}>
        <div className="container">
          <div className="content">
            <h1 className="font_bold">About Harmony</h1>
            <p className="font_reg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              laudantium rem eligendi adipisci unde! Id in recusandae voluptate
              consequuntur aut. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Rem nemo quisquam doloremque quaerat itaque
              exercitationem, alias eligendi voluptas commodi incidunt!
            </p>
            <p className="font_reg">
              Nulla non turpis sit amet purus pharetra sollicitudin. Proin
              rutrum urna ut suscipit ullamcorper. Proin sapien felis, dignissim
              non finibus eget, luctus vel purus. Pellentesque efficitur congue
              orci ornare accumsan. Nullam ultrices libero vel imperdiet
              scelerisque. Donec vel mauris eros. suctus vel purus. Pellentesque
              efficitur congue orci ornare accumsa
            </p>

            <Link to="/doctors" className="font_reg">
              Consult Now
            </Link>
          </div>
        </div>
      </div>

      <div className="mission_vision">
        <div className="container">
          <div className="mainTitle">
            <h1 className="font_bold">MISSION AND VISION</h1>
          </div>

          <div className="content">
            <h1 className="font_bold">Mission</h1>
            <p className="font_reg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              laudantium eligendi commodi autem impedit a consequatur, eos
              perferendis excepturi? Mollitia incidunt totam nostrum blanditiis
              quam quaerat porro vitae dolor animi culpa ullam tenetur
              recusandae odio doloribus obcaecati laboriosam exercitationem,
              expedita dolorum sapiente fuga! Placeat repellendus laudantium
              praesentium, dolores qui in. Mollitia incidunt totam nostrum
              blanditiis quam quaerat porro vitae dolor animi culpa ullam
              tenetur recusandae odio doloribus obcaecati laboriosam
              exercitationem, expedita dolorum sapiente fuga! Placeat
              repellendus laudantium praesentium, dolores qui in.
            </p>
          </div>
          <div className="content">
            <h1 className="font_bold">Vision</h1>
            <p className="font_reg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              laudantium eligendi commodi autem impedit a consequatur, eos
              perferendis excepturi? Mollitia incidunt totam nostrum blanditiis
              quam quaerat porro vitae dolor animi culpa ullam tenetur
              recusandae odio doloribus obcaecati laboriosam exercitationem,
              expedita dolorum sapiente fuga! Placeat repellendus laudantium
              praesentium, dolores qui in. Mollitia incidunt totam nostrum
              blanditiis quam quaerat porro vitae dolor animi culpa ullam
              tenetur recusandae odio doloribus obcaecati laboriosam
              exercitationem, expedita dolorum sapiente fuga! Placeat
              repellendus laudantium praesentium, dolores qui in.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
