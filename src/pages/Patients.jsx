// src/pages/Patients.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/Patients.css';
import SearchIcon from "@mui/icons-material/Search";
import Pagination from '../components/Pagination';

const patients = [
  { id: 1, name: 'Jane Doe', date: '2023-01-01', type: 'Student' },
  { id: 2, name: 'John Smith', date: '2023-02-15', type: 'Employee' },
  { id: 3, name: 'Emily Davis', date: '2023-03-20', type: 'Dependant' },
  { id: 4, name: 'Mike Taylor', date: '2023-04-05', type: 'Student' },
  { id: 5, name: 'Laura Harris', date: '2023-05-10', type: 'Employee' },
  { id: 6, name: 'James Brown', date: '2023-06-25', type: 'Dependant' },
  { id: 7, name: 'Sarah Lee', date: '2023-07-30', type: 'Student' },
];

const Patients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 3;
  const navigate = useNavigate(); // Initialize navigate

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(indexOfFirstPatient, indexOfLastPatient);
  const totalPages = Math.ceil(patients.length / patientsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleViewDetails = (patient) => {
    navigate(`/patient/${patient.id}`, { state: { patient } });
  };

  return (
    <div className="patients-container">
      <div className="patients-paper">
        <h2>Patient List</h2>
        <div className="search-container">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search…" className="search-input" />
      </div>
        <div className="table-responsive">
          <table className="patients-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentPatients.map((patient, index) => (
                <tr key={patient.id}>
                  <td>{index + 1 + (currentPage - 1) * patientsPerPage}</td>
                  <td>{patient.name}</td>
                  <td>{patient.date}</td>
                  <td>{patient.type}</td>
                  <td>
                    <button
                      className="details-button patientdet"
                      onClick={() => handleViewDetails(patient)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
      </div>
    </div>
  );
};

export default Patients;
