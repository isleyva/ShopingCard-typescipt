import React from "react";
import { Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import {Container} from "react-bootstrap"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
        Home
      </Nav.Link>
      <Nav.Link to="/" as={NavLink}>
        About
      </Nav.Link>
      <Nav.Link to="/" as={NavLink}>
        Store
      </Nav.Link>
        </Nav>
        <Button>
          
        </Button>
        </Container>
    </NavbarBs>
  );
};

export default Navbar;
