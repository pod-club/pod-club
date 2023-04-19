import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? (
        <Login toggle={handleToggle} />
      ) : (
        <Signup toggle={handleToggle} />
      )}
    </div>
  );
}

export default App;
