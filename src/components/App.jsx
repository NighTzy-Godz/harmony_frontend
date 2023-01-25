import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./common/ProtectedRoute";
import { getUser } from "../services/auth";
import NotFound from "./common/NotFound";

import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Logout from "./pages/Logout";
import LoginLayout from "./pages/LoginLayout";

import PatientRegister from "./forms/patient/PatientRegister";
import PatientLogin from "./forms/patient/PatientLogin";
import PatientDashboard from "./pages/patient/PatientDashboard";
import PatientLayout from "./pages/patient/PatientLayout";
import PatientAccountUpdate from "./forms/patient/PatientAccountUpdate";
import PatientChangePass from "./forms/patient/PatientChangePass";
import Appointment from "./forms/patient/appointment/Appointment";

import DoctorRegister from "./forms/doctor/DoctorRegister";
import DoctorLogin from "./forms/doctor/DoctorLogin";
import DoctorLayout from "./pages/doctor/DoctorLayout";
import DoctorConfirmation from "./pages/doctor/DoctorConfirmation";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAccountUpdate from "./forms/doctor/DoctorAccountUpdate";
import DoctorChangePass from "./forms/doctor/DoctorChangePass";
import AllDoctors from "./pages/AllDoctor";

import PharmacyLayout from "./pages/pharmacy/PharmacyLayout";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [state, setState] = useState({
    user: {},
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const user = await getUser();
        setState({ ...state, user });
      } catch (ex) {
        return null;
      }
    };

    getData();
  }, []);

  const { user } = state;

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout user={user} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="doctors" element={<AllDoctors user={user} />} />
          <Route path="login" element={<LoginLayout />} />

          {/* ==================================================== */}
          {/* =============== PATIENT ROUTES HERE ================ */}
          {/* ==================================================== */}
          <Route path="patient/register" element={<PatientRegister />} />
          <Route path="patient/login" element={<PatientLogin />} />

          <Route
            path="patient/appointment"
            element={
              <ProtectedRoute user={user}>
                <Appointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="patient/me"
            element={
              <ProtectedRoute user={user}>
                <PatientLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="dashboard"
              element={<PatientDashboard user={user} />}
            />
            <Route
              path="account"
              element={
                <ProtectedRoute user={user}>
                  <PatientAccountUpdate />
                </ProtectedRoute>
              }
            />
            <Route
              path="change-password"
              element={
                <ProtectedRoute user={user}>
                  <PatientChangePass />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* ==================================================== */}
          {/* =============== DOCTOR ROUTES HERE ================= */}
          {/* ==================================================== */}
          <Route path="doctor/register" element={<DoctorRegister />} />
          <Route path="doctor/login" element={<DoctorLogin />} />
          <Route
            path="doctor/me/confirmation"
            element={
              <ProtectedRoute user={user}>
                <DoctorConfirmation user={user} />
              </ProtectedRoute>
            }
          />

          <Route path="doctor/me" element={<DoctorLayout />}>
            <Route
              path="dashboard"
              element={
                <ProtectedRoute user={user}>
                  <DoctorDashboard currUser={user} />
                </ProtectedRoute>
              }
            />

            <Route
              path="account"
              element={
                <ProtectedRoute user={user}>
                  <DoctorAccountUpdate />
                </ProtectedRoute>
              }
            />

            <Route
              path="change-password"
              element={
                <ProtectedRoute user={user}>
                  <DoctorChangePass />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* ==================================================== */}
          {/* ===============PHARMACY ROUTES HERE ================ */}
          {/* ==================================================== */}

          <Route path="pharmacy" element={<PharmacyLayout />} />

          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// class App extends Component {
//   state = {
//     user: {},
//   };
//   componentDidMount() {
//     try {
//       const user = getUser();

//       this.setState({ user });
//     } catch (ex) {
//       return null;
//     }
//   }
//   render() {

//   }
// }
