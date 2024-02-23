import React from "react";

import { Carousel, Container, Row, Col, Button } from "react-bootstrap";

const ProductCarousel = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      image: "/img/1.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      image: "path/to/product2.jpg",
    },
    // Add more product objects as needed
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            {products.map((product) => (
              <Carousel.Item key={product.id}>
                <img
                  className="d-block w-100"
                  src={product.image}
                  alt={product.name}
                />
                <Carousel.Caption>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="primary" className="mx-2" onClick={() => {}}>
            Previous
          </Button>
          <Button variant="primary" className="mx-2" onClick={() => {}}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductCarousel;
