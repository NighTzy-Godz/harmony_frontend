import React from "react";
import { getAcceptedAppointments } from "../../../services/patientDataService";
import NoData from "../../common/NoData";
import TableBody from "../../common/TableBody";
import TableHeader from "../../common/TableHeader";

const PatientMedicalRecord = ({ user }) => {
  const columns = [
    {
      label: "Doctor",
      path: "doctor.name",
      className: "table-width-230",
      xtraContent: (item) => (
        <React.Fragment>
          {" "}
          <h2 className="font_reg">{item.doctor.name}</h2>
          <p className=" font_light">{item.doctor.specialty}</p>
        </React.Fragment>
      ),
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
      path: "contact",
      className: "table-width-140",
    },

    {
      label: "Amount",
      path: "amount",
      className: "table-width-100",
    },

    {
      label: "Status",
      path: "status",
      className: "table-width-100",
    },
  ];

  const renderContent = () => {
    if (user.appointmentHistory) {
      if (user.appointmentHistory.length === 0) {
        return (
          <NoData message="There's no appointment history at the moment. You can create an appointment." />
        );
      }
      return (
        <table className="patient_appointment">
          <TableHeader columns={columns} />
          <TableBody columns={columns} dataSource={getAcceptedAppointments} />
        </table>
      );
    }
  };
  return <div className="table_wrapper">{renderContent()}</div>;
};

export default PatientMedicalRecord;
