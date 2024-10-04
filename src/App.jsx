// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Patients from "./pages/Patients";
import PrescriptionForm from "./components/PrescriptionForm";
import PatientDetails from "./pages/PatientDetails";
import Notifications from "./pages/Notifications";
import Account from "./pages/Account";
import LoginPage from "./pages/LoginPage";
import DoctorProfile from "./pages/DoctorProfile";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Login */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Wrap all other routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/prescriptionform" element={<PrescriptionForm />} />
          <Route path="/patient/:id" element={<PatientDetails />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<DoctorProfile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
