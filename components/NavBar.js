import React, { useState } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Logo from "./images/logo.png"

export default function App() {

  function logout(){
    localStorage.clear();
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let token = localStorage.getItem("token");


  if (token){
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
          <NavItem>
<img src={Logo} alt="Girl in a jacket" width="400" height="400"></img>
              </NavItem>
          <NavItem>
                <NavLink href="/Rankings">Cryptocurrencies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Factors">Factors</NavLink>
              </NavItem>
            </Nav>
        <NavLink color="light" onClick={() => logout()} light expand="md" href="/Login">Logout</NavLink>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  else{
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
<div class="navbar-logo">
          <NavItem>
<img src={Logo} alt="CryptoLive" width="50" height="50"></img>      
</NavItem>
</div> 
          <NavItem>
                <NavLink href="/Rankings">Cryptocurrencies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Search">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink><div className="Unpaid">Factors</div></NavLink>
              </NavItem>
         
<NavItem>
          <NavLink color="light" light expand="md" href="/Login">Login</NavLink>
</NavItem>
   </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
