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
  console.log(data);
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

export function getAppointments() {
  return http.get(`${BASE_URL}/getAppointments`);
}

export function getAcceptedAppointments() {
  return http.get(`${BASE_URL}/getAcceptedAppointments`);
}

export function getSearchedDoctor(data) {
  return http.get(`${BASE_URL}/search_doctor/${data}`);
}
