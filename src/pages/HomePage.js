import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Slider } from "../components/Slider";
import ProductCarousel from "../components/Cards";

const HomePage = () => {
  return (
    <div>
      <Header />

      <Slider />
      <ProductCarousel />

      <Footer />
    </div>
  );
};

export default HomePage;
