import http from "./httpService";
import { toast } from "react-toastify";

const BASE_URL = process.env.REACT_APP_API_DOCTOR_URL;
const customId = "doctorProfile";

export function getDoctorProfile() {
  return http.get(`${BASE_URL}/me`).catch((err) => {
    toast.error(`${err.response.data}`, { autoClose: 2500, toastId: customId });
    return err;
  });
}

export function getAllDoctors() {
  return http.get(`${BASE_URL}/allDoctors`);
}

export function getRequestAppointments() {
  return http.get(`${BASE_URL}/requestAppointments`);
}

export function getAcceptedAppointments() {
  return http.get(`${BASE_URL}/comingAppointments`);
}

export function saveRequestAppointment(data) {
  return http
    .post(`${BASE_URL}/decideAppointment`, data)
    .then(() => {
      toast.success(
        `Successfully ${data.status.toLowerCase()} the appointment. `,
        { autoClose: 2500 }
      );
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2500 });
      return err;
    });
}

export function saveDoctor(data) {
  return http
    .post(`${BASE_URL}/register`, data)
    .then((user) => {
      toast.success(
        `Account successfully created for ${user.data.first_name} ${user.data.last_name}`,
        { autoClose: 2500 }
      );
    })
    .catch((err) => {
      toast.error(err.response.data, { autoClose: 2500 });
      return err;
    });
}

export function loginDoctor(data) {
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
