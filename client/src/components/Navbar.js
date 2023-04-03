
import { NavLink } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
    .then(() => {
      localStorage.removeItem("token");
      navigate("/signup", { replace: true }); 
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <div className="nav-bar blue">
        <div className="logo-container">
          <img src="https://53525363.000webhostapp.com/Images/CLICKY__1_-removebg-preview.png" alt="logo" />
        </div>
        <div className="menu-container">
          <NavLink to="/homepage" className="menu-item" activeClassName="active">Home</NavLink>
          <NavLink to="/account" className="menu-item" activeClassName="active">Account</NavLink>
          <span className="menu-item" onClick={handleLogout}>Logout</span>
        </div>
      </div>
      <div id="secondiv"></div>
    </div>
  );
}

export default NavBar;

