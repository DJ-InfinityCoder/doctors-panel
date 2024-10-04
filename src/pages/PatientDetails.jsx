// src/pages/PatientDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/PatientDetails.css";
import Pagination from "../components/Pagination"; // Importing the Pagination component

const patientDetails = {
  1: {
    name: "Jane Doe",
    age: 28,
    bloodGroup: "O+",
    height: "165 cm",
    weight: "60 kg",
    bp: "120/80",
    meetings: [
      { meetingNumber: "001", date: "2024-09-15", reason: "Flu", prescription: "flu_prescription.pdf" },
      { meetingNumber: "002", date: "2024-10-01", reason: "Follow-up for Flu", prescription: "flu_followup.pdf" },
      // Add more meeting entries for testing pagination
      { meetingNumber: "003", date: "2024-10-10", reason: "Consultation", prescription: "consultation_prescription.pdf" },
      { meetingNumber: "004", date: "2024-10-15", reason: "Flu Vaccine", prescription: "vaccine_prescription.pdf" },
    ],
    imageUrl: "https://via.placeholder.com/150?text=Jane+Doe", // Example image URL
  },
  2: {
    name: "John Smith",
    age: 35,
    bloodGroup: "A+",
    height: "180 cm",
    weight: "75 kg",
    bp: "130/85",
    meetings: [
      { meetingNumber: "001", date: "2024-07-10", reason: "Diabetes checkup", prescription: "diabetes_prescription.pdf" },
      { meetingNumber: "002", date: "2024-08-12", reason: "Blood Pressure follow-up", prescription: "bp_followup.pdf" },
    ],
    imageUrl: "https://via.placeholder.com/150?text=John+Smith", // Example image URL
  },
  // More patients can be added here...
};

const PatientDetails = () => {
  const { id } = useParams();
  const patient = patientDetails[id];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  if (!patient) {
    return <div>Patient not found</div>;
  }

  // Logic for displaying current meetings based on pagination
  const indexOfLastMeeting = currentPage * itemsPerPage;
  const indexOfFirstMeeting = indexOfLastMeeting - itemsPerPage;
  const currentMeetings = patient.meetings.slice(indexOfFirstMeeting, indexOfLastMeeting);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="patient-details-container">
      <div className="patient-header">
        <img
          src={patient.imageUrl}
          alt={`${patient.name}'s image`}
          className="patient-image"
        />

        <div className="patient-basic-info">
          <h4>{patient.name}'s Medical Details</h4>
          <div className="basic-info">
            <p>
              <strong>Age:</strong> {patient.age}
            </p>
            <p>
              <strong>Blood Group:</strong> {patient.bloodGroup}
            </p>
            <p>
              <strong>Height:</strong> {patient.height}
            </p>
            <p>
              <strong>Weight:</strong> {patient.weight}
            </p>
            <p>
              <strong>Blood Pressure:</strong> {patient.bp}
            </p>
          </div>
        </div>
      </div>

      <div className="patient-meetings">
        <h6>Meeting History</h6>
        <table className="meetings-table">
          <thead>
            <tr>
              <th>Meeting Number</th>
              <th>Date & Time</th>
              <th>Reason</th>
              <th>Prescription</th>
            </tr>
          </thead>
          <tbody>
            {currentMeetings.map((meeting, index) => (
              <tr key={index}>
                <td>{meeting.meetingNumber}</td>
                <td>{meeting.date}</td>
                <td>{meeting.reason}</td>
                <td>
                  <a href={`path/to/${meeting.prescription}`} download>
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(patient.meetings.length / itemsPerPage)}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default PatientDetails;
