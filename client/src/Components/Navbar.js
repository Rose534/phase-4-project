import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <div>
    <div className="nav-bar blue">
      <div className="logo-container">
        <img src="https://53525363.000webhostapp.com/Images/CLICKY__1_-removebg-preview.png" alt="logo" />
      </div>
      <div className="menu-container">
        <NavLink to="/" className="menu-item" activeClassName="active">Home</NavLink>
        <NavLink to="/account" className="menu-item" activeClassName="active">Account</NavLink>
        <span className="menu-item">Logout</span>
      </div>
    </div>
    <div id="secondiv">
    </div>
    </div>
  );
}
export default NavBar;

https://53525363.000webhostapp.com/Images/CLICKY__1_-removebg-preview.png