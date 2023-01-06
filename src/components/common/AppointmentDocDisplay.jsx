import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAppointmentDocDisplay } from "../../services/patientDataService";
import "../../static/css/appt_doc_display.css";

const AppointmentDocDisplay = ({ displayBtn, docId, onRemoveDoc }) => {
  const [data, setData] = useState({});
  console.log(docId);
  useEffect(() => {
    const getData = async () => {
      const { data: displayDoc } = await getAppointmentDocDisplay(docId);
      setData(displayDoc);
    };
    getData();
  }, [docId]);

  const renderRemoveBtn = () => {
    if (displayBtn) {
      return (
        <div className="remove">
          <i className="fa-solid fa-xmark" onClick={onRemoveDoc}></i>
        </div>
      );
    }
    return;
  };
  return (
    <React.Fragment>
      <div className="choosed_doc">
        <div className="choosed_doc_container">
          <div className="first_section">
            <div className="pfp">
              <img src={data.profile_picture} alt="" />
            </div>
            <div className="pfp_details">
              <h3 className="font_reg">{data.full_name}</h3>
              <p className="font_reg">{data.specialty}</p>
            </div>
          </div>
          <div className="last_section">
            <p className="font_reg">P {data.rate}</p>
          </div>
          {renderRemoveBtn()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppointmentDocDisplay;
