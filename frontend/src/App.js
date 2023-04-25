import React, { useState } from 'react';
//import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
//import Chat from './components/Chat';
//import Channel from './components/Channel';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <Home />
      ) : showLogin ? (
        <Login toggle={handleToggle} onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Signup toggle={handleToggle} />
      )}
      {/* <Route path="/chat/:channelId" component={Chat} /> */}
      <Footer/>
    </div>
  );
}

export default App;
