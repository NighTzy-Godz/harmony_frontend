import React from "react";
import ReactDOM from "react-dom/client";
import "./static/css/global.css";

import App from "./components/App";

window.process = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// REACT_APP_API_PATIENT_URL=http://localhost:8080/patient
// REACT_APP_API_DOCTOR_URL=http://localhost:8080/doctor
