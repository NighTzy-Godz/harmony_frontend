import http from "./httpService";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_API_PATIENT_URL;

export function loginPatient(data) {
  return http
    .post(`${BASE_URL}/login`, data)
    .then((user) => {
      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2500 });
      return err;
    });
}

export function getPatientProfile() {
  return http.get(`${BASE_URL}/me`);
}

export function saveAppointment(data) {
  return http
    .post(`${BASE_URL}/appointment`, data)
    .then(() => {
      toast.success("The appointment was successfully requested.", {
        autoClose: 2500,
      });
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2500 });
      return err;
    });
}

export function updatePatientAccount(data) {
  const formData = new FormData();
  formData.append("first_name", data.first_name);
  formData.append("last_name", data.last_name);
  formData.append("contact", data.contact);
  formData.append("email", data.email);

  if (data.img !== undefined) {
    formData.append("img", data.img);
  }

  return http
    .post(`${BASE_URL}/updateAccount`, formData)
    .then((user) => {
      toast.success(
        `Account successfully updated for ${user.data.first_name} ${user.data.last_name}`,
        { autoClose: 2000 }
      );
      // navigate("/patient/me/dashboard");

      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2500 });
      return err;
    });
}

export function changePatientPassword(data) {
  return http
    .post(`${BASE_URL}/change-password`, data)
    .then((user) => {
      toast.success(`Password has been changed.`, { autoClose: 2000 });
      // navigate("/patient/me/dashboard");

      return user;
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2500 });
      return err;
    });
}

export function getAppointments() {
  return http.get(`${BASE_URL}/getAppointments`);
}

export function getAcceptedAppointments() {
  return http.get(`${BASE_URL}/getAcceptedAppointments`);
}

export function getSearchedDoctor(data) {
  return http.get(`${BASE_URL}/search_doctor/${data}`);
}

export function getAppointmentDocDisplay(data) {
  return http.get(`${BASE_URL}/search_doc_display/${data}`);
}

export function getPrescriptions() {
  return http.get(`${BASE_URL}/prescriptions`);
}
