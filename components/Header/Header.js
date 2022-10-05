import React from "react";

import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Image from "next/image";

import Logo from "assets/images/logo.svg";
import Button from "components/Button";

function Header() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand>
          <Image src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Product" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Features</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Employer</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Candidate</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="nav-link" href="#action1">
              Pricing
            </Nav.Link>
            <Nav.Link className="nav-link" href="#action2">
              Resources
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <NavDropdown
              title="Sign In"
              id="signInDropdown"
              className="sign-in-dropdown"
            >
              <NavDropdown.Item href="#action3">Employer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Candidate</NavDropdown.Item>
            </NavDropdown>
            <Button btnText="Sign Up" variant="tertiary" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
