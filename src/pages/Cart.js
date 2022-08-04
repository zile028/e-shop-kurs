import React, { useEffect, useState } from "react";
import Header from "../components/Header";

function Cart({ cart, removeFromCart }) {
  const [totalPrice, setTotalPrice] = useState(null);
  const [cartListLayout, setCartListLayout] = useState([]);

  useEffect(() => {
    let total = 0;
    let cartList = cart.map((el, index) => {
      total += el.price * el.count;
      return (
        <tr key={index}>
          <td>{el.title}</td>
          <td className="text-end">{el.price}</td>
          <td className="text-end">{el.count}</td>
          <td className="text-end">{el.price * el.count}$</td>
          <td className="text-end">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                removeFromCart(index);
              }}
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      );
    });
    setCartListLayout(cartList);
    setTotalPrice(total);
  }, [cart]);

  return (
    <>
      <Header title={"My cart"} />
      <section className="container py-5">
        {cart.length ? (
          <table className="table bg-light">
            <thead>
              <tr>
                <th>Title</th>
                <th className="text-end">Price</th>
                <th className="text-end">Count</th>
                <th className="text-end">Total</th>
                <th className="text-end">Remove</th>
              </tr>
            </thead>
            <tbody>{cartListLayout}</tbody>
            {totalPrice > 0 && (
              <tfoot className="fw-bold">
                <tr>
                  <td colSpan={3}>Total price</td>
                  <td className="text-end">{totalPrice}$</td>
                </tr>
              </tfoot>
            )}
          </table>
        ) : (
          <h3>Your cart is empty!</h3>
        )}
      </section>
    </>
  );
}

export default Cart;
