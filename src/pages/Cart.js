import React, { useState } from "react";
import Header from "../components/Header";
import Checkout from "../components/Checkout";

function Cart({ cart, removeFromCart, clearCart }) {
  const [showCheckout, setShowCheckout] = useState(false);

  const cartListLayouts = () => {
    let totalSum = 0;
    let cartList = cart.map((el, index) => {
      totalSum += el.count * el.price;
      return (
        <div key={index} className="d-flex mb-1 bg-light p-2 rounded-3">
          <div className="col-md-2">
            <img className="img-fluid" src={el.thumbnail} alt="" />
          </div>
          <div className="flex-grow-1 w-auto px-2">
            <h3>{el.title}</h3>
            <p>
              {el.count} x ${el.price}
            </p>
          </div>
          <div className="width-auto">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                removeFromCart(index);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      );
    });

    let total = (
      <div key={cartList.length} className="d-flex mb-1 bg-light p-2 rounded-3">
        <div className="col flex-grow-1">
          <h4 className="fw-bold">Total price: {totalSum}$</h4>
        </div>
        <div>
          <button
            className="btn btn-success"
            onClick={() => setShowCheckout(true)}
          >
            Checkout
          </button>
        </div>
      </div>
    );

    return [...cartList, total];
  };

  return (
    <>
      <Header title={"My cart"} />
      <section className="container py-5">
        {cart.length ? cartListLayouts() : <h3>Your cart is empty!</h3>}
      </section>
      {showCheckout && (
        <Checkout clearCart={clearCart} setShowModal={setShowCheckout} />
      )}
    </>
  );
}

export default Cart;
