import React from "react";
import { getAcceptedAppointments } from "../../../services/doctorDataServices";
import NoData from "../../common/NoData";
import TableBody from "../../common/TableBody";
import TableHeader from "../../common/TableHeader";
import DoctorPostAppt from "../../forms/doctor/DoctorPostAppt";

const DoctorComingAppts = ({ user }) => {
  const columns = [
    {
      label: "Patient",
      path: "patient.name",
      xtraContent: (appt) => (
        <React.Fragment>
          <h2 className="font_reg">{appt.patient.name}</h2>
          <p className=" font_light">Patient</p>
        </React.Fragment>
      ),
      className: "table-width-210",
    },
    {
      label: "Date",
      path: "date",
      className: "table-width-140",
    },

    {
      label: "Contact",
      path: "contact",
      className: "table-width-140",
    },
    {
      label: "Amount",
      path: "amount",
      className: "table-width-100",
    },
    {
      label: "Action",
      path: "patient.name",
      className: "table-width-100",
      xtraContent: (appt) => (
        <React.Fragment>
          <DoctorPostAppt appt={appt} user={user} />
        </React.Fragment>
      ),
    },

    {
      label: "Status",
      path: "status",
      className: "table-width-100",
      statusClass: () => {
        if (user.acceptedAppointments) {
          if (user.acceptedAppointments.length === 0) return;
          return user.acceptedAppointments;
        }
      },
    },
  ];

  const renderContent = () => {
    if (user.acceptedAppointments) {
      if (user.acceptedAppointments.length === 0) {
        return (
          <NoData message="No Appointment Request been made at the moment. Check your request appointment" />
        );
      }
      return (
        <table>
          <TableHeader columns={columns} />
          <TableBody columns={columns} dataSource={getAcceptedAppointments} />
        </table>
      );
    }
  };
  return <div className="table_wrapper">{renderContent()}</div>;
};

export default DoctorComingAppts;
