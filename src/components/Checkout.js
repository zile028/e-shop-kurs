import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const errStyle = { boxShadow: "0 0 1px 1px red" };

function Checkout({ clearCart, setShowCheckout }) {
  const [inputData, setInputData] = useState({});
  const [err, setErr] = useState({
    fullName: false,
    address: false,
    email: false,
    phone: false,
    cardNumber: false,
  });
  const [haveError, setHaveError] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
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
    let copyErr = { ...err };
    copyErr.fullName = !inputData.fullName;
    copyErr.address = !inputData.address;
    copyErr.email = !inputData.email;
    copyErr.phone = !inputData.phone;
    copyErr.cardNumber = !inputData.cardNumber;

    let haveErr =
      copyErr.fullName ||
      copyErr.address ||
      copyErr.email ||
      copyErr.phone ||
      copyErr.cardNumber;

    setErr(copyErr);
    setHaveError(haveErr);

    if (!haveErr) {
      setIsFinish(true);
      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 3000);
    }
  };

  const cancelPay = () => {
    setShowCheckout(false);
  };

  return (
    <div className="modal-box">
      {!isFinish ? (
        <div className="bg-light p-3 rounded-3">
          <input
            type="text"
            className="form-control mb-2"
            name="fullName"
            placeholder="Full name"
            onInput={inputHandler}
            style={err.fullName ? errStyle : null}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="phone"
            placeholder="Phone"
            onInput={inputHandler}
            style={err.phone ? errStyle : null}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="address"
            placeholder="Address"
            onInput={inputHandler}
            style={err.address ? errStyle : null}
          />
          <input
            type="email"
            className="form-control mb-2"
            name="email"
            placeholder="Email"
            onInput={inputHandler}
            style={err.email ? errStyle : null}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="cardNumber"
            placeholder="Card number"
            onInput={inputHandler}
            style={err.cardNumber ? errStyle : null}
          />
          <p
            className="text-center bg-danger bg-opacity-50 rounded-2 p-2"
            style={{ visibility: haveError ? "visible" : "hidden" }}
          >
            All fields are required!
          </p>
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
      ) : (
        <div className="bg-success bg-opacity-75 p-3 rounded-3">
          <h3 className="text-center text-light m-0">Successfully pay.</h3>
        </div>
      )}
    </div>
  );
}

export default Checkout;
