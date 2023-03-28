import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap';

function Navigation() {
  return (
    <Navbar color="light" light expand="md">
    <NavbarBrand href="/">
      <img src="your-logo.png" alt="Logo" height="30" />
    </NavbarBrand>
    <Nav className="mr-auto" navbar>
      <NavLink href="/" onClick={() => window.location.reload()}>
        Home
      </NavLink>
      <NavLink href="/account">Account</NavLink>
    </Nav>
  </Navbar>
  );
}

export default Navigation;