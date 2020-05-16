import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown.jsx";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburgerOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      hamburgerOpen: !prevState.hamburgerOpen,
    }));
    console.log(this.state.hamburgerOpen);
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" id="nav">
          <Navbar.Brand id="navbar-title">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Mike Tandy Dev
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={this.handleClick}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Dropdown hamburgerOpen={this.state.hamburgerOpen} />
            <Nav className="mr-auto">
              <Nav.Link className="sans-serif-font">
                <Link
                  to="/AboutMe"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  className="sans-serif-font"
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link className="sans-serif-font">
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
      </div>
    );
  }
}

export default Navigation;
