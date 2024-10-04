import React, { useState } from "react";
import "./login_signup.css";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // useNavigate hook at the top level
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Authentication logic here (e.g., API call)
    // If registration is successful:
    navigate('/dashboard');
    console.log("Signed up with", { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-brand">
        <h1>NIT Delhi Health Centre</h1>
      </div>

      <h2 className="auth-title">Create an Account</h2>
      <p className="auth-subtitle">Enter your details to sign up</p>

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

          <div className="form-group">
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
          </div>

          <button type="submit" className="auth-button">
            Sign Up
          </button>

          <div className="google-signin">
            <button type="button" className="google-signin-button">
              <FaGoogle className="google-icon" />
              Sign Up with Google
            </button>
          </div>
        </div>
      </form>

      <p className="auth-footer">
        Already have an account?{" "}
        <span onClick={toggleForm} className="auth-signup">
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
