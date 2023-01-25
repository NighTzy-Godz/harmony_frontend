import React from "react";
import { getPrescriptions } from "../../../services/patientDataService";
import TableBody from "../../common/TableBody";
import TableHeader from "../../common/TableHeader";
import "../../../static/css/patient_prescription.css";

const PatientPrescription = () => {
  const columns = [
    { label: "ID", path: "customId", className: "table-width-100 prescriptId" },
    {
      label: "Prescribed By",
      className: "table-width-230",
      xtraContent: (item) => (
        <React.Fragment>
          <div className="prescript_container">
            <div className="img">
              <img src={item.prescribedBy.profile_picture} alt="" />
            </div>
            <div className="details">
              <h3 className="font_bold">{item.prescribedBy.full_name}</h3>
              <p className="font_reg">{item.prescribedBy.specialty}</p>
            </div>
          </div>
        </React.Fragment>
      ),
    },
    { label: "Date", path: "patient.date", className: "table-width-120" },
    { label: "Findings", path: "findings", className: "table-width-120" },
    {
      label: "Prescription",
      path: "prescription",
      className: "table-width-230 prescription_handler",
    },
  ];
  return (
    <div className="table_wrapper prescription">
      <table>
        <TableHeader columns={columns} />
        <TableBody columns={columns} dataSource={getPrescriptions} />
      </table>
    </div>
  );
};

export default PatientPrescription;
