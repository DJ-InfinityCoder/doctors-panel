import React, { useState } from "react";
import Pagination from "../components/Pagination";
import "../styles/Appointments.css";
import SearchIcon from "@mui/icons-material/Search";

const initialAppointments = [
  // Sample upcoming appointments
  {
    id: 1,
    name: "John Doe",
    date: "2024-10-05",
    time: "10:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-10-06",
    time: "11:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Sarah Connor",
    date: "2024-10-07",
    time: "1:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "David Wilson",
    date: "2024-10-08",
    time: "3:00 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Anna Taylor",
    date: "2024-10-09",
    time: "4:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  // Sample past appointments
  {
    id: 6,
    name: "Emily Johnson",
    date: "2024-09-25",
    time: "9:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    name: "Michael Brown",
    date: "2024-09-20",
    time: "2:00 PM",
    status: "Canceled",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    name: "Chris Evans",
    date: "2024-09-15",
    time: "11:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 9,
    name: "Jessica Parker",
    date: "2024-09-10",
    time: "4:00 PM",
    status: "No Show",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 10,
    name: "Brian Cox",
    date: "2024-09-05",
    time: "10:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 11,
    name: "Lisa Simpson",
    date: "2024-09-01",
    time: "12:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 12,
    name: "Tom Hanks",
    date: "2024-08-30",
    time: "3:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 1,
    name: "John Doe",
    date: "2024-10-05",
    time: "10:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-10-06",
    time: "11:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Sarah Connor",
    date: "2024-10-07",
    time: "1:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "David Wilson",
    date: "2024-10-08",
    time: "3:00 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Anna Taylor",
    date: "2024-10-09",
    time: "4:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  // Sample past appointments
  {
    id: 6,
    name: "Emily Johnson",
    date: "2024-09-25",
    time: "9:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    name: "Michael Brown",
    date: "2024-09-20",
    time: "2:00 PM",
    status: "Canceled",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    name: "Chris Evans",
    date: "2024-09-15",
    time: "11:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 9,
    name: "Jessica Parker",
    date: "2024-09-10",
    time: "4:00 PM",
    status: "No Show",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 10,
    name: "Brian Cox",
    date: "2024-09-05",
    time: "10:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 11,
    name: "Lisa Simpson",
    date: "2024-09-01",
    time: "12:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 12,
    name: "Tom Hanks",
    date: "2024-08-30",
    time: "3:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 1,
    name: "John Doe",
    date: "2024-10-05",
    time: "10:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-10-06",
    time: "11:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Sarah Connor",
    date: "2024-10-07",
    time: "1:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "David Wilson",
    date: "2024-10-08",
    time: "3:00 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Anna Taylor",
    date: "2024-10-09",
    time: "4:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  // Sample past appointments
  {
    id: 6,
    name: "Emily Johnson",
    date: "2024-09-25",
    time: "9:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    name: "Michael Brown",
    date: "2024-09-20",
    time: "2:00 PM",
    status: "Canceled",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    name: "Chris Evans",
    date: "2024-09-15",
    time: "11:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 9,
    name: "Jessica Parker",
    date: "2024-09-10",
    time: "4:00 PM",
    status: "No Show",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 10,
    name: "Brian Cox",
    date: "2024-09-05",
    time: "10:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 11,
    name: "Lisa Simpson",
    date: "2024-09-01",
    time: "12:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 12,
    name: "Tom Hanks",
    date: "2024-08-30",
    time: "3:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 1,
    name: "John Doe",
    date: "2024-10-05",
    time: "10:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2024-10-06",
    time: "11:00 AM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Sarah Connor",
    date: "2024-10-07",
    time: "1:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 4,
    name: "David Wilson",
    date: "2024-10-08",
    time: "3:00 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 5,
    name: "Anna Taylor",
    date: "2024-10-09",
    time: "4:30 PM",
    status: "Not Confirmed Yet",
    image: "https://via.placeholder.com/50",
  },
  // Sample past appointments
  {
    id: 6,
    name: "Emily Johnson",
    date: "2024-09-25",
    time: "9:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 7,
    name: "Michael Brown",
    date: "2024-09-20",
    time: "2:00 PM",
    status: "Canceled",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 8,
    name: "Chris Evans",
    date: "2024-09-15",
    time: "11:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 9,
    name: "Jessica Parker",
    date: "2024-09-10",
    time: "4:00 PM",
    status: "No Show",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 10,
    name: "Brian Cox",
    date: "2024-09-05",
    time: "10:00 AM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 11,
    name: "Lisa Simpson",
    date: "2024-09-01",
    time: "12:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 12,
    name: "Tom Hanks",
    date: "2024-08-30",
    time: "3:00 PM",
    status: "Completed",
    image: "https://via.placeholder.com/50",
  },
];

const Appointments = () => {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 4; // Number of appointments per page
  const [filterDate, setFilterDate] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [rescheduleDate, setRescheduleDate] = useState("");
  const [showPastAppointments, setShowPastAppointments] = useState(false); // State to toggle between upcoming and past appointments

  // Confirm appointment
  const handleConfirm = (id) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Confirmed" }
          : appointment
      )
    );
  };

  // Open modal with detailed information
  const openModal = (appointment) => {
    setSelectedAppointment(appointment);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedAppointment(null);
    setRescheduleDate("");
  };

  // Handle rescheduling
  const handleReschedule = () => {
    if (rescheduleDate) {
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === selectedAppointment.id
            ? { ...appointment, date: rescheduleDate, status: "Rescheduled" }
            : appointment
        )
      );
      closeModal();
    }
  };

  // Handle canceling
  const handleCancel = () => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? { ...appointment, status: "Canceled" }
          : appointment
      )
    );
    closeModal();
  };

  // Date filter
  const handleDateFilter = (event) => {
    setFilterDate(event.target.value);
  };

  // Filter appointments based on upcoming or past
  const filteredAppointments = showPastAppointments
    ? appointments.filter(
        (appointment) => new Date(appointment.date) < new Date()
      )
    : filterDate
    ? appointments.filter((appointment) => appointment.date === filterDate)
    : appointments.filter(
        (appointment) => new Date(appointment.date) >= new Date()
      );

  // Pagination logic
  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = filteredAppointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(
    filteredAppointments.length / appointmentsPerPage
  );

  return (
    <div className="appointments-container">
      <h4 className="appointments-title">
        {" "}
        {showPastAppointments
          ? "Past Appointments"
          : "Upcoming Appointments"}
      </h4>
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search…" className="search-input" />
      </div>
      {/* Date Filter */}
      <div className="view-options">
        <div>
          <label htmlFor="">Select date: </label>
          <input
            type="date"
            value={filterDate}
            onChange={handleDateFilter}
            className="date-filter"
            placeholder="Filter by date"
          />
        </div>
        <button
          className="past_appointment"
          onClick={() => setShowPastAppointments((prev) => !prev)} // Toggle past appointments
        >
          {showPastAppointments
            ? "View Upcoming Appointments"
            : "View Past Appointments"}
        </button>
      </div>

      <ul className="appointments-list">
        {currentAppointments.map((appointment) => (
          <li key={appointment.id} className="appointment-item">
            <div className="patient-appointment-details">
              <div className="namePhoto">
                <img
                  src={appointment.image}
                  className="appointment-image"
                  alt={appointment.name}
                />
                <div className="appointment-name">{appointment.name}</div>
              </div>
              <div className="appointment-details">
                <strong>Date: </strong>
                {appointment.date} <strong className="slash"> | </strong>
                <strong>Time: </strong>
                {appointment.time}
                <br />
                <strong>Status:</strong> {appointment.status}
              </div>
            </div>
            {appointment.status === "Not Confirmed Yet" && (
              <button
                className="confirm-button"
                onClick={() => handleConfirm(appointment.id)}
              >
                Confirm
              </button>
            )}
            <button
              className="details-button"
              onClick={() => openModal(appointment)}
            >
              View Details
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Appointment Details</h4>
            {selectedAppointment && (
              <>
                <p>Name: {selectedAppointment.name}</p>
                <p>Date: {selectedAppointment.date}</p>
                <p>Time: {selectedAppointment.time}</p>
                <p>Status: {selectedAppointment.status}</p>

                {/* Reschedule */}
                <div className="reschedule-container">
                  <label>Reschedule Date:</label>
                  <input
                    type="date"
                    value={rescheduleDate}
                    onChange={(e) => setRescheduleDate(e.target.value)}
                  />
                  <button
                    className="confirm-reschedule-button"
                    onClick={handleReschedule}
                  >
                    Confirm Reschedule
                  </button>
                </div>

                {/* Cancel */}
                <button className="cancel-button" onClick={handleCancel}>
                  Cancel Appointment
                </button>
                <button className="close-button" onClick={closeModal}>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
