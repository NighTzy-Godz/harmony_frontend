import React from "react";

import {
  getPatientProfile,
  updatePatientAccount,
} from "../../../services/patientDataService";
import AccountUpdate from "../../common/AccountUpdate";

const PatientAccountUpdate = () => {
  return (
    <React.Fragment>
      <AccountUpdate
        navigateLink="/patient/me/dashboard"
        getUserProfile={getPatientProfile}
        updateAccount={updatePatientAccount}
      />{" "}
    </React.Fragment>
  );
};

export default PatientAccountUpdate;
