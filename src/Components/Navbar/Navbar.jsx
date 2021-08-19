import React from "react";
import { Navbar, Container ,Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom'
import './style.css'

const AppNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className='cus_navbar'>
          <NavLink className='navLinks' to="/s">React-Bootstrap</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink className='navLinks' to="/deets">Link 1</NavLink>
              <NavLink className='navLinks' to="/memes">
                Link 2
              </NavLink>
              <NavLink className='navLinks' to="/deets">Link 3</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
