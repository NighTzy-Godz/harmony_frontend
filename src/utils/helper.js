export function dashboardCategories() {
  return [
    { id: 1, name: "Pending Appointments" },
    { id: 2, name: "Appointment History" },
  ];
}

export function doctorSpecialties() {
  return [
    { id: 0, name: "" },
    { id: 1, name: "Dental" },
    { id: 2, name: "Urology" },
    { id: 3, name: "Ophtalmology" },
    { id: 4, name: "Orthopaedics" },
    { id: 5, name: "Dermatology" },
    { id: 6, name: "Cardiology" },
    { id: 7, name: "Neurology" },
    { id: 8, name: "Endocrinology" },
  ];
}

export function setTime(data, func) {
  const time = data.time.split(":");
  return func(time);
}

export function decideApptButton() {
  return [
    { id: 1, name: "Confirmed", value: "Accept" },
    { id: 2, name: "Cancelled", value: "Cancel" },
  ];
}

export function doctorDashboardCategories() {
  return [
    { id: 1, name: "Request Appointments" },
    { id: 2, name: "Incoming Appointments" },
  ];
}

export const selectedDoctor = [];
