import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const customId = "protectedroute";
const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    toast.warning("You are not authorized to do that.", { toastId: customId });
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
