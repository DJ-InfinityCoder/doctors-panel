// src/pages/HomePage.jsx
import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../styles/LoginPage.css";

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="left-part">
        {isLogin ? (
          <Login toggleForm={toggleForm} /> // Pass the toggle function to Login
        ) : (
          <Signup toggleForm={toggleForm} /> // Pass the toggle function to Signup
        )}
        </div>
        <div className="right-part"></div>
      </div>
    </div>
  );
};

export default HomePage;
