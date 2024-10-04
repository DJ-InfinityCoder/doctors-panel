// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css"; // Import the Dashboard CSS
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const combinedData = [
  { day: "Mon", appointments: 5, totalPatients: 15 },
  { day: "Tue", appointments: 7, totalPatients: 22 },
  { day: "Wed", appointments: 3, totalPatients: 18 },
  { day: "Thu", appointments: 8, totalPatients: 25 },
  { day: "Fri", appointments: 6, totalPatients: 20 },
];

// Sample data for recent patients and appointments
const recentPatients = [
  {
    id: 1,
    name: "Jane Doe",
    gender: "Female",
    prescriptionId: "RX123",
    dateTime: "2024-09-29 10:00 AM",
    disease: "Flu",
    status: "Recovering",
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "John Smith",
    gender: "Male",
    prescriptionId: "RX124",
    dateTime: "2024-09-29 11:00 AM",
    disease: "Diabetes",
    status: "Ongoing",
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "Emily Davis",
    gender: "Female",
    prescriptionId: "RX125",
    dateTime: "2024-09-29 12:00 PM",
    disease: "Allergy",
    status: "Recovered",
    photo: "https://via.placeholder.com/40",
  },
];

const appointmentsToday = [
  {
    id: 1,
    name: "Jane Doe",
    time: "10:00 AM",
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    name: "John Smith",
    time: "11:00 AM",
    photo: "https://via.placeholder.com/40",
  },
];

const appointmentsTomorrow = [
  {
    id: 1,
    name: "Emily Davis",
    time: "12:00 PM",
    photo: "https://via.placeholder.com/40",
  },
];

const appointmentss = [
  { date: "2024-10-01", title: "Appointment with John" },
  { date: "2024-10-03", title: "Follow-up with Jane" },
];

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [isTomorrow, setIsTomorrow] = useState(false);

  const appointments = isTomorrow ? appointmentsTomorrow : appointmentsToday;

  const tileContent = ({ date }) => {
    const hasAppointment = appointmentss.some(
      (appointment) =>
        new Date(appointment.date).toDateString() === date.toDateString()
    );

    return <div>{hasAppointment && <span className="dot" />}</div>;
  };

  const navigate = useNavigate();
  const handleCheckPatient = () => {
    navigate("/prescriptionform")
  };

  return (
    <div className="dashboard-container">
      {/* Greetings */}
      <div className="dashboard-heading">
        <div className="greetings">
          <h4>Welcome, Dr. John Doe</h4>
          <p> Have a great day at work !!!</p>
        </div>
        <div>
          <button>Add Patients</button>
        </div>
      </div>
      {/* Main Grid Layout */}
      <div className="dashboard-grid-1">
        {/* Combined Report */}
        <div className="report-container">
          <h6 className="report-title">Weekly Records</h6>
          <div className="line-chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={combinedData}>
                <CartesianGrid stroke="#e0e0e0" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="appointments"
                  stroke="#3f51b5"
                  strokeWidth={2}
                  name="Appointments"
                />
                <Line
                  type="monotone"
                  dataKey="totalPatients"
                  stroke="#ff6384"
                  strokeWidth={2}
                  name="Total Patients"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calendar */}
        <div className="calendar-container">
          <h6 className="calendar-title">Your Schedule</h6>
          <div className="calendar">
            <Calendar
              onChange={setDate}
              value={date}
              tileContent={tileContent}
              prevLabel="&#8592;"
              nextLabel="&#8594;"
              className="react-calendar full-width"
            />
          </div>
        </div>
      </div>
      {/* Recent Patients */}
      <div className="dashboard-grid-2">
        <div className="recent-patients-container">
          <h6 className="recent-patients-title">Recent Patients</h6>
          <div className="table-responsive">
            <table className="patients-table-dashboard">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Registration ID</th>
                  <th>Date & Time</th>
                  <th>Disease</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPatients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="namephoto">
                      <img
                        src={patient.photo}
                        alt={patient.name}
                        className="patient-photo"
                      />
                      {patient.name}
                    </td>
                    <td>{patient.gender}</td>
                    <td>{patient.prescriptionId}</td>
                    <td>{patient.dateTime}</td>
                    <td>{patient.disease}</td>
                    <td>{patient.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="todays-appointments-container">
          <h6 className="appointments-title">Today's Appointments</h6>
          <div className="appointment-options">
            <label htmlFor="appointment-selector" className="appointment-label">
              Select Day:
            </label>
            <select
              id="appointment-selector"
              value={isTomorrow ? "tomorrow" : "today"}
              onChange={(e) => setIsTomorrow(e.target.value === "tomorrow")}
              className="appointment-select"
            >
              <option value="today">Today</option>
              <option value="tomorrow">Tomorrow</option>
            </select>
          </div>

          <table className="appointments-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="namephoto">
                      <img
                        src={appointment.photo}
                        alt={appointment.name}
                        className="appointment-photo"
                      />
                      {appointment.name}
                    </div>
                  </td>
                  <td>{appointment.time}</td>
                  <td>
                    <div className="act-btn">
                      <button
                        onClick={handleCheckPatient}
                        className="check-btn"
                      >
                        Check Patient
                      </button>
                      <button className="reschedule-btn">Reschedule</button>
                      <button className="cancel-btn">Cancel</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
