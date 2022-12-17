import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDoctorProfile } from "../../../services/doctorDataServices";
import { doctorDashboardCategories } from "../../../utils/helper";
import DoctorComingAppts from "./DoctorComingAppts";
import DoctorRequestAppointment from "./DoctorRequestAppointment";

const DoctorDashboard = ({ currUser }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    titleId: 1,
    dashboardTitles: doctorDashboardCategories(),
  });
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      const { data: doctor } = await getDoctorProfile();
      setUser(doctor);
    };
    getData();

    if (!currUser.isConfirmed) return navigate("/doctor/me/confirmation");

    if (currUser) {
      const urlLink = currUser.isPatient ? "patient" : "doctor";
      return navigate(`/${urlLink}/me/dashboard`);
    }
  }, [user, navigate, currUser]);
  const handleTitleId = (id) => {
    setState({ ...state, titleId: id });
  };

  const renderContent = () => {
    const { titleId } = state;
    if (titleId === 1) return <DoctorRequestAppointment user={user} />;
    if (titleId === 2) return <DoctorComingAppts user={user} />;
  };

  const renderDashboardTitles = () => {
    const { dashboardTitles, titleId } = state;

    return dashboardTitles.map((item) => {
      return (
        <div
          className={` ${
            titleId === item.id ? " category active" : " category"
          }`}
          key={item.id}
        >
          <p className="font_reg " onClick={() => handleTitleId(item.id)}>
            {item.name}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="dashboard">
      <div className="titles">{renderDashboardTitles()}</div>
      {renderContent()}
    </div>
  );
};

export default DoctorDashboard;
