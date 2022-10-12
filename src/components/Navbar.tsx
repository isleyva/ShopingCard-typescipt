import React from "react";
import { Nav, Navbar as NavbarBs } from "react-bootstrap";
import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
        </Nav>
        </Container>
    </NavbarBs>
  );
};

export default Navbar;
