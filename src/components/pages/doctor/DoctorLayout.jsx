import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ProfileBox from "../../common/ProfileBox";
import SideBar from "../../common/Sidebar";
import { getDoctorProfile } from "../../../services/doctorDataServices";

const DoctorLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const links = [
    {
      label: "Dashboard",
      path: "/doctor/me/dashboard",
      icon: "fa-solid fa-table-columns",
    },
    {
      label: "Change Password",
      path: "/doctor/me/change-password",
      icon: "fa-solid fa-lock",
    },
    {
      label: "Account",
      path: "/doctor/me/account",
      icon: "fa-solid fa-user",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const { data } = await getDoctorProfile();

      setUser(data);
    };
    getData();
    if (Object.keys(user).length === 0) {
      return;
    }

    if (!user.isConfirmed) {
      return navigate("/doctor/me/confirmation");
    }
  }, [user]);

  return (
    <React.Fragment>
      <section className="profile">
        <div className="container">
          <div className="profile_container">
            <div className="profile_left">
              <ProfileBox
                profile_picture={user.profile_picture}
                name={`${user.first_name} ${user.last_name}`}
                email={user.email}
                contact={user.contact}
              />
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

export default DoctorLayout;
