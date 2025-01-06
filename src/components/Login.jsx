import React, { useState } from "react";
import "./login_signup.css";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // useNavigate hook at the top level
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Authentication logic here (e.g., API call)
    // If authentication is successful:
    navigate('/dashboard');
    console.log("Logged in with", { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-brand">
        <h1>NIT Delhi Health Centre</h1>
      </div>

      <h2 className="auth-title">Welcome Back</h2>
      <p className="auth-subtitle">
        Enter your email and password to access your account
      </p>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="formcont">
          <div className="form-group">
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </div>

          <div className="auth-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <span className="forgot-password">Forgot Password?</span>
          </div>

          <button type="submit" className="auth-button">
            Sign In
          </button>

          <div className="google-signin">
            <button type="button" className="google-signin-button">
              <FaGoogle className="google-icon" />
              Sign In with Google
            </button>
          </div>
        </div>
      </form>

      <p className="auth-footer">
        Don’t have an account?{" "}
        <span onClick={toggleForm} className="auth-signup">
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
