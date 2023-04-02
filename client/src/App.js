import './App.css';
import React,{useState} from 'react';
import Login from './Components/Login';
import Loginpage from './Components/Login';
import Signup from './Components/Signup';
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
        <Loginpage/>

        
      )}
    </div>

   
  );
}
export default App