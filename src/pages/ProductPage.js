import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SingleProductImages from "../components/SingleProductImages";

function ProductPage({ products, addToCart }) {
  const [product, setProduct] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const productId = useParams();

  useEffect(() => {
    let currentProduct = products.find(
      (el) => el.id === parseInt(productId.id)
    );
    setProduct(currentProduct);
    setMainImage(currentProduct.thumbnail);
  }, []);

  const previewImage = (img) => {
    setMainImage(img);
  };

  const addProductToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <Header title={product.title} />
      <div className="product-info container py-3">
        <div className="d-flex align-items-start">
          <div className="col-md-7 bg-light rounded-2 p-3 me-md-3">
            <img className="w-100 rounded-2" src={mainImage} alt="" />
            <div className="d-flex gap-2">
              {product?.images && (
                <SingleProductImages
                  images={product.images}
                  previewImage={previewImage}
                />
              )}
            </div>
          </div>
          <div className="col bg-light p-3 rounded-2">
            <h4 className="fw-bold">{product.title}</h4>
            <table className="table fw-bold">
              <tbody>
                <tr>
                  <td>Price:</td>
                  <td>{product.price}$</td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td>Brand:</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td>{product.rating}</td>
                </tr>
              </tbody>
            </table>
            <p>{product.description}</p>
            <button className="btn btn-danger w-100" onClick={addProductToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
