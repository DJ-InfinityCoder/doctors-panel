// src/pages/Notifications.jsx
import React from 'react';
import '../styles/Notifications.css'; // Import the Notifications CSS

const notifications = [
  { message: 'New appointment with John Smith', time: '10 minutes ago' },
  { message: 'Report ready for Emily Davis', time: '1 hour ago' },
  { message: 'Medication reminder: Take your pills', time: '2 hours ago' },
  { message: 'New message from Sarah Lee regarding appointment', time: '3 hours ago' },
  { message: 'Patient Mike Taylor checked in', time: '1 day ago' },
  { message: 'Reminder: Team meeting scheduled for tomorrow at 10 AM', time: '2 days ago' },
];

const Notifications = () => {
  return (
    <div className="notifications-container">
      <div className="notifications-paper">
        <h2>Recent Notifications</h2>
        <ul className="notifications-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <span className="notification-icon">🔔</span> {/* Icon for each notification */}
              <span className="notification-message">{notification.message}</span>
              <span className="notification-time">{notification.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
