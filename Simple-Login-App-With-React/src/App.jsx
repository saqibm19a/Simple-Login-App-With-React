import React, { useState } from 'react';
import './App.css';

// LoggedIn component
const LoggedIn = () => {
  return <div className="content">Welcome! You are logged in.</div>;
};

// LoggedOut component
const LoggedOut = () => {
  return <div className="content">You are Logout. Please log in to continue.</div>;
};

// Useing State
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default App;

