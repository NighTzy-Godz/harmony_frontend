import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoctorConfirmation = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user.isConfirmed) {
      console.log("confirmed");
      return navigate("/doctor/me/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="" style={{ paddingTop: "100px" }}>
      Please wait for the confirmation of your account. Please comeback after
      some time. Thank You
    </div>
  );
};

export default DoctorConfirmation;
