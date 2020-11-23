import React from "react";

import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => {
  return (
    <div>
      <Navbar className="mb-4" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            BOOKSHELF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Browse">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default MyNav
