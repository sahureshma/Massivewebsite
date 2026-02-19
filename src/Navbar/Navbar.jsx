import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assest/massivelogo.png";
import "./Navbar.css";

function MassiveNavbar() {
  const [show, setShow] = useState(false);

  return (
    <Navbar expand="md" className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Massive Infratech" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">

            <Nav.Link as={NavLink} to="/">
              HOME
            </Nav.Link>

            {/* Hover Dropdown */}
            <NavDropdown
              title="ABOUT US"
              id="about-dropdown"
              show={show}
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className="custom-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/why-choose-us">
                WHY CHOOSE US
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/mission-vision">
                MISSION & VISION
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/toolsMachinery">
                TOOLS & MACHINARY
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/manpower">
                OUR MANPOWER
              </NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link as={NavLink} to="/services">
              SERVICES
            </Nav.Link>

            <Nav.Link as={NavLink} to="/team">
              OUR TEAM
            </Nav.Link>

            <Nav.Link as={NavLink} to="/certifications">
              COMPLIANCE
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              CONTACT US
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MassiveNavbar;
