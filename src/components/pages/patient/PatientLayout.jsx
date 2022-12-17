import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProfileBox from "../../common/ProfileBox";
import SideBar from "../../common/Sidebar";
import { getPatientProfile } from "../../../services/patientDataService";
import "../../../static/css/patient_dashboard.css";
import LoadingData from "../../common/LoadingData";

const PatientLayout = () => {
  const [user, setUser] = useState({});
  const links = [
    {
      label: "Dashboard",
      path: "/patient/me/dashboard",
      icon: "fa-solid fa-table-columns",
    },
    {
      label: "Account",
      path: "/patient/me/account",
      icon: "fa-solid fa-user",
    },
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getPatientProfile();

        setUser(data);
      } catch (ex) {}
    };
    getData();
  }, [user]);

  return (
    <React.Fragment>
      <section className="profile">
        <div className="container">
          <div className="profile_container">
            <div className="profile_left">
              {Object.keys(user).length === 0 ? (
                <LoadingData msg="Loading the profile data..." />
              ) : (
                <ProfileBox
                  profile_picture={user.profile_picture}
                  name={`${user.first_name} ${user.last_name}`}
                  email={user.email}
                  contact={user.contact}
                />
              )}

              <SideBar links={links} />
            </div>
            <div className="profile_right">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PatientLayout;
