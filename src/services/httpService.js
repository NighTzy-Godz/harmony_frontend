import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

axios.interceptors.response.use(null, (err) => {
  const expectedError = err.status >= 400 && err.status < 500;

  if (!expectedError) toast.error(err);

  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
