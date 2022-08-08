import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal({ clearCart, setShowModal }) {
  const [inputData, setInputData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const inputHandler = (e) => {
    let copyInput = { ...inputData };
    copyInput[e.target.name] = e.target.value;
    setInputData(copyInput);
  };

  const pay = () => {
    if (
      inputData.fullName &&
      inputData.address &&
      inputData.email &&
      inputData.phone
    ) {
      clearCart();
      navigate("/");
    } else {
      alert("All fields are required");
    }
  };

  const cancelPay = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-box">
      <div className="bg-light p-3 rounded-3">
        <input
          type="text"
          className="form-control mb-2"
          name="fullName"
          placeholder="Full name"
          onInput={inputHandler}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="phone"
          placeholder="Phone"
          onInput={inputHandler}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="address"
          placeholder="Address"
          onInput={inputHandler}
        />
        <input
          type="email"
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          onInput={inputHandler}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="cardNumber"
          placeholder="Card number"
          onInput={inputHandler}
        />
        <button className="btn btn-success form-control w-50" onClick={pay}>
          Pay
        </button>
        <button
          className="btn btn-warning form-control w-50"
          onClick={cancelPay}
        >
          Cancle
        </button>
      </div>
    </div>
  );
}

export default Modal;
