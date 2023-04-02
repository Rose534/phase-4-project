import './App.css';
import React,{useState} from 'react';
import LoginPage from './Components/Login';

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
    <div className='App'>
      {(user.email !== "") ? (
        <div className="Welcome">
          <h2>Welcome,</h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginPage />
        
      )}
    </div>
  );
}
export default App