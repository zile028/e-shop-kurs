import React from "react";
import Product from "./Product";

function RandomProducts({ products }) {
  const productsLayout = () => {
    let tempProducts = [...products];
    let chosenProducts = [];
    for (let i = 0; i < 6; i++) {
      let rnd = Math.floor(Math.random() * tempProducts.length);
      chosenProducts.push(<Product key={i} product={tempProducts[rnd]} />);
      tempProducts.splice(rnd, 1);
    }
    return chosenProducts;
  };

  return (
    <section className="random-product container py-5">
      <h2 className="text-center mb-3">Our products</h2>
      <div className="products-wrapper">{productsLayout()}</div>
    </section>
  );
}

export default RandomProducts;
