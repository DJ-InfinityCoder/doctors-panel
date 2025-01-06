// src/pages/Account.jsx
import React from "react";
import "../styles/Account.css"; // Import the Account CSS

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-paper">
        <h4 className="account-title">My Account</h4>
        <h6 className="personal-info-title">Personal Information</h6>
        <div className="form-grid">
          <div className="form-item">
            <label className="label">Profile Photo</label>
            <input type="file" className="file-input" />
          </div>
          <div className="form-item">
            <label className="label">Full Name</label>
            <input
              type="text"
              defaultValue="Dr. John Doe"
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label className="label">Email</label>
            <input
              type="email"
              defaultValue="john.doe@example.com"
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label className="label">Phone</label>
            <input
              type="tel"
              defaultValue="(123) 456-7890"
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label className="label">Age</label>
            <input type="number" defaultValue="35" className="form-input" />
          </div>
          <div className="form-item">
            <label className="label">Specialty</label>
            <input
              type="text"
              defaultValue="Cardiology"
              className="form-input"
            />
          </div>
          <div className="form-item">
            <label className="label">Last Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter last password"
            />
          </div>
          <div className="form-item">
            <label className="label">New Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter new password"
            />
          </div>
          <div className="form-button-container">
            <button className="update-button">Update Information</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
