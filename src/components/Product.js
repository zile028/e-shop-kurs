import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="product bg-light">
      <img className="thumbnail" src={product.thumbnail} alt="" />
      <div className="product-info text-center">
        <h6 className="my-3">{product.title}</h6>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          See more
        </Link>
      </div>
    </div>
  );
}

export default Product;
