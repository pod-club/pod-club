import React, { useState } from "react";
import logo from "./assets/PodClub__2_- white.png"
import "./Login.css";

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const userData = {
        user: {
          email: email,
          password: password
        },
      };
      try {
        const response = await fetch('http://localhost:3000/sessions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        },{withCredentials: true}
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        // Registration successful, redirect to login page
       // window.location.href = '/login';
      } catch (error) {
        setError('Failed to register user');
      }
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
        <form onSubmit={handleFormSubmit}>
        {error && <div>{error}</div>}
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="forgot-password">
            Forgot your password?{" "}
          </p>
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