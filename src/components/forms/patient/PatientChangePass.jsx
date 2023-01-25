import { changePatientPassword } from "../../../services/patientDataService";
import AccountChangePass from "../../common/AccountChangePass";

const PatientChangePass = () => {
  return (
    <AccountChangePass
      navigateLink="/patient/me/dashboard"
      changePassword={changePatientPassword}
    />
  );
};

export default PatientChangePass;
