import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Account from './components/Account';
import Signup from './components/Signup';
import LoginForm from './components/Login';
import PasswordReset from './components/ PasswordReset';

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Signup />} />
          <Route path="/reset" element={<PasswordReset />} />
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
