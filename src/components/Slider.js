import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import logo from "../img/1.png";

export const Slider = ({ products }) => {
  const domainRoot = "http://localhost:8000";
  return (
    <Carousel>
      {products.map((product, index) => {
        return (
          <Carousel.Item key={index} className="">
            <div className="text-center">
              {product.images.length > 0 ? (
                <img
                  className="d-block mx-auto"
                  width={500}
                  height={50}
                  text="First slide"
                  src={domainRoot + product.thumbnail}
                  alt={product.name}
                />
              ) : (
                <div>No images available</div>
              )}
            </div>
            <Carousel.Caption className="text-center ">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
