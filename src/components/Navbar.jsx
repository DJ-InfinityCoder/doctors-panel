import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";


const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    navigate("/profile");
  };

  const handleClickNotificationIcon = () => {
    navigate("./notifications")
  };

  const handleLogoutClick = () => {
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="hamburger">
        <MenuIcon onClick={toggleSidebar} className="hamburger-icon" />
      </div>
      <div className="nav-items">
        <div className="notification-icon" onClick={handleClickNotificationIcon} >
          <NotificationsIcon />
        </div>
        <div className="username">Dr. John Doe</div>
        <div className="account-icon" onClick={toggleDropdown}>
          <AccountCircle />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={handleProfileClick}>
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLogoutClick}>
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
