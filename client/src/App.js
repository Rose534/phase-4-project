import './App.css';
import React,{useState} from 'react';
import LoginPage from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Account from './components/Account';
import Navbar from './components/Navbar';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const[user,setUser] = useState({name: "", email: "" });
  const[error, setError] = useState("");

const Login = details => {
  console.log(details);
  }

  const Logout = () => {
    console.log ("Logout");
  }
  
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
  
}
export default App