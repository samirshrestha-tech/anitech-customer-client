import React, { useEffect } from "react";
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
import { fetchProducts } from "../helper/axiosHelper";

import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [products, setProducts] = useState([]);

  console.log(products);
  // State to track loading state
  const [loading, setLoading] = useState(true);
  // State to track errors
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products data
        const productsData = await fetchProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" height="60" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>

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
