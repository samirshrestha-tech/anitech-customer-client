import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Slider } from "../components/Slider";
import ProductCarousel from "../components/Cards";
import { fetchProductsAction } from "./product/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch(); // useDispatch hook to get dispatch function
  const products = useSelector((state) => state.productInfo.productList);
  console.log(products);

  // useSelector hook to get products from Redux store

  useEffect(() => {
    dispatch(fetchProductsAction()); // Dispatch fetchProducts action when the component mounts
  }, [dispatch]); // Include dispatch in the dependency array
  return (
    <div>
      <Header products={products} />

      <Slider />
      <ProductCarousel />

      <Footer />
    </div>
  );
};

export default HomePage;
