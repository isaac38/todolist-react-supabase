import React from "react";
import { supabase } from "../api/client";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";

export const NavBar = ({ userEmail }) => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary mb-5"
    >
      <Container>
        <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="d-flex justify-content-end"
        >
          <Nav>
            <NavDropdown title={userEmail} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => supabase.auth.signOut()}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
