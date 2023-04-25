import React, { useState } from "react";
import logo from '../components/assets/PodClub__2_-removebg-preview.png';
import "./Login.css";

function Login(props) {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
      </nav>
      <div className="login-page">
        <h1>Login to continue</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="forgot-password">
            Forgot your password?{" "}
          </p>
          <div className="form-check">
               <input
                 type="checkbox"
                className="form-check-input"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
            </div>
            <div className="line"></div>
              <p className="sign-up-container">
                No Account?
              </p>
              <button type="button" className="btn btn-signup" onClick={props.toggle}>Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

