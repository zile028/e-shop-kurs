import React from "react";
import Header from "../components/Header";
import RandomProducts from "../components/RandomProducts";

function HomePage({ products }) {
  return (
    <>
      <Header title={"Welcome to E-shop"} />
      <RandomProducts products={products} />
    </>
  );
}

export default HomePage;
