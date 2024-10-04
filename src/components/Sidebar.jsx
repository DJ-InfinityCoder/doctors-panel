import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close"; // Import close icon
import "../styles/Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Appointments", icon: <CalendarTodayIcon />, path: "/appointments" },
    { text: "Patients", icon: <PeopleIcon />, path: "/patients" },
    { text: "Notifications", icon: <NotificationsIcon />, path: "/notifications" },
    { text: "My Account", icon: <AccountCircleIcon />, path: "/account" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <h1>NIT Delhi Health Center</h1>
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="sidebar-link" onClick={toggleSidebar}>
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div className="close-button-sidebar" onClick={toggleSidebar}>
          <CloseIcon />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
