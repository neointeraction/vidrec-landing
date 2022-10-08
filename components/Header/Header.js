import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

import Image from "next/image";

import Logo from "assets/images/logo.svg";
import Button from "components/Button";

function Header() {
  const router = useRouter();

  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand className="header-logo">
          <Link href="/" passHref>
            <Image src={Logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              title="Product"
              id="navbarScrollingDropdown"
              className={`${
                router.pathname === "/feature" ||
                router.pathname === "/employer" ||
                router.pathname === "/candidate"
                  ? "activelink"
                  : ""
              }`}
            >
              <NavDropdown.Item
                className={`${
                  router.pathname === "/feature" ? "activelink" : ""
                }`}
                href="#action3"
              >
                <Link href="/feature">Features</Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className={`${
                  router.pathname === "/employer" ? "activelink" : ""
                }`}
              >
                <Link href="/employer">Employer</Link>
              </NavDropdown.Item>
              <NavDropdown.Item
                className={`${
                  router.pathname === "/candidate" ? "activelink" : ""
                }`}
              >
                <Link href="/candidate">Candidate</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Link href="/pricing" passHref>
              <Nav.Link
                className={`nav-link ${
                  router.pathname === "/pricing" ? "active" : "inactive"
                }`}
                href="#action1"
              >
                Pricing
              </Nav.Link>
            </Link>
            <Link href="/resources" passHref>
              <Nav.Link
                className={`nav-link ${
                  router.pathname === "/resources" ? "active" : "inactive"
                }`}
                href="#action2"
              >
                Resources
              </Nav.Link>
            </Link>
          </Nav>
          <Form className="d-flex">
            <NavDropdown
              title="Sign In"
              id="signInDropdown"
              className="sign-in-dropdown"
            >
              <NavDropdown.Item href="#action3">
                <a
                  href="https://neointeraction.github.io/vidrec-ui/build/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Employer
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <a
                  href="https://neointeraction.github.io/vidrec-ui/build/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Candidate
                </a>
              </NavDropdown.Item>
            </NavDropdown>
            <Button btnText="Sign Up" variant="tertiary" />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
