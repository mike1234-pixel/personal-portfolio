import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="nav">
      <Navbar.Brand id="navbar-title">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          Mike Tandy Dev
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown
            title="Apps"
            id="collasible-nav-dropdown"
            className="sen-font"
          >
            <NavDropdown.Item
              href="https://mike1234-pixel.github.io/Simon-Game/"
              target="_blank"
              className="sen-font"
            >
              Simon Game
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://ancient-stream-79404.herokuapp.com/"
              target="_blank"
              className="sen-font"
            >
              Newsletter SignUp
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://mike1234-pixel.github.io/Drum-Machine/"
              target="_blank"
              className="sen-font"
            >
              Drum Machine
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://immense-spire-07308.herokuapp.com/"
              target="_blank"
              className="sen-font"
            >
              To-do List
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://github.com/mike1234-pixel/REST-API/blob/master/app.js"
              target="_blank"
              className="sen-font"
            >
              RESTful API
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://master.d2icos6v1wkh08.amplifyapp.com/"
              target="_blank"
              className="sen-font"
            >
              Pomodoro Clock
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href="https://mike1234-pixel.github.io/SeeLondon-Project/"
              target="_blank"
              className="sen-font"
            >
              SeeLondon.com
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="sen-font">
            <Link
              to="/AboutMe"
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="sen-font"
            >
              About Me
            </Link>
          </Nav.Link>
          <Nav.Link className="sen-font">
            <Link
              to="/Contact"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
