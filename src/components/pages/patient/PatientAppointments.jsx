import React from "react";
import NoData from "../../common/NoData";

import TableHeader from "../../common/TableHeader";
import TableBody from "../../common/TableBody";
import { getAppointments } from "../../../services/patientDataService";
import LoadingData from "../../common/LoadingData";

const PatientAppointments = ({ user }) => {
  const columns = [
    {
      label: "Doctor",
      path: "doctor.name",
      className: "table-width-230",
      xtraContent: (item) => (
        <React.Fragment>
          {console.log(item)}
          <h2 className="font_reg">{item.doctor.name}</h2>
          <p className=" font_light">{item.doctor.specialty}</p>
        </React.Fragment>
      ),
    },
    { label: "Date", path: "date", className: "table-width-140" },
    { label: "Time", path: "time", className: "table-width-100" },
    { label: "Amount", path: "amount", className: "table-width-100" },
    {
      label: "Status",
      path: "status",
      className: "table-width-100",
    },
  ];
  const renderContent = () => {
    if (Object.keys(user).length === 0)
      return <LoadingData msg="Loading the data for table..." />;
    if (user.appointments) {
      if (user.appointments.length === 0)
        return <NoData message="No Appointment was made. Please Create One." />;

      return (
        <table>
          <TableHeader columns={columns} />

          <TableBody columns={columns} dataSource={getAppointments} />
        </table>
      );
    }
  };

  return <div className="table_wrapper">{renderContent()}</div>;
};

export default PatientAppointments;
