import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Channel from './components/Channel'; // import the Channels component
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
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Home />
          ) : showLogin ? (
            <Login toggle={handleToggle} onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Signup toggle={handleToggle} />
          )}
        </Route>
        {/* <Route path="/channels">
          <Channel />
        </Route> */}
      </Switch>
      {/* <Channel/> */}
      <Footer />
    </div>
  );
}

export default App;
