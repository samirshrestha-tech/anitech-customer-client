import React from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../img/1.png"; // import your logo image

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            {/* Add more nav links as needed */}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#link">
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link href="#link">Sign In</Nav.Link>
            <Nav.Link href="#link">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
