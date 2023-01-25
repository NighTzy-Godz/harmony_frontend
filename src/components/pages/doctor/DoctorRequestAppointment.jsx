import NoData from "../../common/NoData";
import TableBody from "../../common/TableBody";
import TableHeader from "../../common/TableHeader";
import React from "react";
import DecideAppointment from "../../forms/doctor/decideAppt/DecideAppointmentLayout";
import { getRequestAppointments } from "../../../services/doctorDataServices";

const DoctorRequestAppointment = ({ user }) => {
  const columns = [
    {
      label: "Patient",
      path: "ownedBy.name",
      xtraContent: (appt) => (
        <React.Fragment>
          <h2 className="font_reg">{appt.ownedBy.name}</h2>
          <p className=" font_light">Patient</p>
        </React.Fragment>
      ),
      className: "table-width-230",
    },
    {
      label: "Date",
      path: "date",
      className: "table-width-140",
    },
    {
      label: "Time",
      path: "time",
      className: "table-width-100",
    },
    {
      label: "Contact",
      path: "ownedBy.contact",
      className: "table-width-140",
    },
    {
      label: "Mode",
      path: "modeOfConsultation",
      className: "table-width-140",
    },
    {
      label: "Amount to Pay",
      path: "amount",
      className: "table-width-140",
    },
    {
      className: "table-width-170",
      xtraContent: (appt) => <DecideAppointment appt={appt} />,
    },
  ];

  const renderContent = () => {
    if (user && user.requestAppointment) {
      if (user.requestAppointment.length === 0) {
        return (
          <NoData message="No Appointment Request been made at the moment." />
        );
      }
      return (
        <table>
          <TableHeader columns={columns} />
          <TableBody columns={columns} dataSource={getRequestAppointments} />
        </table>
      );
    }
  };
  return <div className="table_wrapper">{renderContent()}</div>;
};

export default DoctorRequestAppointment;
