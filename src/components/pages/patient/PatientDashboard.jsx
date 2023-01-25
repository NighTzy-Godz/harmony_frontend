import React, { useState } from "react";

import { dashboardCategories } from "../../../utils/helper";
import PatientAppointments from "./PatientAppointments";
import PatientMedicalRecord from "../patient/PatientMedicalRecord";
import { useEffect } from "react";
import { getPatientProfile } from "../../../services/patientDataService";
import PatientPrescription from "./PatientPrescription";

const PatientDashboard = () => {
  const [state, setState] = useState({
    titleId: 1,
    dashboardTitles: dashboardCategories(),
  });

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const { data: currUser } = await getPatientProfile();
      setUser(currUser);
    };
    getUser();
  }, [state]);

  const handleTitleId = (id) => {
    setState({ ...state, titleId: id });
  };

  const renderContent = () => {
    const { titleId } = state;
    if (titleId === 1) return <PatientAppointments user={user} />;
    if (titleId === 2) return <PatientMedicalRecord user={user} />;
    if (titleId === 3) return <PatientPrescription />;
  };

  const renderDashboardTitles = () => {
    const { titleId } = state;

    return state.dashboardTitles.map((item) => {
      return (
        <div
          className={` ${
            titleId === item.id ? " category active" : " category"
          }`}
          key={item.id}
        >
          <p className="font_bold " onClick={() => handleTitleId(item.id)}>
            {item.name}
          </p>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="dashboard">
        <div className="titles">{renderDashboardTitles()}</div>
        {renderContent()}
      </div>
    </React.Fragment>
  );
};

export default PatientDashboard;
