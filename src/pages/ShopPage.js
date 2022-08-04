import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";

function ShopPage({ products }) {
  const productsLayout = () => {
    return products.map((el) => {
      return <Product key={el.id} product={el} />;
    });
  };
  return (
    <>
      <Header title={"SHOP"} />
      <section className="container py-5">
        <div className="products-wrapper row">{productsLayout()}</div>
      </section>
    </>
  );
}

export default ShopPage;
