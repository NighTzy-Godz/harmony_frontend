import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const style = {
  textAlign: "center",
  fontSize: "50px",
  color: "var(--black-)",
  marginTop: "300px",
};
const DoctorConfirmation = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (user.isConfirmed) {
      return navigate("/doctor/me/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="">
      <h1 className="font_reg" style={style}>
        {" "}
        Please wait for the confirmation of your account. Please comeback after
        some time. Thank You
      </h1>
    </div>
  );
};

export default DoctorConfirmation;
