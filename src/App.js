import './App.css';
import React from 'react';
import UserAgent from './components/UserAgent';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="app-component">
      <NavBar />
      <UserAgent />
    </div>

  );
}

export default App;
