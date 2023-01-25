import { changeDoctorPassword } from "../../../services/doctorDataServices";
import AccountChangePass from "../../common/AccountChangePass";

const DoctorChangePass = () => {
  return (
    <AccountChangePass
      navigateLink="/doctor/me/dashboard"
      changePassword={changeDoctorPassword}
    />
  );
};

export default DoctorChangePass;
