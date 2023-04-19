import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log("Submitting form...");
      // You can send the form data to a server using fetch or Axios
    }
  };
  

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/assets/PodClub__2_-removebg-preview.png" alt="logo" />
        </div>
      </nav>
      <div className="sign-up-page">
        <h1>Sign up for free</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
          <p className="login-container">
            Have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
