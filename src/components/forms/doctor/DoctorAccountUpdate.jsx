import React from "react";

import AccountUpdate from "../../common/AccountUpdate";
import {
  getDoctorProfile,
  updateDoctorAccount,
} from "../../../services/doctorDataServices";
const DoctorAccountUpdate = () => {
  return (
    <React.Fragment>
      <AccountUpdate
        navigateLink="/doctor/me/dashboard"
        getUserProfile={getDoctorProfile}
        updateAccount={updateDoctorAccount}
      />
    </React.Fragment>
  );
};

export default DoctorAccountUpdate;
